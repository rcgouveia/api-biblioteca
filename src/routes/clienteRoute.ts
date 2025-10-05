import { Router } from "express";
import {obterClientePorId, deletarCliente, atualizarCliente, criarCliente, listarClientes } from "../controllers/clienteController.js";

const router = Router();

router.get("/clientes/listar", listarClientes);
router.get("/clientes/:id", obterClientePorId);
router.post("/clientes/criar", criarCliente);
router.put("/clientes/atualizar/:id", atualizarCliente);
router.delete("/clientes/deletar/:id", deletarCliente);


export default router;