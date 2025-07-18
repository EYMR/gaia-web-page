export type Service = {
    id: string;
    name: string;
    modality: "Presencial" | "En línea" | "Ambas";
    duration: string;
    price: number;
    description: string;
    features: string[];         // 👈 nuevo
};

export const services: Service[] = [
    {
        id: "presencial",
        name: "Consulta Presencial Integral",
        modality: "Presencial",
        duration: "60 min",
        price: 600,
        description:
            "Evaluación completa con medicina tradicional china y recomendaciones herbolarias personalizadas.",
        features: [
            "Diagnóstico MTC (lengua & pulso)",
            "Plan herbolario individual",
            "Revisión de alimentación",
        ],
    },
    {
        id: "online",
        name: "Consulta en Línea",
        modality: "En línea",
        duration: "45 min",
        price: 500,
        description:
            "Orientación por videollamada para quienes no pueden acudir al consultorio.",
        features: [
            "Videollamada segura (Google Meet)",
            "Envío de plan en PDF",
            "Seguimiento por WhatsApp",
        ],
    },
    {
        id: "acupuntura",
        name: "Sesión de Acupuntura",
        modality: "Presencial",
        duration: "45 – 60 min",
        price: 500,
        description:
            "Aplicación de agujas según diagnóstico MTC para dolor, estrés y balance energético.",
        features: [
            "Agujas estériles de un solo uso",
            "Técnica personalizada",
            "Incluye moxibustión ligera (opcional)",
        ],
    },
];