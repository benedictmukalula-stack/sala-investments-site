import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  turbopack: {
    root: __dirname,
  },
  typescript: {
    tsconfigPath: "tsconfig.json",
  },
};

export default nextConfig;
