// src/app/products/[slug]/page.tsx
import {notFound} from "next/navigation";

import ProductDetailClient from "@/app/products/product-detail-client";
import {products} from "@/data/products";

function slugify(input: string) {
    return input
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
}

// Para export estático, generamos los slugs en build
export function generateStaticParams() {
    return products.map((p) => ({
        slug: p.slug ? p.slug : slugify(p.name || String(p.id)),
    }));
}

// Evita rutas dinámicas no definidas
export const dynamicParams = false;

export default async function Page({params}: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const norm = decodeURIComponent(resolvedParams.slug).toLowerCase();

    const product = products.find((p) => {
        const s = (p.slug ? p.slug : slugify(p.name || String(p.id))).toLowerCase();
        return s === norm;
    });

    if (!product) return notFound();

    return <ProductDetailClient product={product}/>;
}