import { Router } from "express";
import { listarLivros, obterLivroPorId, criarLivro , atualizarLivro, deletarLivro} from "../controllers/livroController.js";

const router = Router();

router.get("/livro/listar", listarLivros);
router.get("/livro/listar/:id", obterLivroPorId);
router.post("/livro/criar", criarLivro);
router.put("/livro/atualizar/:id", atualizarLivro);
router.delete("/livro/deletar/:id", deletarLivro);

export default router;
