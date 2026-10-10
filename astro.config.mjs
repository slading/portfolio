// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical site URL: the personal domain. Canonical and og:url are derived from this.
export default defineConfig({
  site: 'https://exotision.fun',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
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
