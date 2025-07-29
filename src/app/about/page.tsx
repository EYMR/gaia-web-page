import type {Metadata} from "next";

import AboutPageClient from "@/app/about/about-page-client";

export const metadata: Metadata = {
    title: "Sobre Nosotros",
    description: "Conoce nuestra historia, filosofía y compromiso con la medicina tradicional y holística. Más de 10 años de experiencia en tratamientos naturales.",
    keywords: ["sobre Gaia", "medicina tradicional", "historia", "filosofía", "tratamientos naturales"],
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "Sobre Nosotros | Gaia Medico Tradicional",
        description: "Conoce nuestra historia, filosofía y compromiso con la medicina tradicional y holística. Más de 10 años de experiencia en tratamientos naturales.",
        url: "/about",
    },
    twitter: {
        title: "Sobre Nosotros | Gaia Medico Tradicional",
        description: "Conoce nuestra historia, filosofía y compromiso con la medicina tradicional y holística. Más de 10 años de experiencia en tratamientos naturales.",
    },
}

export default function AboutPage() {
    return <AboutPageClient/>
}