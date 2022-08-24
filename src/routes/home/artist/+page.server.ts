import prisma from '$lib/prisma'
import { userInfo } from 'os'

export async function POST({ request }: any) {
  const form = await request.formData()
  let artist_name: any = String(form.get('artist_name'))

  const user = await prisma.user.findFirst({})

  //	prettier-ignore
  if (artist_name === 'null' || artist_name === null || artist_name.trim() === '')
    artist_name = ''
  else artist_name = artist_name.trim()

  const existing_artists: any =
    await prisma.artist.findMany({
      where: { artist_name: artist_name }
    })

  const artist_exists = existing_artists.some(
    (artist: any) => {
      return Object.values(artist).includes(artist_name)
    }
  )

  if (!artist_exists && artist_name !== '') {
    await prisma.artist.create({
      data: {
        artist_name,
        users: {
          connect: { id: user?.id }
        }
      },

    })

  }

  return {}
}


export async function load() {

  const user = await prisma.user.findFirst({})

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



