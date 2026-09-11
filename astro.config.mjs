// @ts-check
import { defineConfig, sharpImageService } from 'astro/config';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [icon(), mdx()],
  image: {
    service: sharpImageService(),
    domains: ['picsum.photos', 'fastly.picsum.photos'],
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'fastly.picsum.photos' },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
