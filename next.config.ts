import type {NextConfig} from "next";

/**
 * Allow next/image to optimize files that live in your Firebase Storage
 * bucket.  The bucket is served via:
 * https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/<path>
 *
 * If you change project or bucket name, update `pathname`.
 */
const nextConfig: NextConfig = {
    output: "export",
    trailingSlash: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "storage.googleapis.com",
                pathname: "/gaia-web-a0afb.firebasestorage.app/**",
            },
        ],
    },
};

export default nextConfig;
