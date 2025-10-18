import type { NextConfig } from "next";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const remotePatterns =
    (() => {
        try {
            if (!apiUrl) return [];
            const u = new URL(apiUrl);
            return [{ protocol: (u.protocol.replace(":", "") as "http" | "https"), hostname: u.hostname }];
        } catch {
            return [];
        }
    })();

const nextConfig: NextConfig = {
    images: { remotePatterns },
};

export default nextConfig;