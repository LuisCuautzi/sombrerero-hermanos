import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Cambia esto por tu dominio cuando lo tengas (sirve para SEO y sitemap)
  site: 'https://sombrerero-hermanos.pages.dev',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});