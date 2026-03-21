/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Required for tRPC server-side calls in RSC
    serverComponentsExternalPackages: ["@prisma/client"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co", // Supabase storage avatars
      },
    ],
  },
};

module.exports = nextConfig;
