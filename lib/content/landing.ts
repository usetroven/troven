export const navContent = {
  links: [
    { href: "#features", label: "Features" },
    { href: "#logistics", label: "Logistics" },
    { href: "#pricing", label: "Pricing" },
  ],
  login: { href: "/coming-soon", label: "Log in" },
  signup: { href: "/coming-soon", label: "Start free" },
} as const;

export const heroContent = {
  headline: {
    lead: "Sell everything.",
    accent: "Own everything.",
  },
  sub: "Multiple storefronts, one workspace. Digital products, events, bookings, physical goods — instant payouts to your bank.",
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
  floatCards: {
    revenue: {
      label: "Today's revenue",
      value: "₦84,500",
      change: "↑ +34% vs yesterday",
    },
    orders: [
      { text: "Live order · VIP Ticket · ₦15,000", tone: "accent" as const },
      { text: "DHL shipment dispatched", tone: "iris" as const },
    ],
    payout: {
      label: "Payout ready",
      value: "₦320,000",
      note: "Withdrawing · same day",
    },
  },
} as const;

export const marqueeContent = [
  { title: "Digital products", detail: "Instant delivery" },
  { title: "Event tickets", detail: "QR codes · FOMO" },
  { title: "1:1 bookings", detail: "Calendar sync" },
  { title: "GIG · DHL · Glovo", detail: "Logistics built in" },
  { title: "Affiliate programme", detail: "Refer & earn" },
  { title: "Coupon engine", detail: "Flash sales" },
  { title: "Retainer plans", detail: "Predictable MRR" },
  { title: "Instant payouts", detail: "Self-serve · same day" },
  { title: "AI storefront design", detail: "Unique every time" },
  { title: "Per-store analytics", detail: "Revenue · conversion" },
] as const;

export const storefrontTypesContent = {
  eyebrow: "Every format",
  title: "One workspace.\nEvery storefront type.",
  subtitle:
    "Create independent storefronts for each thing you sell — each with its own brand, URL, and product catalogue.",
  types: [
    {
      icon: "📦",
      iconBg: "rgba(0,168,126,0.1)",
      title: "Digital products",
      desc: "eBooks, templates, courses, software. Auto-delivered in 60 seconds.",
      tag: "Instant delivery",
    },
    {
      icon: "🎟",
      iconBg: "rgba(73,79,223,0.1)",
      title: "Event tickets",
      desc: "Multi-tier pricing, live capacity, QR delivery, and FOMO urgency built in.",
      tag: "QR delivery",
    },
    {
      icon: "📅",
      iconBg: "rgba(0,168,126,0.1)",
      title: "1:1 bookings",
      desc: "Calendar availability, session types, buffer time, auto .ics confirmations.",
      tag: "Auto-confirmed",
    },
    {
      icon: "🚚",
      iconBg: "rgba(236,126,0,0.1)",
      title: "Physical goods",
      desc: "eCommerce with GIG, DHL, Glovo — or self-ship. Buyer picks at checkout.",
      tag: "Logistics built in",
    },
    {
      icon: "🔗",
      iconBg: "rgba(73,79,223,0.08)",
      title: "Link-in-bio",
      desc: "All storefronts in one page. Each link leads somewhere transactional.",
      tag: "Converts traffic",
    },
    {
      icon: "🏬",
      iconBg: "rgba(139,92,246,0.1)",
      title: "Multi-store hub",
      desc: "Aggregate everything under one URL. Elegant, no cannibalisation.",
      tag: "One URL, all stores",
    },
  ],
} as const;

export const builtForYouContent = {
  eyebrow: "Built for you",
  title: "For every creator,\nevery craft.",
  subtitle:
    "Whether you teach, perform, ship, or inspire — Troven has a storefront built for exactly what you do.",
  creators: [
    { name: "Adaeze", age: 27, role: "Course creator · Digital marketing" },
    { name: "Chukwuemeka", age: 32, role: "Event organiser · Tech conferences" },
    { name: "Tife", age: 20, role: "Fashion content · Style guides" },
    { name: "Coach Seun", age: 41, role: "Fitness coach · 1:1 training sessions" },
  ],
  founding: {
    badge: "Founding creator programme",
    title: "Be one of our\nfirst 500 creators.",
    desc: "We're opening Troven to a small group of founding creators. You'll get locked-in pricing, a direct line to our team, and perks that will never be offered again.",
    cta: { label: "Claim your spot →", href: "/coming-soon" },
    spots: { current: 347, total: 500, claimedLabel: "spots claimed" },
    perks: [
      {
        icon: "🔒",
        bg: "rgba(0,212,160,0.1)",
        title: "Price lock forever",
        desc: "Pay today's rate for life — never adjusted up",
      },
      {
        icon: "⚡",
        bg: "rgba(73,79,223,0.1)",
        title: "First access to every feature",
        desc: "AI design, affiliates, custom domains — yours first",
      },
      {
        icon: "✦",
        bg: "rgba(245,196,24,0.1)",
        title: "Founding creator badge",
        desc: "A permanent mark on your public storefront profile",
      },
    ],
  },
} as const;

