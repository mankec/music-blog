import type { RequestHandler } from '@sveltejs/kit'
import prisma from '$lib/prisma'
import { identity } from 'svelte/internal'

export const get: RequestHandler = async () => {
	const artists_data = await prisma.artist.findMany({
		include: { albums: true, users: true }
	})

	const albums_data = await prisma.album.findMany({
		include: {
			artists: { select: { artist_name: true } },
			tracks: true,
			genres: true
		}
	})

	const tracks_data = await prisma.track.findMany({
		include: { albums: true }
	})

	const genres_data = await prisma.genre.findMany({
		include: { albums: true }
	})

	const albums = albums_data.map((album) => {
		return {
			id: album.id,
			artist_name: album.artists,
			album_name: album.album_name,
			track_names: album.tracks,
			genre_names: album.genres,
			year_of_release: album.year_of_release,
			cover_img: album.cover_img
		}
	})

	const artists = artists_data.map((artist) => {
		return {
			id: artist.id,
			artist_name: artist.artist_name
		}
	})

	if (!albums && !artists) {
		return { status: 400 }
	}

	return {
		headers: { 'Content-Type': 'application/json' },
		status: 200,
		body: { albums, artists }
	}
}

export const post: RequestHandler = async ({ request }) => {
	const form = await request.formData()
	const album_name = String(form.get('album_name'))
	const artist_name = String(form.get('artist_name'))
	const year_of_release = Number(
		form.get('year_of_release')
	)
	const track_names = String(form.get('track_names'))
	const genre_names = String(form.get('genre_names'))

	const increment = function (id: number) {
		return id++
	}
	let id

	await prisma.album.create({
		data: {
			album_name: album_name,
			cover_img: 'pp',
			year_of_release: year_of_release,
			artists: {
				create: {
					id: id,
					artist_name
				}
			},
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

	return {}
}
