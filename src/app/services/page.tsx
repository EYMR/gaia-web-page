import {Metadata} from "next";

import ServicesPageClient from "@/app/services/services-page-client";

export const metadata: Metadata = {
    title: "Conoce Nuestros Servicios · Gaia Médico Tradicional",
    description: "Descubre nuestros servicios de medicina tradicional: acupuntura, herbolaria, terapia neural y más en Querétaro.",
}

export default function ServicesPage() {
    return <ServicesPageClient/>
}