import type {Metadata} from "next";

import {Calendar, CreditCard, Heart, HelpCircle, Info, MessageCircle, Package, Shield} from "lucide-react"
import Link from "next/link"

import PageLayout from "@/components/page-layout"
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion"
import {faqData} from "@/data/faq";

export const metadata: Metadata = {
    title: "Preguntas Frecuentes",
    description: "Respuestas a las preguntas más frecuentes sobre medicina tradicional, tratamientos naturales y terapias holísticas en Gaia.",
    keywords: ["FAQ medicina tradicional", "preguntas frecuentes", "dudas tratamientos naturales", "aviso de privacidad"],
    alternates: {
        canonical: "/faq",
    },
    openGraph: {
        title: "Preguntas Frecuentes | Gaia Medico Tradicional",
        description: "Respuestas a las preguntas más frecuentes sobre medicina tradicional, tratamientos naturales y terapias holísticas en Gaia.",
        url: "/faq",
    },
    twitter: {
        title: "Preguntas Frecuentes | Gaia Medico Tradicional",
        description: "Respuestas a las preguntas más frecuentes sobre medicina tradicional, tratamientos naturales y terapias holísticas en Gaia.",
    },
}

const faqCategories = [
    {id: "all", name: "Todas", icon: HelpCircle},
    {id: "appointments", name: "Citas", icon: Calendar},
    {id: "payments", name: "Pagos", icon: CreditCard},
    {id: "services", name: "Servicios", icon: Heart},
    {id: "products", name: "Productos", icon: Package},
    {id: "legal", name: "Legal", icon: Shield},
    {id: "general", name: "General", icon: Info},
]

/* ── FAQPage JSON-LD ─────────────────────────────────────────── */
const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
        },
    })),
};

export default function FaqPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(faqJsonLd)}}
            />
            <PageLayout title="Preguntas Frecuentes & Aviso Legal">
            <div className="max-w-6xl mx-auto">
                {/* Hero Section */}
                <section className="mb-12">
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Tienes Dudas? Estamos Aquí para
                            Ayudarte</h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            Encuentra respuestas a las preguntas más frecuentes sobre nuestros servicios, tratamientos y
                            políticas. Si
                            no encuentras lo que buscas, no dudes en contactarnos.
                        </p>
                    </div>
                </section>

                {/* Categories Filter */}
                <section className="mb-8">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {faqCategories.map((category) => {
                            const IconComponent = category.icon
                            return (
                                <button
                                    key={category.id}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors border border-green-200 text-green-700 hover:bg-green-50"
                                >
                                    <IconComponent className="h-4 w-4"/>
                                    {category.name}
                                </button>
                            )
                        })}
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mb-12">
                    <div className="bg-white rounded-lg shadow-sm p-8">
                        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Preguntas Frecuentes</h1>

                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqData.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border border-gray-200 rounded-lg px-6 py-2 hover:shadow-sm transition-shadow"
                                >
                                    <AccordionTrigger
                                        className="text-left font-semibold text-gray-900 hover:text-green-600">
                                        {item.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 pt-2">{item.a}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                {/* Legal Section */}
                <section className="mb-12">
                    <div className="bg-white rounded-lg shadow-sm p-8">
                        <div className="space-y-6 text-sm text-gray-700">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Shield className="h-6 w-6 text-green-600"/>
                                    Aviso de Privacidad
                                </h2>
                                <div className="space-y-4">
                                    <p>
                                        Gaia Medico Tradicional (en adelante &#34;Gaia&#34;) con domicilio en El Pueblito,
                                        Corregidora, Querétaro,
                                        es responsable del tratamiento de sus datos personales conforme a lo dispuesto
                                        en la Ley Federal de
                                        Protección de Datos Personales en Posesión de los Particulares.
                                    </p>
                                    <p>
                                        Los datos que recopilamos a través de formularios o mensajes de WhatsApp se
                                        utilizan únicamente para
                                        agendar citas, realizar seguimiento terapéutico o procesar envíos de productos.
                                        No serán compartidos
                                        con terceros sin su consentimiento.
                                    </p>
                                    <p>
                                        Puede ejercer sus derechos ARCO enviando un correo a&nbsp;
                                        <a
                                            href="mailto:gaiamedicotradicional@gmail.com"
                                            className="text-green-700 underline hover:text-green-800"
                                        >
                                            gaiamedicotradicional@gmail.com
                                        </a>
                                        .
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Términos de Servicio</h2>
                                <ul className="list-disc pl-6 space-y-3">
                                    <li>El contenido de este sitio es informativo y no sustituye diagnóstico médico
                                        profesional.
                                    </li>
                                    <li>
                                        Las consultas requieren cita confirmada y pago (en el caso de sesiones en línea)
                                        antes de su
                                        realización.
                                    </li>
                                    <li>
                                        Los productos herbolarios no son medicamentos y su uso es responsabilidad de
                                        quien los recomienda y
                                        consume.
                                    </li>
                                    <li>
                                        Nos reservamos el derecho de rechazar tratamientos que consideremos inadecuados
                                        para el paciente.
                                    </li>
                                    <li>
                                        Los resultados de los tratamientos pueden variar según cada persona y no se
                                        garantizan resultados
                                        específicos.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Support CTA */}
                <section>
                    <div className="bg-green-600 rounded-lg p-8 text-white text-center">
                        <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-90"/>
                        <h2 className="text-2xl font-bold mb-4">¿No Encontraste tu Respuesta?</h2>
                        <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                            Nuestro equipo está listo para ayudarte. Contáctanos directamente y resolveremos todas tus
                            dudas de manera
                            personalizada.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Contáctanos
                            </Link>
                            <a
                                href="https://wa.me/5214422799328"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                            >
                                WhatsApp Directo
                            </a>
                        </div>
                    </div>
                </section>
            </div>
            </PageLayout>
        </>
    )
}
