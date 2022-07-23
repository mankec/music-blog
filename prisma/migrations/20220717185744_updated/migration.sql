/*
  Warnings:

  - You are about to drop the column `album_genre_names` on the `Genre` table. All the data in the column will be lost.
  - You are about to drop the column `album_track_names` on the `Track` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Genre" DROP COLUMN "album_genre_names",
ADD COLUMN     "genre_names" TEXT[];

-- AlterTable
ALTER TABLE "Track" DROP COLUMN "album_track_names",
ADD COLUMN     "track_names" TEXT[];
