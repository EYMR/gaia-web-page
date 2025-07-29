import type {Metadata} from "next";

import TestimonialsPageClient from "@/app/testimonials/testimonials-page-client";

export const metadata: Metadata = {
    title: "Testimonios",
    description: "Lee las experiencias de nuestros pacientes con los tratamientos de medicina tradicional y holística en Gaia.",
    keywords: ["testimonios medicina tradicional", "opiniones pacientes", "experiencias tratamientos naturales"],
    alternates: {
        canonical: "/testimonials",
    },
    openGraph: {
        title: "Testimonios | Gaia Medico Tradicional",
        description: "Lee las experiencias de nuestros pacientes con los tratamientos de medicina tradicional y holística en Gaia.",
        url: "/testimonials",
    },
    twitter: {
        title: "Testimonios | Gaia Medico Tradicional",
        description: "Lee las experiencias de nuestros pacientes con los tratamientos de medicina tradicional y holística en Gaia.",
    },
}

export default function TestimonialsPage() {
    return <TestimonialsPageClient/>
}