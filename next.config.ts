import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    /**
     * Ensure Turbopack uses this project directory as the workspace root.
     * Prevents the warning about multiple lockfiles being detected above.
     */
    root: __dirname,
  },
};

export default nextConfig;
