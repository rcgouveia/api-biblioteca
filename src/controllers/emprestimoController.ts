import type { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const listarEmprestimos = async (req : Request, res: Response) => {
  try {
  const emprestimos = await prisma.emprestimo.findMany();
  res.json(emprestimos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar empréstimos" });
  }
}

export const obterEmprestimoPorId = async (req: Request, res: Response) => {
  try {
  const { id } = req.params;
  const emprestimo = await prisma.emprestimo.findUnique({
    where: { id: Number(id) },

  });

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'ID inválido.' });
    }

  res.json(emprestimo);
  } catch (error) {
      res.status(500).json({ error: "Erro ao obter empréstimo por ID" });
    }
  
}

export const criarEmprestimo = async (req: Request, res: Response) => {
  try {
  const { clienteCpf, bibliotecarioId, livrosId, quantidade, dataPedido } = req.body;
  const emprestimo = await prisma.emprestimo.create({
    data: {
      id_cliente: clienteCpf,
      id_bibliotecario: bibliotecarioId,
      id_livro: livrosId,
      quantidade,
      data_emprestimo: dataPedido,
    }
  });

    if (!clienteCpf || isNaN(Number(clienteCpf))) {
        return res.status(400).json({ error: 'ID do cliente inválido.' });
    }
    
    if (!bibliotecarioId || isNaN(Number(bibliotecarioId))) {
        return res.status(400).json({ error: 'ID do bibliotecário inválido.' });
    }

    if (!livrosId || isNaN(Number(livrosId))) {
        return res.status(400).json({ error: 'ID do livro inválido.' });
    }

    if (emprestimo.id_livro && quantidade > 0) {
        await prisma.livro.update({
        where: { id: Number(emprestimo.id_livro) },
        data: {
            disponivel: false
        }
        });
    }

  res.status(201).json(emprestimo);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar empréstimo" });
  }
}
export const atualizarEmprestimo = async (req: Request, res: Response) => {
  try {
  const { id } = req.params;
  const { clienteCpf, bibliotecarioId, livroId, quantidade, dataPedido } = req.body;
  const emprestimo = await prisma.emprestimo.update({
    where: { id: Number(id) },
    data: {
      id_cliente: clienteCpf,
      id_bibliotecario: bibliotecarioId,
      id_livro: livroId,
      quantidade,
      data_emprestimo: dataPedido,
    }
  });

  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ error: 'ID inválido.' });
  }

  if (!clienteCpf || isNaN(Number(clienteCpf))) {
    return res.status(400).json({ error: 'ID do cliente inválido.' });
  }

  if (!bibliotecarioId || isNaN(Number(bibliotecarioId))) {
    return res.status(400).json({ error: 'ID do bibliotecário inválido.' });
  }
  if (!livroId || isNaN(Number(livroId))) {
    return res.status(400).json({ error: 'ID do livro inválido.' });
  }

  if (emprestimo.id_livro && quantidade > 0) {
    await prisma.livro.update({
      where: { id: Number(emprestimo.id_livro) },
      data: {
        disponivel: false
      }
    });
  }
  res.json(emprestimo);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar empréstimo" });
  }
}


export const deletarEmprestimo = async (req: Request, res: Response) => {
  try {
  const { id } = req.params;
  const emprestimo = await prisma.emprestimo.findUnique({
    where: { id: Number(id) },
  });

    if (!id || isNaN(Number(id))) {
        return res.status(400).json({ error: 'ID inválido.' });
    }

    if (!emprestimo) {
        return res.status(404).json({ message: 'Empréstimo não encontrado' });
    }
    if (emprestimo.id_livro) {
        await prisma.livro.update({
        where: { id: Number(emprestimo.id_livro) },
            data: {
                disponivel: true
            }
        });
    }

  await prisma.emprestimo.delete({
    where: { id: Number(id) },
  });
  res.json({ message: 'Empréstimo deletado com sucesso' });
  
  } catch (error) {
      res.status(500).json({ error: "Erro ao deletar empréstimo" });
    }
}
