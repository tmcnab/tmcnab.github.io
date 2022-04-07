/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  }
})


const nextConfig = {
  reactStrictMode: true,
}

module.exports = withMDX({
  ...nextConfig,
  pageExtensions: ['mdx', 'tsx'],
})
