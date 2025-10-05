import type { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const listarClientes = async (req: Request, res: Response) => {
  const clientes = await prisma.cliente.findMany();
  res.json(clientes);
};

export const obterClientePorId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const cliente = await prisma.cliente.findUnique({
    where: { id: Number(id) },
  });
  res.json(cliente);
};

export const criarCliente = async (req: Request, res: Response) => {
  const { nome, email, senha, cpf } = req.body;
  const cliente = await prisma.cliente.create({
    data: { nome, email, senha, cpf },
  });
  res.status(201).json(cliente);
};

export const atualizarCliente = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, email, senha, cpf } = req.body;
  const cliente = await prisma.cliente.update({
    where: { id: Number(id) },
    data: { nome, email, senha, cpf },
  });
  res.json(cliente);
};

export const deletarCliente = async (req: Request, res: Response) => {
  const { id } = req.params;
  const cliente = await prisma.cliente.findUnique({
    where: { id: Number(id) },
  });
  if (!cliente) {
    return res.status(404).json({ error: 'Cliente não encontrado' });
  }
  await prisma.cliente.delete({
    where: { id: Number(id) },
  });
  res.status(204).end();
};
