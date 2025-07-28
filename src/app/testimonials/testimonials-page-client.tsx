"use client"

import {Calendar, ChevronDown, Filter, Heart, Play, Star} from "lucide-react"
import Image from "next/image"
import {useState} from "react"

import PageLayout from "@/components/page-layout";
import ImageDialog from "@/components/testimonials/image-dialog";
import VideoModal from "@/components/testimonials/video-modal";
import {Badge} from "@/components/ui/badge"
import {testimonials, type Testimonials} from "@/data/testimonials"

const conditionCategoryInfo = [
    {id: "all", name: "Todos los Casos"},
    {id: "chronic", name: "Padecimientos Crónicos"},
    {id: "digestive", name: "Problemas Digestivos"},
    {id: "social", name: "Comentarios en Redes Sociales"},
    /*{id: "pain", name: "Dolor Crónico"},*/
    /*{id: "sleep", name: "Trastornos del Sueño"},*/
    /*{id: "hormonal", name: "Desequilibrios Hormonales"},*/
    /*{id: "respiratory", name: "Problemas Respiratorios"},*/
    /*{id: "skin", name: "Condiciones de la Piel"},*/
];

const categoryCounts = testimonials.reduce((acc, testimonial) => {
    acc[testimonial.category] = (acc[testimonial.category] || 0) + 1;
    return acc;
}, {} as Record<string, number>);

const conditionCategories = conditionCategoryInfo.map(category => ({
    ...category,
    count: category.id === 'all'
        ? testimonials.length
        : (categoryCounts[category.id] || 0),
}));


