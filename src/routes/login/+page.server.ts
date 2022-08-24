import prisma from '$lib/prisma'
import * as bcrypt from 'bcrypt'
import * as cookie from 'cookie'
import { redirect } from '@sveltejs/kit'

export async function POST({ request, setHeaders }: any) {
  const form = await request.formData()
  const username = form.get('username')
  const password = form.get('password')

  if (
    typeof username !== 'string' ||
    typeof password !== 'string'
  ) {
    return {
      status: 400,
      body: {
        error: 'Enter a valid username and password.'
      }
    }
  }

  if (!username || !password) {
    return {
      status: 400,
      body: {
        error: 'Username and password are required.'
      }
    }
  }

  const user = await prisma.user.findUnique({
    where: { username }
  })
  const passwordMatch =
    user &&
    (await bcrypt.compare(password, user.password_hash))

  if (!user || !passwordMatch) {
    return {
      status: 400,
      body: {
        error: 'You entered the wrong credentials.'
      }
    }
  }

  // setHeaders({
  //   'set-cookie': 'session=tvojamama; HttpOnly; Path=/; Strict; Secure; Max-Age=60*60*24*30'
  // })

  setHeaders({
    'set-cookie': cookie.serialize(
      'session',
      user.user_auth_token,
      {
        // send cookie for every page
        path: '/',
        // server side only cookie so you can't use `document.cookie`
        httpOnly: true,
        // only requests from same site can send cookies
        // and serves to protect from CSRF
        // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
        sameSite: 'strict',
        // only sent over HTTPS
        secure: process.env.NODE_ENV === 'production',
        // set cookie to expire after a month
        maxAge: 60 * 60 * 24 * 30
      }
    )
  })

  return {
    location: '/home'
  };

}

export async function load({ setHeaders }: any) {

  const user = await prisma.user.findFirst({})

  if (user)
    throw redirect(307, '/home')
}