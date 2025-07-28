"use client";

import {Container, ToggleButton, ToggleButtonGroup} from "@mui/material";
import {useState} from "react";

import PageLayout from "@/components/page-layout";
import ProductCard from "@/components/products/product-card";
import {products} from "@/data/products";

export default function ProductosPageClient() {
    const [filter, setFilter] = useState<"Todos" | "Paquetes Completos" | "Goteros" | "Tónicos" | "Detox" | "Pomadas" | "Otros">("Todos");
    const categories = ["Todos", "Paquetes Completos", "Goteros", "Tónicos", "Detox", "Pomadas", "Otros"] as const;

    const filtered = filter === "Todos" ? products : products.filter((p) => p.category === filter);

    return (
        <PageLayout title="Catálogo de Productos">
            <Container maxWidth="lg" className="py-20">


                {/* Filtros */}
                <div className="flex justify-center mb-10">
                    <ToggleButtonGroup
                        value={filter}
                        exclusive
                        onChange={(_, v) => v && setFilter(v)}
                        color="primary"
                        size="small"
                    >
                        {categories.map((c) => (
                            <ToggleButton key={c} value={c}>
                                {c}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                </div>

                {/* Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((p) => (
                        <ProductCard key={p.id} p={p}/>
                    ))}
                </div>
            </Container>
        </PageLayout>
    );
}