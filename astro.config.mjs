// @ts-check
import { defineConfig } from 'astro/config';

// Canonical site URL taken from the README's live link. Update if the production domain changes.
export default defineConfig({
  site: 'https://yauheni-buka.vercel.app',
  trailingSlash: 'ignore',
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
