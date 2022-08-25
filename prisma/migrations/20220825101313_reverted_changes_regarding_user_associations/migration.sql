/*
  Warnings:

  - You are about to drop the `_AlbumToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_GenreToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_TrackToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_AlbumToUser" DROP CONSTRAINT "_AlbumToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_AlbumToUser" DROP CONSTRAINT "_AlbumToUser_B_fkey";

-- DropForeignKey
ALTER TABLE "_GenreToUser" DROP CONSTRAINT "_GenreToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_GenreToUser" DROP CONSTRAINT "_GenreToUser_B_fkey";

-- DropForeignKey
ALTER TABLE "_TrackToUser" DROP CONSTRAINT "_TrackToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_TrackToUser" DROP CONSTRAINT "_TrackToUser_B_fkey";

-- DropTable
DROP TABLE "_AlbumToUser";

-- DropTable
DROP TABLE "_GenreToUser";

-- DropTable
DROP TABLE "_TrackToUser";
