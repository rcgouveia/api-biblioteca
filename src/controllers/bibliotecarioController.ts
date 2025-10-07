import type { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const listarBibliotecarios = async (req: Request, res: Response) => {
  const bibliotecarios = await prisma.bibliotecario.findMany();
  res.json(bibliotecarios);
  if (!bibliotecarios) {
      return res.status(404).json({ message: 'Bibliotecario não encontrado' });
  }
};

export const obterBibliotecarioPorId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const bibliotecario = await prisma.bibliotecario.findUnique({
    where: { id: Number(id) },
  });
    if (!bibliotecario) {
      return res.status(404).json({ message: `Cliente com ID ${id} não encontrado` });
    }

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'Funcionario não encontrado.' });
    }
    res.status(200).json(bibliotecario);
};

export const criarBibliotecario = async (req: Request, res: Response) => {
  try{
    const { nome, email, senha, cpf } = req.body;
    const bibliotecario = await prisma.bibliotecario.create({data: { nome, email, senha, cpf },});
    res.status(201).json(bibliotecario); } 
  catch (error:any){
      if (error.code === 'P2002') {
        return res.status(409).json({ message: `Campo único já existe: ${error.meta.target}` });
      }
  }

};

export const atualizarBibliotecario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, email, senha, cpf } = req.body;
  const bibliotecario = await prisma.bibliotecario.update({
    where: { id: Number(id) },
    data: { nome, email, senha, cpf },
  });

  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ error: 'Funcionario não encontrado.' });
  }

  res.json(bibliotecario);
};

export const deletarBibliotecario = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ error: 'ID inválido.' });
  }

  const bibliotecario = await prisma.bibliotecario.findUnique({
    where: { id: Number(id) },
  });

  if (!bibliotecario) {
    return res.status(404).json({ message: 'Funcionario não encontrado.' });
  }

  try {
    await prisma.bibliotecario.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro interno ao deletar funcionário.' });
  }
};
