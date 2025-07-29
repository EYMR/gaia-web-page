import type {Metadata, Viewport} from "next";
import type {ReactNode} from "react";

import {Geist, Geist_Mono} from "next/font/google";

import "./globals.css";
import ThemeRegistry from "@/components/theme-registry";

/* Fonts */
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#16a34a",
};

export const metadata: Metadata = {
    metadataBase: new URL("https://www.gaiamedicotradicional.com.mx"),
    title: {
        template: "%s | Gaia Medico Tradicional",
        default: "Gaia Medico Tradicional",
    },
    description: "Medicina tradicional y holística para tu bienestar integral. Tratamientos naturales respaldados por siglos de sabiduría ancestral.",
    keywords: ["medicina tradicional", "medicina holística", "tratamientos naturales", "bienestar integral", "Gaia"],
    authors: [{name: "Gaia Medico Tradicional"}],
    creator: "Gaia Medico Tradicional",
    publisher: "Gaia Medico Tradicional",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        siteName: "Gaia Medico Tradicional",
        title: "Gaia Medico Tradicional",
        description: "Medicina tradicional y holística para tu bienestar integral. Tratamientos naturales respaldados por siglos de sabiduría ancestral.",
        locale: "es_MX",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Gaia Medico Tradicional",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Gaia Medico Tradicional",
        description: "Medicina tradicional y holística para tu bienestar integral. Tratamientos naturales respaldados por siglos de sabiduría ancestral.",
        images: ["/og-image.jpg"],
    },
    icons: {
        icon: [
            {url: "/icon", sizes: "32x32", type: "image/png"},
            {url: "/icon-192", sizes: "192x192", type: "image/png"},
            {url: "/icon-512", sizes: "512x512", type: "image/png"},
        ],
        apple: [{url: "/apple-icon", sizes: "180x180", type: "image/png"}],
    },
};

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="es">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
        >
        <ThemeRegistry>{children}</ThemeRegistry>
        </body>
        </html>
    );
}