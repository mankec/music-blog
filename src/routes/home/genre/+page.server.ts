import type { RequestHandler } from '@sveltejs/kit'
import prisma from '$lib/prisma'

export async function load() {

  const genres = await prisma.genre.findMany()

  if (!genres) {
    return { status: 400 }
  }

  return { genres }
}
