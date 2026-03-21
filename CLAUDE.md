# Troven.Stack — CLAUDE.md

> **One-line pitch:** The simplest way for African creators to sell digital products, event tickets, and 1:1 bookings online — with NGN-first payments, a multi-storefront dashboard, and instant payouts.

---

## Tech Stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | Next.js 14 App Router | RSC for fast storefronts, single codebase for dashboard + public pages |
| API | tRPC v11 | End-to-end type safety, no REST boilerplate, colocated with Next.js |
| ORM | Prisma + PostgreSQL (Supabase) | Type-safe queries, easy migrations, Supabase RLS available |
| Auth | Clerk | Hosted auth UI, webhooks sync users to `Workspace` table |
| Styling | Tailwind CSS + shadcn/ui | Utility-first, components owned in-repo (no black-box dep) |
| Validation | Zod | Single schema used in tRPC input + frontend forms |
| Email | React Email + Resend | Component-driven templates, reliable deliverability |
| Storage | Cloudflare R2 | S3-compatible, cheap egress, signed URLs for file delivery |
| Payments | Paystack / Flutterwave (via interface) | See PaymentProvider pattern below — never called directly |

---

## Multi-Tenant Rules

Every table that holds creator or buyer data carries **both** scoping keys:

```
workspace_id   — the creator (Workspace) who owns the data
storefront_id  — which of their storefronts it belongs to
```

**Enforced on:** `Product`, `Order`, `OrderItem`, `Purchase`, `Payout`, `WalletTransaction`, `TicketTier`, `BookingSlot`.

**Rules:**
- `Workspace` is the top-level tenant. One Clerk user = one Workspace.
- A Workspace can have up to `storefrontLimit` (default 5) Storefronts.
- Never query products, orders, or purchases without filtering by `workspaceId`.
- In every protected tRPC procedure, derive `workspaceId` from `ctx.userId` via a `db.workspace.findUnique({ where: { clerkId: ctx.userId } })` call — never trust a `workspaceId` passed from the client.

---

## Storefront Types

A `Storefront` has a `type: StorefrontType` which governs what products it can hold and how delivery works.

| Type | `ProductType` allowed | Delivery mechanism | Key tables |
|---|---|---|---|
| `digital` | `file`, `link` | Signed R2 URL (`file_download`) or external URL email (`external_link`) | `ProductFile`, `Purchase.deliveryMeta` |
| `event` | `event` | QR ticket email (`qr_ticket`) | `TicketTier`, `Purchase.deliveryMeta.ticketRef` |
| `booking` | `booking` | Calendar invite + `.ics` (`calendar_invite`) | `BookingSlot`, `Purchase.deliveryMeta.slotId` |

**Delivery logic rule:** When an `Order` transitions to `completed`, call `triggerDelivery(purchase)`. This function switches on `purchase.deliveryType` — never on `product.type` directly. The purchase record is the source of truth for what was sold and how to deliver it.

---

## PaymentProvider Interface Pattern

Paystack and Flutterwave are **never imported directly** in app code. All payment operations go through an interface:

```ts
// lib/payments/types.ts
interface PaymentProvider {
  initializePayment(params: InitPaymentParams): Promise<InitPaymentResult>;
  verifyPayment(reference: string): Promise<VerifyPaymentResult>;
  initiatePayout(params: PayoutParams): Promise<PayoutResult>;
  verifyWebhookSignature(payload: string, signature: string): boolean;
}
```

- `lib/payments/paystack.ts` and `lib/payments/flutterwave.ts` each export a class implementing this interface.
- `lib/payments/index.ts` exports `getPaymentProvider(gateway: string): PaymentProvider`.
- Webhook handlers call `getPaymentProvider(order.gateway)` — never hardcode a provider.
- `Order.gateway` records which provider was used at purchase time.

---

## The Sacred Purchases Rule

> **`Purchase.lifetimeAccess` is set to `true` at purchase time and is only ever set to `false` on a confirmed refund. It has no FK relationship to any subscription or plan table.**

A seller cancelling their Troven plan, downgrading, or being suspended **must never revoke access for buyers who have already paid**. This is a product and legal invariant.

