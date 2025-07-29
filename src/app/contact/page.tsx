import type {Metadata} from "next";

import ContactPageClient from "@/app/contact/contact-page-client";

export const metadata: Metadata = {
    title: "Contacto",
    description: "Ponte en contacto con Gaia Medico Tradicional. Resolvemos tus dudas sobre nuestros tratamientos naturales y medicina holística.",
    keywords: ["contacto", "medicina tradicional", "consultas", "ubicación", "teléfono"],
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contacto | Gaia Medico Tradicional",
        description: "Ponte en contacto con Gaia Medico Tradicional. Resolvemos tus dudas sobre nuestros tratamientos naturales y medicina holística.",
        url: "/contact",
    },
    twitter: {
        title: "Contacto | Gaia Medico Tradicional",
        description: "Ponte en contacto con Gaia Medico Tradicional. Resolvemos tus dudas sobre nuestros tratamientos naturales y medicina holística.",
    },
}

export default function ContactPage() {
    return <ContactPageClient/>
}