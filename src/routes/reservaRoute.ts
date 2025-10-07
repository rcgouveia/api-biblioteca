import { Router } from "express"
import { listarReservas, listarReservasPorCpf, criarReserva, atualizarReserva, deletarReserva } from '../controllers/reservaController'
import { createReservaSchema, updateReservaSchema } from "../schemas/validation";
import { validateBody, validateParams } from "../middleware/validation";
import { z } from "zod";

const router = Router();

const cpfParamSchema = z.object({
  cpf: z.string().length(11, "CPF deve ter 11 dígitos")
});
const idParamSchema = z.object({
  id: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, "ID inválido")
    .transform((val) => Number(val))
});
/**
 * @swagger
 * tags:
 *   name: Reservas
 *   description: Gerenciamento de reservas
 */

/**
 * @swagger
 * /reserva/Listar:
 *   get:
 *     summary: Lista todas as reservas
 *     tags: [Reservas]
 *     responses:
 *       200:
 *         description: Lista de reservas
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/reserva/Listar', listarReservas)
/**
 * @swagger
 * /reserva/Listar/{cpf}:
 *   get:
 *     summary: Lista reservas de um cliente pelo CPF
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: cpf
 *         required: true
 *         schema:
 *           type: string
 *           minLength: 11
 *           maxLength: 11
 *         description: CPF do cliente
 *     responses:
 *       200:
 *         description: Reservas encontradas
 *       404:
 *         description: Nenhuma reserva encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/reserva/Listar/:cpf',validateParams(cpfParamSchema) ,listarReservasPorCpf)
/**
 * @swagger
 * /reserva/Criar:
 *   post:
 *     summary: Cria uma nova reserva
 *     tags: [Reservas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - clienteCpf
 *               - bibliotecarioId
 *               - livrosId
 *               - dataPedido
 *               - codReserva
 *             properties:
 *               clienteCpf:
 *                 type: string
 *               bibliotecarioId:
 *                 type: integer
 *               livrosId:
 *                 type: integer
 *               dataPedido:
 *                 type: string
 *                 format: date-time
 *               codReserva:
 *                 type: integer
 *             example:
 *               clienteCpf: "12345678901"
 *               livroId: 1
 *               bibliotecarioId: 3
 *               clienteId: 1
 *               codReserva: 102
 *     responses:
 *       201:
 *         description: Reserva criada com sucesso
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/reserva/Criar',validateBody(createReservaSchema) ,criarReserva)
/**
 * @swagger
 * /reserva/atualizar/{id}:
 *   put:
 *     summary: Atualiza uma reserva existente
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               clienteCpf:
 *                 type: string
 *               bibliotecarioId:
 *                 type: integer
 *               livrosId:
 *                 type: integer
 *               dataPedido:
 *                 type: string
 *                 format: date-time
 *               codReserva:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Reserva atualizada com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Reserva não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.put('/reserva/atualizar/:id',validateParams(idParamSchema), validateBody(updateReservaSchema) ,atualizarReserva)
/**
 * @swagger
 * /reserva/deletar/{id}:
 *   delete:
 *     summary: Deleta uma reserva
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Reserva deletada com sucesso
 *       404:
 *         description: Reserva não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.delete('/reserva/deletar/:id', validateParams(idParamSchema) ,deletarReserva)

export default router