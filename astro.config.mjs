import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

  export default defineConfig({
    site: 'https://sombrerero-hermanos.pages.dev',
    integrations: [
      sitemap({
        // No mandar a Google la página de "gracias" del formulario
        filter: (page) => !page.includes('/gracias'),
      }),
    ],
    vite: {
      plugins: [tailwindcss()],
    },
  });