/*
  Warnings:

  - Added the required column `dataDevolucao` to the `emprestimos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "emprestimos" ADD COLUMN     "dataDevolucao" TIMESTAMP(3) NOT NULL;
