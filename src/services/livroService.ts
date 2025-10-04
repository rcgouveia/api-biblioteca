import { prisma } from '../database/prisma';
import { Livros } from '../generated/prisma';

type LivrosCreateData = Omit<Livros,'id' | 'createdAt' | 'updatedAt'>
type LivrosUpdateData = Partial<LivrosCreateData>

export const create = async (data: LivrosCreateData): Promise<Livros> => {
    return prisma.livros.create({
        data: data
    });
}

export const getAll = async (): Promise<Livros[]> => {
    return prisma.livros.findMany({});
}

export const getById = async (id: number): Promise<Livros | null> =>{
    return prisma.livros.findUnique({where: {id}})
}


export const update = async (id: number, data: LivrosUpdateData): Promise<Livros> =>{
    return prisma.livros.update({
        where: {id},
        data: {...data}
    })
}

export const remove = async (id: number): Promise<Livros>  => {
    return prisma.livros.delete({where: {id}})
}