import { prisma } from '../database/prisma';
import { Cliente } from '../generated/prisma';

type ClienteCreateData = Omit<Cliente,'id' | 'createdAt' | 'updatedAt'>
type ClienteUpdateData = Partial<ClienteCreateData>

export const create = async (data: ClienteCreateData): Promise<Cliente> => {
    return prisma.cliente.create({
        data: {...data}
    });
}

export const getAll = async (): Promise<Cliente[]> => {
    return prisma.cliente.findMany({});
}

export const getById = async (id: number): Promise<Cliente | null> =>{
    return prisma.cliente.findUnique({where: {id}})
}


export const update = async (id: number, data: ClienteUpdateData): Promise<Cliente> =>{
    return prisma.cliente.update({
        where: {id},
        data: {...data}
    })
}

export const remove = async (id: number): Promise<Cliente>  => {
    return prisma.cliente.delete({where: {id}})
}