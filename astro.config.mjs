import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  base: '/',
  integrations: [tailwind(), image()],
  vite: {
    envDir: './src/config/env',
  },
});
