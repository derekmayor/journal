import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://derekmayor.github.io',
  base: '/journal',
  integrations: [tailwind(), react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});