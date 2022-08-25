import prisma from '$lib/prisma'

export async function POST({ request, params }: any) {
  console.log('hit')
  // console.log(request)


  const body = await request.json()
  const image = body.data_img.image

  await prisma.album.update({
    where: { id: params.id },
    data: { cover_img: image }
  })

}