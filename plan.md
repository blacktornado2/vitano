# E-Commerce Website Development Plan

## 📋 Project Overview

**Project Name:** Vitano (e-commerce app) (MERN + Nest.js)
**Target Market:** B2C, India
**MVP Goal:** Basic landing page with one product
**Target Audience:** Equal priority to mobile & desktop

---

## ✅ Requirements Summary

| Aspect | Details |
|--------|---------|
| **Tech Stack** | React 18 + TypeScript, Nest.js, PostgreSQL |
| **UI Library** | ShadCN UI + Tailwind CSS |
| **Animations** | Lightweight (Framer Motion) |
| **Design Style** | Minimalistic + Modern |
| **Target Market** | B2C, India |
| **Scalability** | Design for multi-category growth |
| **Authentication** | Guest checkout only (initially) |
| **Payment** | Razorpay (integrate later) |
| **Analytics/SEO** | Can add later |
| **Admin Dashboard** | Not needed for prototype |
| **Mobile Strategy** | Equal priority (responsive-first) |
| **Hosting** | TBD (Render/Railway + Vercel suggested) |

---

## 🏗️ Project Directory Structure

```
vitano/
├── plan.md (THIS FILE)
├── note.txt
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header/
│   │   │   │   └── Header.tsx
│   │   │   ├── ProductCard/
│   │   │   │   └── ProductCard.tsx
│   │   │   ├── Cart/
│   │   │   │   ├── CartDropdown.tsx
│   │   │   │   ├── CartPage.tsx
│   │   │   │   └── CartContext.tsx
│   │   │   ├── Checkout/
│   │   │   │   └── CheckoutForm.tsx
│   │   │   └── Footer/
│   │   │       └── Footer.tsx
│   │   ├── pages/
│   │   │   ├── LandingPage.tsx
│   │   │   └── ProductPage.tsx
│   │   ├── hooks/
│   │   │   ├── useCart.ts
│   │   │   └── useProducts.ts
│   │   ├── services/
│   │   │   ├── api.ts
│   │   │   └── cartService.ts
│   │   ├── styles/
│   │   │   └── globals.css
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/
│   ├── .env.local
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
│
└── server/
    ├── src/
    │   ├── main.ts
    │   ├── app.module.ts
    │   ├── products/
    │   │   ├── products.service.ts
    │   │   ├── products.controller.ts
    │   │   └── products.module.ts
    │   ├── orders/
    │   │   ├── orders.service.ts
    │   │   ├── orders.controller.ts
    │   │   └── orders.module.ts
    │   ├── cart/
    │   │   ├── cart.service.ts
    │   │   └── cart.module.ts
    │   └── config/
    │       └── database.config.ts
    ├── .env
    ├── package.json
    └── tsconfig.json
```

---

## 🔧 Technology Stack Details

| Layer | Technology | Purpose | Why? |
|-------|-----------|---------|------|
| **Frontend Framework** | React 18 + TypeScript | Build UI | Type safety, component reusability |
| **Build Tool** | Vite | Fast dev experience | Lightning-fast HMR |
| **Styling** | Tailwind CSS | Utility-first CSS | Quick prototyping, minimal bundle |
| **Component Library** | ShadCN UI | Pre-built components | Minimalist, accessible, customizable |
| **Animations** | Framer Motion | Smooth interactions | Lightweight, easy to control |
| **Routing** | React Router v6 | Page navigation | Standard for React SPAs |
| **State Management** | React Context + Zustand | Manage cart state | Simple for MVP, scales well |
| **HTTP Client** | Axios | API requests | Promise-based, interceptor support |
| **Data Fetching** | React Query/TanStack Query | Cache management | Efficient data handling |
| **Backend Framework** | Nest.js | API server | Type-safe, modular, scalable |
| **ORM** | TypeORM/Prisma | Database layer | Type safety, migrations |
| **Database** | PostgreSQL | Data persistence | Reliable, good for e-commerce |
| **Validation** | Zod/Joi | Input validation | Type-safe validation |

---

## 📌 MVP Feature Checklist

### **Phase 1: Landing Page UI**
- [ ] Hero section with main CTA
- [ ] Product showcase section
- [ ] Product card component
- [ ] Header with logo & cart icon
- [ ] Footer with basic links
- [ ] Responsive mobile menu
- [ ] Dark/Light mode toggle (optional for MVP)

### **Phase 2: Product Details & Cart**
- [ ] Product image gallery
- [ ] Product description, price, specifications
- [ ] Quantity selector
- [ ] Add to cart functionality
- [ ] Shopping cart page/modal
- [ ] Cart item management (update qty, remove)
- [ ] Cart persistence (session storage)

### **Phase 3: Animations & Polish**
- [ ] Fade-in effects on scroll
- [ ] Smooth button transitions
- [ ] Cart item add animation
- [ ] Page transition animations
- [ ] Loading states

---

## 🎨 Design Guidelines

