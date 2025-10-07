/*
  Warnings:

  - Added the required column `dataDevolucao` to the `reservas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reservas" ADD COLUMN     "dataDevolucao" TIMESTAMP(3) NOT NULL;
