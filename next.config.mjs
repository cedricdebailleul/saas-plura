/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "uplaodthing.com",
      "utfs.io",
      "img.clerk.com",
      "subdomain",
      "files.stripe.com",
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
