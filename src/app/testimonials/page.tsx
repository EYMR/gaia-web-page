"use client"

import {Calendar, ChevronDown, Filter, Heart, Play, Star} from "lucide-react"
import {useState} from "react"

import PageLayout from "@/components/page-layout"
import {Badge} from "@/components/ui/badge"

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

const testimonials = [
    {
        id: 1,
        name: "María González",
        age: 34,
        location: "Querétaro, QRO",
        condition: "Ansiedad Generalizada",
        category: "anxiety",
        treatment: "Acupuntura + Fitoterapia",
        duration: "3 meses",
        rating: 5,
        date: "Enero 2024",
        type: "video",
        thumbnail: "/placeholder.svg?height=300&width=400",
        quote:
            "Después de años luchando con ansiedad, finalmente encontré paz. La combinación de acupuntura y plantas medicinales cambió mi vida completamente.",
        fullStory:
            "Llegué a Gaia después de probar múltiples tratamientos convencionales sin éxito. Mi ansiedad era tan severa que no podía salir de casa. Después de 3 meses de tratamiento integral, no solo recuperé mi vida social, sino que también aprendí técnicas para manejar el estrés de manera natural.",
        results: ["Reducción del 90% en ataques de pánico", "Mejor calidad de sueño", "Regreso a actividades sociales"],
        videoUrl: "#",
    },
    {
        id: 2,
        name: "Carlos Mendoza",
        age: 45,
        location: "San Luis Potosí, SLP",
        condition: "Dolor Lumbar Crónico",
        category: "pain",
        treatment: "Terapia Neural + Acupuntura",
        duration: "4 meses",
        rating: 5,
        date: "Diciembre 2023",
        type: "image",
        image: "/placeholder.svg?height=300&width=400",
        quote:
            "20 años de dolor constante se convirtieron en libertad total. Ahora puedo jugar fútbol con mis hijos sin limitaciones.",
        fullStory:
            "El dolor lumbar me tenía postrado. Había probado cirugías, medicamentos fuertes y fisioterapia tradicional. La terapia neural fue reveladora - liberó tensiones que tenía desde un accidente hace décadas. Combinada con acupuntura, el resultado fue extraordinario.",
        results: ["Eliminación completa del dolor crónico", "Recuperación de movilidad total", "Suspensión de analgésicos"],
    },
    {
        id: 3,
        name: "Ana Sofía Ruiz",
        age: 28,
        location: "Guadalajara, JAL",
        condition: "Síndrome de Intestino Irritable",
        category: "digestive",
        treatment: "Medicina Ayurvédica + Fitoterapia",
        duration: "6 meses",
        rating: 5,
        date: "Noviembre 2023",
        type: "video",
        thumbnail: "/placeholder.svg?height=300&width=400",
        quote:
            "Mi sistema digestivo era un caos. Ahora disfruto cada comida sin miedo ni dolor. La medicina ayurvédica me enseñó a escuchar mi cuerpo.",
        fullStory:
            "Vivía con dolor abdominal constante, hinchazón y episodios impredecibles que arruinaban mis planes. El enfoque ayurvédico no solo trató mis síntomas, sino que me ayudó a entender mi constitución única y cómo alimentarme correctamente.",
        results: ["Digestión normal y sin dolor", "Identificación de alimentos adecuados", "Mejor relación con la comida"],
        videoUrl: "#",
    },
    {
        id: 4,
        name: "Roberto Jiménez",
        age: 52,
        location: "Monterrey, NL",
        condition: "Insomnio Crónico",
        category: "sleep",
        treatment: "Acupuntura + Medicina Herbal",
        duration: "2 meses",
        rating: 5,
        date: "Octubre 2023",
        type: "image",
        image: "/placeholder.svg?height=300&width=400",
        quote:
            "Después de 5 años sin dormir bien, ahora duermo 8 horas seguidas. Mi energía y concentración regresaron completamente.",
        fullStory:
            "El estrés laboral me había robado el sueño. Probé pastillas para dormir que me dejaban aturdido al día siguiente. La acupuntura reguló mi sistema nervioso y las hierbas me ayudaron a relajarme naturalmente sin efectos secundarios.",
        results: ["8 horas de sueño reparador", "Mayor energía durante el día", "Mejor concentración en el trabajo"],
    },
    {
        id: 5,
        name: "Lucía Hernández",
        age: 38,
        location: "Puebla, PUE",
        condition: "Desequilibrio Hormonal",
        category: "hormonal",
        treatment: "Fitoterapia + Medicina Tradicional",
        duration: "5 meses",
        rating: 5,
        date: "Septiembre 2023",
        type: "video",
        thumbnail: "/placeholder.svg?height=300&width=400",
        quote:
            "Mis ciclos irregulares y cambios de humor extremos se regularon naturalmente. Me siento como una nueva persona.",
        fullStory:
            "Los desequilibrios hormonales controlaban mi vida - ciclos impredecibles, cambios de humor severos y fatiga constante. Las plantas medicinales mexicanas trabajaron en armonía con mi cuerpo para restaurar el equilibrio natural sin hormonas sintéticas.",
        results: ["Ciclos menstruales regulares", "Estado de ánimo estable", "Niveles de energía consistentes"],
        videoUrl: "#",
    },
    {
        id: 6,
        name: "Diego Morales",
        age: 41,
        location: "Tijuana, BC",
        condition: "Asma Bronquial",
        category: "respiratory",
        treatment: "Medicina Herbal + Acupuntura",
        duration: "4 meses",
        rating: 5,
        date: "Agosto 2023",
        type: "image",
        image: "/placeholder.svg?height=300&width=400",
        quote:
            "Mi dependencia del inhalador se redujo 80%. Ahora puedo hacer ejercicio y actividades al aire libre sin limitaciones.",
        fullStory:
            "El asma limitaba cada aspecto de mi vida. Los ataques eran frecuentes y severos. La combinación de hierbas expectorantes y acupuntura fortaleció mis pulmones gradualmente. Ahora respiro libremente y mi calidad de vida es incomparable.",
        results: [
            "Reducción significativa de crisis asmáticas",
            "Menor dependencia de medicamentos",
            "Capacidad para ejercitarse",
        ],
    },
    {
        id: 7,
        name: "Patricia Vega",
        age: 29,
        location: "Mérida, YUC",
        condition: "Migrañas Crónicas",
        category: "pain",
        treatment: "Acupuntura + Terapia Neural",
        duration: "3 meses",
        rating: 5,
        date: "Julio 2023",
        type: "video",
        thumbnail: "/placeholder.svg?height=300&width=400",
        quote: "Las migrañas que me incapacitaban 15 días al mes desaparecieron. Recuperé mi carrera y mi vida personal.",
        fullStory:
            "Las migrañas eran tan severas que perdí trabajos y oportunidades. Vivía en oscuridad constante. La acupuntura identificó patrones de tensión que desencadenaban las crisis, y la terapia neural liberó bloqueos profundos. Ahora tengo una vida normal y productiva.",
        results: ["Eliminación de migrañas crónicas", "Regreso a la vida laboral normal", "Mejor calidad de vida familiar"],
        videoUrl: "#",
    },
    {
        id: 8,
        name: "Fernando Castro",
        age: 36,
        location: "León, GTO",
        condition: "Gastritis Crónica",
        category: "digestive",
        treatment: "Medicina Ayurvédica + Fitoterapia",
        duration: "4 meses",
        rating: 5,
        date: "Junio 2023",
        type: "image",
        image: "/placeholder.svg?height=300&width=400",
        quote:
            "El ardor constante en mi estómago desapareció. Ahora puedo disfrutar comidas familiares sin preocupaciones.",
        fullStory:
            "La gastritis me tenía con una dieta muy restrictiva y dolor constante. Los antiácidos solo daban alivio temporal. El enfoque ayurvédico sanó mi mucosa gástrica desde la raíz, y las plantas medicinales fortalecieron mi sistema digestivo completamente.",
        results: ["Eliminación del dolor gástrico", "Dieta normal sin restricciones", "Digestión saludable"],
    },
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
                                            <img
                                                src={testimonial.thumbnail || "/placeholder.svg"}
                                                alt={`Testimonio de ${testimonial.name}`}
                                                className="w-full h-48 object-cover"
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
                                            <img
                                                src={testimonial.image || "/placeholder.svg"}
                                                alt={`Testimonio de ${testimonial.name}`}
                                                className="w-full h-48 object-cover"
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
                                    <blockquote className="text-gray-700 mb-4 italic">"{testimonial.quote}"</blockquote>

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
