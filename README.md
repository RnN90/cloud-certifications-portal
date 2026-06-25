# Cloud Certifications Portal

Um portal pessoal para consolidar badges e certificações cloud de múltiplos vendors, como AWS, Microsoft, Oracle, Google Cloud, Red Hat e outros.

## Objetivo

Criar um site simples e moderno onde todas as certificações possam ser exibidas, filtradas e verificadas através de links oficiais.

## Estrutura do projeto

- `src/pages/index.astro` — página inicial do portal
- `src/data/certifications.json` — base de dados das certificações
- `public/badges/` — imagens de badges
- `public/styles.css` — estilos globais
- `public/scripts/main.js` — lógica de filtros

## Como instalar

```bash
npm install
```

## Como rodar localmente

```bash
npm run dev
```

Abra `http://localhost:4321` no navegador.

## Como adicionar novas certificações

1. Adicione um novo item em `src/data/certifications.json`
2. Coloque a imagem do badge em `public/badges/`
3. Referencie o caminho da imagem no campo `badgeImage`
4. Atualize `verificationUrl` com o link oficial de verificação

Exemplo de item:

```json
{
  "name": "AWS Certified Solutions Architect – Associate",
  "vendor": "AWS",
  "level": "Associate",
  "category": "Cloud Architecture",
  "issuedAt": "2024-05-10",
  "expiresAt": "2027-05-10",
  "status": "Active",
  "badgeImage": "/badges/aws-saa.png",
  "verificationUrl": "https://www.credly.com/"
}
```

## Deploy futuro

### GitHub Pages

1. Adicione um `repository` no `package.json` se ainda não existir.
2. Use `npm run build`.
3. Publique a pasta `dist/` no branch `gh-pages`.

### Cloudflare Pages

1. Configure o projeto com `build command: npm run build`
2. `build output directory: dist`

## Observações

- O portal usa um JSON local para dados, facilitando manutenção sem código adicional.
- Para adicionar novos vendors, basta criar novos valores em `vendor` e usar imagens em `public/badges/`.
# cloud-certifications-portal
