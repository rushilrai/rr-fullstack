# rr-monorepo

A highly opinionated TypeScript monorepo boilerplate for building full-stack apps.

Note: This setup is intentionally opinionated and will remain a WIP as I learn and adopt better patterns over time.

## Stack

- **Runtime / package manager**: [Bun](https://bun.sh) workspaces
- **Build orchestration**: Turborepo
- **Language**: TypeScript 6 (strict)
- **Linting**: oxlint, per-app config (Expo app uses `eslint-config-expo`)
- **Formatting**: Prettier with a composable base config + import sorting

## Apps

### apps/static

Static marketing / docs site.

- Astro 6, Tailwind CSS 4, daisyUI, Lucide icons

### apps/backend

HTTP backend service with a relational database.

- Elysia + Bun, PostgreSQL, Drizzle ORM, Zod validation
- Layers: `env.ts` → `lib/<integration>/config.ts` → `modules/<feature>/{schema,service,handler,router}`

### apps/webapp

Full web application backed by `apps/backend` over HTTP.

- TanStack Start, React 19, Vite, Tailwind CSS 4, shadcn/ui (base-nova on Base UI)
- Consumes the backend through shared DTOs in `@monorepo/dto`
- Layers: `env.ts` → `lib/` → `modules/<feature>/{service,queries,components}` → `screens/` ← thin `routes/`

### apps/web-convex

Full web application backed by the shared Convex package.

- TanStack Start, React 19, Vite, shadcn/ui
- Consumes `@monorepo/convex`; `lib/convex/client.ts` wires `ConvexQueryClient`, module hooks call `convex/react`

### apps/native

Mobile application backed by the shared Convex package.

- Expo (expo-router), React Native, consuming `@monorepo/convex`
- `lib/convex/client.ts` (`ConvexReactClient`) → `modules/<feature>/{schema,queries,components}` → `screens/` ← thin `app/` routes

### apps/fullstack-convex

Full-stack app with an **embedded** Convex backend.

- TanStack Start, React 19, Vite, Convex, shadcn/ui
- Convex module pattern: `convex/modules/<feature>/{schema,helpers,queries,mutations}`

## Packages

### packages/convex

Shared Convex backend, consumed by `apps/web-convex` and `apps/native`.

- Exposes `api` / `internal` / `Doc` / `Id` from its root `index.ts`
- Convex module pattern, same as the embedded one in `apps/fullstack-convex`

### packages/dto

Shared Zod DTOs consumed by `apps/backend` and `apps/webapp`. Exported as TypeScript source (no build step).

## Convex topologies

The template demonstrates all three ways to use Convex:

- **Embedded** — `apps/fullstack-convex` (its own `convex/` dir)
- **Shared → web** — `apps/web-convex` consuming `@monorepo/convex`
- **Shared → native** — `apps/native` consuming `@monorepo/convex`

Convex codegen is committed (`convex/_generated`). To regenerate against a local deployment without a cloud account:

```sh
cd packages/convex   # or apps/fullstack-convex
bunx convex dev --once --configure new --dev-deployment local
```

## Getting started

```sh
bun install
bun run dev         # turbo dev across apps
bun run build       # turbo build
bun run lint        # turbo lint
bun run typecheck   # turbo typecheck
bun run format      # prettier write (turbo format + root files)
bun run format:check
```

Copy `env.example` values into per-app `.env` files as needed. For `apps/native`, run `bunx expo start` once to regenerate `expo-env.d.ts` (gitignored) before typechecking a fresh clone.

---

If you spot something off or have a better pattern in mind, it's probably on the roadmap—or about to be.
