export const navContent = {
  links: [
    { href: "#features", label: "Features" },
    { href: "#logistics", label: "Logistics" },
    { href: "#pricing", label: "Pricing" },
    { href: "#about", label: "About" },
  ],
  login: { href: "/coming-soon", label: "Log in" },
  signup: { href: "/coming-soon", label: "Start free" },
} as const;

export const heroContent = {
  eyebrow: "Creator commerce platform",
  headline: {
    lead: "Sell everything.",
    accent: "Own everything.",
  },
  sub: "Tickets, digital products, 1:1 sessions, physical goods — multiple storefronts, one workspace, instant payouts to your bank.",
  actions: {
    primary: { href: "/coming-soon", label: "Create your store" },
    secondary: { href: "#features", label: "See how it works" },
  },
  stats: [
    { value: "10,000+", label: "creators" },
    { value: "₦2B+", label: "in sales processed" },
    { value: "150", label: "countries reached" },
    { value: "4.9 ★", label: "creator satisfaction" },
  ],
} as const;

export const marqueeContent = [
  { title: "Digital products", detail: "Auto-delivered in 60 seconds" },
  { title: "Event tickets", detail: "QR codes, tiers, capacity limits" },
  { title: "1:1 bookings", detail: "Calendar sync, auto-confirmations" },
  { title: "Physical goods", detail: "GIG · DHL · Glovo integration" },
  { title: "Link-in-bio", detail: "All your links, one beautiful page" },
  { title: "Affiliate programme", detail: "Refer and earn, automated" },
  { title: "Instant payouts", detail: "Same-day, self-serve withdrawals" },
  { title: "Coupon engine", detail: "Discount codes, flash sales" },
] as const;

export const storefrontTypesContent = {
  eyebrow: "Every format",
  title: "One workspace.\nEvery storefront type.",
  subtitle:
    "Create independent storefronts for each thing you sell — each with its own brand, URL, and product catalogue. All revenue flows into one wallet.",
  types: [
    {
      icon: "📦",
      title: "Digital products",
      desc: "eBooks, templates, video courses, software — auto-delivered the moment payment clears. Files up to 2 GB.",
      tag: "Instant delivery",
    },
    {
      icon: "🎟",
      title: "Event tickets",
      desc: "Multi-tier pricing, live capacity tracking, QR code delivery, and FOMO-inducing urgency signals built in.",
      tag: "QR code delivery",
    },
    {
      icon: "📅",
      title: "1:1 bookings",
      desc: "Calendar availability, buffer times, session types, automatic .ics confirmations sent to both parties.",
      tag: "Auto-confirmed",
    },
    {
      icon: "🛒",
      title: "Physical goods",
      desc: "Full eCommerce with your choice of logistics partner — GIG Logistics, DHL, Glovo, or self-ship.",
      tag: "Logistics built in",
    },
    {
      icon: "🔗",
      title: "Link-in-bio",
      desc: "All your storefronts and links in one page. Each link points to a real transactional storefront, not just a URL.",
      tag: "Converts traffic",
    },
    {
      icon: "🏬",
      title: "Multi-store hub",
      desc: "Aggregate all your storefronts under one URL. Elegant layout that keeps each product line distinct.",
      tag: "Everything, one place",
    },
  ],
} as const;

export const footerContent = {
  links: [
    { href: "/coming-soon", label: "Features" },
    { href: "/coming-soon", label: "Pricing" },
    { href: "/coming-soon", label: "Creators" },
    { href: "/coming-soon", label: "Blog" },
    { href: "/coming-soon", label: "Privacy" },
    { href: "/coming-soon", label: "Terms" },
  ],
  note: "© 2026 Troven · usetroven.com",
} as const;
