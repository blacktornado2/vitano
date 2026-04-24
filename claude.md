# Vitano - AI Context Guide

## 📋 Project Overview
- **Name:** Vitano (E-commerce app)
- **Stack:** React 18 + TypeScript (Frontend), Nest.js + PostgreSQL (Backend)
- **MVP Goal:** Basic landing page with one product
- **Target:** B2C India market, mobile-first responsive design
- **Phase:** Frontend initialization 🚀

---

## 🔧 Tech Stack

| Component | Technology |
|-----------|-----------|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS + ShadCN UI |
| Animations | Framer Motion (lightweight) |
| Routing | React Router v6 |
| State | React Context + Zustand |
| HTTP | Axios |
| Data Fetching | TanStack Query |
| Backend | Nest.js + PostgreSQL |
| Validation | Zod/Joi |

---

## 📁 Frontend Structure

```
client/src/
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── ProductCard/
│   └── Cart/
│       ├── CartDropdown.tsx
│       └── CartPage.tsx
├── pages/
│   ├── LandingPage.tsx
│   └── ProductPage.tsx
├── hooks/
│   ├── useCart.ts
│   └── useProducts.ts
├── services/
│   ├── api.ts
│   └── cartService.ts
├── types/
│   └── index.ts
├── App.tsx
└── main.tsx
```

---

## 🎯 MVP Features

**Phase 1 - Landing Page UI:**
- Hero section with CTA
- Product showcase
- Header (logo + cart icon)
- Footer with links
- Responsive mobile menu

**Phase 2 - Product & Cart:**
- Product image gallery
- Description, price, specifications
- Quantity selector
- Add to cart functionality
- Shopping cart page/modal
- Cart persistence (session storage)

**Phase 3 - Polish:**
- Fade-in on scroll (300-500ms)
- Button transitions (200ms)
- Cart animations (400ms)
- Loading states

---

## 🎨 Design Rules

**Colors:**
- Primary: Charcoal `#1a1a1a`
- Secondary: One accent (blue/green/purple)
- Neutral: `#f5f5f5`, `#ffffff`
- ⚠️ Avoid red/green (India cultural sensitivity)

**Typography:**
- Font: Inter, Poppins, or Plus Jakarta Sans
- Headings: 600 weight
- Body: 400 weight
- Line height: 1.5-1.6

**Layout:**
- Mobile-first approach
- Min 16px padding on mobile
- Max width: 1280px (Tailwind xl)
- Generous whitespace

**Animations:**
- Keep lightweight (1-4 keyframes max)
- Fade-in: 300-500ms
- Hover: 200ms
- Page transitions: 200-300ms

---

## 🚀 Development Phases

| Phase | Tasks | Days | Status |
|-------|-------|------|--------|
| 1. Setup | Vite, ShadCN, Tailwind config | 0.5-1 | ⏳ Starting |
| 2. Landing Page UI | Hero, showcase, header, footer, responsive | 1-2 | ⏳ Next |
| 3. Product & Cart UI | Cards, product page, cart, forms | 1.5-2 | ⏳ Next |
| 4. State Management | Context, hooks, services | 0.5-1 | ⏳ Next |
| 5. Animations | Framer Motion, micro-interactions | 0.5-1 | ⏳ Next |
| 6. Polish & Responsive | Testing, refinements, edge cases | 0.5-1 | ⏳ Next |
| 7. Backend Integration | API connection | 1-2 | ⏳ Later |

**Total Frontend: 5-8 days**

---

## 📝 Key Constraints & Notes

- **Authentication:** Guest checkout only (for now)
- **Payment:** Razorpay integration deferred
- **Admin Dashboard:** Not needed for prototype
- **Image Storage:** TBD (Cloudinary/S3 or local)
- **Product Variants:** TBD (sizes/colors)
- **No redirect:** Built to support multi-category growth

---

## ✅ Quality Checklist

- [ ] Responsive (320px - 1920px)
- [ ] Lighthouse score 85+
- [ ] Smooth animations (no jank)
- [ ] Clean, commented code
- [ ] Error handling
- [ ] Accessible (ARIA, alt text, contrast)
- [ ] Cross-browser tested
- [ ] No console errors
- [ ] SEO basics (meta tags)

---

## 🔗 Quick Links

- ShadCN: https://ui.shadcn.com
- Tailwind: https://tailwindcss.com
- React Router: https://reactrouter.com
- Framer Motion: https://www.framer.com/motion
- Nest.js: https://docs.nestjs.com
- TanStack Query: https://tanstack.com/query

---

**Last Updated:** 24 April 2026
