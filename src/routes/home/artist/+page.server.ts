import type { RequestHandler } from '@sveltejs/kit'
import prisma from '$lib/prisma'

export const post: RequestHandler = async ({ request }) => {
	const form = await request.formData()
	let artist_name: any = String(form.get('artist_name'))

	//	prettier-ignore
	if (artist_name === 'null' || artist_name === null || artist_name.trim() === '')
		artist_name = ''
	else artist_name = artist_name.trim()

	const existing_artists: any =
		await prisma.artist.findMany({
			where: { artist_name: artist_name }
		})

	const artist_exists = existing_artists.some(
		(artist: any) => {
			return Object.values(artist).includes(artist_name)
		}
	)

	if (!artist_exists && artist_name !== '')
		await prisma.artist.create({
			data: {
				artist_name
			}
		})

	return {}
}

export const get: RequestHandler = async () => {
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
