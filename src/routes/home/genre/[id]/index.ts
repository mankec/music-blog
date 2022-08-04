import type { RequestHandler } from '@sveltejs/kit'
import prisma from '$lib/prisma'

export const get: RequestHandler = async ({
	request,
	params
}) => {
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

	return {
		headers: { 'Content-Type': 'application/json' },
		status: 200,
		body: { genre, albums }
	}
}