- Never add a `planId` or `subscriptionId` FK to `Purchase`.
- Never add a cascade that touches `Purchase` from `Workspace`.
- Refund flow: set `Purchase.lifetimeAccess = false`, set `Order.status = refunded`, add a `WalletTransaction` of type `refund`.

---

## Wallet / Ledger Rules

`WalletTransaction` is an **append-only ledger**. Never update a row.

- Current balance = `SUM(amount) WHERE type IN (credit) MINUS SUM(amount) WHERE type IN (debit, fee, refund)` for a given `workspaceId`.
- Every completed order creates two rows: one `credit` (net amount to creator) and one `fee` (platform fee).
- Always write `balanceAfter` at insert time to avoid expensive recalculations.

---

## Coding Conventions

**Validation**
- All tRPC procedure inputs must use a Zod schema. No raw `z.any()`.
- Shared schemas live in `lib/validations/`. Import from there — don't inline schemas in routers.

**Data mutations**
- All writes go through tRPC procedures (`protectedProcedure`). Never expose raw Prisma calls in `app/api/` route handlers.
- The only exception is webhook handlers (`app/api/webhooks/`) — they run outside the tRPC context but must still use `lib/db` and must verify signatures before touching the DB.

**Auth scoping**
- Every `protectedProcedure` that reads or writes tenant data must resolve `workspaceId` from `ctx.userId`. Never trust a `workspaceId` from procedure input.

**Prisma**
- Use `db` from `lib/db.ts` — the global singleton with dev-safe leak prevention.
- Never instantiate `new PrismaClient()` outside `lib/db.ts`.

**Enums**
- Use Prisma enums for status fields. Never use raw strings like `"active"` in comparisons — import the enum.

**Money**
- All amounts are stored as `Decimal(12,2)` in the source currency (NGN or USD).
- Never do float arithmetic on money. Use `Decimal.js` or Prisma's `Decimal` type throughout.
- The `currency` column on `Order` and `WalletTransaction` is the source of truth.

**Types**
- Prefer `import type` for type-only imports (`@typescript-eslint/consistent-type-imports` is enforced).
- Export inferred Zod types (`z.infer<typeof schema>`) from `lib/validations/` — don't duplicate type definitions.

---

## File & Folder Conventions

```
app/
  (dashboard)/          # Auth-required creator dashboard
    [feature]/
      page.tsx          # RSC — fetch via `await api()` from lib/trpc/server.ts
      _components/      # Route-local components (prefixed _ so they don't become pages)
  (storefront)/         # Public buyer-facing pages, no auth
  api/
    trpc/[trpc]/        # tRPC fetch adapter — do not add logic here
    webhooks/[provider]/# One route per webhook source

server/
  routers/
    [domain].ts         # One router per domain (user, storefront, product, order…)
  trpc.ts               # t instance, createTRPCRouter, publicProcedure, protectedProcedure
  context.ts            # createTRPCContext

lib/
  db.ts                 # Prisma singleton
  env.ts                # Validated env vars via @t3-oss/env-nextjs
  utils.ts              # Pure utility functions (cn, formatCurrency, slugify…)
  validations/          # Zod schemas, exported with inferred types
  trpc/
    client.tsx          # TRPCReactProvider + trpc hooks (client components)
    server.ts           # api() caller for RSC
  payments/
    types.ts            # PaymentProvider interface
    paystack.ts         # Paystack implementation
    flutterwave.ts      # Flutterwave implementation
    index.ts            # getPaymentProvider(gateway) factory

components/
  ui/                   # shadcn/ui components (owned in-repo)
  shared/               # Cross-feature components (Navbar, Footer, etc.)
  [feature]/            # Feature-specific shared components

emails/                 # React Email templates — one file per email type
prisma/
  schema.prisma         # Single schema file — all models here
```

**Naming:**
- Files: `kebab-case.ts` for utilities and routes, `PascalCase.tsx` for React components.
- tRPC routers: `server/routers/[domain].ts`, added to `appRouter` in `server/routers/index.ts`.
- Route-local components that should not be Next.js routes: prefix directory with `_` (e.g. `_components/`).
