import {Metadata} from "next";

import ServicesPageClient from "@/app/services/services-page-client";

export const metadata: Metadata = {
    title: "Conoce Nuestros Servicios · Gaia Médico Tradicional",
}

export default function ServicesPage() {
    return <ServicesPageClient/>
}