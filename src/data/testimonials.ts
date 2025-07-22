export type Testimonials = {
    id: number;
    name: string;
    age: number;
    location: string;
    condition: string;
    category: string;
    treatment: string;
    duration: string;
    rating: number;
    date: string;
    type: string;
    thumbnail?: string;
    quote: string;
    fullStory: string;
    results: string[];
    videoUrl?: string;
    image?: string;
};

export const testimonials: Testimonials[] = [
    {
        id: 1,
        name: "María González",
        age: 34,
        location: "Querétaro, QRO",
        condition: "Ansiedad Generalizada",
        category: "anxiety",
        treatment: "Acupuntura + Fitoterapia",
        duration: "3 meses",
        rating: 5,
        date: "Enero 2024",
        type: "video",
        thumbnail: "/placeholder.svg?height=300&width=400",
        quote:
            "Después de años luchando con ansiedad, finalmente encontré paz. La combinación de acupuntura y plantas medicinales cambió mi vida completamente.",
        fullStory:
            "Llegué a Gaia después de probar múltiples tratamientos convencionales sin éxito. Mi ansiedad era tan severa que no podía salir de casa. Después de 3 meses de tratamiento integral, no solo recuperé mi vida social, sino que también aprendí técnicas para manejar el estrés de manera natural.",
        results: ["Reducción del 90% en ataques de pánico", "Mejor calidad de sueño", "Regreso a actividades sociales"],
        videoUrl: "#",
    },
    {
        id: 2,
        name: "Carlos Mendoza",
        age: 45,
        location: "San Luis Potosí, SLP",
        condition: "Dolor Lumbar Crónico",
        category: "pain",
        treatment: "Terapia Neural + Acupuntura",
        duration: "4 meses",
        rating: 5,
        date: "Diciembre 2023",
        type: "image",
        image: "/placeholder.svg?height=300&width=400",
        quote:
            "20 años de dolor constante se convirtieron en libertad total. Ahora puedo jugar fútbol con mis hijos sin limitaciones.",
        fullStory:
            "El dolor lumbar me tenía postrado. Había probado cirugías, medicamentos fuertes y fisioterapia tradicional. La terapia neural fue reveladora - liberó tensiones que tenía desde un accidente hace décadas. Combinada con acupuntura, el resultado fue extraordinario.",
        results: ["Eliminación completa del dolor crónico", "Recuperación de movilidad total", "Suspensión de analgésicos"],
    },
    {
        id: 3,
        name: "Ana Sofía Ruiz",
        age: 28,
        location: "Guadalajara, JAL",
        condition: "Síndrome de Intestino Irritable",
        category: "digestive",
        treatment: "Medicina Ayurvédica + Fitoterapia",
        duration: "6 meses",
        rating: 5,
        date: "Noviembre 2023",
        type: "video",
        thumbnail: "/placeholder.svg?height=300&width=400",
        quote:
            "Mi sistema digestivo era un caos. Ahora disfruto cada comida sin miedo ni dolor. La medicina ayurvédica me enseñó a escuchar mi cuerpo.",
        fullStory:
            "Vivía con dolor abdominal constante, hinchazón y episodios impredecibles que arruinaban mis planes. El enfoque ayurvédico no solo trató mis síntomas, sino que me ayudó a entender mi constitución única y cómo alimentarme correctamente.",
        results: ["Digestión normal y sin dolor", "Identificación de alimentos adecuados", "Mejor relación con la comida"],
        videoUrl: "#",
    },
    {
        id: 4,
        name: "Roberto Jiménez",
        age: 52,
        location: "Monterrey, NL",
        condition: "Insomnio Crónico",
        category: "sleep",
        treatment: "Acupuntura + Medicina Herbal",
        duration: "2 meses",
        rating: 5,
        date: "Octubre 2023",
        type: "image",
        image: "/placeholder.svg?height=300&width=400",
        quote:
            "Después de 5 años sin dormir bien, ahora duermo 8 horas seguidas. Mi energía y concentración regresaron completamente.",
        fullStory:
            "El estrés laboral me había robado el sueño. Probé pastillas para dormir que me dejaban aturdido al día siguiente. La acupuntura reguló mi sistema nervioso y las hierbas me ayudaron a relajarme naturalmente sin efectos secundarios.",
        results: ["8 horas de sueño reparador", "Mayor energía durante el día", "Mejor concentración en el trabajo"],
    },
    {
        id: 5,
        name: "Lucía Hernández",
        age: 38,
        location: "Puebla, PUE",
        condition: "Desequilibrio Hormonal",
        category: "hormonal",
        treatment: "Fitoterapia + Medicina Tradicional",
        duration: "5 meses",
        rating: 5,
        date: "Septiembre 2023",
        type: "video",
        thumbnail: "/placeholder.svg?height=300&width=400",
        quote:
            "Mis ciclos irregulares y cambios de humor extremos se regularon naturalmente. Me siento como una nueva persona.",
        fullStory:
            "Los desequilibrios hormonales controlaban mi vida - ciclos impredecibles, cambios de humor severos y fatiga constante. Las plantas medicinales mexicanas trabajaron en armonía con mi cuerpo para restaurar el equilibrio natural sin hormonas sintéticas.",
        results: ["Ciclos menstruales regulares", "Estado de ánimo estable", "Niveles de energía consistentes"],
        videoUrl: "#",
    },
    {
        id: 6,
        name: "Diego Morales",
        age: 41,
        location: "Tijuana, BC",
        condition: "Asma Bronquial",
        category: "respiratory",
        treatment: "Medicina Herbal + Acupuntura",
        duration: "4 meses",
        rating: 5,
        date: "Agosto 2023",
        type: "image",
        image: "/placeholder.svg?height=300&width=400",
        quote:
            "Mi dependencia del inhalador se redujo 80%. Ahora puedo hacer ejercicio y actividades al aire libre sin limitaciones.",
        fullStory:
            "El asma limitaba cada aspecto de mi vida. Los ataques eran frecuentes y severos. La combinación de hierbas expectorantes y acupuntura fortaleció mis pulmones gradualmente. Ahora respiro libremente y mi calidad de vida es incomparable.",
        results: [
            "Reducción significativa de crisis asmáticas",
            "Menor dependencia de medicamentos",
            "Capacidad para ejercitarse",
        ],
    },
    {
        id: 7,
        name: "Patricia Vega",
        age: 29,
        location: "Mérida, YUC",
        condition: "Migrañas Crónicas",
        category: "pain",
        treatment: "Acupuntura + Terapia Neural",
        duration: "3 meses",
        rating: 5,
        date: "Julio 2023",
        type: "video",
        thumbnail: "/placeholder.svg?height=300&width=400",
        quote: "Las migrañas que me incapacitaban 15 días al mes desaparecieron. Recuperé mi carrera y mi vida personal.",
        fullStory:
            "Las migrañas eran tan severas que perdí trabajos y oportunidades. Vivía en oscuridad constante. La acupuntura identificó patrones de tensión que desencadenaban las crisis, y la terapia neural liberó bloqueos profundos. Ahora tengo una vida normal y productiva.",
        results: ["Eliminación de migrañas crónicas", "Regreso a la vida laboral normal", "Mejor calidad de vida familiar"],
        videoUrl: "#",
    },
    {
        id: 8,
        name: "Fernando Castro",
        age: 36,
        location: "León, GTO",
        condition: "Gastritis Crónica",
        category: "digestive",
        treatment: "Medicina Ayurvédica + Fitoterapia",
        duration: "4 meses",
        rating: 5,
        date: "Junio 2023",
        type: "image",
        image: "/placeholder.svg?height=300&width=400",
        quote:
            "El ardor constante en mi estómago desapareció. Ahora puedo disfrutar comidas familiares sin preocupaciones.",
        fullStory:
            "La gastritis me obligaba a seguir una dieta estricta y aun así sufría de acidez y dolor. El enfoque ayurvédico identificó la raíz de mi desequilibrio y, con hierbas específicas, mi sistema digestivo se sanó por completo.",
        results: ["Eliminación de la gastritis", "Dieta variada sin dolor", "Mejor absorción de nutrientes"],
    },
];