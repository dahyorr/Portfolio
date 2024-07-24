import nextMdx from '@next/mdx'
import withSerwistInit from "@serwist/next";

/** @type {import('next').NextConfig} */
const withMDX = nextMdx()

const withSerwist = withSerwistInit({
  swSrc: "app/sw.ts",
  swDest: "public/sw.js",
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
    ],
  },
  transpilePackages: ['tsparticles'],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  }
}

export default withSerwist(withMDX(nextConfig))