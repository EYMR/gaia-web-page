import {Metadata} from "next";

import ProductosPageClient from "@/app/products/products-page-client";

export const metadata: Metadata = {
    title: "Nuestros Productos · Gaia Médico Tradicional",
    description: "Explora nuestra línea de productos naturales y herbolarios para tu bienestar integral.",
}

export default function ProductsPage() {
    return <ProductosPageClient/>
}