import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Match the live kkcp.ac.in URLs which all carry a trailing slash (e.g. /about/).
  trailingSlash: true,
};

export default nextConfig;
