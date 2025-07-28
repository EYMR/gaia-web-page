import {Metadata} from "next";

import AboutPageClient from "@/app/about/about-page-client";

export const metadata: Metadata = {
    title: "Acerca de Nosotros · Gaia Médico Tradicional",
}

export default function AboutPage() {
    return <AboutPageClient/>
}