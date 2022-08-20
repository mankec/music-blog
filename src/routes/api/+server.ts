import type { RequestHandler } from '@sveltejs/kit'
import prisma from '$lib/prisma'
import { writeFileSync } from 'fs'
import { readFileSync } from 'fs'
// import fs from 'fs'
import * as fs from 'fs';
import { Readable } from 'stream';
// import { buffer } from 'stream/consumers';

// This was my failed attempt to read ReadableStream. For some reason it stops reading after first chunk even though the file contains more than one chunk

export const post: RequestHandler = async ({
  request,
  params,
}) => {
  console.log('API')
  console.log(request.body)
  const content_length = Number(request.headers.get('content-length'))
  console.log(content_length)
  let data_received = 0
  // const data = await reader.read()
  // console.log(JSON.stringify(data))


  const reader: any = request.body?.getReader();
  const stream = new ReadableStream({
    start(controller) {
      // The following function handles each data chunk
      function push() {
        // "done" is a Boolean and value a "Uint8Array"
        return reader.read().then(({ done, value }: any) => {
          // Is there no more data to read?
          if (done) {
            console.log('Stream complete')
            controller.close();
            return;
          }

          // Get the data and send it to the browser via the controller
          console.log(value.toString())
          data_received = + value.length
          console.log(data_received)
          // controller.enqueue(value);
          if (data_received < content_length)
            return reader.read().then(push())
        });
      };
      push()
    }
  });

  // const readableStream = new Readable({
  //   read(size) {
  //     return true;
  //   }
  // }).resume()
  //   .on('end', () => {
  //     console.log('Reached the end, but did not read anything.');
  //   });;


  // const data = await request.body?.getReader().read()
  // const buffer: any = data?.value
  // const stream = Readable.from(buffer.toString());
  // console.log(stream)
  // const data2 = await stream.read()
  // console.log(data2.length)

  // const readableStream2: any = fs.createReadStream('static/hold_your_colour.jpg').resume()
  //   .on('end', () => {
  //     console.log('Reached the end, but did not read anything.');
  //   });;

  // readableStream.on('data', function (chunk: any) {
  // })
  // console.log(readableStream)



  return {}
}

