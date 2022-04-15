/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['tsparticles']);

module.exports = withTM({
  reactStrictMode: true,
})
