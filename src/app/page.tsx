import type {Metadata} from "next"

import HomePageClient from "@/app/home/home-page-client";


export const metadata: Metadata = {
    title: "Gaia Medico Tradicional | Medicina Natural y Holística",
    description: "Descubre el poder curativo de la naturaleza con nuestros tratamientos respaldados por siglos de sabiduría ancestral. Medicina tradicional para tu bienestar integral.",
    keywords: ["medicina tradicional", "medicina holística", "tratamientos naturales", "bienestar integral", "Gaia", "kalanchoe", "lechero", "neem", "uña de gato", "detox"],
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Gaia Medico Tradicional | Medicina Natural y Holística",
        description: "Descubre el poder curativo de la naturaleza con nuestros tratamientos respaldados por siglos de sabiduría ancestral. Medicina tradicional para tu bienestar integral.",
        url: "/",
        type: "website",
    },
    twitter: {
        title: "Gaia Medico Tradicional | Medicina Natural y Holística",
        description: "Descubre el poder curativo de la naturaleza con nuestros tratamientos respaldados por siglos de sabiduría ancestral. Medicina tradicional para tu bienestar integral.",
    },
}

export default function HomePage() {
    return <HomePageClient/>
}