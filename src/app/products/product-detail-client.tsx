"use client"

import {ArrowLeft, ChevronLeft, ChevronRight, MessageCircle, Share2, ShoppingBag, Star} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {useMemo, useState} from "react"

import type {Product} from "@/data/products"

import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"

function currency(n?: number) {
    if (n == null) return ""
    return n.toLocaleString("es-MX", {style: "currency", currency: "MXN", maximumFractionDigits: 0})
}

export default function ProductDetailClient({product}: { product: Product }) {
    const name = product.name || "Producto"
    const gallery = useMemo(() => {
        const arr = product.image ? [product.image] : []
        return Array.from(new Set(arr))
    }, [product.image])

    const [active, setActive] = useState(0)
    /*const [isFavorite, setIsFavorite] = useState(false)*/

    const handleNext = () => setActive((p) => Math.min(p + 1, gallery.length - 1))
    const handleBack = () => setActive((p) => Math.max(p - 1, 0))

    const waText = encodeURIComponent(
        `Hola. Me interesa el producto: ${name}${product.price ? ` (${currency(product.price)})` : ""}. ¿Podrían darme más información?`,
    )
    const waLink = `https://wa.me/524422799328?text=${waText}`

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Enhanced Breadcrumb */}
                <div className="mb-8">
                    <Link
                        href="/products"
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform"/>
                        Volver al catálogo
                    </Link>
                </div>

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Enhanced Gallery */}
                    <div className="space-y-4">
                        <Card className="overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
                            <div className="relative aspect-square group">
                                {gallery.length > 0 ? (
                                    <>
                                        <Image
                                            alt={`${name} - imagen ${active + 1}`}
                                            src={gallery[active] || "/placeholder.svg"}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            priority
                                        />
                                        {/* Image overlay with share button */}
                                        <div
                                            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Button size="sm" variant="secondary"
                                                    className="bg-white/90 backdrop-blur-sm">
                                                <Share2 className="w-4 h-4"/>
                                            </Button>
                                        </div>
                                    </>
                                ) : (
                                    <div
                                        className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                                        <div className="text-center space-y-2">
                                            <ShoppingBag className="w-12 h-12 text-slate-400 mx-auto"/>
                                            <p className="text-sm text-slate-500">Sin imágenes disponibles</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Enhanced Navigation */}
                            {gallery.length > 1 && (
                                <div className="flex items-center justify-between p-4 bg-white/50 backdrop-blur-sm">
                                    <Button
                                        onClick={handleBack}
                                        disabled={active === 0}
                                        variant="outline"
                                        size="sm"
                                        className="disabled:opacity-30 bg-transparent"
                                    >
                                        <ChevronLeft className="w-4 h-4"/>
                                    </Button>

                                    <div className="flex gap-2">
                                        {gallery.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setActive(index)}
                                                className={`w-2 h-2 rounded-full transition-all ${
                                                    index === active ? "bg-blue-600 w-6" : "bg-slate-300 hover:bg-slate-400"
                                                }`}
                                            />
                                        ))}
                                    </div>

                                    <Button
                                        onClick={handleNext}
                                        disabled={active === gallery.length - 1}
                                        variant="outline"
                                        size="sm"
                                        className="disabled:opacity-30 bg-transparent"
                                    >
                                        <ChevronRight className="w-4 h-4"/>
                                    </Button>
                                </div>
                            )}
                        </Card>

                        {/* Thumbnail strip for multiple images */}
                        {gallery.length > 1 && (
                            <div className="flex gap-2 overflow-x-auto pb-2">
                                {gallery.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActive(index)}
                                        className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                                            index === active
                                                ? "border-blue-600 ring-2 ring-blue-200"
                                                : "border-slate-200 hover:border-slate-300"
                                        }`}
                                    >
                                        <Image
                                            src={img || "/placeholder.svg"}
                                            alt={`${name} thumbnail ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Enhanced Product Info */}
                    <div className="space-y-8">
                        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                            <CardContent className="p-8 space-y-6">
                                {/* Header with badges */}
                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {product.category && (
                                            <Badge variant="secondary"
                                                   className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                                                {product.category}
                                            </Badge>
                                        )}
                                        {product.size && (
                                            <Badge variant="outline" className="border-slate-300">
                                                {product.size}
                                            </Badge>
                                        )}
                                        {product.sendable && (
                                            <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                                                <ShoppingBag className="w-3 h-3 mr-1"/>
                                                Envío disponible
                                            </Badge>
                                        )}
                                    </div>

                                    <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight text-balance">{name}</h1>
                                </div>

                                {/* Price with enhanced styling */}
                                {product.price != null && (
                                    <div className="flex items-baseline gap-3">
                                        <span
                                            className="text-4xl font-bold text-blue-600">{currency(product.price)}</span>
                                        <div className="flex items-center gap-1 text-sm text-slate-500">
                                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400"/>
                                            <span>4.8 (124 reseñas)</span>
                                        </div>
                                    </div>
                                )}

                                {/* Description */}
                                {product.description && (
                                    <div className="prose prose-slate max-w-none">
                                        <p className="text-lg text-slate-600 leading-relaxed">{product.description}</p>
                                    </div>
                                )}

                                {/* Divider */}
                                <div className="border-t border-slate-200"></div>

                                {/* Enhanced Action Buttons */}
                                <div className="space-y-4">
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="flex-1 bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                                        >
                                            <a
                                                href={waLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2"
                                            >
                                                <MessageCircle className="w-5 h-5"/>
                                                Consultar por WhatsApp
                                            </a>
                                        </Button>

                                        {/* <Button
                                            onClick={() => setIsFavorite(!isFavorite)}
                                            variant="outline"
                                            size="lg"
                                            className="border-slate-300 hover:border-red-300 hover:bg-red-50 transition-all duration-200"
                                        >
                                            <Heart
                                                className={`w-5 h-5 transition-colors ${
                                                    isFavorite ? "fill-red-500 text-red-500" : "text-slate-600"
                                                }`}
                                            />
                                            {isFavorite ? "En favoritos" : "Agregar a favoritos"}
                                        </Button>*/}
                                    </div>

                                    {/* Trust indicators */}
                                    <div className="bg-slate-50 rounded-lg p-4 space-y-2">
                                        <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            <span>Respuesta inmediata</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                            <span>Atención personalizada garantizada</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Additional Info Cards */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
                                <CardContent className="p-6 text-center">
                                    <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-2"/>
                                    <h3 className="font-semibold text-slate-900 mb-1">Consulta Gratis</h3>
                                    <p className="text-sm text-slate-600">Sin compromiso</p>
                                </CardContent>
                            </Card>

                            {product.sendable && (
                                <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
                                    <CardContent className="p-6 text-center">
                                        <ShoppingBag className="w-8 h-8 text-green-600 mx-auto mb-2"/>
                                        <h3 className="font-semibold text-slate-900 mb-1">Envío Nacional</h3>
                                        <p className="text-sm text-slate-600">A todo México</p>
                                    </CardContent>
                                </Card>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
