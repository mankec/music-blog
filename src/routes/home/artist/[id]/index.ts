import type { RequestHandler } from '@sveltejs/kit'
import prisma from '$lib/prisma'

export const post: RequestHandler = async ({
	request,
	params
}) => {
	// prettier-ignore
	const form = await request.formData()
	let album_name: any = String(form.get('album_name'))
	let year_of_release: any = Number(
		form.get('year_of_release')
	)

	if (album_name == 'null') album_name = null
	if (year_of_release == 'null') year_of_release = null

	const existing_albums: any = await prisma.album.findMany({
		where: { album_name: album_name }
	})

	const connected_albums: any = await prisma.album.findMany(
		{
			where: {
				artists: {
					some: {
						id: params.id
					}
				}
			}
		}
	)

	const album_exists = existing_albums.some(
		(album: any) => {
			return Object.values(album).includes(album_name)
		}
	)

	const album_connected = connected_albums.some(
		(album: any) => {
			return Object.values(album).includes(album_name)
		}
	)

	if (!album_exists || !album_connected)
		await prisma.album.create({
			data: {
				album_name: album_name,
				cover_img: '',
				year_of_release: year_of_release,
				artists: {
					connect: { id: params.id }
				}
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
		where: {
			artists: {
				some: {
					id: params.id
				}
			}
		}
	})

	// console.log(request)
	// console.log(params)
	// console.log(url)

	// if (!artist || !albums || !genres || !tracks) {
	// 	return { status: 400 }
	// }

	return {
		headers: { 'Content-Type': 'application/json' },
		status: 200,
		body: { artist, albums }
	}
}
