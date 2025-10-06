import {Router } from "express";
import { listarReservas, obterReservaPorId, criarReserva, atualizarReserva, deletarReserva } from "../controllers/reservaController.js";

const router = Router();

router.get("/Reserva/listar", listarReservas);
router.get("/Reserva/listar/:id", obterReservaPorId);
router.post("/Reserva/criar", criarReserva);
router.put("/Reserva/atualizar/:id", atualizarReserva);
router.delete("/Reserva/deletar/:id", deletarReserva);
