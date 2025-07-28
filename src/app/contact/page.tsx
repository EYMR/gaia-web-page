import {Metadata} from "next";

import ContactPageClient from "@/app/contact/contact-page-client";

export const metadata: Metadata = {
    title: "Envíanos un Mensaje · Gaia Médico Tradicional",
}

export default function ContactPage() {
    return <ContactPageClient/>
}