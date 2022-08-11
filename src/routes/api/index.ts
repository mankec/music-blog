import type { RequestHandler } from '@sveltejs/kit'
// import prisma from '$lib/prisma'
import { writeFileSync } from 'fs'
import { readFileSync } from 'fs'

export const post: RequestHandler = async ({
	request,
	params
}) => {
	console.log('Good shit')

	function readStream() {
		const reader = request.body?.getReader()!

		// read() returns a promise that resolves
		// when a value has been received
		reader
			.read()
			.then(function processText({ done, value }: any) {
				// Result objects contain two properties:
				// done  - true if the stream has already given you all its data.
				// value - some data. Always undefined when done is true.
				console.log(reader)
				console.log(value)
				console.log(JSON.stringify(value))

				// const file: string = data.join('') as string
				// console.log(file)
				// writeFileSync(
				// 	`static/images/avatar.png`,
				// 	file,
				// 	'base64'
				// )
				console.log(
					readFileSync('static/images/avatar.png', 'base64')
				)
				console.log(done)
				done = true
				console.log(done)
				if (done) {
					console.log('Stream complete')
					// reader.cancel().then(function msg() {
					// 	console.log(request.body)
					// })
					return
				}
			})
	}

	readStream()

	return {}
}
