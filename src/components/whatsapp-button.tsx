"use client";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {Tooltip} from "@mui/material";
import Link from "next/link";

export default function WhatsAppButton() {
    const number = "524422799328";
    const message = encodeURIComponent("Hola, vi su página web y deseo más información");
    const href = `https://wa.me/${number}?text=${message}`;

    return (
        <Tooltip title="Escríbenos por WhatsApp" placement="left">
            <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="fixed bottom-6 right-6 z-50 flex items-center justify-center
                   h-14 w-14 rounded-full bg-green-600 text-white shadow-lg
                   hover:bg-green-700 transition-colors"
            >
                <WhatsAppIcon fontSize="large"/>
            </Link>
        </Tooltip>
    );
}