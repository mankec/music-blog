import type { RequestHandler } from '@sveltejs/kit'
import prisma from '$lib/prisma'

export const post: RequestHandler = async ({ request }) => {
	const form = await request.formData()
	const album_name = String(form.get('album_name'))
	const year_of_release = Number(
		form.get('year_of_release')
	)
	const track_names = String(form.get('track_names'))
	const genre_names = String(form.get('genre_names'))

	await prisma.album.create({
		data: {
			album_name: album_name,
			cover_img: 'pp',
			year_of_release: year_of_release,
			tracks: {
				create: {
					track_names: track_names.split(',')
				}
			},
			genres: {
				create: {
					genre_names: genre_names.split(',')
				}
			}
		}
	})

	// const tracks = await prisma.track.create({
	// 	data: {
	// 		track_names: track_names.split(',')
	// 	}
	// })
	// const genres = await prisma.genre.create({
	// 	data: {
	// 		genre_names: genre_names.split(',')
	// 	}
	// })

	return {}
}
