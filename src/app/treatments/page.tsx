import {Metadata} from "next";

import TreatmentsPageClient from "@/app/treatments/treatments-page-client";


export const metadata: Metadata = {
    title: "Tratamientos · Gaia Médico Tradicional",
}

export default function TreatmentsPage() {
    return <TreatmentsPageClient/>
}