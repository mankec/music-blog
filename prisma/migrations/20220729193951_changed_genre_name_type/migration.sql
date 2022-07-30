/*
  Warnings:

  - You are about to drop the column `genre_names` on the `Genre` table. All the data in the column will be lost.
  - Added the required column `genre_name` to the `Genre` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Genre" DROP COLUMN "genre_names",
ADD COLUMN     "genre_name" TEXT NOT NULL;
