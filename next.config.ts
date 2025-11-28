import type { NextConfig } from "next";

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://dany-art-production.up.railway.app';



const remotePatterns = (() => {
    try {
        const u = new URL(strapiUrl);
        const patterns = [
            {
                protocol: (u.protocol.replace(":", "") as "http" | "https"),
                hostname: u.hostname,
                pathname: '/uploads/**',
            },
            {
                protocol: 'https' as const,
                hostname: 'res.cloudinary.com',
                pathname: '/**',
            }
        ];



        return patterns;
    } catch (error) {
        console.error('❌ Chyba pri parsovaní URL:', error);
        return [];
    }
})();

const nextConfig: NextConfig = {
    images: {
        remotePatterns,
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
};

export default nextConfig;