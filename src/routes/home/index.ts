import type { RequestHandler } from '@sveltejs/kit'
import prisma from '$lib/prisma'

export const post: RequestHandler = async ({ request }) => {
	const form = await request.formData()
	const artist_name = String(form.get('artist_name'))

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
