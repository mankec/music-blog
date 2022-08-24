import prisma from "$lib/prisma";
import * as cookie from 'cookie'
import { redirect } from '@sveltejs/kit'


/** @type {import('./$types').LayoutServerLoad} */
export async function load({ request }: any) {
  const cookieHeader = request.headers.get('cookie')
  const cookies = cookie.parse(cookieHeader)
  const token = cookies.session

  if (token) {
    const find_user = await prisma.user.findUnique({
      where: { user_auth_token: token }
    })
    const user = JSON.stringify(find_user)
    return { user }
  }

  if (!token) {
    throw redirect(302, '/login')
  }
}