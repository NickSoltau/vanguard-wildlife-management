import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// NOTE: update `site` once the real domain is confirmed — it drives canonical
// URLs, the sitemap, and Open Graph tags.
export default defineConfig({
  site: 'https://vanguardwildlifemanagement.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
