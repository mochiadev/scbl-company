// @ts-check
import { defineConfig, sharpImageService } from 'astro/config';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://signaturecrest.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [icon(), mdx(), sitemap()],
  image: {
    service: sharpImageService(),
    domains: ['picsum.photos', 'fastly.picsum.photos', 'images.unsplash.com'],
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'fastly.picsum.photos' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
