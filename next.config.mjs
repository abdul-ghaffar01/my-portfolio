/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '/u/**',
            },
        ],
    },
    env: {
        NEXT_PUBLIC_CHATBOT_BACKEND_URL: process.env.NEXT_PUBLIC_CHATBOT_BACKEND_URL,
    }
};

export default nextConfig;
