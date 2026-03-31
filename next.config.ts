import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/jurisgpt-site",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
