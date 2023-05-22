import adapter from '@sveltejs/adapter-static';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      precompress: false,
      fallback: 'index.html',
      strict: false
    })
  }
};

export default config;
