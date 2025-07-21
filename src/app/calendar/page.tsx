"use client"

import type React from "react"

import {Calendar, Clock, MessageCircle, Phone, User} from "lucide-react"
import {useRouter} from "next/navigation"
import {useSearchParams} from "next/navigation";
import {useState} from "react"

import PageLayout from "@/components/page-layout"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {services} from "@/data/services"
import {toast} from "@/hooks/use-toast"

export default function AgendaPage() {
    useRouter();
    const params = useSearchParams();
    const preselectedId = params.get("service") ?? services[0].id;

    const [form, setForm] = useState({
        nombre: "",
        whatsapp: "",
        servicio: preselectedId,   // store service ID
        fecha: "",
        horario: "Mañana",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleInputChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [field]: e.target.value})
    }

    const handleSelectChange = (field: keyof typeof form) => (value: string) => {
        setForm({...form, [field]: value})
    }

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Validation
        if (!form.nombre || !form.whatsapp || !form.fecha) {
            toast({
                title: "Error",
                description: "Por favor completa todos los campos requeridos.",
                variant: "destructive",
            })
            setIsSubmitting(false)
            return
        }

        const msg = encodeURIComponent(
            `Hola, soy ${form.nombre}. Quiero agendar ${selectedService?.name} el ${form.fecha} (${form.horario}).`
        );
        const wa = `https://wa.me/524422799328?text=${msg}`

        toast({
            title: "¡Perfecto!",
            description: "Abriendo WhatsApp para confirmar tu cita...",
        })

        setTimeout(() => {
            setIsSubmitting(false)
            window.open(wa, "_blank")
        }, 1000)
    }

    const selectedService = services.find((s) => s.id === form.servicio);

    return (
        <PageLayout>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
                <div className="max-w-2xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Agenda tu Cita</h1>
                        <p className="text-lg text-gray-600 max-w-md mx-auto">
                            Completa el formulario y te contactaremos por WhatsApp para confirmar tu cita
                        </p>
                    </div>

                    {/* Form Card */}
                    <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                        <CardHeader className="text-center pb-6">
                            <CardTitle className="text-2xl text-gray-800">Información de la Cita</CardTitle>
                            <CardDescription className="text-gray-600">Todos los campos son
                                obligatorios</CardDescription>
                        </CardHeader>

                        <CardContent>
                            <form onSubmit={onSubmit} className="space-y-6">
                                {/* Nombre */}
                                <div className="space-y-2">
                                    <Label htmlFor="nombre"
                                           className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <User className="w-4 h-4"/>
                                        Nombre completo
                                    </Label>
                                    <Input
                                        id="nombre"
                                        type="text"
                                        placeholder="Ingresa tu nombre completo"
                                        value={form.nombre}
                                        onChange={handleInputChange("nombre")}
                                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                                        required
                                    />
                                </div>

                                {/* WhatsApp */}
                                <div className="space-y-2">
                                    <Label htmlFor="whatsapp"
                                           className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Phone className="w-4 h-4"/>
                                        Número de WhatsApp
                                    </Label>
                                    <Input
                                        id="whatsapp"
                                        type="tel"
                                        placeholder="4421234567"
                                        value={form.whatsapp}
                                        onChange={handleInputChange("whatsapp")}
                                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                                        required
                                    />
                                    <p className="text-xs text-gray-500">Formato: 10 dígitos sin espacios ni guiones</p>
                                </div>

                                {/* Servicio */}
                                <div className="space-y-2">
                                    <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <MessageCircle className="w-4 h-4"/>
                                        Servicio
                                    </Label>
                                    <Select value={form.servicio} onValueChange={handleSelectChange("servicio")}>
                                        <SelectTrigger
                                            className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                                            <SelectValue
                                            />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {services.map((service) => (
                                                <SelectItem key={service.id} value={service.id}>
                                                    <div className="flex justify-between items-center w-full">
                                                        <span>{service.name}</span>
                                                        <span
                                                            className="text-green-600 font-semibold ml-4">${service.price}</span>
                                                    </div>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Fecha */}
                                <div className="space-y-2">
                                    <Label htmlFor="fecha"
                                           className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Calendar className="w-4 h-4"/>
                                        Fecha preferida
                                    </Label>
                                    <Input
                                        id="fecha"
                                        type="date"
                                        value={form.fecha}
                                        onChange={handleInputChange("fecha")}
                                        min={new Date().toISOString().split("T")[0]}
                                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                                        required
                                    />
                                </div>

                                {/* Horario */}
                                <div className="space-y-2">
                                    <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Clock className="w-4 h-4"/>
                                        Horario preferido
                                    </Label>
                                    <Select value={form.horario} onValueChange={handleSelectChange("horario")}>
                                        <SelectTrigger
                                            className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                                            <SelectValue/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Mañana">
                                                <div className="flex items-center gap-2">
                                                    <span>🌅</span>
                                                    <span>Mañana (11:00 - 14:00)</span>
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="Tarde">
                                                <div className="flex items-center gap-2">
                                                    <span>🌆</span>
                                                    <span>Tarde (14:00 - 19:00)</span>
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="Flexible">
                                                <div className="flex items-center gap-2">
                                                    <span>⏰</span>
                                                    <span>Horario flexible</span>
                                                </div>
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center gap-2">
                                            <div
                                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"/>
                                            Abriendo WhatsApp...
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2">
                                            <MessageCircle className="w-5 h-5"/>
                                            Confirmar en WhatsApp
                                        </div>
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Footer Info */}
                    <div className="mt-8 text-center">
                        <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
                            <p className="text-sm text-gray-600">
                                📱 Al hacer clic en &#34;Confirmar&#34;, se abrirá WhatsApp con tu información prellenada
                            </p>
                            <p className="text-xs text-gray-500 mt-1">Horario de atención: Lunes a Viernes 9:00 -
                                18:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}
