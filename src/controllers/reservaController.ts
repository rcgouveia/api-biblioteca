import type { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';
import * as reservaService from '../services/reservaService'


const prisma = new PrismaClient();

export const listarReservas = async (req: Request, res: Response) =>{
    try{
        const reservas = await reservaService.getAll()
        return res.status(201).json(reservas)
    } catch (error: any) {
        return res.status(400).json({message: error.message})
    }
};

export const listarReservasPorCpf = async (req: Request, res: Response) =>{
    try{
        const {cpf} = req.params
        const reservas = await reservaService.getByCpf(String(cpf))
        return res.status(201).json(reservas)
    } catch (error:any){
        return res.status(500).json({message: error.message})
    }
}

export const criarReserva = async(req: Request, res:Response)=>{
    try{
        const reservas = await reservaService.create(req.body)
        return res.status(201).json(reservas)
    } catch(error:any){
        if (error.code == 'P2002'){
             return res.status(409).json({ message: `Campo único já existe: ${error.meta.target}` });
        }
    }
}

export const atualizarReserva = async(req:Request, res:Response)=>{
    try{
        const reservas = await reservaService.update(Number(req.params.id), req.body)
        return res.status(201).json(reservas)
    } catch (error: any){
        if(error.code == 'P2025'){
            return res.status(404).json({ message: 'Reserva não encontrada.' })
        }
        return res.status(400).json({message: error.message})
    }
}

export const deletarReserva = async(req:Request, res:Response) => {
    try{
        const reservas = await reservaService.remove(Number(req.params.id))
        return res.status(201).json(reservas)
    } catch(error:any){
        if(error.code == 'P2025'){
            return res.status(404).json({ message: 'Reserva não encontrada.' })
        }
        return res.status(400).json({message: error.message})
    }
}