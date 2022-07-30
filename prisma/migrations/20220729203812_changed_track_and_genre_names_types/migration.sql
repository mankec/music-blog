/*
  Warnings:

  - You are about to drop the column `track_names` on the `Track` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[genre_name]` on the table `Genre` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `track_name` to the `Track` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Track" DROP COLUMN "track_names",
ADD COLUMN     "track_name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Genre_genre_name_key" ON "Genre"("genre_name");
