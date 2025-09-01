"use client";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import {Product} from "@/data/products";

function slugify(input: string) {
    return input
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
}

export default function ProductCard({p}: { p: Product }) {
    const slug = p.slug ?? slugify(p.name || p.id);
    const detailsHref = `/products/${slug}`;

    return (
        <Card elevation={1} className="flex flex-col">
            {/* Imagen clicable */}
            <Link href={detailsHref}
                  className="relative h-36 block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 rounded-t-md">
                {p.image ? (
                    <Image src={p.image} alt={p.name} fill className="object-cover"/>
                ) : (
                    <div className="h-36 bg-green-50 flex items-center justify-center text-green-600">
                        <span className="text-lg font-semibold">{p.category}</span>
                    </div>
                )}
            </Link>

            <CardContent className="flex-1">
                <Typography variant="h6" fontWeight={600}>
                    {p.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {p.size}
                </Typography>
                <Typography variant="subtitle1" className="mt-1">
                    ${p.price} MXN
                </Typography>
                {p.sendable && (
                    <Typography variant="caption" color="text.secondary" className="flex items-center gap-1 mt-1">
                        <LocalShippingIcon fontSize="inherit"/> Envío incluido
                    </Typography>
                )}
            </CardContent>

            <CardActions className="pt-0">
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    component={Link}
                    href={detailsHref}
                    aria-label={`Ver detalles de ${p.name}`}
                >
                    Detalles
                </Button>
            </CardActions>
        </Card>
    );
}