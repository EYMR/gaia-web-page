"use client";

import {Clock, Mail, MapPin, Phone} from "lucide-react"
import React, {useState} from "react";

import PageLayout from "@/components/page-layout"

export default function ContactPageClient() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    // Human‑readable names for the "service" select values
    const serviceNameMap: Record<string, string> = {
        general: "Consulta General",
        acupuntura: "Acupuntura",
        otro: "Otro",
    };

    const handleChange = (field: keyof typeof form) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => setForm({...form, [field]: e.target.value});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const {
            firstName,
            lastName,
            email,
            phone,
            service,
            message,
        } = form;

        const chosenService = (serviceNameMap[service] ?? service) || "N/D";

        const plain = [
            `Hola, soy ${firstName} ${lastName}.`,
            `Correo: ${email}`,
            `Teléfono: ${phone}`,
            `Servicio de interés: ${chosenService}`,
            `Mensaje: ${message}`,
        ].join("\n");

        const text = encodeURIComponent(plain);

        window.open(`https://wa.me/524422799328?text=${text}`, "_blank");
    };

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
                                            Callejón de la Saca 94
                                            <br/>
                                            Querétaro, Corregidora, 76900
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
                                            +52 442 279 9328
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Mail className="h-6 w-6 text-green-600 mr-4 mt-1"/>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                        <p className="text-gray-600">
                                            gaiamedicotradicional@gmail.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Clock className="h-6 w-6 text-green-600 mr-4 mt-1"/>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Horarios</h3>
                                        <div className="text-gray-600 space-y-1">
                                            <p>Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                                            <p>Sábados: 11:00 AM - 2:00 PM</p>
                                            <p>Domingos: Cerrado</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-lg p-8 shadow-sm">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h2>

                            <form className="space-y-6" onSubmit={handleSubmit}>
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
                                            value={form.firstName}
                                            onChange={handleChange("firstName")}
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
                                            value={form.lastName}
                                            onChange={handleChange("lastName")}
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
                                        value={form.email}
                                        onChange={handleChange("email")}
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
                                        value={form.phone}
                                        onChange={handleChange("phone")}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                        Servicio de Interés
                                    </label>
                                    <select
                                        id="service"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        value={form.service}
                                        onChange={handleChange("service")}
                                    >
                                        <option value="">Selecciona un servicio</option>
                                        <option value="general">Consulta General</option>
                                        <option value="acupuntura">Acupuntura</option>
                                        <option value="otro">Otro</option>
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
                                        value={form.message}
                                        onChange={handleChange("message")}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                                >
                                    Enviar por WhatsApp
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    )
}
