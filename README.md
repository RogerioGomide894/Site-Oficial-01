# Rogério Gomide — Portfolio / Currículo Web  *(v2)*

Site pessoal de portfólio e currículo com **Next.js 14**, **Tailwind CSS**, **Framer Motion** e arquitetura **Atomic Design**.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 14 (App Router) |
| Estilização | Tailwind CSS 3 |
| Animações | Framer Motion |
| Linguagem | TypeScript |
| Testes | Jest + Testing Library |
| Fontes | `next/font` (self-hosted, sem request externo) |
| OG Image | `next/og` (gerada automaticamente) |

---

## Estrutura (Atomic Design)

```
src/
├── app/
│   ├── layout.tsx             # Root layout — next/font + metadados SEO completos
│   ├── page.tsx               # Home — compõe todos os organismos
│   └── opengraph-image.tsx    # OG image gerada automaticamente pelo Next.js
├── components/
│   ├── atoms/        Button · Eyebrow · Heading · InlineLink · Logo · ThemeToggle
│   ├── molecules/    ServiceCard · PortfolioCard · FaqItem · TechCard · NavLink
│   │                 TestimonialBlock (com avatar) · ProcessStep · ContactForm · StatCard
│   ├── organisms/    Header · HeroSection · OfferBar · MarqueeBar · PainSection
│   │                 ServicesSection · AboutSection · ProcessSection · MethodologySection
│   │                 TechSection · PortfolioSection · TestimonialsSection
│   │                 FaqSection · ContactSection · FloatingActions
│   └── templates/    PageTemplate
├── lib/
│   ├── data.ts        Fonte única de dados (DRY)
│   ├── types.ts       Tipos TypeScript compartilhados
│   └── utils.ts       cn() helper
└── styles/
    └── globals.css    Tailwind + animações + focus-ring
__tests__/
├── atoms/atoms.test.tsx          — 16 assertions
├── molecules/molecules.test.tsx  — 22 assertions
└── organisms/organisms.test.tsx  — 26 assertions
```

---

## Melhorias implementadas na v2

### Conteúdo e conversão
- ✅ **Seção "Sobre mim"** com bio, avatar RG e stats concretas (12+ projetos, 100% no prazo…)
- ✅ **Depoimentos com avatar** — iniciais coloridas + nome completo + cargo
- ✅ **Sinal de urgência** — "2 vagas abertas este mês" na AboutSection
- ✅ **CTA ao final de cada seção** — Serviços, Metodologia, Tecnologias, Portfólio e FAQ
- ✅ **2 novas perguntas no FAQ** — prazo de entrega e formas de pagamento

### UX e funcionalidades
- ✅ **Lightbox no portfólio** — clique em qualquer card para ampliar com fechar por botão ou overlay
- ✅ **Menu mobile animado** com Framer Motion (fade + slide suave)
- ✅ **`alt` descritivos** em todas as imagens do portfólio
- ✅ **`preloadImage`** corrigido para WebP via `next/image`

### Performance
- ✅ **`next/font`** — Manrope, Plus Jakarta Sans e DM Mono carregadas localmente (zero request externo)
- ✅ **OG image automática** via `opengraph-image.tsx` (Next.js built-in, 1200×630)
- ✅ **WA_NUMBER centralizado** em `data.ts` — atualiza em um lugar, reflete em todo o site

### Acessibilidade
- ✅ **`focus-ring`** em todos os botões interativos (filtros, hamburger, carrossel, lightbox, floating)
- ✅ **`min-h-[44px]`** nos campos do formulário e botões de filtro (toque confortável no mobile)
- ✅ **`aria-modal`** no lightbox com `role="dialog"`
- ✅ **Contraste corrigido** nos textos `muted`

### Testes
- ✅ **64+ assertions** cobrindo todos os novos componentes e comportamentos

---

## Primeiros passos

```bash
npm install
npm run dev          # → localhost:3000
npm test             # roda todos os testes
npm run test:coverage
npm run build
```

---

## Personalização rápida

| O que mudar | Onde |
|---|---|
| Textos, projetos, depoimentos, stats | `src/lib/data.ts` |
| Número do WhatsApp | `src/lib/data.ts` → `WA_NUMBER` |
| Foto real (substituir avatar RG) | `src/components/organisms/AboutSection.tsx` |
| Cores e tokens | `tailwind.config.ts` |
| SEO (título, description) | `src/app/layout.tsx` |
| OG image visual | `src/app/opengraph-image.tsx` |
