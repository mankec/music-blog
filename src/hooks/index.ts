import type { GetSession, Handle } from '@sveltejs/kit'
import * as cookie from 'cookie'

import prisma from '$lib/prisma'

export const handle: Handle = async ({
	event,
	resolve
}) => {
	const cookie_header = event.request.headers.get('cookie')
	const cookies = cookie.parse(cookie_header ?? '')

	if (!cookies.session) {
		return await resolve(event)
	}

	const session = await prisma.user.findUnique({
		where: { user_auth_token: cookies.session }
	})

	if (session) {
		event.locals.user = { username: session.username }
	}

	return await resolve(event)
}

export const getSession: GetSession = ({ locals }) => {
	if (!locals.user) return {}

	return {
		user: {
			username: locals.user.username
		}
	}
}
