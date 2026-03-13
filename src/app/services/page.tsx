import type {Metadata} from "next";

import ServicesPageClient from "@/app/services/services-page-client";
import {services} from "@/data/services";
import {SITE_NAME, SITE_URL} from "@/lib/constants";

export const metadata: Metadata = {
    title: "Servicios de Medicina Tradicional",
    description: "Conoce nuestros servicios de medicina tradicional y holística. Tratamientos naturales personalizados para tu bienestar integral.",
    keywords: ["servicios medicina tradicional", "tratamientos holísticos", "terapias naturales", "consulta medicina tradicional Querétaro", "acupuntura Corregidora"],
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

const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Servicios de Medicina Tradicional",
    itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
            "@type": "MedicalProcedure",
            name: s.name,
            description: s.description,
            provider: {
                "@type": "MedicalBusiness",
                name: SITE_NAME,
                url: SITE_URL,
            },
            offers: {
                "@type": "Offer",
                priceCurrency: "MXN",
                price: s.price,
                availability: "https://schema.org/InStock",
            },
        },
    })),
};

export default function ServicesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(servicesJsonLd)}}
            />
            <ServicesPageClient/>
        </>
    );
}