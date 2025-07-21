import type React from "react"

import Footer from "@/components/footer";
import {Toaster} from "@/components/ui/toaster";
import WhatsAppButton from "@/components/whatsapp-button";

import Navigation from "./navigation"

interface PageLayoutProps {
    children: React.ReactNode
    title?: string
}

export default function PageLayout({children, title}: PageLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation/>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {title && (
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                    </div>
                )}
                {children}
                <Toaster/>
            </main>
            <WhatsAppButton/>
            <Footer/>
        </div>
    )
}
