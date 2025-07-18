import PageLayout from "@/components/page-layout"
import {Leaf, Heart, Users, Award} from "lucide-react"

export default function Home() {
    return (
        <PageLayout>
            {/* Hero Section */}
            <section className="text-center py-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg mb-12">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Medicina Tradicional
                        <span className="text-green-600 block">Natural y Holística</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Descubre el poder curativo de la naturaleza con nuestros tratamientos tradicionales respaldados
                        por siglos
                        de sabiduría ancestral.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                            Consulta Gratuita
                        </button>
                        <button
                            className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                            Conocer Más
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué elegir Gaia?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Combinamos la sabiduría ancestral con enfoques modernos para ofrecerte el mejor cuidado integral
                        de tu
                        salud.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                        <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Natural</h3>
                        <p className="text-gray-600">Tratamientos con ingredientes naturales sin efectos
                            secundarios.</p>
                    </div>

                    <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                        <Heart className="h-12 w-12 text-green-600 mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Cuidado Integral</h3>
                        <p className="text-gray-600">Enfoque holístico que trata la causa raíz, no solo los
                            síntomas.</p>
                    </div>

                    <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                        <Users className="h-12 w-12 text-green-600 mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Experiencia</h3>
                        <p className="text-gray-600">Más de 15 años ayudando a personas a recuperar su bienestar.</p>
                    </div>

                    <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                        <Award className="h-12 w-12 text-green-600 mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Certificado</h3>
                        <p className="text-gray-600">Profesionales certificados en medicina tradicional y
                            alternativa.</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-green-600 rounded-lg text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Comienza tu camino hacia el bienestar</h2>
                <p className="text-xl mb-8 opacity-90">Agenda tu consulta gratuita y descubre cómo podemos ayudarte.</p>
                <button
                    className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Agendar Consulta
                </button>
            </section>
        </PageLayout>
    )
}
