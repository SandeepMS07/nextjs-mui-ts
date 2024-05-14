/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "inazstgpfs3001.blob.core.windows.net",
      },
      {
        protocol: "https",
        hostname: "alumnikenverse.blob.core.windows.net",
      },
    ],
  },
};

export default nextConfig;
