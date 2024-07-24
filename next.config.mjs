import nextPWA from 'next-pwa';
import nextMdx from '@next/mdx'
import withSerwistInit from "@serwist/next";

/** @type {import('next').NextConfig} */
const withPWA = nextPWA({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public'
})
const withMDX = nextMdx()

const withSerwist = withSerwistInit({
  // Note: This is only an example. If you use Pages Router,
  // use something else that works, such as "service-worker/index.ts".
  swSrc: "app/sw.ts",
  swDest: "public/sw.js",
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

export default withPWA(withMDX(nextConfig))

// module.exports = withMDX({
//   // Append the default value with md extensions
//   pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
// })
