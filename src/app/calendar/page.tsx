import type {Metadata} from "next";

import {Suspense} from "react";

import AgendaPageClient from "@/app/calendar/calendar-page-client";

export const metadata: Metadata = {
    title: "Agenda tu Consulta",
    description: "Reserva una consulta con nuestros especialistas en medicina tradicional. Agenda tu cita para tratamientos naturales y holísticos.",
    keywords: ["agendar consulta", "cita medicina tradicional", "reservar tratamiento", "consulta holística"],
    alternates: {
        canonical: "/calendar",
    },
    openGraph: {
        title: "Agenda tu Consulta | Gaia Medico Tradicional",
        description: "Reserva una consulta con nuestros especialistas en medicina tradicional. Agenda tu cita para tratamientos naturales y holísticos.",
        url: "/calendar",
    },
    twitter: {
        title: "Agenda tu Consulta | Gaia Medico Tradicional",
        description: "Reserva una consulta con nuestros especialistas en medicina tradicional. Agenda tu cita para tratamientos naturales y holísticos.",
    },
}

export default function AgendaPage() {
    return (
        <Suspense>
            <AgendaPageClient/>
        </Suspense>
    )
}
