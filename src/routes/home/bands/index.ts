import type { RequestHandler } from '@sveltejs/kit'
import prisma from '$lib/prisma'

export const get: RequestHandler = async () => {
	// const albums_data = await prisma.album.findMany({
	// 	include: {
	// 		artists: { select: { artist_name: true } },
	// 		tracks: true,
	// 		genres: true
	// 	}
	// })

	// const albums = albums_data.map((album) => {
	// 	return {
	// 		id: album.id,
	// 		artist_name: album.artists,
	// 		album_name: album.album_name,
	// 		track_names: album.tracks,
	// 		genre_names: album.genres,
	// 		year_of_release: album.year_of_release,
	// 		cover_img: album.cover_img
	// 	}
	// })

	const artists = await prisma.artist.findMany()

	if (!artists) {
		return { status: 400 }
	}

	return {
		headers: { 'Content-Type': 'application/json' },
		status: 200,
		body: { artists }
	}
}
