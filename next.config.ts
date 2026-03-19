import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/jurisia-site",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
