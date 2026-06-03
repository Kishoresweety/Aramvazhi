# Aram Vazhi — Digital Welfare Initiative

> **Technology for Humanity. Awareness for Society.**

Production-ready Next.js 15 website for Aram Vazhi — a digital welfare initiative focused on ethical technology, digital literacy, cybersecurity awareness, responsible AI, and social impact.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📦 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 15.3.3 | React framework (App Router) |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 3.4 | Utility-first styling |
| **Google Fonts** | — | Sora + DM Sans typography |

---

## 📁 Structure

```
src/
├── app/
│   ├── layout.tsx                    # Root layout
│   ├── globals.css                   # Global styles & animations
│   ├── page.tsx                      # Home
│   ├── not-found.tsx                 # 404
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   ├── volunteer/page.tsx
│   ├── contact/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── code-of-ethics/page.tsx
│   └── community-guidelines/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Icon.tsx
│   ├── SectionBadge.tsx
│   └── LegalPage.tsx
└── hooks/
    └── useReveal.ts                  # Scroll-reveal hook
```

---

## 🚢 Deploy to Vercel

```bash
# Option 1 — CLI
npm i -g vercel && vercel

# Option 2 — GitHub
# Push to GitHub → import repo at vercel.com → Deploy
```

## Deploy to Netlify

```bash
npm run build
# Drag & drop the .next folder at app.netlify.com
# OR: connect GitHub repo → set build command: npm run build
```

---

## 🎨 Color System

| Token | Hex | Use |
|---|---|---|
| `--navy` | `#0B2463` | Primary / headings |
| `--teal` | `#0A9E96` | Accents / CTAs |
| `--green` | `#059669` | Success / badges |
| `--sky` | `#E8F4FF` | Light backgrounds |
| `--mint` | `#E6FAF5` | Green tint backgrounds |

---

## ✏️ Customisation

**Social links** → `src/components/Footer.tsx` and `src/app/contact/page.tsx`  
**Content** → Each `page.tsx` has a data array at the top  
**Colors** → `src/app/globals.css` `:root` variables  
**New page** → Create `src/app/[slug]/page.tsx`, add to `NAV` in `Navbar.tsx`

---

© 2025 Aram Vazhi. All rights reserved.
