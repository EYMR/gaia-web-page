import type {Metadata} from "next";
import type {ReactNode} from "react";

import {Geist, Geist_Mono} from "next/font/google";

import "./globals.css";
import StructuredData from "@/components/structured-data";
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

export const metadata: Metadata = {
    metadataBase: new URL("https://www.gaia-web-services.com.mx"),
    title: {
        default: "Gaia Médico Tradicional",
        template: "%s · Gaia Médico Tradicional",
    },
    description: "Medicina tradicional y holística para tu bienestar integral",
    keywords: [
        "medicina tradicional",
        "medicina holística",
        "acupuntura",
        "terapia neural",
        "herbolaria",
        "Querétaro",
        "Corregidora",
        "salud natural",
        "bienestar integral",
    ],
    authors: [{name: "Gaia Médico Tradicional"}],
    creator: "Gaia Médico Tradicional",
    openGraph: {
        title: "Gaia Médico Tradicional",
        description: "Medicina tradicional y holística para tu bienestar integral",
        url: "https://www.gaia-web-services.com.mx",
        siteName: "Gaia Médico Tradicional",
        locale: "es_MX",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Gaia Médico Tradicional",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Gaia Médico Tradicional",
        description: "Medicina tradicional y holística para tu bienestar integral",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "https://www.gaia-web-services.com.mx",
    },
    verification: {},
};

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="es">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
        >
        <StructuredData/>
        <ThemeRegistry>{children}</ThemeRegistry>
        </body>
        </html>
    );
}