export default function TestimonialsPageClient() {
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [showFilters, setShowFilters] = useState(false)
    const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonials | null>(null)

    const [selectedImage, setSelectedImage] = useState<{ url: string; name: string; treatment: string } | null>(null);


    const filteredTestimonials =
        selectedCategory === "all" ? testimonials : testimonials.filter((t) => t.category === selectedCategory)

    const handleVideoClick = (testimonial: Testimonials) => {
        console.log("➡️  Opening video for:", testimonial.name)
        setSelectedTestimonial(testimonial)
    }

    const handleImageClick = (testimonial: Testimonials) => {
        if (!testimonial.image) return;
        setSelectedImage({
            url: testimonial.image,
            name: testimonial.name,
            treatment: testimonial.treatment,
        });
    };

    const handleCloseModal = () => {
        setSelectedTestimonial(null)
    }

    // Function to get the best thumbnail for video testimonials
    const getVideoThumbnail = (testimonial: Testimonials) => {
        // Priority: thumbnail -> image -> generated placeholder with patient info
        if (testimonial.thumbnail) {
            return testimonial.thumbnail
        }
        if (testimonial.image) {
            return testimonial.image
        }
        // Generate a more descriptive placeholder for videos
        return `/placeholder.svg?height=300&width=400&text=${encodeURIComponent(`Video Testimonio de ${testimonial.name}`)}`
    }

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
                                <span>900+ Pacientes Atendidos</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="h-5 w-5 text-yellow-500"/>
                                <span>Satisfacción</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-5 w-5 text-blue-500"/>
                                <span>10+ Años de Experiencia</span>
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
                                            {/* Enhanced video thumbnail with gradient overlay */}
                                            <div
                                                className="relative h-48 bg-gradient-to-br from-green-100 via-blue-100 to-purple-100">
                                                <Image
                                                    src={getVideoThumbnail(testimonial) || "/placeholder.svg"}
                                                    alt={`Video testimonio de ${testimonial.name}`}
                                                    width={400}
                                                    height={200}
                                                    className="w-full h-full object-cover"
                                                    placeholder="blur"
                                                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                                                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                                />

                                                {/* Gradient overlay for better text readability */}
                                                <div
                                                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"/>

                                                {/* Patient info overlay on thumbnail */}
                                                <div className="absolute bottom-3 left-3 right-3 text-white">
                                                    <h4 className="font-semibold text-sm mb-1">{testimonial.name}</h4>
                                                    <p className="text-xs opacity-90">{testimonial.treatment}</p>
                                                </div>
                                            </div>

                                            {/* Play button overlay */}
                                            <div
                                                className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-colors cursor-pointer"
                                                onClick={() => handleVideoClick(testimonial)}
                                            >
                                                <button
                                                    className="bg-white/95 hover:bg-white text-green-600 rounded-full p-4 transition-all hover:scale-110 shadow-lg"
                                                    aria-label={`Ver video de ${testimonial.name}`}
                                                >
                                                    <Play className="h-6 w-6 ml-1" fill="currentColor"/>
                                                </button>
                                            </div>

                                            {/* Video badge */}
                                            <Badge className="absolute top-3 left-3 bg-red-600 text-white shadow-md">🎥
                                                Video</Badge>

                                            {/* Duration badge (if available) */}
                                            <Badge className="absolute top-3 right-3 bg-black/70 text-white text-xs">
                                                {testimonial.duration}
                                            </Badge>
                                        </div>
                                    ) : (
                                        <div
                                            className="relative cursor-zoom-in"
                                            onClick={() => handleImageClick(testimonial)}
                                        >
                                            <Image
                                                src={
                                                    testimonial.image ||
                                                    "/placeholder.svg?height=300&width=400&text=Testimonio"
                                                }
                                                alt={`Testimonio de ${testimonial.name}`}
                                                width={400}
                                                height={200}
                                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                                placeholder="blur"
                                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDA..."
                                                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                            />

                                            <Badge className="absolute top-3 left-3 bg-blue-600 text-white shadow-md">
                                                📷 Imagen
                                            </Badge>
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="p-6">
                                    {/* Header */}
                                    <div className="mb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-bold text-gray-900">
                                                {testimonial.name}
                                                {testimonial.age && `, ${testimonial.age}`}
                                            </h3>
                                            <div className="flex items-center">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400"/>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-500 mb-2">{testimonial.location}</p>
                                        {testimonial.condition && (
                                            <Badge variant="outline" className="text-xs">
                                                {testimonial.condition}
                                            </Badge>
                                        )}
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
                                            {testimonial.results.slice(0, 2).map((result, index) => (
                                                <li key={index}
                                                    className="text-xs text-gray-600 flex items-start gap-2">
                                                    <div
                                                        className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"/>
                                                    {result}
                                                </li>
                                            ))}
                                            {testimonial.results.length > 2 && (
                                                <li className="text-xs text-gray-500 italic">
                                                    +{testimonial.results.length - 2} resultados más...
                                                </li>
                                            )}
                                        </ul>
                                    </div>

                                    {/* Footer */}
                                    <div
                                        className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3"/>
                                            {testimonial.date}
                                        </div>
                                        {testimonial.videoUrl && (
                                            <button
                                                onClick={() => handleVideoClick(testimonial)}
                                                className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1 hover:underline"
                                            >
                                                <Play className="h-3 w-3"/>
                                                Ver video
                                            </button>
                                        )}
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
                                href="/calendar"
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

            {/* Video Modal */}
            {selectedTestimonial?.videoUrl && (
                <VideoModal
                    open={true}
                    onClose={handleCloseModal}
                    url={selectedTestimonial.videoUrl}
                    title={`Testimonio de ${selectedTestimonial.name}`}
                    description={`${selectedTestimonial.fullStory} - Tratamiento: ${selectedTestimonial.treatment} durante ${selectedTestimonial.duration}`}
                />
            )}
            {/* Image Dialog Modal */}
            {selectedImage && (
                <ImageDialog
                    open
                    url={selectedImage.url}
                    title={`Testimonio de ${selectedImage.name}`}
                    description={`Tratamiento: ${selectedImage.treatment}`}
                    onClose={() => setSelectedImage(null)}
                />
            )}
        </PageLayout>
    )
}
