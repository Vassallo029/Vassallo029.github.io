import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.vassanet.com',
	base: '/vassallo029.github.io',
	integrations: [mdx(), sitemap()],
});
