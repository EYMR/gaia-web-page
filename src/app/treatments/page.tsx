import PageLayout from "@/components/page-layout"
import {Clock, Users, CheckCircle} from "lucide-react"

const treatments = [
    {
        category: "Digestivos",
        conditions: [
            "Gastritis crónica",
            "Síndrome de intestino irritable",
            "Colitis ulcerosa",
            "Reflujo gastroesofágico",
            "Estreñimiento crónico",
        ],
        duration: "4-8 semanas",
        success: "85%",
    },
    {
        category: "Respiratorios",
        conditions: [
            "Asma bronquial",
            "Bronquitis crónica",
            "Sinusitis recurrente",
            "Alergias respiratorias",
            "Rinitis alérgica",
        ],
        duration: "6-12 semanas",
        success: "78%",
    },
    {
        category: "Musculoesqueléticos",
        conditions: [
            "Artritis reumatoide",
            "Fibromialgia",
            "Dolor lumbar crónico",
            "Artritis degenerativa",
            "Tendinitis recurrente",
        ],
        duration: "8-16 semanas",
        success: "82%",
    },
    {
        category: "Neurológicos",
        conditions: [
            "Migrañas crónicas",
            "Ansiedad generalizada",
            "Insomnio crónico",
            "Depresión leve-moderada",
            "Estrés crónico",
        ],
        duration: "6-12 semanas",
        success: "80%",
    },
    {
        category: "Endocrinos",
        conditions: [
            "Diabetes tipo 2",
            "Hipotiroidismo",
            "Síndrome metabólico",
            "Resistencia a la insulina",
            "Desequilibrios hormonales",
        ],
        duration: "12-24 semanas",
        success: "75%",
    },
    {
        category: "Dermatológicos",
        conditions: ["Psoriasis", "Eczema crónico", "Dermatitis atópica", "Acné persistente", "Vitiligo"],
        duration: "8-16 semanas",
        success: "70%",
    },
]

export default function Treatments() {
    return (
        <PageLayout title="Tratamientos Especializados">
            <div className="max-w-6xl mx-auto">
                {/* Introduction */}
                <section className="mb-12">
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Condiciones que Tratamos</h2>
                        <p className="text-gray-600 text-lg text-center max-w-4xl mx-auto">
                            Nuestros tratamientos de medicina tradicional han demostrado ser efectivos para una amplia
                            variedad de
                            condiciones crónicas y agudas. Cada tratamiento es personalizado según las necesidades
                            específicas del
                            paciente.
                        </p>
                    </div>
                </section>

                {/* Treatments Grid */}
                <section className="mb-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {treatments.map((treatment, index) => (
                            <div key={index}
                                 className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{treatment.category}</h3>

                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-700 mb-3">Condiciones tratadas:</h4>
                                    <ul className="space-y-2">
                                        {treatment.conditions.map((condition, conditionIndex) => (
                                            <li key={conditionIndex} className="flex items-start text-gray-600 text-sm">
                                                <CheckCircle
                                                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"/>
                                                {condition}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="border-t pt-4 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-gray-600">
                                            <Clock className="h-4 w-4 mr-2"/>
                                            <span className="text-sm">Duración</span>
                                        </div>
                                        <span
                                            className="text-sm font-semibold text-gray-900">{treatment.duration}</span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-gray-600">
                                            <Users className="h-4 w-4 mr-2"/>
                                            <span className="text-sm">Tasa de éxito</span>
                                        </div>
                                        <span
                                            className="text-sm font-semibold text-green-600">{treatment.success}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Treatment Process */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Proceso de Tratamiento</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div
                                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-green-600">1</span>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Consulta Inicial</h3>
                            <p className="text-gray-600 text-sm">Evaluación completa de tu estado de salud y historial
                                médico.</p>
                        </div>

                        <div className="text-center">
                            <div
                                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-green-600">2</span>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Diagnóstico</h3>
                            <p className="text-gray-600 text-sm">Identificación de las causas raíz usando métodos
                                tradicionales.</p>
                        </div>

                        <div className="text-center">
                            <div
                                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-green-600">3</span>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Tratamiento</h3>
                            <p className="text-gray-600 text-sm">Plan personalizado con terapias naturales
                                específicas.</p>
                        </div>

                        <div className="text-center">
                            <div
                                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-green-600">4</span>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Seguimiento</h3>
                            <p className="text-gray-600 text-sm">Monitoreo continuo y ajustes según tu progreso.</p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section>
                    <div className="bg-green-600 rounded-lg p-8 text-white text-center">
                        <h2 className="text-2xl font-bold mb-4">¿Tu condición no está en la lista?</h2>
                        <p className="text-lg mb-6 opacity-90">
                            Contáctanos para una consulta personalizada. Tratamos muchas otras condiciones con medicina
                            tradicional.
                        </p>
                        <button
                            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Consulta Gratuita
                        </button>
                    </div>
                </section>
            </div>
        </PageLayout>
    )
}
