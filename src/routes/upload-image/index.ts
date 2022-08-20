import { readFileSync, writeFileSync } from 'fs'

export async function post({ request }: any) {
	console.log(request.body)

	const data = await request.body.getReader().read()

	const file = data.value.toString('base64')

	// console.log(file)

	writeFileSync(`static/avatar.png`, file, 'base64')
}
