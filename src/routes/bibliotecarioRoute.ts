import { Router } from "express";
import {obterBibliotecarioPorId, listarBibliotecarios, criarBibliotecario, deletarBibliotecario, atualizarBibliotecario } from "../controllers/bibliotecarioController.js";
import { createBibliotecarioSchema, updateBibliotecarioSchema } from "../schemas/validation";
import { validateBody, validateParams } from "../middleware/validation";
import { z } from "zod";

const router = Router();

const idParamSchema = z.object({
  id: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, "ID inválido")
    .transform((val) => Number(val))
});

/**
 * @swagger
 * tags:
 *   name: Bibliotecarios
 *   description: Gerenciamento de bibliotecários
 */

/**
 * @swagger
 * /bibliotecarios/listar:
 *   get:
 *     summary: Retorna todos os bibliotecários
 *     tags: [Bibliotecarios]
 *     responses:
 *       200:
 *         description: Lista de bibliotecários retornada com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/bibliotecarios/listar", listarBibliotecarios);
/**
 * @swagger
 * /bibliotecarios/listar/{id}:
 *   get:
 *     summary: Retorna um bibliotecário pelo ID
 *     tags: [Bibliotecarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Bibliotecário encontrado
 *       404:
 *         description: Bibliotecário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/bibliotecarios/listar/:id",validateParams(idParamSchema), obterBibliotecarioPorId);
/**
 * @swagger
 * /bibliotecarios/criar:
 *   post:
 *     summary: Cria um novo bibliotecário
 *     tags: [Bibliotecarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - email
 *               - senha
 *               - cpf
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *               cpf:
 *                 type: string
 *     responses:
 *       201:
 *         description: Bibliotecário criado com sucesso
 *       400:
 *         description: Erro na requisição
 *       500:
 *         description: Erro interno do servidor
 */
router.post("/bibliotecarios/criar",validateBody(createBibliotecarioSchema) ,criarBibliotecario);
/**
 * @swagger
 * /bibliotecarios/atualizar/{id}:
 *   put:
 *     summary: Atualiza os dados de um bibliotecário
 *     tags: [Bibliotecarios]
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
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Bibliotecário atualizado com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Bibliotecário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put("/bibliotecarios/atualizar/:id", validateParams(idParamSchema), validateBody(updateBibliotecarioSchema), atualizarBibliotecario);
/**
 * @swagger
 * /bibliotecarios/deletar/{id}:
 *   delete:
 *     summary: Deleta um bibliotecário pelo ID
 *     tags: [Bibliotecarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Bibliotecário deletado com sucesso
 *       404:
 *         description: Bibliotecário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.delete("/bibliotecarios/deletar/:id",validateParams(idParamSchema), deletarBibliotecario);


export default router;