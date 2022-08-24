import { redirect } from '@sveltejs/kit'
import * as cookie from 'cookie'

/** @type {import('./$types').RequestHandler} */
export async function GET({ setHeaders }: any) {
  setHeaders({
    'set-cookie': cookie.serialize('session', '', {
      path: '/',
      // the cookie should expire immediately
      expires: new Date(0)
    }),
    location: '/login'
  })

  throw redirect(307, '/login')
}
