import type { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const listarLivros = async (req: Request, res: Response) => {
  const livros = await prisma.livro.findMany();
  res.json(livros);
}

export const obterLivroPorId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const livro = await prisma.livro.findUnique({
    where: { id: Number(id) },
  });

  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ error: 'ID inválido.' });
  }
  res.json(livro);

};

export const criarLivro = async (req: Request, res: Response) => {
  const { titulo, descricao, genero, status, quantidade } = req.body;
    const livro = await prisma.livro.create({
      data: { titulo, descricao, genero, status, quantidade },
    });
    if (!titulo || titulo.trim() === '') {
      return res.status(400).json({ error: 'Título é obrigatório.' });
    }

    if (quantidade < 0 || isNaN(Number(quantidade))) {
      return res.status(400).json({ error: 'Quantidade deve ser um número não negativo.' });
    }
    if (!status || status.trim() === '') {
      return res.status(400).json({ error: 'Status é obrigatório.' });
    }

    if (!genero || genero.trim() === '') {
      return res.status(400).json({ error: 'Gênero é obrigatório.' });
    }

    if (!descricao || descricao.trim() === '') {
      return res.status(400).json({ error: 'Descrição é obrigatória.' });
    }

    if (quantidade > 0) {
      await prisma.livro.update({
        where: { id: Number(livro.id) },
        data: { quantidade },
      });
    }
    if (quantidade === 0) {
      await prisma.livro.update({
        where: { id: Number(livro.id) },
        data: { disponivel: false },
      });
    }
    if (quantidade > 0) {
      await prisma.livro.update({
        where: { id: Number(livro.id) },
        data: { disponivel: true },
      });
    }

    res.json(livro);
  };
export const atualizarLivro = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { titulo, descricao, genero, status, quantidade } = req.body;
  const livro = await prisma.livro.update({
    where: { id: Number(id) },
    data: { titulo, descricao, genero, status, quantidade },
  });
  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ error: 'ID inválido.' });
  }
  if (!titulo || titulo.trim() === '') {
    return res.status(400).json({ error: 'Título é obrigatório.' });
  }
  if (quantidade < 0 || isNaN(Number(quantidade))) {
    return res.status(400).json({ error: 'Quantidade deve ser um número não negativo.' });
  }
  if (!status || status.trim() === '') {
    return res.status(400).json({ error: 'Status é obrigatório.' });
  }
  if (!genero || genero.trim() === '') {
    return res.status(400).json({ error: 'Gênero é obrigatório.' });
  }
  if (!descricao || descricao.trim() === '') {
    return res.status(400).json({ error: 'Descrição é obrigatória.' });
  }
  if (quantidade > 0) {
    await prisma.livro.update({
      where: { id: Number(id) },
      data: { disponivel: true },
    });
  }
  if (quantidade === 0) {
    await prisma.livro.update({
      where: { id: Number(id) },
      data: { disponivel: false },
    });
  }
  res.json(livro);
};
export const deletarLivro = async (req: Request, res: Response) => {
  const { id } = req.params;
  const livro = await prisma.livro.delete({
    where: { id: Number(id) },
  });
  res.json(livro);
  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ error: 'ID inválido.' });
  }
  if (!livro) {
    return res.status(404).json({ message: 'Livro não encontrado' });
  }
  res.json({ message: 'Livro deletado com sucesso' });
};

