/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/(\\d{4})/(\\d{2})/:post*',
        destination: '/blog/post/:post*',
        permanent: false,
      },
      {
        source: '/category/:category*',
        destination: '/blog/:category*',
        permanent: true,
      },
      {
        source: '/tag/:tag*',
        destination: '/blog/tag/:tag*',
        permanent: true,
      },
      {
        source: '/o-nas',
        destination: '/omnie',
        permanent: true,
      },
      {
        source: '/polityka-prywatnosci',
        destination: '/prywatnosc',
        permanent: true,
      },
      {
        source: '/warsztaty-fotograficzne/rezerwacja-terminu-warsztatow/',
        destination: '/warsztaty-fotograficzne/rezerwacja',
        permanent: true,
      }
    ]
  },
}

module.exports = nextConfig
