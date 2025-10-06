import { Router } from "express"
import { listarReservas, listarReservasPorCpf, criarReserva, atualizarReserva, deletarReserva } from '../controllers/reservaController'

const router = Router();

router.get('/reserva/Listar', listarReservas)
router.get('/reserva/Listar/:cpf', listarReservasPorCpf)
router.post('/reserva/Criar', criarReserva)
router.put('/reserva/atualizar/:id', atualizarReserva)
router.delete('/reserva/deletar/:id', deletarReserva)

export default router