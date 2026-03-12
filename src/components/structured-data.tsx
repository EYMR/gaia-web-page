import {BUSINESS_ADDRESS, BUSINESS_EMAIL, BUSINESS_PHONE, GEO, SITE_NAME, SITE_URL, SOCIAL_LINKS,} from "@/lib/constants";

const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": SITE_NAME,
    "description": "Medicina tradicional y holística para tu bienestar integral. Tratamientos naturales respaldados por siglos de sabiduría ancestral.",
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo.jpg`,
    "image": `${SITE_URL}/logo.jpg`,
    "telephone": BUSINESS_PHONE,
    "email": BUSINESS_EMAIL,
    "address": {
        "@type": "PostalAddress",
        "streetAddress": BUSINESS_ADDRESS.street,
        "addressLocality": BUSINESS_ADDRESS.locality,
        "addressRegion": BUSINESS_ADDRESS.region,
        "postalCode": BUSINESS_ADDRESS.postalCode,
        "addressCountry": BUSINESS_ADDRESS.country,
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": GEO.latitude,
        "longitude": GEO.longitude,
    },
    "sameAs": [
        SOCIAL_LINKS.facebook,
        SOCIAL_LINKS.instagram,
    ],
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00",
        },
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "11:00",
            "closes": "14:00",
        },
    ],
    "priceRange": "$$",
    "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": GEO.latitude,
            "longitude": GEO.longitude,
        },
        "geoRadius": "50000",
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de Medicina Tradicional",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "MedicalProcedure",
                    "name": "Consulta Presencial Integral",
                    "description": "Evaluación completa con medicina tradicional china y recomendaciones herbolarias personalizadas.",
                },
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "MedicalProcedure",
                    "name": "Consulta en Línea",
                    "description": "Orientación por videollamada para quienes no pueden acudir al consultorio.",
                },
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "MedicalProcedure",
                    "name": "Sesión de Acupuntura",
                    "description": "Aplicación de agujas según diagnóstico MTC para dolor, estrés y balance energético.",
                },
            },
        ],
    },
};

export default function StructuredData() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
        />
    );
}
