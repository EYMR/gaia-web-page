// src/app/products/[slug]/page.tsx
import type {Metadata} from "next";

import {notFound} from "next/navigation";

import ProductDetailClient from "@/app/products/product-detail-client";
import {products} from "@/data/products";
import {SITE_NAME, SITE_URL} from "@/lib/constants";

function slugify(input: string) {
    return input
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
}

function getSlug(p: (typeof products)[number]) {
    return p.slug ? p.slug : slugify(p.name || String(p.id));
}

function findProduct(slug: string) {
    const norm = decodeURIComponent(slug).toLowerCase();
    return products.find((p) => getSlug(p).toLowerCase() === norm);
}

// ── Static params ──────────────────────────────────────────────
export function generateStaticParams() {
    return products.map((p) => ({slug: getSlug(p)}));
}

export const dynamicParams = false;

// ── Per-product metadata (SEO) ─────────────────────────────────
export async function generateMetadata({params}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const {slug} = await params;
    const product = findProduct(slug);
    if (!product) return {};

    const title = `${product.name} – ${product.category}`;
    const description = product.description
        ? `${product.description} | ${product.size} · $${product.price} MXN`
        : `${product.name} (${product.category}) – ${product.size} · $${product.price} MXN. Producto natural de Gaia Médico Tradicional.`;

    return {
        title,
        description,
        alternates: {canonical: `/products/${getSlug(product)}`},
        openGraph: {
            title: `${title} | ${SITE_NAME}`,
            description,
            url: `/products/${getSlug(product)}`,
            images: product.image ? [{url: product.image, alt: product.name}] : undefined,
        },
        twitter: {
            title: `${title} | ${SITE_NAME}`,
            description,
            images: product.image ? [product.image] : undefined,
        },
    };
}

// ── Product JSON-LD ────────────────────────────────────────────
function ProductJsonLd({product}: { product: (typeof products)[number] }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.description || `${product.name} – producto natural de ${SITE_NAME}`,
        image: product.image || `${SITE_URL}/logo.jpg`,
        brand: {
            "@type": "Brand",
            name: SITE_NAME,
        },
        category: product.category,
        offers: {
            "@type": "Offer",
            url: `${SITE_URL}/products/${getSlug(product)}`,
            priceCurrency: "MXN",
            price: product.price,
            availability: product.sendable
                ? "https://schema.org/InStock"
                : "https://schema.org/LimitedAvailability",
            seller: {
                "@type": "Organization",
                name: SITE_NAME,
            },
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
    );
}

// ── Page component ─────────────────────────────────────────────
export default async function Page({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;
    const product = findProduct(slug);

    if (!product) return notFound();

    return (
        <>
            <ProductJsonLd product={product}/>
            <ProductDetailClient product={product}/>
        </>
    );
}