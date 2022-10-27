const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});
module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'mdx'],
  swcMinify: true, // handle minification with rust compiler
  images: {
    domains: ['miravicson.com', 'localhost', 'res.cloudinary.com'],
  },
});