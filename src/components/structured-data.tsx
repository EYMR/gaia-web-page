const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Gaia Médico Tradicional",
    "description": "Medicina tradicional y holística para tu bienestar integral",
    "url": "https://www.gaia-web-services.com.mx",
    "telephone": "+524422799328",
    "email": "gaiamedicotradicional@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Callejón de la Saca 94",
        "addressLocality": "Corregidora",
        "addressRegion": "Querétaro",
        "postalCode": "76900",
        "addressCountry": "MX",
    },
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
};

export default function StructuredData() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
        />
    );
}
