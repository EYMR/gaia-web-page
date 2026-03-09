import {Metadata} from "next";

import ContactPageClient from "@/app/contact/contact-page-client";

export const metadata: Metadata = {
    title: "Envíanos un Mensaje · Gaia Médico Tradicional",
    description: "Contáctanos por WhatsApp, teléfono o correo. Estamos en El Pueblito, Corregidora, Querétaro.",
}

export default function ContactPage() {
    return <ContactPageClient/>
}