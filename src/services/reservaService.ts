import { prisma } from '../database/prisma.js';
import type { Reserva } from "../generated/prisma/index.js";

type ReservaCreateData = Omit<Reserva, 'id' | 'createdAt' | 'updatedAt'>;
type ReservaUpdateData = Partial<
  Omit<ReservaCreateData, 'id' | 'createdAt' | 'updatedAt' | 'clienteCpf' | 'bibliotecarioId'>
>;

export const create = async (data: ReservaCreateData): Promise<Reserva> => {
  const { clienteCpf, bibliotecarioId } = data;

  const cliente = await prisma.cliente.findUnique({ where: { cpf: clienteCpf } });
  if (!cliente) throw new Error('Cliente não encontrado');

  const bibliotecario = await prisma.bibliotecario.findUnique({ where: { id: bibliotecarioId } });
  if (!bibliotecario) throw new Error('Bibliotecário não encontrado');

  const dataPedido = new Date();
  const dataDevolucao = new Date(dataPedido);
  dataDevolucao.setDate(dataPedido.getDate() + 3);

  return prisma.reserva.create({
    data: {
      ...data,
      dataPedido,
      dataDevolucao,
    },
  });
};

export const getAll = async (): Promise<Reserva[]> => {
  return prisma.reserva.findMany({
    include: {
      cliente: { select: { nome: true, cpf: true } },
      bibliotecario: { select: { nome: true, cpf: true } },
    },
  });
};

export const getByCpf = async (cpf: string): Promise<Reserva[]> => {
  return prisma.reserva.findMany({
    where: { cliente: { cpf } },
    include: { cliente: true, bibliotecario: true },
  });
};

export const update = async (id: number, data: ReservaUpdateData): Promise<Reserva> => {
  return prisma.reserva.update({
    where: { id },
    data: { ...data },
  });
};

export const remove = async (id: number): Promise<Reserva> => {
  return prisma.reserva.delete({ where: { id } });
};