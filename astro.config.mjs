import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://sreespace.com',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  image: {
    remotePatterns: [],
  },
});
