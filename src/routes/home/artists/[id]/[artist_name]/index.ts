import type { RequestHandler } from '@sveltejs/kit'
import prisma from '$lib/prisma'

export const get: RequestHandler = async ({
	request,
	params,
	url
}) => {
	const artist = await prisma.artist.findUnique({
		where: { id: params.id }
	})

	const albums = await prisma.album.findMany({
		include: {
			tracks: true,
			genres: true
		}
	})

	const tracks = await prisma.track.findMany({
		include: { albums: true }
	})

	const genres = await prisma.genre.findMany({
		include: { albums: true }
	})

	// console.log(request)
	// console.log(params)
	// console.log(url)

	if (!artist && !albums) {
		return { status: 400 }
	}

	return {
		headers: { 'Content-Type': 'application/json' },
		status: 200,
		body: { artist, albums }
	}
}
