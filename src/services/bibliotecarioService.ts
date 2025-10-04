import { prisma } from '../database/prisma';
import { Bibliotecario } from '../generated/prisma';

type BibliotecarioCreateData = Omit<Bibliotecario,'id' | 'createdAt' | 'updatedAt'>
type BibliotecarioUpdateData = Partial<BibliotecarioCreateData>

export const create = async (data: BibliotecarioCreateData): Promise<Bibliotecario> => {
    return prisma.bibliotecario.create({
        data: {...data}
    });
}

export const getAll = async (): Promise<Bibliotecario[]> => {
    return prisma.bibliotecario.findMany({});
}

export const getById = async (id: number): Promise<Bibliotecario | null> =>{
    return prisma.bibliotecario.findUnique({where: {id}})
}


export const update = async (id: number, data: BibliotecarioUpdateData): Promise<Bibliotecario> =>{
    return prisma.bibliotecario.update({
        where: {id},
        data: {...data}
    })
}

export const remove = async (id: number): Promise<Bibliotecario>  => {
    return prisma.bibliotecario.delete({where: {id}})
}