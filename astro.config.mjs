import { defineConfig } from 'astro/config';

export default defineConfig({
	// TODO: trocar para o domínio definitivo quando ele existir (ex.:
	// https://plano30dias.com.br). Até lá, usar a URL que o Cloudflare Pages
	// atribui no primeiro deploy (algo como https://plano-30-dias.pages.dev).
	site: 'https://plano-30-dias.pages.dev',
	build: {
		format: 'file',
	},
});
