import type { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const listarClientes = async (req: Request, res: Response) => {
  try {
    const clientes = await prisma.cliente.findMany();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar clientes" });
  }
};

export const obterClientePorId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const cliente = await prisma.cliente.findUnique({
      where: { id: Number(id) },
    });
    if (!id || isNaN(Number(id))) {
    return res.status(400).json({ error: 'ID inválido.' });
  }
    res.json(cliente);

  } catch (error) {
    res.status(500).json({ error: "Erro ao obter cliente por ID" });
  }
};

export const criarCliente = async (req: Request, res: Response) => {
  try {
  const { nome, email, senha, cpf } = req.body;
  const cliente = await prisma.cliente.create({
    data: { nome, email, senha, cpf },
  });
  if (cpf.length !== 11) {
    return res.status(400).json({ error: 'CPF deve conter exatamente 11 caracteres.' });
  }

  if (email.length < 5 || !email.includes('@')) {
    return res.status(400).json({ error: 'Email inválido.' });
  }

  if (senha.length < 8) {
    return res.status(400).json({ error: 'Senha deve conter no mínimo 8 caracteres.' });
  }

  res.status(201).json(cliente);

  } catch (error) {
    res.status(500).json({ error: "Erro ao criar cliente" });
  }
  
};

export const atualizarCliente = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nome, email, senha, cpf } = req.body;
    const cliente = await prisma.cliente.update({
      where: { id: Number(id) },
      data: { nome, email, senha, cpf },
    });
    if (!id || isNaN(Number(id))) {
    return res.status(400).json({ error: 'ID inválido.' });
  }

  if (cpf.length !== 11) {
    return res.status(400).json({ error: 'CPF deve conter exatamente 11 caracteres.' });
  }

  if (email.length < 5 || !email.includes('@')) {
    return res.status(400).json({ error: 'Email inválido.' });
  }
  if (senha.length < 8) {
    return res.status(400).json({ error: 'Senha deve conter no mínimo 8 caracteres.' });
  }

  res.json(cliente);

  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar cliente" });
  }
};

export const deletarCliente = async (req: Request, res: Response) => {
  try {
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

  res.json({ message: 'Cliente deletado com sucesso' });

  } catch (error) { 
    res.status(500).json({ error: "Erro ao deletar cliente" });
  }
};
