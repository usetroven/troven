---
name: troven_stack_project
description: Troven.Stack SaaS scaffold — stack choices, constraints, and deferred work
type: project
---

Next.js 14 App Router SaaS called Troven.Stack. Fully scaffolded with tRPC v11, Prisma (PostgreSQL), Tailwind + shadcn/ui, Clerk auth, Zod validation, React Email.

**Why:** User is building a digital-products SaaS and wanted a full scaffold before layering in payment providers.

**How to apply:**
- Do NOT install Paystack or Flutterwave SDKs — user will add manually.
- Do NOT run `prisma migrate` or `prisma db push` — user will finalize schema first.
- Prisma schema lives in `/prisma/schema.prisma`; only a `User` model exists so far, linked to Clerk via `clerkId`.
- tRPC endpoint is at `/api/trpc`; server-side caller is in `lib/trpc/server.ts`.
- Clerk webhook syncs users at `/api/webhooks/clerk`.
- Env var validation via `@t3-oss/env-nextjs` in `lib/env.ts`.
- shadcn/ui components are hand-written (not using the CLI) — button, input, card, badge are scaffolded; add more as needed following the same `components/ui/` pattern.
- `@radix-ui/react-slot` is needed by Button — add to package.json if not already installed.
