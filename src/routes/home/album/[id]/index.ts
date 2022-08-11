import type { RequestHandler } from '@sveltejs/kit'
import prisma from '$lib/prisma'
import { writeFileSync } from 'fs'
import { readFileSync } from 'fs'

export const post: RequestHandler = async ({
	request,
	params,
	url,
	routeId
}) => {
	//prettier-ignore
	// request.body is ReadableStream

	console.log('Wrong endpoint')

	const form = await request.formData()

	let genre_name: any = String(form.get('genre_name'))
	let track_name: any = String(form.get('track_name'))

	//	prettier-ignore
	if (genre_name === 'null' || genre_name === null || genre_name.trim() === '')
		genre_name = ''
	else genre_name = genre_name.trim()
	//	prettier-ignore
	if (track_name === 'null' || track_name === null || track_name.trim() === '')
		track_name = ''
	else track_name = track_name.trim()

	const genre_name_check = await prisma.genre.findUnique({
		where: { genre_name: genre_name }
	})
	if (genre_name !== '' && !genre_name_check) {
		await prisma.genre.create({
			data: {
				genre_name,
				albums: {
					connect: { id: params.id }
				}
			}
		})
	}
	if (genre_name !== '' && genre_name_check) {
		await prisma.genre.update({
			where: { genre_name: genre_name },
			data: {
				albums: {
					connect: { id: params.id }
				}
			}
		})
	}

	if (track_name !== '')
		await prisma.track.create({
			data: {
				track_name,
				albums: {
					connect: { id: params.id }
				}
			}
		})

	//prettier-ignore
	// const data: any = JSON.stringify((await request.body?.getReader().read()))
	// const parse_data = JSON.parse(data)
	// console.log(data)
	// console.log(parse_data)
	// const file = data['image']
	// console.log(file)
	// writeFileSync(
	// 	`static/images/hold_your_colour.png`,
	// 	file,
	// 	'base64'
	// )

	// function readStream() {
	// 	const reader = request.body?.getReader()!

	// 	// read() returns a promise that resolves
	// 	// when a value has been received
	// 	reader
	// 		.read()
	// 		.then(function processText({ done, value }: any) {
	// 			// Result objects contain two properties:
	// 			// done  - true if the stream has already given you all its data.
	// 			// value - some data. Always undefined when done is true.
	// 			console.log(reader)
	// 			console.log(value)
	// 			console.log(JSON.stringify(value))

	// 			// const file: string = data.data.join('') as string
	// 			// console.log(file)
	// 			// writeFileSync(
	// 			// 	`static/images/avatar.png`,
	// 			// 	file,
	// 			// 	'base64'
	// 			// )
	// 			console.log(
	// 				readFileSync('static/images/avatar.png', 'base64')
	// 			)
	// 			console.log(done)
	// 			done = true
	// 			console.log(done)
	// 			if (done) {
	// 				console.log('Stream complete')
	// 				// reader.cancel().then(function msg() {
	// 				// 	console.log(request.body)
	// 				// })
	// 				return
	// 			}
	// 		})
	// }

	// readStream()

	return {}
}

export const get: RequestHandler = async ({
	request,
	params,
	url
}) => {
	const album = await prisma.album.findUnique({
		where: { id: params.id }
	})
	const genres = await prisma.genre.findMany({
		where: {
			albums: {
				some: {
					id: params.id
				}
			}
		}
	})

	const tracks = await prisma.track.findMany({
		where: {
			albums: {
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
		body: { album, genres, tracks }
	}
}
