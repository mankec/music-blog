import prisma from '$lib/prisma'
import * as bcrypt from 'bcrypt'
import * as cookie from 'cookie'
import { redirect } from '@sveltejs/kit'

export async function POST({ request, setHeaders }: any) {

  console.log('endpoint')


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
        error: 'Something went wrong.'
      }
    }
  }

  if (!username || !password) {
    return {
      status: 400,
      body: {
        error: 'Username and password is required.'
      }
    }
  }


  const new_user = await prisma.user.create({
    data: {
      username,
      password_hash: await bcrypt.hash(password, 10)
    }
  })

  if (!new_user)
    return {
      status: 400,
      body: {
        error: 'User already exists.'
      }
    }

  setHeaders({
    'set-cookie': cookie.serialize(
      'session',
      '',
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
    status: 302,
    location: '/login'
  };
}

export async function load({ request }: any) {
  let cookieHeader = request.headers.get('cookie')
  if (!cookieHeader) cookieHeader = ''

  const cookies = cookie.parse(cookieHeader)
  const token = cookies.session


  if (token)
    throw redirect(307, '/home')
  else
    return {}

}     