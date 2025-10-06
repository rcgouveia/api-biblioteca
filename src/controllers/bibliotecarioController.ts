import type { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const listarBibliotecarios = async (req: Request, res: Response) => {
  try {
    const bibliotecarios = await prisma.bibliotecario.findMany();
    res.json(bibliotecarios);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar bibliotecários" });
  }
};

export const obterBibliotecarioPorId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const bibliotecario = await prisma.bibliotecario.findUnique({
    where: { id: Number(id) },
  });

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'ID inválido.' });
    }

  res.json(bibliotecario);

  } catch (error) {
    res.status(500).json({ error: "Erro ao obter bibliotecário por ID" });
    }
};

export const criarBibliotecario = async (req: Request, res: Response) => {
  try {
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

  } catch (error) {
    res.status(500).json({ error: "Erro ao criar bibliotecário" });
  }
};

export const atualizarBibliotecario = async (req: Request, res: Response) => {
  try {
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
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar bibliotecário" });
  }
};

export const deletarBibliotecario = async (req: Request, res: Response) => {
  try {
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

  res.json({ message: 'Bibliotecário deletado com sucesso' });

  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar bibliotecário" });
  }
};
