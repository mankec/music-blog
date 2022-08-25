import prisma from '$lib/prisma'
import * as cookie from 'cookie'

export async function POST({ request }: any) {
  console.log('Artist hit')
  const form = await request.formData()
  let artist_name: any = String(form.get('artist_name'))

  let cookieHeader = request.headers.get('cookie')
  const cookies = cookie.parse(cookieHeader)
  const token = cookies.session
  const user = await prisma.user.findUnique({
    where: { user_auth_token: token }
  })


  //	prettier-ignore
  if (artist_name === 'null' || artist_name === null || artist_name.trim() === '')
    artist_name = ''
  else artist_name = artist_name.trim()

  // const existing_artists: any =
  //   await prisma.artist.findMany({
  //     where: { artist_name: artist_name }
  //   })

  // const artist_exists = existing_artists.some(
  //   (artist: any) => {
  //     return Object.values(artist).includes(artist_name)
  //   }
  // )

  // if (!artist_exists && artist_name !== '') {
  await prisma.artist.create({
    data: {
      artist_name,
      users: {
        connect: { id: user?.id }
      }
    },

  })
  // }

  // const artist = await prisma.artist.findFirst({
  //   where: { artist_name: artist_name }
  // })

  // if (artist_exists && artist_name !== '')
  //   await prisma.artist.update({
  //     where: { id: artist?.id },
  //     data: {
  //       users: {
  //         connect: { id: user?.id }
  //       }
  //     }
  //   })

  return {}
}


export async function load({ request }: any) {
  let cookieHeader = request.headers.get('cookie')
  const cookies = cookie.parse(cookieHeader)
  const token = cookies.session

  const user = await prisma.user.findUnique({
    where: { user_auth_token: token }
  })

  const artists = await prisma.artist.findMany({
    where: {
      users: {
        some: {
          id: user?.id
        }
      }
    }
  })

  return { artists }
}



