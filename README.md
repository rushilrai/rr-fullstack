# rr-monorepo

A highly opinionated TypeScript monorepo boilerplate for building full‑stack apps: static site, backend API, and webapp.

Note: This setup is intentionally opinionated and will remain a WIP as I learn and adopt better patterns over time.

## Apps

### apps/static
- Purpose: Static website (marketing pages, docs, landing pages).
- Stack: Astro 5, Tailwind CSS 4 (via Vite plugin), DaisyUI, Lucide icons.

### apps/backend
- Purpose: Backend service that connects to the database and exposes APIs.
- Stack: Fastify 5, PostgreSQL with drizzle-orm, drizzle-kit for migrations, Zod for validation.

### apps/webapp
- Purpose: Full web application (dashboards, SaaS, marketplaces, etc.).
- Stack: Next.js 16, React 19, Tailwind CSS 4, Radix UI, Lucide icons.

---

If you spot something off or have a better pattern in mind, it’s probably on the roadmap—or about to be.