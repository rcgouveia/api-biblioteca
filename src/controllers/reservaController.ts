import type { Response,Request } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const listarReservas = async (req: Request, res: Response) => {
  try {
    const reservas = await prisma.reserva.findMany();
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar reservas" });
  }
};

export const obterReservaPorId = async (req: Request, res: Response) => {
  try {
  const { id } = req.params;
  const reserva = await prisma.reserva.findUnique({
    where: { id: Number(id) },
  });

  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ error: 'ID inválido.' });
  }
  res.json(reserva);
  } catch (error) {
      res.status(500).json({ error: "Erro ao obter reserva por ID" });
    }
};
export const criarReserva = async (req: Request, res: Response) => {
  const { dataPedido, clienteCpf, bibliotecarioId, livrosId } = req.body;
    try {
    const reserva = await prisma.reserva.create({
      data: {
        dataPedido,
        cliente: { connect: { cpf: clienteCpf } },
        bibliotecario: { connect: { id: bibliotecarioId } },
        livros: { connect: livrosId.map((id: number) => ({ id })) },
      },
    });

    if (!clienteCpf || !bibliotecarioId || !livrosId || !Array.isArray(livrosId) || livrosId.length === 0) {
      return res.status(400).json({ error: 'Dados inválidos.' });
    }
    if (isNaN(Date.parse(dataPedido))) {
      return res.status(400).json({ error: 'Data inválida.' });
    }
    if (isNaN(Number(bibliotecarioId))) {
      return res.status(400).json({ error: 'ID do bibliotecário inválido.' });
    }
    if (!Array.isArray(livrosId) || livrosId.length === 0) {
      return res.status(400).json({ error: 'IDs dos livros inválidos.' });
    }

    res.status(201).json(reserva);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar reserva" });
  }
};

export const atualizarReserva = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { dataPedido, clienteCpf, bibliotecarioId, livrosId } = req.body;

  try {
    const reserva = await prisma.reserva.update({
      where: { id: Number(id) },
      data: {
        dataPedido,
        cliente: { connect: { cpf: clienteCpf } },
        bibliotecario: { connect: { id: bibliotecarioId } },
        livros: { connect: livrosId.map((id: number) => ({ id })) },
      },
    });

    if (!reserva) {
      return res.status(404).json({ message: "Reserva não encontrada" });
    }

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'ID inválido.' });
    }

    if (!clienteCpf || !bibliotecarioId || !livrosId || !Array.isArray(livrosId) || livrosId.length === 0) {
      return res.status(400).json({ error: 'Dados inválidos.' });
    }

    if (isNaN(Date.parse(dataPedido))) {
      return res.status(400).json({ error: 'Data inválida.' });
    }

    if (isNaN(Number(bibliotecarioId))) {
      return res.status(400).json({ error: 'ID do bibliotecário inválido.' });
    }

    if (!Array.isArray(livrosId) || livrosId.length === 0) {
      return res.status(400).json({ error: 'IDs dos livros inválidos.' });
    }

    res.json(reserva);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar reserva" });
  }
};

export const deletarReserva = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const reserva = await prisma.reserva.delete({
      where: { id: Number(id) },
    });
    if (!reserva) {
      return res.status(404).json({ message: "Reserva não encontrada" });
    }
    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'ID inválido.' });
    } 
    res.json({ message: "Reserva deletada com sucesso" });
    
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar reserva" });
  }
};