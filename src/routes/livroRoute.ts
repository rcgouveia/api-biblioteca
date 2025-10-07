import { Router } from "express";
import { listarLivros, obterLivroPorId, criarLivro , atualizarLivro, deletarLivro} from "../controllers/livroController.js";
import { createLivroSchema, updateLivroSchema } from "../schemas/validation";
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
 *   name: Livros
 *   description: Gerenciamento de livros
 */

/**
 * @swagger
 * /livro/listar:
 *   get:
 *     summary: Lista todos os livros
 *     tags: [Livros]
 *     responses:
 *       200:
 *         description: Lista de livros
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/livro/listar", listarLivros);
/**
 * @swagger
 * /livro/listar/{id}:
 *   get:
 *     summary: Retorna um livro pelo ID
 *     tags: [Livros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Livro encontrado
 *       404:
 *         description: Livro não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/livro/listar/:id", validateParams(idParamSchema) ,obterLivroPorId);
/**
 * @swagger
 * /livro/criar:
 *   post:
 *     summary: Cria um novo livro
 *     tags: [Livros]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - titulo
 *               - descricao
 *               - genero
 *               - status
 *               - quantidade
 *             properties:
 *               titulo:
 *                 type: string
 *               descricao:
 *                 type: string
 *               genero:
 *                 type: string
 *               status:
 *                 type: boolean
 *               quantidade:
 *                 type: integer
 *             example:
 *               titulo: Exemplo de Livro
 *               descricao: Um livro de exemplo
 *               genero: Ficção
 *               status: true
 *               quantidade: 10
 *     responses:
 *       201:
 *         description: Livro criado com sucesso
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro interno do servidor
 */
router.post("/livro/criar",validateBody(createLivroSchema) ,criarLivro);
/**
 * @swagger
 * /livro/atualizar/{id}:
 *   put:
 *     summary: Atualiza um livro existente
 *     tags: [Livros]
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
 *               titulo:
 *                 type: string
 *               descricao:
 *                 type: string
 *               genero:
 *                 type: string
 *               status:
 *                 type: boolean
 *               quantidade:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Livro atualizado com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Livro não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put("/livro/atualizar/:id",validateParams(idParamSchema),validateBody(updateLivroSchema) ,atualizarLivro);
/**
 * @swagger
 * /livro/deletar/{id}:
 *   delete:
 *     summary: Deleta um livro
 *     tags: [Livros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Livro deletado com sucesso
 *       404:
 *         description: Livro não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.delete("/livro/deletar/:id", validateParams(idParamSchema) , deletarLivro);

export default router;
