import { prisma } from '../database/prisma';
import { Emprestimo } from "../generated/prisma";

type EmprestimoCreateData = Omit<Emprestimo,'id' | 'createdAt' | 'updatedAt'>
type EmprestimoUpdateData = Partial<Omit<EmprestimoCreateData , 'id' | 'createdAt' | 'updatedAt' | 'clienteCpf' | 'bibliotecarioId'>>

export const create = async (data: EmprestimoCreateData): Promise<Emprestimo> =>{
    const { clienteCpf, bibliotecarioId } = data;

    const cliente = await prisma.cliente.findUnique({where: {cpf: clienteCpf}});
    if (!cliente) throw new Error('Cliente não encontrado');

    const bibliotecario = await prisma.bibliotecario.findUnique({where: {id: bibliotecarioId}});
    if (!bibliotecario) throw new Error('Bibliotecario não encontrado');

    return prisma.emprestimo.create({
        data: {...data}
    })
}

export const getAll = async () => {
    return prisma.emprestimo.findMany({
        include: {
            cliente: {select: {nome: true, cpf:true}},
            bibliotecario: {select: {nome: true, cpf:true}}
        }
    })
}

export const getByCpf = async (cpf: string) =>{
    return prisma.emprestimo.findMany({
        where: {cliente:{ cpf: cpf}},
        include: { cliente: true, bibliotecario: true }
    })
}

export const update = async (id: number, data: EmprestimoUpdateData): Promise<Emprestimo> => {
  return prisma.emprestimo.update({
    where: { id },
    data: { ...data }
    });
}

export const remove = async (id: number): Promise<Emprestimo> => {
  return prisma.emprestimo.delete({ where: { id } });
};
