# Nicolas Lamins — Premium Developer Portfolio

Frontend estático em **React + Vite**, criado para deploy rápido em Vercel, Netlify, GitHub Pages ou Firebase Hosting.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Antes do deploy

Edite `src/main.jsx` e troque os placeholders em `profile`:

- `nicolaslamins@mail.com`
- `https://github.com/lamins26`
- `https://www.linkedin.com/in/nicolas-lamins-879315319/`
- `resume: '#'` pelo caminho do seu PDF, por exemplo `/curriculo.pdf`

Também substitua os `github: '#'` e `demo: '#'` dos projetos pelos links reais.

## O que foi adicionado

- Visual premium dark com opção light
- Hero com terminal, grid e elementos flutuantes
- Animações de entrada com IntersectionObserver
- Marquee de tecnologias
- Cards de skills sem progress bars
- Projetos com mockups visuais e case-study modal
- GitHub activity visual
- Timeline de experiência
- Formulário de contato demonstrativo
- Layout mobile com menu hamburger
- SEO básico no `index.html`
- Componentização lógica por seções e arrays de dados

## Formulário

O formulário está propositalmente em modo demonstrativo. Para receber mensagens, conecte-o a Formspree, Resend, EmailJS ou à sua própria API.
