/*
  Warnings:

  - Added the required column `codEmprestimo` to the `emprestimos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `codReserva` to the `reservas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "emprestimos" ADD COLUMN     "codEmprestimo" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "reservas" ADD COLUMN     "codReserva" INTEGER NOT NULL;
