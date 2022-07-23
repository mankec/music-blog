/*
  Warnings:

  - Added the required column `artist_name` to the `Artist` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Artist" ADD COLUMN     "artist_name" TEXT NOT NULL;
