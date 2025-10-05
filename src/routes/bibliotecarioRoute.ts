import { Router } from "express";
import {obterBibliotecarioPorId, listarBibliotecarios, criarBibliotecario, deletarBibliotecario, atualizarBibliotecario } from "../controllers/bibliotecarioController.js";

const router = Router();

router.get("/bibliotecarios/listar", listarBibliotecarios);
router.get("/bibliotecarios/listar/:id", obterBibliotecarioPorId);
router.post("/bibliotecarios/criar", criarBibliotecario);
router.put("/bibliotecarios/atualizar/:id", atualizarBibliotecario);
router.delete("/bibliotecarios/deletar/:id", deletarBibliotecario);


export default router;