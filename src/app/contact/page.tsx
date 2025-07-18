import PageLayout from "@/components/page-layout"
import {MapPin, Phone, Mail, Clock} from "lucide-react"

export default function Contact() {
    return (
        <PageLayout title="Contacto">
            <div className="max-w-6xl mx-auto">
                {/* Contact Information */}
                <section className="mb-12">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Contact Details */}
                        <div className="bg-white rounded-lg p-8 shadow-sm">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h2>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <MapPin className="h-6 w-6 text-green-600 mr-4 mt-1"/>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Dirección</h3>
                                        <p className="text-gray-600">
                                            Av. Revolución 1234, Col. Centro
                                            <br/>
                                            Ciudad de México, CDMX 06000
                                            <br/>
                                            México
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Phone className="h-6 w-6 text-green-600 mr-4 mt-1"/>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Teléfono</h3>
                                        <p className="text-gray-600">
                                            +52 55 1234 5678
                                            <br/>
                                            +52 55 8765 4321
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Mail className="h-6 w-6 text-green-600 mr-4 mt-1"/>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                        <p className="text-gray-600">
                                            info@gaiamedicina.com
                                            <br/>
                                            consultas@gaiamedicina.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Clock className="h-6 w-6 text-green-600 mr-4 mt-1"/>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Horarios</h3>
                                        <div className="text-gray-600 space-y-1">
                                            <p>Lunes - Viernes: 9:00 AM - 7:00 PM</p>
                                            <p>Sábados: 9:00 AM - 2:00 PM</p>
                                            <p>Domingos: Cerrado</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-lg p-8 shadow-sm">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h2>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName"
                                               className="block text-sm font-medium text-gray-700 mb-2">
                                            Nombre
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="Tu nombre"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName"
                                               className="block text-sm font-medium text-gray-700 mb-2">
                                            Apellido
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="Tu apellido"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Correo Electrónico
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        placeholder="tu@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Teléfono
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        placeholder="+52 55 1234 5678"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                        Servicio de Interés
                                    </label>
                                    <select
                                        id="service"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    >
                                        <option value="">Selecciona un servicio</option>
                                        <option value="fitoterapia">Fitoterapia</option>
                                        <option value="ayurveda">Medicina Ayurvédica</option>
                                        <option value="neural">Terapia Neural</option>
                                        <option value="acupuntura">Acupuntura</option>
                                        <option value="consulta">Consulta General</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Mensaje
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        placeholder="Cuéntanos sobre tu consulta o pregunta..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                                >
                                    Enviar Mensaje
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="mb-12">
                    <div className="bg-white rounded-lg p-8 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nuestra Ubicación</h2>
                        <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                            <p className="text-gray-600">[Aquí iría el mapa interactivo de Google Maps]</p>
                        </div>
                    </div>
                </section>

                {/* Emergency Contact */}
                <section>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h3 className="text-lg font-bold text-red-800 mb-2">Consultas de Emergencia</h3>
                        <p className="text-red-700 mb-4">
                            Para consultas urgentes fuera del horario de atención, puedes contactarnos a través de
                            WhatsApp o llamar a
                            nuestro número de emergencias.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                                WhatsApp: +52 55 9999 8888
                            </button>
                            <button
                                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                                Emergencias: +52 55 7777 6666
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    )
}
