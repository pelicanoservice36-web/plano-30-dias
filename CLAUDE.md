# CLAUDE.md

Contexto para agentes trabalhando neste repositório.

## O que é

Landing page de venda (página única) do ebook "Plano 30 Dias na Esteira",
R$ 27. É um produto de `esteiraergometrica.com`, mas vive em projeto próprio
porque é página de vendas, não conteúdo editorial: sem header, sem menu de
navegação, só a oferta. Pasta irmã de `EsteiraErgometricaBlog/site` (o site
principal) dentro de `BlogEsteiraErgometrica/`.

Esta página existia antes só como `src/pages/plano-30-dias.astro` dentro do
site principal; foi portada para este repositório próprio a pedido do
usuário ("mesmo caminho do site, crie no github"), mantendo o mesmo stack
(Astro) e o mesmo padrão de analytics/cookie-banner, mas sem o Header/Footer
de navegação do site (propositalmente — página de vendas não deve distrair
do CTA).

## Regra número um: nunca invente dado

Mesma regra do site principal. Nenhuma promessa de resultado, nenhuma
estatística inventada sobre o produto. O disclaimer no fim da página já
existe por isso: "resultados variam de pessoa para pessoa", "material
educativo, não substitui avaliação médica".

## Checkout

`CHECKOUT_URL` em `src/pages/index.astro` está vazio de propósito (vendas
ainda não abriram). Enquanto vazio: `noindex` ativo, botão de compra
desativado. Ver README.md para o que fazer quando o link existir.

## Estrutura

```
src/
  layouts/BaseLayout.astro   Head, GA4, cookie banner, rodapé mínimo
  pages/index.astro          A página inteira (hero, prova social, oferta, FAQ)
  styles.css                 Base global (fonte, reset, cookie-banner, botões)
public/
  assets/images/plano-30-dias/   Fotos e capa do ebook
  fonts/manrope-latin.woff2      Mesma fonte auto-hospedada do site principal
```

## O que não fazer

- Não adicionar menu de navegação ou header de site institucional: é uma
  página de vendas de produto único.
- Não copiar o Header/Footer do site principal de volta para aqui.
- Não publicar com `CHECKOUT_URL` preenchido sem confirmar o link com o
  usuário antes (link de pagamento real, efeito imediato).
