import type { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';

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
    
  if (quantidade > 0) {
    await prisma.livro.update({
      where: { id: Number(livro.id) },
      data: { quantidade },
    });
  }

  res.status(201).json(livro);
};

export const atualizarLivro = async (req: Request, res: Response) => {
  try{const { id } = req.params;
    const { titulo, descricao, genero, status, quantidade } = req.body;
    const livro = await prisma.livro.update({
      where: { id: Number(id) },
      data: { titulo, descricao, genero, status, quantidade },
    });

    if (quantidade > 0) {
      await prisma.livro.update({
        where: { id: Number(id) },
        data: { status: true },
      });
    }
    if (quantidade === 0) {
      await prisma.livro.update({
        where: { id: Number(id) },
        data: { status: false },
      });
    }
    res.json(livro);} catch(error:any){
    if (error.code === 'P2025') return res.status(404).json({ message: 'Livro não encontrado.' });
    return res.status(500).json({ message: error.message })
  }
    
};
export const deletarLivro = async (req: Request, res: Response) => {
  try{const { id } = req.params;
    const livro = await prisma.livro.delete({
    where: { id: Number(id) },
    });

    res.status(201).json({ message: 'Livro deletado com sucesso' });}
  catch(error:any){
    if(error.code == 'P2025') return res.status(404).json({ message: 'Livro não encontrado.' });
    return res.status(500).json({ message: error.message })
  }
  
};

