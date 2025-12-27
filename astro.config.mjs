import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';



const site = process.env.PUBLIC_SITE_URL || process.env.SITE_URL || process.env.URL || 'https://robgrappler.example';

export default defineConfig({
  site,
  output: 'static',
  adapter: netlify(),
  integrations: [react(), tailwind({
    applyBaseStyles: true
  })]
});