import { PrismaClient, StorefrontType, ProductType, Visibility } from "@prisma/client";

const db = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Wipe in FK-safe order
  await db.walletTransaction.deleteMany();
  await db.purchase.deleteMany();
  await db.orderItem.deleteMany();
  await db.order.deleteMany();
  await db.bookingSlot.deleteMany();
  await db.ticketTier.deleteMany();
  await db.productFile.deleteMany();
  await db.product.deleteMany();
  await db.storefront.deleteMany();
  await db.workspace.deleteMany();

  // ── Workspace ──────────────────────────────────────
  const workspace = await db.workspace.create({
    data: {
      supabaseUserId: "00000000-0000-0000-0000-000000000001", // fake UUID for seed
      email: "ada@troven.test",
      fullName: "Ada Okafor",
      phone: "+2348012345678",
    },
  });

  // ── Storefronts ─────────────────────────────────────
  const [digitalSf, eventSf, bookingSf] = await Promise.all([
    db.storefront.create({
      data: {
        workspaceId: workspace.id,
        slug: "ada-digital",
        name: "Ada's Digital Shop",
        type: StorefrontType.digital,
        bio: "Premium digital products for African creators.",
        accentColour: "#534AB7",
      },
    }),
    db.storefront.create({
      data: {
        workspaceId: workspace.id,
        slug: "ada-events",
        name: "Ada's Events",
        type: StorefrontType.event,
        bio: "Live events and workshops for creators across Africa.",
        accentColour: "#E35B4A",
      },
    }),
    db.storefront.create({
      data: {
        workspaceId: workspace.id,
        slug: "ada-bookings",
        name: "Ada's 1:1 Sessions",
        type: StorefrontType.booking,
        bio: "Book a focused 1:1 session with Ada.",
        accentColour: "#2ECC71",
      },
    }),
  ]);

  // ── Digital products ────────────────────────────────
  await db.product.createMany({
    data: [
      {
        workspaceId: workspace.id,
        storefrontId: digitalSf.id,
        title: "The African Creator Handbook",
        description: "A comprehensive guide to building a digital business in Africa — pricing, platforms, and payouts.",
        type: ProductType.file,
        priceNgn: 5000,
        visibility: Visibility.published,
        deliveryConfig: {},
      },
      {
        workspaceId: workspace.id,
        storefrontId: digitalSf.id,
        title: "Social Media Growth Templates",
        description: "30 premium Canva templates built for African brands.",
        type: ProductType.link,
        priceNgn: 3500,
        visibility: Visibility.published,
        deliveryConfig: { externalUrl: "https://www.canva.com/brand/join?token=seed" },
      },
    ],
  });

  // ── Event products + ticket tiers ──────────────────
  const [event1, event2] = await Promise.all([
    db.product.create({
      data: {
        workspaceId: workspace.id,
        storefrontId: eventSf.id,
        title: "CreatorFest Lagos 2026",
        description: "A full-day conference for African digital creators at Eko Hotel.",
        type: ProductType.event,
        priceNgn: 15000,
        visibility: Visibility.published,
        deliveryConfig: {
          eventDate: "2026-06-15",
          eventTime: "09:00",
          eventLocation: "Eko Hotel, Victoria Island, Lagos",
          totalCapacity: 500,
          autoClose: true,
        },
      },
    }),
    db.product.create({
      data: {
        workspaceId: workspace.id,
        storefrontId: eventSf.id,
        title: "Monetise Your Skills — Live Masterclass",
        description: "A 2-hour live Zoom masterclass on building income online as an African creator.",
        type: ProductType.event,
        priceNgn: 8000,
        visibility: Visibility.published,
        deliveryConfig: {
          eventDate: "2026-04-10",
          eventTime: "18:00",
          eventLocation: "Zoom (link sent after purchase)",
          totalCapacity: 200,
          autoClose: false,
        },
      },
    }),
  ]);

  await db.ticketTier.createMany({
    data: [
      { productId: event1.id, workspaceId: workspace.id, name: "General Admission", priceNgn: 15000, capacity: 400 },
      { productId: event1.id, workspaceId: workspace.id, name: "VIP", priceNgn: 45000, capacity: 100 },
      { productId: event2.id, workspaceId: workspace.id, name: "General Admission", priceNgn: 8000, capacity: 200 },
    ],
  });

  // ── Booking products ────────────────────────────────
  await db.product.createMany({
    data: [
      {
        workspaceId: workspace.id,
        storefrontId: bookingSf.id,
        title: "60-Minute Strategy Call",
        description: "A focused session to plan your next product launch or growth strategy.",
        type: ProductType.booking,
        priceNgn: 25000,
        visibility: Visibility.published,
        deliveryConfig: {
          duration: 60,
          bufferMins: 15,
          maxPerDay: 3,
          confirmationMsg: "A Zoom link will be sent 30 minutes before your session.",
        },
      },
      {
        workspaceId: workspace.id,
        storefrontId: bookingSf.id,
        title: "30-Minute Quick Review",
        description: "Fast feedback on your product, pricing, or launch plan.",
        type: ProductType.booking,
        priceNgn: 12000,
        visibility: Visibility.published,
        deliveryConfig: {
          duration: 30,
          bufferMins: 10,
          maxPerDay: 5,
          confirmationMsg: "Zoom link sent to your email.",
        },
      },
    ],
  });

  // ── Summary ─────────────────────────────────────────
  const counts = await Promise.all([
    db.storefront.count(),
    db.product.count(),
    db.ticketTier.count(),
  ]);

  console.log("\n✅ Seed complete!");
  console.log(`   Workspace   : ${workspace.id}`);
  console.log(`   Name        : ${workspace.fullName} <${workspace.email}>`);
  console.log(`   Storefronts : ${counts[0]} (digital · event · booking)`);
  console.log(`   Products    : ${counts[1]} (2 per storefront)`);
  console.log(`   TicketTiers : ${counts[2]} (3 across 2 event products)`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
