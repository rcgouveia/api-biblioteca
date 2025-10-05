import { Router } from "express";
import {obterEmprestimoPorId, listarEmprestimos, criarEmprestimo, deletarEmprestimo, atualizarEmprestimo } from "../controllers/emprestimoController.js";

const router = Router();

router.get("/emprestimo/listar", listarEmprestimos);
router.get("/emprestimo/listar/:id", obterEmprestimoPorId);
router.post("/emprestimo/criar", criarEmprestimo);
router.put("/emprestimo/atualizar/:id", atualizarEmprestimo);
router.delete("/emprestimo/deletar/:id", deletarEmprestimo);

export default router;
