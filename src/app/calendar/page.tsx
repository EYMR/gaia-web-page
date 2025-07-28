import {Metadata} from "next";

import AgendaPageClient from "@/app/calendar/calendar-page-client";

export const metadata: Metadata = {
    title: "Agenda una Consulta · Gaia Médico Tradicional",
}

export default function AgendaPage() {
    return <AgendaPageClient/>
}