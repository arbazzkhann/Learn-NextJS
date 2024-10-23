/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['dfstudio-d420.kxcdn.com'],
      remotePatterns: [
        
        {
          protocol: 'https', // It's better to use HTTPS for security
          hostname: 'www.menucool.com',
          port: '',
        },
      ],
  },
};

export default nextConfig;