export const analyticsContent = {
  tag: "Analytics",
  title: "Know what's\nworking. Per store.",
  desc: "Revenue, orders, conversion, and top products — independently per storefront or aggregated across your whole workspace.",
  chips: [
    "Revenue breakdown",
    "Conversion funnel",
    "Top products",
    "Affiliate attribution",
    "CSV export",
  ],
  mock: {
    title: "Top products",
    subtitle: "Ade's eBooks · This month",
    toggleLabels: { bar: "Bar", pie: "Pie", progress: "Track" } as const,
    stats: [
      { value: "₦320k", label: "Revenue", tone: "default" as const },
      { value: "430", label: "Orders", tone: "default" as const },
      { value: "+18%", label: "Growth", tone: "teal" as const },
    ],
    bars: [
      { val: 88, label: "₦128k", name: "Design Mastery" },
      { val: 62, label: "₦84k", name: "Marketing 101" },
      { val: 44, label: "₦56k", name: "Templates" },
      { val: 28, label: "₦36k", name: "Finance Guide" },
    ],
    pie: [
      { pct: 0.4, label: "Design Mastery", color: "#00d4a0" },
      { pct: 0.26, label: "Marketing 101", color: "#494fdf" },
      { pct: 0.17, label: "Templates", color: "#ec7e00" },
      { pct: 0.11, label: "Finance Guide", color: "#e23b4a" },
      { pct: 0.06, label: "Others", color: "#e8e8ea" },
    ],
    track: [
      { label: "Design Mastery", value: "₦128k", pct: 88, from: "#00a87e", to: "#00d4a0" },
      { label: "Marketing 101", value: "₦84k", pct: 62, from: "#494fdf", to: "#8b91ff" },
      { label: "Templates Pack", value: "₦56k", pct: 44, from: "#ec7e00", to: "#f5c518" },
      { label: "Finance Guide", value: "₦36k", pct: 28, from: "#e23b4a", to: "#ff6b7a" },
    ],
  },
} as const;

export const logisticsContent = {
  tag: "Logistics",
  title: "Ship globally.\nYour choice of carrier.",
  desc: "Connect GIG, DHL, and Glovo simultaneously. Buyers choose at checkout. You set the rates.",
  mockLabel: "Connected logistics vendors",
  connectLabel: "Connect another carrier",
  chips: [
    "GIG — nationwide",
    "DHL — international",
    "Glovo — same day",
    "Self-ship option",
    "Tracking updates",
  ],
  vendors: [
    {
      abbr: "GIG",
      name: "GIG Logistics",
      subtitle: "Nigeria-wide delivery",
      status: "active" as const,
      iconTone: { bg: "rgba(0,168,126,0.1)", color: "#00a87e" },
    },
    {
      abbr: "DHL",
      name: "DHL Express",
      subtitle: "International · 220+ countries",
      status: "active" as const,
      iconTone: { bg: "rgba(255,200,0,0.1)", color: "#b8860b" },
    },
    {
      abbr: "GLV",
      name: "Glovo",
      subtitle: "Same-day city delivery",
      status: "idle" as const,
      iconTone: { bg: "rgba(255,100,0,0.08)", color: "#ff6400" },
    },
    {
      abbr: "✋",
      name: "Self / Manual",
      subtitle: "Handle fulfilment yourself",
      status: "always" as const,
      iconTone: { bg: "rgba(0,0,0,0.04)", color: "rgba(0,0,0,0.4)" },
    },
  ],
} as const;

export const couponsContent = {
  tag: "Coupon engine",
  title: "Discount codes,\nflash sales.",
  desc: "Percentage or fixed discounts, usage caps, expiry dates, product-specific. One-click share.",
  mockLabel: "Active coupons",
  createLabel: "Create new coupon",
  coupons: [
    {
      code: "LAUNCH50",
      meta: "50% off · Expires Apr 30\n48/100 used",
      value: "−50%",
      expired: false,
    },
    {
      code: "VIP2026",
      meta: "₦5k off · No expiry\n12 used",
      value: "−₦5k",
      expired: false,
    },
  ],
} as const;

