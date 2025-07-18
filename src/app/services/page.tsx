import PageLayout from "@/components/page-layout"
import {Leaf, Heart, Brain, Zap} from "lucide-react"

const services = [
    {
        icon: Leaf,
        title: "Fitoterapia",
        description: "Tratamientos con plantas medicinales para diversos padecimientos.",
        features: ["Medicina herbal personalizada", "Tinturas y extractos naturales", "Consulta especializada"],
        price: "Desde $800 MXN",
    },
    {
        icon: Heart,
        title: "Medicina Ayurvédica",
        description: "Sistema médico tradicional de la India para equilibrar cuerpo y mente.",
        features: ["Diagnóstico de constitución", "Tratamientos personalizados", "Terapias de desintoxicación"],
        price: "Desde $1,200 MXN",
    },
    {
        icon: Brain,
        title: "Terapia Neural",
        description: "Técnica que busca eliminar interferencias en el sistema nervioso.",
        features: ["Diagnóstico integral", "Aplicación de procaína", "Seguimiento personalizado"],
        price: "Desde $1,500 MXN",
    },
    {
        icon: Zap,
        title: "Acupuntura",
        description: "Medicina tradicional china para restaurar el equilibrio energético.",
        features: ["Diagnóstico por pulsos", "Tratamiento con agujas", "Moxibustión"],
        price: "Desde $900 MXN",
    },
]

export default function Services() {
    return (
        <PageLayout title="Nuestros Servicios">
            <div className="max-w-6xl mx-auto">
                {/* Introduction */}
                <section className="mb-12">
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Servicios de Medicina Tradicional</h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            Ofrecemos una amplia gama de servicios de medicina tradicional y alternativa, cada uno
                            diseñado para
                            abordar las necesidades específicas de nuestros pacientes de manera integral y natural.
                        </p>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="mb-12">
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div key={index}
                                 className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-6">
                                    <service.icon className="h-12 w-12 text-green-600 mr-4"/>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                                        <p className="text-green-600 font-semibold">{service.price}</p>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-6">{service.description}</p>

                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-3">Incluye:</h4>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-gray-600">
                                                <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button
                                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                                    Agendar Consulta
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Additional Services */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Servicios Complementarios</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Consulta de Diagnóstico</h3>
                            <p className="text-gray-600 mb-4">Evaluación integral para determinar el mejor
                                tratamiento.</p>
                            <p className="text-green-600 font-semibold">$500 MXN</p>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Terapia de Seguimiento</h3>
                            <p className="text-gray-600 mb-4">Consultas de seguimiento para monitorear el progreso.</p>
                            <p className="text-green-600 font-semibold">$400 MXN</p>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Asesoría Nutricional</h3>
                            <p className="text-gray-600 mb-4">Orientación alimentaria basada en medicina
                                tradicional.</p>
                            <p className="text-green-600 font-semibold">$600 MXN</p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section>
                    <div className="bg-green-600 rounded-lg p-8 text-white text-center">
                        <h2 className="text-2xl font-bold mb-4">¿Listo para comenzar tu tratamiento?</h2>
                        <p className="text-lg mb-6 opacity-90">
                            Agenda tu consulta de diagnóstico y descubre cuál es el mejor tratamiento para ti.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                Agendar Consulta
                            </button>
                            <button
                                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                                Más Información
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    )
}
