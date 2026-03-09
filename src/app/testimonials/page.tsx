import {Metadata} from "next";

import TestimonialsPageClient from "@/app/testimonials/testimonials-page-client";


export const metadata: Metadata = {
    title: "Testimonios · Experiencias Reales",
    description: "Lee experiencias reales de pacientes que han mejorado su salud con nuestros tratamientos de medicina tradicional.",
}

export default function TestimonialsPage() {
    return <TestimonialsPageClient/>
}