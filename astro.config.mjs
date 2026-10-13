// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// Canonical site URL: the personal domain. Canonical and og:url are derived from this.
export default defineConfig({
  site: 'https://exotision.fun',
  output: 'static',
  adapter: vercel(),
  trailingSlash: 'ignore',
  integrations: [sitemap({
    customPages: ['https://exotision.fun/blog/'],
    filter: (page) => !new URL(page).pathname.startsWith('/admin') && !new URL(page).pathname.startsWith('/api/'),
  })],
  vite: {
    server: {
      // Allow the sandbox preview host (proxied *.e2b.app) to reach the dev/preview server.
      allowedHosts: true,
    },
    preview: {
      allowedHosts: true,
    },
  },
});
