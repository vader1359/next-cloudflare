/** @type {import('next').NextConfig} */

import stailwc from "stailwc/install"
import withPWA from "next-pwa"
import withBundleAnalyzer from "@next/bundle-analyzer"
import million from "million/compiler"

const pwaConfig = {
  dest: "public",
  disable: process.env.NODE_ENV === "development",
}

const bundleAnalyzerConfig = {
  enabled: process.env.ANALYZE === "true",
}

const withPWAConfig = withPWA(pwaConfig)
const withBundleAnalyzerConfig = withBundleAnalyzer(bundleAnalyzerConfig)

const nextConfig = {
  staticPageGenerationTimeout: 1000,

  swcMinify: true,
  images: {
    // unoptimized: true,
    dangerouslyAllowSVG: true,
    domains: ["www.notion.so", "s3.us-west-2.amazonaws.com","res.cloudinary.com"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "res.cloudinary.com",
    //   },

    //   {
    //     protocol: "https",
    //     hostname: "www.notion.so",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "s3.us-west-2.amazonaws.com",
    //   },
    // ],
  },
  experimental: {
    scrollRestoration: true,
    webpackBuildWorker: true,
    nextScriptWorkers: true,
    swcPlugins: [
      stailwc({
        engine: "styled-components", // or "styled-components"
      }),
    ],
  },
  compiler: {
    styledComponents: true,
  },
}

export default withBundleAnalyzerConfig(withPWAConfig(million.next(nextConfig)))

