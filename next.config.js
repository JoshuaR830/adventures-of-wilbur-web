const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['adventures-of-wilbur-images.s3.eu-west-2.amazonaws.com'],
    loader: 'custom'
  },
});