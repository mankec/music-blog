import prisma from '$lib/prisma'

export async function POST({ request, params }: any) {

  const body = await request.json()
  const image = body.data.image

  await prisma.album.update({
    where: { id: params.album_id },
    data: { cover_img: image }
  })

}