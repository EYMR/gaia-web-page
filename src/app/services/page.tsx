import type {Metadata} from "next";

import ServicesPageClient from "@/app/services/services-page-client";

export const metadata: Metadata = {
    title: "Servicios de Medicina Tradicional",
    description: "Conoce nuestros servicios de medicina tradicional y holística. Tratamientos naturales personalizados para tu bienestar integral.",
    keywords: ["servicios medicina tradicional", "tratamientos holísticos", "terapias naturales"],
    alternates: {
        canonical: "/services",
    },
    openGraph: {
        title: "Servicios de Medicina Tradicional | Gaia Medico Tradicional",
        description: "Conoce nuestros servicios de medicina tradicional y holística. Tratamientos naturales personalizados para tu bienestar integral.",
        url: "/services",
    },
    twitter: {
        title: "Servicios de Medicina Tradicional | Gaia Medico Tradicional",
        description: "Conoce nuestros servicios de medicina tradicional y holística. Tratamientos naturales personalizados para tu bienestar integral.",
    },
}

export default function ServicesPage() {
    return <ServicesPageClient/>
}