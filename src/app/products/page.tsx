import type {Metadata} from "next";

import ProductosPageClient from "@/app/products/products-page-client";

export const metadata: Metadata = {
    title: "Productos Naturales",
    description: "Descubre nuestra selección de productos naturales para tu bienestar. Remedios tradicionales, suplementos y más.",
    keywords: ["productos naturales", "remedios tradicionales", "suplementos naturales", "medicina holística", "kalanchoe", "lechero", "neem", "uña de gato", "detox"],
    alternates: {
        canonical: "/products",
    },
    openGraph: {
        title: "Productos Naturales | Gaia Medico Tradicional",
        description: "Descubre nuestra selección de productos naturales para tu bienestar. Remedios tradicionales, suplementos y más.",
        url: "/products",
    },
    twitter: {
        title: "Productos Naturales | Gaia Medico Tradicional",
        description: "Descubre nuestra selección de productos naturales para tu bienestar. Remedios tradicionales, suplementos y más.",
    },
}

export default function ProductsPage() {
    return <ProductosPageClient/>
}