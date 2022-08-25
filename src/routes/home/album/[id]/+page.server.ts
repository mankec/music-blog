import prisma from '$lib/prisma'


export async function POST({ request, params }: any) {



  const form = await request.formData()
  let genre_name: any = String(form.get('genre_name'))
  let track_name: any = String(form.get('track_name'))

  //	prettier-ignore
  if (genre_name === 'null' || genre_name === null || genre_name.trim() === '')
    genre_name = ''
  else genre_name = genre_name.trim()
  //	prettier-ignore
  if (track_name === 'null' || track_name === null || track_name.trim() === '')
    track_name = ''
  else track_name = track_name.trim()

  const genre_name_check = await prisma.genre.findUnique({
    where: { genre_name: genre_name }
  })
  if (genre_name !== '' && !genre_name_check) {
    await prisma.genre.create({
      data: {
        genre_name,
        albums: {
          connect: { id: params.id }
        }
      }
    })
  }

  if (genre_name !== '' && genre_name_check) {
    await prisma.genre.update({
      where: { genre_name: genre_name },
      data: {
        albums: {
          connect: { id: params.id }
        }
      }
    })
  }

  if (track_name !== '') {
    await prisma.track.create({
      data: {
        track_name,
        albums: {
          connect: { id: params.id }
        }
      }
    })
  }




  return {}
}

export async function load({ params }: any) {
  const album = await prisma.album.findUnique({
    where: { id: params.id }
  })
  const genres = await prisma.genre.findMany({
    where: {
      albums: {
        some: {
          id: params.id
        }
      }
    }
  })

  const tracks = await prisma.track.findMany({
    where: {
      albums: {
        some: {
          id: params.id
        }
      }
    }
  })

  return { album, genres, tracks }
}
