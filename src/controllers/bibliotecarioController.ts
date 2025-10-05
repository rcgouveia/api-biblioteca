import type { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const listarBibliotecarios = async (req: Request, res: Response) => {
  const bibliotecarios = await prisma.bibliotecario.findMany();
  res.json(bibliotecarios);
};

export const obterBibliotecarioPorId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const bibliotecario = await prisma.bibliotecario.findUnique({
    where: { id: Number(id) },
  });
  res.json(bibliotecario);

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'ID inválido.' });
    }
};

export const criarBibliotecario = async (req: Request, res: Response) => {
  const { nome, email, senha, cpf } = req.body;
  const bibliotecario = await prisma.bibliotecario.create({
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

  res.status(201).json(bibliotecario);
};

export const atualizarBibliotecario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, email, senha, cpf } = req.body;
  const bibliotecario = await prisma.bibliotecario.update({
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

  res.json(bibliotecario);
};

export const deletarBibliotecario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const bibliotecario = await prisma.bibliotecario.findUnique({
    where: { id: Number(id) },
  });
  if (!bibliotecario) {
    return res.status(404).json({ message: 'Bibliotecário não encontrado' });
  }
  await prisma.bibliotecario.delete({
    where: { id: Number(id) },
  });
  res.status(204).send();
};
