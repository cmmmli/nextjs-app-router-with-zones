/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    const web_url = process.env.WEB_URL || "http://localhost:3001";

    return [
      {
        source: "/web",
        destination: `${web_url}/web`,
      },
      {
        source: "/web/:path*",
        destination: `${web_url}/web/:path*`,
      },
    ];
  },
};

export default nextConfig;
