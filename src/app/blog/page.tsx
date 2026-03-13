import type {Metadata} from "next"

import PostCard from "@/components/blog/post-card";
import PageLayout from "@/components/page-layout"

export const metadata: Metadata = {
    title: "Blog de Medicina Tradicional",
    description: "Explora nuestros artículos sobre medicina tradicional, consejos de salud natural y las últimas investigaciones en terapias alternativas.",
    keywords: ["blog medicina tradicional", "artículos salud natural", "terapias alternativas", "consejos bienestar"],
    alternates: {
        canonical: "/blog",
    },
    openGraph: {
        title: "Blog de Medicina Tradicional | Gaia Medico Tradicional",
        description: "Explora nuestros artículos sobre medicina tradicional, consejos de salud natural y las últimas investigaciones en terapias alternativas.",
        url: "/blog",
    },
    twitter: {
        title: "Blog de Medicina Tradicional | Gaia Medico Tradicional",
        description: "Explora nuestros artículos sobre medicina tradicional, consejos de salud natural y las últimas investigaciones en terapias alternativas.",
    },
}

const categories = ["Todos", "Acupuntura", "Nutrición", "Terapia Neural"]

export default function Blog() {
    return (
        <PageLayout title="Blog de Medicina Tradicional" breadcrumbs={[{label: "Blog"}]}>
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
                <PostCard/>


                {/* Newsletter Signup */}
                <section>
                    <div className="bg-green-600 rounded-lg p-8 text-white text-center">
                        <h2 className="text-2xl font-bold mb-4">Síguenos en Facebook</h2>
                        <p className="text-lg mb-6 opacity-90">
                            Conoce consejos de salud y las últimas novedades en medicina
                            tradicional.
                        </p>
                        <div className="max-w-md mx-auto flex gap-4 justify-center">
                            <a
                                href="https://wa.me/524422799328?text=Hola%20podrías%20darme%20más%20información"
                                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer">
                                Visítanos
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    )
}