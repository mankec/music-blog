import type { RequestHandler } from '@sveltejs/kit'
import prisma from '$lib/prisma'

export const post: RequestHandler = async ({
	request,
	params
}) => {
	const form = await request.formData()
	let album_name: any = String(form.get('album_name'))
	//prettier-ignore
	let year_of_release: any = Number(form.get('year_of_release'))
	let album_cover: any = String(form.get('album_cover'))

	console.log(album_name)
	console.log(year_of_release)
	// console.log(album_cover)

	if (
		album_name === 'null' ||
		album_name === null ||
		album_name.trim() === ''
	)
		album_name = ''
	else album_name = album_name.trim()
	if (
		year_of_release === 'null' ||
		year_of_release === null ||
		year_of_release === 0
	)
		year_of_release = 1234
	else year_of_release = year_of_release

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

	// prettier-ignore
	if ((!album_exists || !album_connected) && (album_name !== '' && year_of_release !== ''))
	await prisma.album.create({
			data: {
				album_name: album_name,
				cover_img: album_cover,
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
