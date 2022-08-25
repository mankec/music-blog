import prisma from "$lib/prisma";
import { base } from '$app/paths'
import * as cookie from 'cookie'
import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ request, url }: any) {

  let cookieHeader = request.headers.get('cookie')
  if (!cookieHeader) cookieHeader = ''

  const cookies = cookie.parse(cookieHeader)
  const token = cookies.session
  // console.log(token)
  if (token) {
    const find_user = await prisma.user.findUnique({
      where: { user_auth_token: token }
    })
    const user = JSON.stringify(find_user)
    return { user }
  }

  if (!token) {
    return {}
  }

  if (url.pathname === `/` && token) {
    throw redirect(302, '/home')
  }
}