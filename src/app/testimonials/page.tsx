"use client"

import {Calendar, ChevronDown, Filter, Heart, Play, Star} from "lucide-react"
import Image from "next/image";
import {useState} from "react"

import PageLayout from "@/components/page-layout"
import {Badge} from "@/components/ui/badge"
import {testimonials} from "@/data/testimonials";

/*export const metadata = {
    title: "Testimonios · Experiencias Reales",
}*/

const conditionCategories = [
    {id: "all", name: "Todos los Casos", count: 24},
    {id: "anxiety", name: "Ansiedad y Estrés", count: 6},
    {id: "pain", name: "Dolor Crónico", count: 5},
    {id: "digestive", name: "Problemas Digestivos", count: 4},
    {id: "sleep", name: "Trastornos del Sueño", count: 3},
    {id: "hormonal", name: "Desequilibrios Hormonales", count: 3},
    {id: "respiratory", name: "Problemas Respiratorios", count: 2},
    {id: "skin", name: "Condiciones de la Piel", count: 1},
]


export default function TestimonialsPage() {
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [showFilters, setShowFilters] = useState(false)

    const filteredTestimonials =
        selectedCategory === "all" ? testimonials : testimonials.filter((t) => t.category === selectedCategory)

    return (
        <PageLayout title="Testimonios de Nuestros Pacientes">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <section className="mb-12">
                    <div className="bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 rounded-lg p-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Historias Reales de Transformación</h2>
                        <p className="text-gray-600 text-lg max-w-4xl mx-auto mb-6">
                            Descubre cómo la medicina tradicional ha cambiado la vida de nuestros pacientes. Cada
                            testimonio
                            representa una historia única de sanación, esperanza y recuperación integral.
                        </p>
                        <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <Heart className="h-5 w-5 text-red-500"/>
                                <span>500+ Pacientes Atendidos</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="h-5 w-5 text-yellow-500"/>
                                <span>4.9/5 Satisfacción</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-5 w-5 text-blue-500"/>
                                <span>5+ Años de Experiencia</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Filters Section */}
                <section className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">Filtrar por Condición</h3>
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="md:hidden flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg"
                        >
                            <Filter className="h-4 w-4"/>
                            Filtros
                            <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`}/>
                        </button>
                    </div>

                    <div className={`${showFilters ? "block" : "hidden"} md:block`}>
                        <div className="flex flex-wrap gap-3">
                            {conditionCategories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                        selectedCategory === category.id
                                            ? "bg-green-600 text-white"
                                            : "bg-green-100 text-green-700 hover:bg-green-200"
                                    }`}
                                >
                                    {category.name}
                                    <Badge variant="secondary" className="bg-white/20 text-current">
                                        {category.count}
                                    </Badge>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Results Counter */}
                <div className="mb-6">
                    <p className="text-gray-600">
                        Mostrando <span className="font-semibold">{filteredTestimonials.length}</span> testimonios
                        {selectedCategory !== "all" && (
                            <span>
                {" "}
                                para{" "}
                                <span className="font-semibold">
                  {conditionCategories.find((c) => c.id === selectedCategory)?.name}
                </span>
              </span>
                        )}
                    </p>
                </div>

                {/* Testimonials Grid */}
                <section className="mb-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredTestimonials.map((testimonial) => (
                            <article
                                key={testimonial.id}
                                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                            >
                                {/* Media Section */}
                                <div className="relative">
                                    {testimonial.type === "video" ? (
                                        <div className="relative">
                                            <Image
                                                src={testimonial.thumbnail || "/placeholder.svg"}
                                                alt={`Testimonio de ${testimonial.name}`}
                                                width={400}
                                                height={200}
                                                className="w-full h-48 object-cover"
                                                placeholder="blur"
                                                blurDataURL="/placeholder-blur.jpg"
                                                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                            />
                                            <div
                                                className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                                                <button
                                                    className="bg-white/90 hover:bg-white text-green-600 rounded-full p-3 transition-colors">
                                                    <Play className="h-6 w-6 ml-1"/>
                                                </button>
                                            </div>
                                            <Badge className="absolute top-3 left-3 bg-red-600">Video</Badge>
                                        </div>
                                    ) : (
                                        <div className="relative">
                                            <Image
                                                src={testimonial.image || "/placeholder.svg"}
                                                alt={`Testimonio de ${testimonial.name}`}
                                                width={400}
                                                height={200}
                                                className="w-full h-48 object-cover"
                                                placeholder="blur"
                                                blurDataURL="/placeholder-blur.jpg"
                                                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                            />
                                            <Badge className="absolute top-3 left-3 bg-blue-600">Imagen</Badge>
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="p-6">
                                    {/* Header */}
                                    <div className="mb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-bold text-gray-900">
                                                {testimonial.name}, {testimonial.age}
                                            </h3>
                                            <div className="flex items-center">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400"/>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-500 mb-2">{testimonial.location}</p>
                                        <Badge variant="outline" className="text-xs">
                                            {testimonial.condition}
                                        </Badge>
                                    </div>

                                    {/* Quote */}
                                    <blockquote
                                        className="text-gray-700 mb-4 italic">&#34;{testimonial.quote}&#34;</blockquote>

                                    {/* Treatment Info */}
                                    <div className="space-y-2 mb-4 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Tratamiento:</span>
                                            <span className="font-medium">{testimonial.treatment}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Duración:</span>
                                            <span className="font-medium">{testimonial.duration}</span>
                                        </div>
                                    </div>

                                    {/* Results */}
                                    <div className="mb-4">
                                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Resultados
                                            Obtenidos:</h4>
                                        <ul className="space-y-1">
                                            {testimonial.results.map((result, index) => (
                                                <li key={index}
                                                    className="text-xs text-gray-600 flex items-start gap-2">
                                                    <div
                                                        className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"/>
                                                    {result}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Footer */}
                                    <div
                                        className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3"/>
                                            {testimonial.date}
                                        </div>
                                        <button className="text-green-600 hover:text-green-700 font-medium">
                                            Leer historia completa →
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <section>
                    <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-white text-center">
                        <h2 className="text-2xl font-bold mb-4">¿Listo para Escribir tu Propia Historia de
                            Sanación?</h2>
                        <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                            Únete a cientos de pacientes que han transformado su salud con medicina tradicional. Tu
                            historia de
                            recuperación puede ser la siguiente.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/consults"
                                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Agendar Consulta
                            </a>
                            <a
                                href="/contact"
                                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                            >
                                Conocer Más
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    )
}
