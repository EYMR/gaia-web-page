import {Award, Heart, Leaf, Users} from "lucide-react"

import PageLayout from "@/components/page-layout"

export default function AboutPageClient() {
    return (
        <PageLayout title="Acerca de Nosotros">
            <div className="max-w-4xl mx-auto">
                {/* Mission Section */}
                <section className="mb-12">
                    <div className="bg-white rounded-lg p-8 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Nuestra Misión</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            En Gaia Medico Tradicional, nos dedicamos a restaurar el equilibrio natural del cuerpo y la
                            mente a través
                            de la medicina tradicional y holística. Creemos que cada persona tiene la capacidad innata
                            de sanarse
                            cuando se le proporcionan las herramientas y el entorno adecuados.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Nuestro enfoque combina la sabiduría ancestral de diversas tradiciones curativas con un
                            entendimiento
                            moderno del bienestar integral, ofreciendo tratamientos personalizados que abordan las
                            causas raíz de los
                            desequilibrios de salud.
                        </p>
                    </div>
                </section>

                {/* Values Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nuestros Valores</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <Leaf className="h-10 w-10 text-green-600 mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Medicina Natural</h3>
                            <p className="text-gray-600">
                                Utilizamos únicamente ingredientes naturales y técnicas tradicionales que respetan los
                                procesos
                                naturales del cuerpo.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <Heart className="h-10 w-10 text-green-600 mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Cuidado Compasivo</h3>
                            <p className="text-gray-600">
                                Cada paciente es tratado con respeto, empatía y dedicación personal en su camino hacia
                                la sanación.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <Users className="h-10 w-10 text-green-600 mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Enfoque Integral</h3>
                            <p className="text-gray-600">
                                Consideramos todos los aspectos de la salud: física, mental, emocional y espiritual para
                                un bienestar
                                completo.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <Award className="h-10 w-10 text-green-600 mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Excelencia Profesional</h3>
                            <p className="text-gray-600">
                                Mantenemos los más altos estándares de práctica profesional y educación continua en
                                medicina
                                tradicional.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nuestro Equipo</h2>
                    <div className="bg-white rounded-lg p-8 shadow-sm">
                        <div className="text-center mb-8">
                            <div
                                className="w-32 h-32 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <Users className="h-16 w-16 text-green-600"/>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Medica Tradicional Teresa Roldán
                                Soria</h3>
                            <p className="text-green-600 font-medium mb-4">Fundadora y Directora</p>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Con más de 10 años de experiencia en medicina tradicional, la Medica Tradicional Teresa
                                ha dedicado su
                                vida al estudio y
                                práctica de terapias naturales, combinando conocimientos de medicina ayurvédica,
                                fitoterapia y medicina
                                tradicional mexicana.
                            </p>
                        </div>
                    </div>
                </section>

                {/* History Section */}
                <section>
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-4">
                            Gaia Medico Tradicional nació en 2015 con la visión de crear un espacio donde las personas
                            pudieran
                            acceder a tratamientos naturales efectivos y seguros. Comenzamos como una pequeña consulta y
                            hemos crecido
                            hasta convertirnos en un centro de referencia en medicina tradicional.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            A lo largo de los años, hemos ayudado a miles de personas a recuperar su salud y bienestar,
                            siempre
                            manteniendo nuestro compromiso con la excelencia y el cuidado personalizado.
                        </p>
                    </div>
                </section>
            </div>
        </PageLayout>
    )
}
