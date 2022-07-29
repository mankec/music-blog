import type { RequestHandler } from '@sveltejs/kit'
import prisma from '$lib/prisma'

export const get: RequestHandler = async () => {
	const genres = await prisma.genre.findMany()

	if (!genres) {
		return { status: 400 }
	}

	return {
		headers: { 'Content-Type': 'application/json' },
		status: 200,
		body: { genres }
	}
}
