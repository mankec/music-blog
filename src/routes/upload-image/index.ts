import { writeFileSync } from 'fs'
import type { RequestHandler } from '@sveltejs/kit'
import prisma from '$lib/prisma'

export const post: RequestHandler = async ({ request }) => {
	console.log(request)
	// const data = JSON.parse(
	// 	(await request.body.getReader().read()).toString()
	// )

	// console.log(data)
	// const file = data['image']
	// console.log(file)
	// writeFileSync(
	// 	`static/images/hold_your_colour.png`,
	// 	file,
	// 	'base64'
	// )

	function getFile() {
		//prettier-ignore
		const reader: any = request.body?.getReader()
		// read() returns a promise that resolves
		// when a value has been received
		reader
			.read()
			.then(function process({ done, value }: any) {
				// const reader_s = JSON.stringify(reader)
				console.log(reader)
				const value1 = JSON.stringify(value)
				const data = JSON.parse(value1)
				console.log(data)
				const file: string = data.data.join(', ') as string
				console.log(file)
				writeFileSync(
					`static/images/hold_your_colour.png`,
					file,
					'base64'
				)
				;async () => {
					await prisma.album.update({
						where: { id: '763e8cfd-f631-4833-8c04-bf9f84c26880' },
						data: {
							cover_img: file
						}
					})
				}

				done = true
				// Result objects contain two properties:
				// done  - true if the stream has already given you all its data.
				// value - some data. Always undefined when done is true.
				if (done) {
				
					console.log('Stream complete')

					return
				}
			})
	}

	getFile()

	return {}
}

//prettier-ignore
// const reader: any = JSON.stringify(await request.body?.getReader().read()) as string
// console.log(reader)
// const data = JSON.parse(reader)
// console.log(data)
// const file: string = data.value.data.join(',')
// console.log(file)

// writeFileSync(
// 	`static/images/hold_your_colour.png`,
// 	file,
// 	'base64'
// )
// console.log(request.body)
// console.log(request.body?.locked)
// if (request.body?.locked as boolean) data.done = true
// console.log(request.body)
