# Portfólio — Douglas Gabriel

Portfólio pessoal em português, feito com **React + TypeScript + Vite**. Apresenta Douglas Gabriel, estudante de ADS no MedioTec Senac Recife, e seus dois projetos principais:

- **EcoVerify** — ações sustentáveis conectadas a recompensas em FONE; 3º lugar no hackathon internacional da Fone Protocol (2025).
- **SIFAU** — Sistema de Fiscalização Ambiental Urbana desenvolvido para a Prefeitura do Cabo de Santo Agostinho.

Os projetos são apresentados como **funcionais e em evolução**, com funcionalidades e próximos passos separados. As prévias dos cards são ilustrações do conceito, não capturas de tela reais.

## Rodar localmente

Requisitos: Node.js 22.12+ e npm.

```bash
npm ci
npm run dev
```

O servidor de desenvolvimento abre em `http://localhost:5173` e escuta em `0.0.0.0`.

## Verificações e build

```bash
npm run typecheck
npm run build
npm run preview
```

O build estático é gerado em `dist/`. Não há backend, banco de dados, formulário falso nem variáveis de ambiente obrigatórias.

## Onde editar

| Conteúdo | Arquivo |
| --- | --- |
| Nome, GitHub, LinkedIn e localização | `src/data/projects.ts` |
| Descrição, tecnologias, funcionalidades e roadmap dos projetos | `src/data/projects.ts` |
| Seções, texto pessoal e contato | `src/App.tsx` |
| Cartões decorativos da abertura | `src/components/Hero.tsx` |
| Cores, tipografia e responsividade | `src/styles.css` |
| Título e descrição para buscadores/compartilhamento | `index.html` |

As fontes são hospedadas localmente via Fontsource. Os ícones vêm de Lucide. O site respeita `prefers-reduced-motion`, usa diálogo nativo para os estudos de projeto e não depende de serviços externos para renderizar.

## Publicação

### GitHub Pages

O workflow [`.github/workflows/main.yml`](.github/workflows/main.yml) valida o build em pull requests para `main` e publica automaticamente após merges/pushes na `main`. Também pode ser executado manualmente pela aba **Actions**.

Antes do primeiro deploy, ative em **Settings → Pages → Build and deployment → Source** a opção **GitHub Actions**. Não é necessário criar secrets para este site.

Endereço esperado: **https://dg-senac.github.io/portfolio/**

O workflow define `DEPLOY_TARGET=github-pages`, e `vite.config.ts` usa `base: '/portfolio/'` nesse caso. Localmente, o projeto continua na raiz (`/`).

### Outras hospedagens

Publique a pasta `dist/` em qualquer hospedagem estática (Vercel, Netlify, Cloudflare Pages etc.). Configure o build como `npm run build` e o diretório de saída como `dist`, sem definir `DEPLOY_TARGET=github-pages`.

## Links e transparência

- LinkedIn: https://br.linkedin.com/in/douglas-gabriel-57311835a
- GitHub: https://github.com/dg-senac
- EcoVerify: https://github.com/dg-senac/EcoVerify
- SIFAU (código): https://github.com/dg-senac/sifau
- SIFAU (aplicação com acesso restrito): https://sifau.vercel.app

A demonstração pública cadastrada no repositório do EcoVerify retornou 404 na verificação, por isso o portfólio direciona ao código e à documentação, sem prometer uma demo disponível. O SIFAU é um projeto desenvolvido para a prefeitura, não uma afirmação de implantação oficial do serviço.
