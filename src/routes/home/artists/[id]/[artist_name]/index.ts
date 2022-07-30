import type { RequestHandler } from '@sveltejs/kit'
import prisma from '$lib/prisma'

export const post: RequestHandler = async ({ request }) => {
	const form = await request.formData()
	let genre_name: any = String(form.get('genre_name'))
	let track_name: any = String(form.get('track_name'))
	if (genre_name == 'null') genre_name = null
	if (track_name == 'null') track_name = null

	if (genre_name !== null)
		await prisma.genre.create({
			data: {
				genre_name
			}
		})

	if (track_name !== null)
		await prisma.track.create({
			data: {
				track_name
			}
		})

	return {}
}

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

	const genres = await prisma.genre.findMany({})
	const tracks = await prisma.track.findMany({})

	// console.log(request)
	// console.log(params)
	// console.log(url)

	// if (!artist || !albums || !genres || !tracks) {
	// 	return { status: 400 }
	// }

	return {
		headers: { 'Content-Type': 'application/json' },
		status: 200,
		body: { artist, albums, genres, tracks }
	}
}
