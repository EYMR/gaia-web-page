import {Metadata} from "next";

import TreatmentsPageClient from "@/app/treatments/treatments-page-client";


export const metadata: Metadata = {
    title: "Tratamientos · Gaia Médico Tradicional",
    description: "Conoce las condiciones que tratamos con medicina tradicional y terapias naturales personalizadas.",
}

export default function TreatmentsPage() {
    return <TreatmentsPageClient/>
}