export const retainersContent = {
  tag: "Retainers",
  title: "Predictable income.\nEvery month.",
  desc: "Monthly retainer plans on any storefront type. Coaching, libraries, subscriptions, season passes.",
  label: "Retainer plans · Coaching",
  plans: [
    {
      name: "Starter",
      price: "₦30k",
      period: "/mo",
      desc: "2 sessions · email support",
      featured: false,
    },
    {
      name: "Growth · Popular",
      price: "₦60k",
      period: "/mo",
      desc: "4 sessions · WhatsApp + reviews",
      featured: true,
    },
    {
      name: "VIP",
      price: "₦120k",
      period: "/mo",
      desc: "Unlimited · dedicated Slack",
      featured: false,
    },
  ],
  stats: [
    { text: "3 subscribers", tone: "muted" as const },
    { text: "₦270k MRR", tone: "accent" as const },
  ],
} as const;

export const differentiatorsContent = {
  eyebrow: "Why Troven",
  title: "Built honest.\nBuilt different.",
  items: [
    {
      icon: "⚡",
      iconBg: "rgba(255,200,0,0.12)",
      title: "Transparent FX",
      desc: "Live rate shown before every withdrawal. No hidden spread.",
    },
    {
      icon: "💸",
      iconBg: "rgba(0,168,126,0.1)",
      title: "Instant payouts",
      desc: "Self-serve same-day withdrawal. No support tickets.",
    },
    {
      icon: "♾️",
      iconBg: "rgba(73,79,223,0.1)",
      title: "Buyer access forever",
      desc: "Your customers keep lifetime access even if you pause.",
    },
    {
      icon: "📊",
      iconBg: "rgba(226,59,74,0.1)",
      title: "Per-store analytics",
      desc: "Revenue, conversion, top products — per storefront.",
    },
    {
      icon: "🚚",
      iconBg: "rgba(236,126,0,0.1)",
      title: "Your logistics choice",
      desc: "GIG, DHL, Glovo or self-ship. Multiple at once.",
    },
    {
      icon: "📤",
      iconBg: "rgba(0,0,0,0.05)",
      title: "Your data, always",
      desc: "Export everything. CSV, API. No lock-in by design.",
    },
    {
      icon: "✦",
      iconBg: "rgba(139,92,246,0.1)",
      title: "AI storefront design",
      desc: "Unique theme generated for each store. No two alike.",
    },
    {
      icon: "👥",
      iconBg: "rgba(0,168,126,0.08)",
      title: "Team access",
      desc: "Add staff, managers, collaborators with role permissions.",
    },
  ],
} as const;

export const pricingContent = {
  eyebrow: "Pricing",
  title: "Simple, honest pricing.",
  subtitle: "No hidden FX spread. Every fee shown before it's charged.",
  footnote:
    "Transparent FX · Self-serve payouts · Lifetime buyer access guarantee · NDPR compliant",
  tiers: [
    {
      plan: "Starter",
      amount: "Free",
      period: "forever",
      fee: "5% per sale",
      features: [
        "3 storefronts",
        "Digital, events, bookings",
        "Transparent FX payouts",
        "Basic analytics",
      ],
      cta: { label: "Get started free", href: "/coming-soon" },
      featured: false,
      buttonVariant: "pill-dark" as const,
    },
    {
      plan: "Creator",
      amount: "₦8,000",
      period: "per month",
      fee: "2% per sale",
      badge: "Most popular",
      features: [
        "5 storefronts + all types",
        "GIG · DHL · Glovo logistics",
        "Coupon engine",
        "Retainer / subscription plans",
        "Advanced analytics",
        "3 team members",
      ],
      cta: { label: "Start Creator plan", href: "/coming-soon" },
      featured: true,
      buttonVariant: "pill-light" as const,
    },
    {
      plan: "Pro",
      amount: "₦20,000",
      period: "per month",
      fee: "0.5% per sale",
      features: [
        "Unlimited storefronts",
        "Custom domain per store",
        "AI storefront design",
        "Affiliate programme",
        "API access",
        "Unlimited team members",
      ],
      cta: { label: "Go Pro", href: "/coming-soon" },
      featured: false,
      buttonVariant: "pill-dark" as const,
    },
  ],
} as const;

export const ctaContent = {
  title: "Your craft deserves\na better platform.",
  sub: "Join creators across Africa building their digital business on Troven.",
  actions: {
    primary: { href: "/coming-soon", label: "Create your store →" },
    secondary: { href: "/coming-soon", label: "Talk to us" },
  },
  note: "No credit card required · Free to start · Cancel anytime",
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
