export type PostMeta = {
    id: number;
    slug: string;
    title: string;
    author?: string;
    date: string;
    category: string;
    excerpt: string;
    readTime: string
};

export const blogPosts: PostMeta[] = [
    {
        id: 1,
        title: "Los Beneficios de la Fitoterapia en el Tratamiento de la Ansiedad",
        excerpt:
            "Descubre cómo las plantas medicinales pueden ayudar a reducir los niveles de ansiedad de forma natural y sin efectos secundarios.",
        author: "Dra. María Elena Gaia",
        date: "15 de Enero, 2024",
        category: "Fitoterapia",
        readTime: "5 min lectura",
        slug: "beneficios-fitoterapia-ansiedad",
    },
    {
        id: 2,
        title: "Medicina Ayurvédica: Equilibrando los Doshas para una Mejor Salud",
        excerpt:
            "Aprende sobre los tres doshas (Vata, Pitta, Kapha) y cómo mantenerlos en equilibrio para optimizar tu bienestar.",
        author: "Dra. María Elena Gaia",
        date: "8 de Enero, 2024",
        category: "Ayurveda",
        readTime: "7 min lectura",
        slug: "medicina-ayurvedica-doshas",
    },
    {
        id: 3,
        title: "Acupuntura: Más que Agujas, una Filosofía de Sanación",
        excerpt:
            "Explora los principios fundamentales de la acupuntura y cómo esta antigua práctica puede transformar tu salud.",
        author: "Dra. María Elena Gaia",
        date: "2 de Enero, 2024",
        category: "Acupuntura",
        readTime: "6 min lectura",
        slug: "acupuntura-filosofia-sanacion",
    },
    {
        id: 4,
        title: "Alimentación Consciente: La Base de la Medicina Tradicional",
        excerpt:
            "Descubre cómo los alimentos pueden ser tu medicina y aprende a crear una dieta que nutra tu cuerpo y alma.",
        author: "Dra. María Elena Gaia",
        date: "28 de Diciembre, 2023",
        category: "Nutrición",
        readTime: "8 min lectura",
        slug: "alimentacion-consciente-medicina-tradicional",

    },
    {
        id: 5,
        title: "Terapia Neural: Liberando las Memorias del Cuerpo",
        excerpt:
            "Conoce cómo la terapia neural puede ayudar a resolver traumas físicos y emocionales almacenados en el sistema nervioso.",
        author: "Dra. María Elena Gaia",
        date: "20 de Diciembre, 2023",
        category: "Terapia Neural",
        readTime: "6 min lectura",
        slug: "terapia-neural-memorias-cuerpo",
    },
    {
        id: 6,
        title: "Plantas Medicinales Mexicanas: Tesoros de Nuestra Tradición",
        excerpt:
            "Un recorrido por las plantas medicinales más importantes de México y sus usos tradicionales en la sanación.",
        author: "Dra. María Elena Gaia",
        date: "15 de Diciembre, 2023",
        category: "Fitoterapia",
        readTime: "9 min lectura",
        slug: "plantas-medicinales-mexicanas-tradicion",
    },
];