import type { RequestEvent, RequestHandler } from '@sveltejs/kit'
import type { Load } from '@sveltejs/kit'
import prisma from '$lib/prisma'
import type { ServerLoadEvent } from '@sveltejs/kit'

export async function load() {


  const albums_data = await prisma.album.findMany({
    include: {
      artists: { select: { artist_name: true } },
      tracks: true,
      genres: true
    }
  })

  const albums = albums_data.map((album) => {
    return {
      id: album.id,
      artist_name: album.artists,
      album_name: album.album_name,
      track_names: album.tracks,
      genre_names: album.genres,
      year_of_release: album.year_of_release,
      cover_img: album.cover_img
    }
  })



  // if (!albums) {
  //   return { status: 400 }
  // }


  return { albums }
}
