import type { RequestHandler } from '@sveltejs/kit'
import prisma from '$lib/prisma'

export async function load({ params }: any) {
  const genre = await prisma.genre.findUnique({
    where: { id: params.id }
  })

  const albums = await prisma.album.findMany({
    where: {
      genres: {
        some: {
          id: params.id
        }
      }
    }
  })

  // if (!artist || !albums || !genres || !tracks) {
  // 	return { status: 400 }
  // }

  // throw error(400, 'not found'); error helper from js kit

  return { genre, albums }
}
