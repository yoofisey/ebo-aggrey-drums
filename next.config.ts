import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      {
        source: "/library",
        destination: "/materials",
        permanent: true,
      },
      {
        source: "/library/:slug",
        destination: "/materials/:slug",
        permanent: true,
      },
      {
        source: "/upload",
        destination: "/materials/add",
        permanent: true,
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
