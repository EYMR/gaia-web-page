import {Brain, CheckIcon, Heart, Leaf, Zap} from "lucide-react";
import React from "react";

import PageLayout from "@/components/page-layout";
import {services} from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
    presencial: Leaf,
    online: Brain,
    acupuntura: Zap,
    // fallback
    default: Heart,
};

export default function ServicesPageClient() {
    return (
        <PageLayout title="Nuestros Servicios">
            <div className="max-w-6xl mx-auto">
                {/* INTRO */}
                <section className="mb-12">
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Servicios de Medicina Tradicional
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            Ofrecemos una gama de consultas y terapias diseñadas
                            para abordar tus necesidades de forma integral y natural.
                        </p>
                    </div>
                </section>

                {/* GRID DE SERVICIOS (dinámico) */}
                <section className="mb-12">
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((s) => {
                            const Icon = iconMap[s.id] ?? iconMap.default;
                            return (
                                <div
                                    key={s.id}
                                    className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow flex flex-col"
                                >
                                    {/* Cabecera */}
                                    <div className="flex items-center mb-6">
                                        <Icon className="h-12 w-12 text-green-600 mr-4"/>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900">
                                                {s.name}
                                            </h3>
                                            <p className="text-green-600 font-semibold">
                                                ${s.price} MXN
                                            </p>
                                        </div>
                                    </div>
                                    {/* Descripción */}
                                    <p className="text-gray-600 mb-6">{s.description}</p>
                                    <ul className="mb-4 space-y-2">
                                        {s.features.map((f) => (
                                            <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                                                <CheckIcon fontSize="inherit" className="text-green-600 mt-[2px]"/>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Etiquetas */}
                                    <div className="flex gap-3 mb-6">
                    <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                      {s.duration}
                    </span>
                                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {s.modality}
                    </span>
                                    </div>

                                    {/* CTA */}
                                    <a
                                        href={`/calendar?service=${s.id}`}
                                        className="mt-auto w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                                    >
                                        Reservar
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* CTA FINAL (mantengo tu diseño) */}
                <section>
                    <div className="bg-green-600 rounded-lg p-8 text-white text-center">
                        <h2 className="text-2xl font-bold mb-4">
                            ¿Listo para comenzar tu tratamiento?
                        </h2>
                        <p className="text-lg mb-6 opacity-90">
                            Agenda tu consulta de diagnóstico y descubre cuál es el mejor
                            tratamiento para ti.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/524422799328?text=Hola%20quiero%20una%20consulta%20de%20diagnóstico"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Agendar Consulta
                            </a>
                            <a
                                href="/contacto"
                                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                            >
                                Más Información
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
}