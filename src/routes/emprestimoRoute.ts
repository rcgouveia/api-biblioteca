import { Router } from "express";
import {obterEmprestimoPorCpf, listarEmprestimos, criarEmprestimo, deletarEmprestimo, atualizarEmprestimo } from "../controllers/emprestimoController.js";
import { createEmprestimoSchema, updateEmprestimoSchema } from "../schemas/validation";
import { validateBody, validateParams } from "../middleware/validation";
import { z } from "zod";

const router = Router();

const cpfParamSchema = z.object({
  id: z.string().length(11, "CPF deve ter 11 dígitos")
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
 *   name: Emprestimos
 *   description: Gerenciamento de empréstimos
 */

/**
 * @swagger
 * /emprestimo/listar:
 *   get:
 *     summary: Lista todos os empréstimos
 *     tags: [Emprestimos]
 *     responses:
 *       200:
 *         description: Lista de empréstimos
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/emprestimo/listar", listarEmprestimos);
/**
 * @swagger
 * /emprestimo/listar/{cpf}:
 *   get:
 *     summary: Retorna empréstimos de um cliente pelo CPF
 *     tags: [Emprestimos]
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
 *         description: Empréstimos encontrados
 *       404:
 *         description: Nenhum empréstimo encontrado para o CPF informado
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/emprestimo/listar/:cpf", validateParams(cpfParamSchema),obterEmprestimoPorCpf);
/**
 * @swagger
 * /emprestimo/criar:
 *   post:
 *     summary: Cria um novo empréstimo
 *     tags: [Emprestimos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - livroId
 *               - clienteId
 *               - dataEmprestimo
 *               - dataDevolucao
 *             properties:
 *               livroId:
 *                 type: integer
 *               clienteId:
 *                 type: integer
 *               dataEmprestimo:
 *                 type: string
 *                 format: date
 *               dataDevolucao:
 *                 type: string
 *                 format: date
 *             example:
 *               clienteCpf: "12345678901"
 *               livroId: 1
 *               bibliotecarioId: 3
 *               clienteId: 1
 *               codEmprestimo: 102
 *     responses:
 *       201:
 *         description: Empréstimo criado com sucesso
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro interno do servidor
 */
router.post("/emprestimo/criar", validateBody(createEmprestimoSchema),criarEmprestimo);
/**
 * @swagger
 * /emprestimo/atualizar/{id}:
 *   put:
 *     summary: Atualiza um empréstimo existente
 *     tags: [Emprestimos]
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
 *               livroId:
 *                 type: integer
 *               clienteId:
 *                 type: integer
 *               dataEmprestimo:
 *                 type: string
 *                 format: date
 *               dataDevolucao:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Empréstimo atualizado com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Empréstimo não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put("/emprestimo/atualizar/:id", validateParams(idParamSchema), validateBody(updateEmprestimoSchema),atualizarEmprestimo);
/**
 * @swagger
 * /emprestimo/deletar/{id}:
 *   delete:
 *     summary: Deleta um empréstimo
 *     tags: [Emprestimos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Empréstimo deletado com sucesso
 *       404:
 *         description: Empréstimo não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.delete("/emprestimo/deletar/:id", validateParams(idParamSchema),deletarEmprestimo);

export default router;
