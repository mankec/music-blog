import prisma from "$lib/prisma";
import * as cookie from 'cookie'

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ request }: any) {
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


}