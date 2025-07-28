import {Metadata} from "next";

import ProductosPageClient from "@/app/products/products-page-client";

export const metadata: Metadata = {
    title: "Nuestros Productos · Gaia Médico Tradicional",
}

export default function ProductsPage() {
    return <ProductosPageClient/>
}