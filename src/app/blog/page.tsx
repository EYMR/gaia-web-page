import {ArrowRight, Calendar, User} from "lucide-react"

import PageLayout from "@/components/page-layout"

const blogPosts = [
    {
        id: 1,
        title: "Los Beneficios de la Fitoterapia en el Tratamiento de la Ansiedad",
        excerpt:
            "Descubre cómo las plantas medicinales pueden ayudar a reducir los niveles de ansiedad de forma natural y sin efectos secundarios.",
        author: "Dra. María Elena Gaia",
        date: "15 de Enero, 2024",
        category: "Fitoterapia",
        readTime: "5 min lectura",
    },
    {
        id: 2,
        title: "Medicina Ayurvédica: Equilibrando los Doshas para una Mejor Salud",
        excerpt:
            "Aprende sobre los tres doshas (Vata, Pitta, Kapha) y cómo mantenerlos en equilibrio para optimizar tu bienestar.",
        author: "Dra. María Elena Gaia",
        date: "8 de Enero, 2024",
        category: "Ayurveda",
        readTime: "7 min lectura",
    },
    {
        id: 3,
        title: "Acupuntura: Más que Agujas, una Filosofía de Sanación",
        excerpt:
            "Explora los principios fundamentales de la acupuntura y cómo esta antigua práctica puede transformar tu salud.",
        author: "Dra. María Elena Gaia",
        date: "2 de Enero, 2024",
        category: "Acupuntura",
        readTime: "6 min lectura",
    },
    {
        id: 4,
        title: "Alimentación Consciente: La Base de la Medicina Tradicional",
        excerpt:
            "Descubre cómo los alimentos pueden ser tu medicina y aprende a crear una dieta que nutra tu cuerpo y alma.",
        author: "Dra. María Elena Gaia",
        date: "28 de Diciembre, 2023",
        category: "Nutrición",
        readTime: "8 min lectura",
    },
    {
        id: 5,
        title: "Terapia Neural: Liberando las Memorias del Cuerpo",
        excerpt:
            "Conoce cómo la terapia neural puede ayudar a resolver traumas físicos y emocionales almacenados en el sistema nervioso.",
        author: "Dra. María Elena Gaia",
        date: "20 de Diciembre, 2023",
        category: "Terapia Neural",
        readTime: "6 min lectura",
    },
    {
        id: 6,
        title: "Plantas Medicinales Mexicanas: Tesoros de Nuestra Tradición",
        excerpt:
            "Un recorrido por las plantas medicinales más importantes de México y sus usos tradicionales en la sanación.",
        author: "Dra. María Elena Gaia",
        date: "15 de Diciembre, 2023",
        category: "Fitoterapia",
        readTime: "9 min lectura",
    },
]

const categories = ["Todos", "Fitoterapia", "Ayurveda", "Acupuntura", "Nutrición", "Terapia Neural"]

export default function Blog() {
    return (
        <PageLayout title="Blog de Medicina Tradicional">
            <div className="max-w-6xl mx-auto">
                {/* Introduction */}
                <section className="mb-12">
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Conocimiento y Sabiduría Ancestral</h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            Explora nuestros artículos sobre medicina tradicional, consejos de salud natural y las
                            últimas
                            investigaciones en terapias alternativas.
                        </p>
                    </div>
                </section>

                {/* Categories Filter */}
                <section className="mb-8">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className="px-4 py-2 rounded-full text-sm font-medium transition-colors border border-green-200 text-green-700 hover:bg-green-50"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Blog Posts Grid */}
                <section className="mb-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <article
                                key={post.id}
                                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                            >
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                                        <span className="text-gray-500 text-xs">{post.readTime}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>

                                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                        <div className="flex items-center">
                                            <User className="h-4 w-4 mr-1"/>
                                            {post.author}
                                        </div>
                                        <div className="flex items-center">
                                            <Calendar className="h-4 w-4 mr-1"/>
                                            {post.date}
                                        </div>
                                    </div>

                                    <button
                                        className="flex items-center text-green-600 font-medium hover:text-green-700 transition-colors">
                                        Leer más
                                        <ArrowRight className="h-4 w-4 ml-1"/>
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Newsletter Signup */}
                <section>
                    <div className="bg-green-600 rounded-lg p-8 text-white text-center">
                        <h2 className="text-2xl font-bold mb-4">Suscríbete a Nuestro Newsletter</h2>
                        <p className="text-lg mb-6 opacity-90">
                            Recibe artículos exclusivos, consejos de salud y las últimas novedades en medicina
                            tradicional
                            directamente en tu correo.
                        </p>
                        <div className="max-w-md mx-auto flex gap-4">
                            <input
                                type="email"
                                placeholder="Tu correo electrónico"
                                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-300"
                            />
                            <button
                                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                Suscribirse
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    )
}
