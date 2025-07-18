"use client";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";

import {Product} from "@/data/products";

export default function ProductCard({p}: { p: Product }) {
    const waMsg = encodeURIComponent(`Hola, me interesa el producto: ${p.name} (${p.size}) · $${p.price}`);
    const waLink = `https://wa.me/524422799328?text=${waMsg}`;

    return (
        <Card elevation={1} className="flex flex-col">
            {/* Imagen placeholder (puedes reemplazar con <Image>) */}
            <div className="h-36 bg-green-50 flex items-center justify-center text-green-600">
                <span className="text-lg font-semibold">{p.category}</span>
            </div>

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
                        <LocalShippingIcon fontSize="inherit"/> Envío disponible
                    </Typography>
                )}
            </CardContent>

            <CardActions className="pt-0">
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Pedir por WhatsApp
                </Button>
            </CardActions>
        </Card>
    );
}