import { prisma } from '../database/prisma';
import { Livro } from '../generated/prisma';

type LivrosCreateData = Omit<Livro,'id' | 'createdAt' | 'updatedAt'>
type LivrosUpdateData = Partial<LivrosCreateData>

export const create = async (data: LivrosCreateData): Promise<Livro> => {
    return prisma.livro.create({
        data: data
    });
}

export const getAll = async (): Promise<Livro[]> => {
    return prisma.livro.findMany({});
}

export const getById = async (id: number): Promise<Livro | null> =>{
    return prisma.livro.findUnique({where: {id}})
}


export const update = async (id: number, data: LivrosUpdateData): Promise<Livro> =>{
    return prisma.livro.update({
        where: {id},
        data: {...data}
    })
}

export const remove = async (id: number): Promise<Livro>  => {
    return prisma.livro.delete({where: {id}})
}