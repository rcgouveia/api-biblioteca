import type { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';
import * as emprestimoService from '../services/emprestimoService'


const prisma = new PrismaClient();

export const listarEmprestimos = async (req: Request, res: Response) => {
  const emprestimos = await emprestimoService.getAll();

  if (!emprestimos || emprestimos.length === 0) {
    return res.status(404).json({ message: 'Nenhum empréstimo encontrado' });
  }

  return res.status(200).json(emprestimos);
};

export const obterEmprestimoPorCpf = async (req: Request, res: Response) => {
  const { cpf } = req.params;

  if (!cpf || typeof cpf !== 'string') {
    return res.status(400).json({ error: `Emprestimo com cpf:${cpf} não encontrado.` });
  }
  const emprestimo = await emprestimoService.getByCpf(String(cpf));

  return res.status(201).json(emprestimo)
}

export const criarEmprestimo = async (req: Request, res: Response)  => {
  const { quantidade } = req.body;
  const emprestimo = await emprestimoService.create(req.body);

    if (emprestimo.livrosId && quantidade > 0) {
        await prisma.livro.update({
        where: { id: Number(emprestimo.livrosId) },
        data: {
            status: false
        }
        });
    }

  res.status(201).json(emprestimo);
}
export const atualizarEmprestimo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { quantidade } = req.body;
  const emprestimo = await emprestimoService.update(Number(req.params.id), req.body);

  if (emprestimo.livrosId && quantidade > 0) {
    await prisma.livro.update({
      where: { id: Number(emprestimo.livrosId) },
      data: {
        status: false
      }
    });
  }
  return res.status(201).json(emprestimo);
}


export const deletarEmprestimo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const emprestimo = await emprestimoService.remove(Number(id));

    if (!emprestimo) {
        return res.status(404).json({ message: 'Empréstimo não encontrado' });
    }
    if (emprestimo.livrosId) {
        await prisma.livro.update({
        where: { id: Number(emprestimo.livrosId) },
            data: {
                status: true
            }
        });
    }
    return res.status(204).json({message: 'Emprestimo deletado com sucesso'})
}
