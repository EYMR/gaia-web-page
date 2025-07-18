import type {Metadata} from "next";
import type {ReactNode} from "react";

import {Geist, Geist_Mono} from "next/font/google";

import "./globals.css";     // Make sure you import the global CSS
import Footer from "@/components/footer";
import Providers from "@/components/providers";
import WhatsAppButton from "@/components/whatsapp-button";

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
    title: "Gaia Medico Tradicional",
    description: "Medicina tradicional y holística para tu bienestar integral",
};

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="es">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
            suppressHydrationWarning // Add this prop to suppress the warning
        >
        <Providers>{children}</Providers>
        <Footer/>
        <WhatsAppButton/>
        </body>
        </html>
    );
}