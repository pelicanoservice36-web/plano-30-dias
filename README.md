# Plano 30 Dias na Esteira

Página de vendas (landing page de uma página só) do ebook "Plano 30 Dias na
Esteira", de R$ 27. Produto de esteiraergometrica.com, mas em projeto/repositório
próprio porque é uma página de vendas, não um artigo editorial: sem menu de
navegação, sem distração do CTA.

## Stack

Mesmo caminho do site principal (`EsteiraErgometricaBlog/site`, pasta irmã
desta): [Astro](https://astro.build), zero JS de framework no cliente,
`build.format: 'file'`. GA4 reaproveita a mesma propriedade do site principal
(`G-F3SC734W1X`), com o mesmo consent mode (banner de cookies, carga do gtag
adiada até a primeira interação).

## Comandos

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run preview  # serve dist/ localmente
```

## Antes de abrir para venda

Em `src/pages/index.astro`, `CHECKOUT_URL` está vazio de propósito. Enquanto
estiver vazio:
- a página sai com `noindex` (não aparece no Google);
- o botão de compra fica desativado, mostrando "Vendas abrem em breve".

Para abrir: cole o link de checkout (Hotmart, Kiwify etc.) em `CHECKOUT_URL`
e publique. As duas coisas acima se resolvem sozinhas.

## Deploy

Domínio definido: **app.esteiraergometrica.com**. `astro.config.mjs` já usa
essa URL. Ainda não conectado a nenhum provedor — passos (Cloudflare Pages,
mesmo provedor do site principal, mesma zona DNS):

1. No painel do Cloudflare → Workers & Pages → Create → Pages → Connect to Git.
2. Selecione o repositório `plano-30-dias` no GitHub.
3. Build command: `npm run build`. Build output directory: `dist`.
4. Depois do primeiro deploy, na aba **Custom Domains** do projeto Pages,
   adicione `app.esteiraergometrica.com`. Como o domínio raiz já está na
   mesma conta Cloudflare, o registro DNS (CNAME) costuma ser criado
   automaticamente; se não for, criar um CNAME `app` apontando para o
   endereço `*.pages.dev` do projeto, na zona de `esteiraergometrica.com`.
5. Cada push em `main` publica automaticamente depois disso.
