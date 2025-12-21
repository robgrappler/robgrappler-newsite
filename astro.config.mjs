import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://robgrappler.example', // TODO: update to real domain
  output: 'static',
  adapter: netlify(),
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: true
    })
  ]
});
