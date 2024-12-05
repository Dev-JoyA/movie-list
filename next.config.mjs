/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,  // Ensure this is enabled if using server actions
      },
      api: {
        bodyParser: {
          sizeLimit: '10GB', // Increase the body size limit to 10MB (adjust as needed)
        },
      },
};

export default nextConfig;
