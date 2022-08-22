import type { RequestHandler } from '@sveltejs/kit'
import prisma from '$lib/prisma'

export const get: RequestHandler = async () => {
  const artists = await prisma.artist.findMany()

  if (!artists) {
    return { status: 400 }
  }

  return new Response(JSON.stringify({ artists }), {
    headers: {
      'content-type': 'application/json; charset=utf-8'
    }
  });

}
