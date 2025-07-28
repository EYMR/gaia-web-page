import {Metadata} from "next";

import TestimonialsPageClient from "@/app/testimonials/testimonials-page-client";


export const metadata: Metadata = {
    title: "Testimonios · Experiencias Reales",
}

export default function TestimonialsPage() {
    return <TestimonialsPageClient/>
}