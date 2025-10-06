import { Router } from "express";
import { listarLivros, obterLivroPorId, criarLivro , atualizarLivro, deletarLivro} from "../controllers/livroController.js";

const router = Router();

router.get("/Livro/listar", listarLivros);
router.get("/Livro/listar/:id", obterLivroPorId);
router.post("/Livro/criar", criarLivro);
router.put("/Livro/atualizar/:id", atualizarLivro);
router.delete("/Livro/deletar/:id", deletarLivro);

export default router;
