/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['tsparticles']);

module.exports = withTM({
  reactStrictMode: true,
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
})
