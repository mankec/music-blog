import type { RequestEvent } from '@sveltejs/kit'
import prisma from '$lib/prisma'

export async function POST({ request }: any) {
  console.log('POST')
  console.log(request)


  const form = await request.formData()
  let artist_name: any = String(form.get('artist_name'))

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

  if (!artist_exists && artist_name !== '')
    await prisma.artist.create({
      data: {
        artist_name
      }
    })

  return {}
}


export async function load({ data }: any) {
  console.log('GET')

  const artists = await prisma.artist.findMany()

  // if (!artists) {
  //   return { status: 400 }
  // }
  // console.log(artists)

  return { artists }

}



