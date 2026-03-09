import {Metadata} from "next";

import AboutPageClient from "@/app/about/about-page-client";

export const metadata: Metadata = {
    title: "Acerca de Nosotros · Gaia Médico Tradicional",
    description: "Conoce nuestra misión, valores y al equipo detrás de Gaia Médico Tradicional en Querétaro.",
}

export default function AboutPage() {
    return <AboutPageClient/>
}