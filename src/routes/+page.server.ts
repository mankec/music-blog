import * as cookie from 'cookie'
import { redirect } from '@sveltejs/kit'

export async function load({ request }: any) {
  let cookieHeader = request.headers.get('cookie')
  if (!cookieHeader) cookieHeader = ''

  const cookies = cookie.parse(cookieHeader)
  const token = cookies.session


  if (token)
    throw redirect(307, '/home')
  else
    throw redirect(307, '/login')

}     