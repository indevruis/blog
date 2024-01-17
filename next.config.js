const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, //! 한글 유니코드 관련 오류가 나타나면 false로 바꿔볼 것
}

module.exports = withContentlayer(nextConfig)
