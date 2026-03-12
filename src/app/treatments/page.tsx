import {Metadata} from "next";

import TreatmentsPageClient from "@/app/treatments/treatments-page-client";


export const metadata: Metadata = {
    title: "Tratamientos · Gaia Médico Tradicional",
    description: "Descubre nuestros tratamientos de medicina tradicional para diversas condiciones crónicas y agudas. Personalizados para cada paciente.",
    keywords: [
        "tratamientos medicina tradicional",
        "condiciones crónicas",
        "tratamientos personalizados",
        "medicina holística",
        "terapias naturales",
        "tratamientos para enfermedades",
        "medicina alternativa",
        "kalanchoe",
        "lechero",
        "neem",
        "uña de gato",
        "detox",
        "tratamientos naturales Querétaro",
        "medicina alternativa Corregidora",
    ],
    alternates: {
        canonical: "/treatments",
    },
    openGraph: {
        title: "Tratamientos | Gaia Médico Tradicional",
        description: "Descubre nuestros tratamientos de medicina tradicional para diversas condiciones crónicas y agudas. Personalizados para cada paciente.",
        url: "/treatments",
    },
    twitter: {
        title: "Tratamientos | Gaia Médico Tradicional",
        description: "Descubre nuestros tratamientos de medicina tradicional para diversas condiciones crónicas y agudas. Personalizados para cada paciente.",
    },
}

export default function TreatmentsPage() {
    return <TreatmentsPageClient/>
}