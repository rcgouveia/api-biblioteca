import { z } from "zod";

// Schema para Cliente
export const createClienteSchema = z.object({
  nome: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  email: z
    .string()
    .email({ message: "Email deve ter um formato válido" })
    .max(255, "Email deve ter no máximo 255 caracteres"),
  senha: z
    .string()
    .min(6, "Senha deve ter pelo menos 6 caracteres")
    .max(100, "Senha deve ter no máximo 100 caracteres"),
  cpf: z
    .string()
    .min(11, "CPF deve ter 11 caracteres")
    .max(11, "CPF não pode ter mais de 11 caracteres"),
});

export const updateClienteSchema = createClienteSchema.partial();

// Schema para Bibliotecario
export const createBibliotecarioSchema = z.object({
    nome: z
        .string()
        .min(2, "Nome deve ter pelo menos 2 caracteres")
        .max(100, "Nome deve ter no máximo 100 caracteres"),
    email: z
        .string()
        .email({ message: "Email deve ter um formato válido" })
        .max(255, "Email deve ter no máximo 255 caracteres"),
    senha: z
        .string()
        .min(6, "Senha deve ter pelo menos 6 caracteres")
        .max(100, "Senha deve ter no máximo 100 caracteres"),
    cpf: z
        .string()
        .min(11, "CPF deve ter 11 caracteres")
        .max(11, "CPF não pode ter mais de 11 caracteres"),
    
});

export const updateBibliotecarioSchema = createBibliotecarioSchema.partial();

export const createLivroSchema = z.object({
  titulo: z.string().min(1, "Título obrigatório").max(255, "Título muito longo"),
  descricao: z.string().min(10, "Descrição muito curta"),
  genero: z.string().min(3, "Gênero inválido").max(100),
  status: z.boolean(),
  quantidade: z.number().int().min(0, "Quantidade não pode ser negativa")
});

export const updateLivroSchema = createLivroSchema.partial();


export const createEmprestimoSchema = z.object({
  dataPedido: z.string().refine((val) => {const date = new Date(val);
    return date <= new Date();
  }, "A data do pedido não pode ser futura"),
  clienteCpf: z.string().length(11, "CPF deve ter 11 dígitos"),
  bibliotecarioId: z.number().int().positive("ID inválido"),
  livrosId: z.number().int().positive("ID inválido"),
  codEmprestimo: z.number().int().positive("Código do empréstimo inválido")
});

export const updateEmprestimoSchema = createEmprestimoSchema.partial();

export const createReservaSchema = z.object({
  dataPedido: z.string().refine((val) => {const date = new Date(val);
    return date <= new Date();
  }, "A data do pedido não pode ser futura"),
  clienteCpf: z.string().length(11, "CPF deve ter 11 dígitos"),
  bibliotecarioId: z.number().int().positive("ID inválido"),
  livrosId: z.number().int().positive("ID inválido"),
  codReserva: z.number().int().positive("Código da Reserva inválido")
});

export const updateReservaSchema = createReservaSchema.partial();

export type CreateClienteData = z.infer<typeof createClienteSchema>;
export type UpdateClienteData = z.infer<typeof updateClienteSchema>;
export type CreateBibliotecarioData = z.infer<typeof createBibliotecarioSchema>;
export type UpdateBibliotecarioData = z.infer<typeof updateBibliotecarioSchema>;
export type CreateLivroData = z.infer<typeof createLivroSchema>;
export type UpdateLivroData = z.infer<typeof updateLivroSchema>;
export type CreateEmprestimoData = z.infer<typeof createEmprestimoSchema>;
export type UpdateEmprestimoData = z.infer<typeof updateEmprestimoSchema>;
export type CreateReservaData = z.infer<typeof createReservaSchema>;
export type UpdateReservaData = z.infer<typeof updateReservaSchema>;