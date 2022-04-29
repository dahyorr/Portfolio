/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['tsparticles']);
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

module.exports = withMDX(withTM({
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: {
    domains: ['source.unsplash.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  }
}))

// module.exports = withMDX({
//   // Append the default value with md extensions
//   pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
// })