### **Color Palette (Minimalistic)**
- **Primary:** Neutral (charcoal/deep gray) `#1a1a1a`
- **Secondary:** Clean accent (use one: blue/green/purple)
- **Neutral:** Off-white/light gray `#f5f5f5`, `#ffffff`
- **For India market:** Avoid red/green (cultural sensitivity for e-commerce)

### **Typography**
- **Font Stack:** `Inter`, `Poppins`, or `Plus Jakarta Sans`
- **Headings:** Bold/600 weight
- **Body:** Regular/400 weight
- **Line height:** 1.5-1.6 for readability

### **Spacing & Layout**
- Mobile-first approach
- Min 16px padding on mobile
- Max content width: 1280px (xl in Tailwind)
- Generous whitespace for minimalist feel

### **Animations**
- Fade-in on scroll: 300-500ms
- Hover states: 200ms transitions
- Cart animations: 400ms bounce/ease
- Page transitions: 200-300ms
- **Keep it light:** Avoid heavy, distracting animations

---

## 📅 Development Timeline

| Phase | Tasks | Est. Days | Status |
|-------|-------|-----------|--------|
| **1. Setup** | Vite + React boilerplate, ShadCN setup, Tailwind config | 0.5-1 | ⏳ Starting |
| **2. Landing Page UI** | Hero, product showcase, header, footer, responsive | 1-2 | ⏳ Next |
| **3. Product & Cart UI** | Product card, product page, cart modal, forms | 1.5-2 | ⏳ Next |
| **4. State Management** | Cart context, product service, hooks | 0.5-1 | ⏳ Next |
| **5. Animations** | Framer Motion integration, micro-interactions | 0.5-1 | ⏳ Next |
| **6. Polish & Responsive** | Mobile testing, refinements, edge cases | 0.5-1 | ⏳ Next |
| **7. Connect Backend** | API integration (after backend is ready) | 1-2 | ⏳ Later |

**Total (Frontend): 5-8 days**  
**Backend: Will be done in parallel**

---

## 🚀 Next Steps - Frontend Initialization

### **Step 1: Initialize Vite + React**
```bash
cd client
npm create vite@latest . -- --template react-ts
npm install
```

### **Step 2: Install Core Dependencies**
```bash
npm install -D tailwindcss postcss autoprefixer
npm install clsx class-variance-authority
npm install lucide-react
npm install framer-motion
npm install axios
npm install react-router-dom
npm install zustand
npm install @tanstack/react-query
```

### **Step 3: Setup ShadCN UI**
```bash
npx shadcn-ui@latest init -d
```

### **Step 4: Create Base Components**
- Create component structure
- Setup Tailwind + ShadCN
- Create reusable components (Button, Card, Input, etc.)

### **Step 5: Build Landing Page**
- Hero section
- Product showcase
- Header + Footer
- Responsive navbar

---

## 📝 Notes & Decisions to Make

### **To Clarify Before Backend:**
- [ ] **Product Image Storage:** Cloudinary, AWS S3, or local for MVP?
- [ ] **Database:** PostgreSQL (recommended) or MongoDB?
- [ ] **Product Variants:** Will this product have sizes/colors?
- [ ] **Shipping Logic:** Fixed rate or weight-based?
- [ ] **GST/Tax:** How to handle Indian tax requirements?
- [ ] **Email Notifications:** Send order confirmation emails?

### **Design Decisions Made:**
- ✅ Minimalistic + Modern aesthetic
- ✅ Mobile-first responsive design
- ✅ Lightweight animations only (1-4 key frames max)
- ✅ ShadCN for consistency & speed
- ✅ Context + Zustand for state (scalable without Redux overhead)

### **Deferred to Phase 2:**
- Payment gateway integration (Razorpay)
- User authentication & accounts
- Analytics & SEO optimization
- Admin dashboard
- Multi-product support (architecture supports it though)

---

## 🔗 Useful Resources

- **ShadCN UI Docs:** https://ui.shadcn.com
- **Tailwind CSS:** https://tailwindcss.com
- **React Router:** https://reactrouter.com
- **Framer Motion:** https://www.framer.com/motion
- **Nest.js Docs:** https://docs.nestjs.com
- **React Query Docs:** https://tanstack.com/query

---

## ✨ Quality Checklist Before Client Presentation

- [ ] Fully responsive (mobile 320px - desktop 1920px)
- [ ] Fast load times (Lighthouse score 85+)
- [ ] Smooth animations (no jank/stuttering)
- [ ] Clean, readable code with comments
- [ ] Error handling (network errors, validations)
- [ ] Accessible design (Alt text, ARIA labels, color contrast)
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge)
- [ ] No console errors/warnings
- [ ] SEO basics (meta tags, structured data)

---

**Last Updated:** 14 April 2026  
**Created for:** E-Commerce MERN + Nest.js Project  
**Status:** Planning Phase ✅ → Frontend Initialization 🚀
