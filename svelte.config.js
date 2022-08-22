// import adapter from '@sveltejs/adapter-auto'
import node from "@sveltejs/adapter-node";

import preprocess from 'svelte-preprocess'
// import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: node({ env: { port: process.env.PORT } }),
    paths: {
      base: ''
    }
  }
}

export default config
