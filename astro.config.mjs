import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { settings } from './src/content/settings';

export default defineConfig({
  site: settings.siteUrl || undefined,
  trailingSlash: 'always',
  integrations: settings.siteUrl ? [sitemap()] : [],
});