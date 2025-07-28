export type Testimonials = {
    id: number;
    name: string;
    age?: number;
    location: string;
    condition?: string;
    category: string;
    treatment: string;
    duration?: string;
    rating: number;
    date: string;
    type: string;
    thumbnail?: string;
    quote?: string;
    fullStory?: string;
    results: string[];
    videoUrl?: string;
    image?: string;
};

export const testimonials: Testimonials[] = [
    /*********************
     *
     *
     *  Social Media Testimonials
     *
     *
     *
     *
     *
     ***************************/
    {

        id: 1,
        name: "Zafiro de los Mercedes",
        location: "Querétaro",
        category: "social",
        treatment: "Tratamiento Integral",
        duration: "3 meses",
        rating: 5,
        date: "Enero 2024",
        type: "image",
        thumbnail: "/placeholder.svg?height=300&width=400",
        quote:
            "Después de años luchando con ansiedad, finalmente encontré paz. La combinación de acupuntura y plantas medicinales cambió mi vida completamente.",
        fullStory:
            "Llegué a Gaia después de probar múltiples tratamientos convencionales sin éxito. Mi ansiedad era tan severa que no podía salir de casa. Después de 3 meses de tratamiento integral, no solo recuperé mi vida social, sino que también aprendí técnicas para manejar el estrés de manera natural.",
        results: ["Reducción del 90% en ataques de pánico", "Mejor calidad de sueño", "Regreso a actividades sociales"],
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Ffbtestimonial.jpeg",
    },
    {
        id: 2,
        name: "José Ismael Molina",
        age: 45,
        location: "",
        condition: "Cáncer",
        category: "pain",
        treatment: "Tratamiento Nutritivo",
        duration: "",
        rating: 5,
        date: "Diciembre 2023",
        type: "video",
        videoUrl: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Ftest1.mp4",
        quote:
            "José Ismael fue diagnosticado con cáncer, recibió 7 quimioterapias durante un año. Al segundo año fue diagnosticado nuevamente y los doctores lo enviaron desahuciado.",
        fullStory: "Después de su diagnostico recibió 7 quimioterapias durante un año, al finalizar su tratamiento alópata, José Ismael asiste a revisión constante durante 6 ó 7 meses. Al siguiente año recibe noticias de que la enfermedad había regresado. Esta vez se le aplicaron quimioterapias más agresivas, después del tratamiento se le siguen haciendo estudios. Al final las noticias son desalentadoras, sus doctores lo enviaron desahuciado",
        results: ["Eliminación completa del dolor crónico", "Recuperación de movilidad total", "Suspensión de analgésicos"],
    },
    {
        id: 3,
        name: "Magali vía Facebook",
        location: "",
        condition: "Cáncer",
        category: "social",
        treatment: "Tratamiento Integral",
        duration: "1 mes",
        rating: 5,
        date: "2025",
        type: "image",
        thumbnail: "/placeholder.svg?height=300&width=400",
        quote: "Estoy acabando mi primer mes de tratamiento, acabo de pedir el segundo, me diagnosticaron cáncer de mama, cuando inicie con el tratamiento tenia mucho dolor ahora ya no tengo.",
        fullStory:
            "Estoy acabando mi primer mes de tratamiento, acabo de pedir el segundo, me diagnosticaron cáncer de mama, cuando inicie con el tratamiento tenia mucho dolor ahora ya no tengo.",
        results: ["Disminución del dolor"],
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Fmagali.jpeg",
    },
    {
        id: 4,
        name: "Cliente vía WhatsApp",
        location: "México",
        condition: "Inflamación",
        category: "digestive",
        treatment: "Tratamiento Digestivo",
        duration: "1 mes",
        rating: 5,
        date: "2025",
        type: "image",
        thumbnail: "/placeholder.svg?height=300&width=400",
        quote:
            "Después de 1 mes de tratamiento me siento muy desinflamada de mi vientre y el pólipo que tengo se redujo de tamaño",
        fullStory:
            "",
        results: ["Vientre desinflamado", "Pólipo reducido de tamaño"],
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Ffb1.jpeg"
    },
    {
        id: 5,
        name: "Flor vía Facebook",
        location: "México",
        category: "social",
        treatment: "Tratamiento Integral",
        duration: "1 mes",
        rating: 5,
        date: "2025",
        type: "image",
        thumbnail: "/placeholder.svg?height=300&width=400",
        quote:
            "Consulté con el doctor familiar, con un biólogo de aquí de mi estado y con un doctor de los que ponen agujas y nunca vi buen resultado con mi problema hasta que tome sus trátamientos, estoy súper recuperada.",
        results: ["Mejoró el estado de la salud al tomar el tratamiento de Gaia"],
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Ffb2.jpeg"
    },
    {
        id: 6,
        name: "Cliente vía WhatsApp",
        location: "México",
        condition: "Cáncer",
        category: "chronic",
        treatment: "Tratamiento Integral",
        duration: "2 meses",
        rating: 5,
        date: "2025",
        type: "image",
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Ffb3.jpeg",
        quote:
            "Una paciente de cáncer que se sometió a una cirugía de tumor de mama con un tratamiento previo reporta una recuperación rápida y sin dolor. La herida de 20 cms está limpia y cicatrizada solo 4 días después de la cirugía. La paciente se siente con mucha energía y atribuye su rápida recuperación al tratamiento recibido. Ahora, pregunta si necesitará otro tratamiento después de haber completado el actual.",
        results: [
            "Recuperación sin dolor",
            "Cicatrización rápida",
            "Energía y bienestar",
            "Comparación con experiencias anteriores",
        ],
    },
    {
        id: 7,
        name: "Cecy Reyes Vía Facebook",
        location: "México",
        condition: "Cáncer de mama",
        category: "chronic",
        treatment: "Tratamiento Integral",
        duration: "2 meses",
        rating: 5,
        date: "2025",
        type: "image",
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Ffb4.jpeg",
        quote: "Una persona con cáncer de mama que ha estado tomando un tratamiento durante 2 meses reporta sentirse muy bien. Ha notado una disminución en los mareos desde que comenzó el tratamiento.",
        results: ["Mejora en el estado de salud", "Disminución de mareos", "Tratamiento en curso"],
    },
    {
        id: 8,
        name: "Criss Gomez Vía Facebook",
        location: "México",
        category: "social",
        treatment: "Tratamiento Integral",
        duration: "1 mes",
        rating: 5,
        date: "2025",
        type: "image",
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Ffb5.jpeg",
        quote:
            "Una persona que había estado pasando por un momento difícil con su salud expresa gratitud hacia el tratamiento, ya que ha tenido un impacto positivo en su vida. Agradece por haber encontrado este recurso y reporta que, aunque el progreso es lento, está avanzando poco a poco.",
        results: ["Progreso lento pero seguro"],
    },
    {
        id: 9,
        name: "Julia Hernández Vía Facebook",
        location: "México",
        category: "social",
        treatment: "Tratamiento Integral",
        duration: "1 mes",
        rating: 5,
        date: "2025",
        type: "image",
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Ffb6.jpeg"
        , quote:
            "Julia expresa gratitud, porque compró el tratamiento para su hija y cree que este la ayudó muchísimo en sus dos cirugías.",
        results: ["Beneficio para su hija", "Resultados comprobados"],
    },
    {
        id: 10,
        name: "Paciente Vía WhatsApp",
        location: "México",
        category: "social",
        treatment: "Tratamiento Integral",
        duration: "1 mes",
        rating: 5,
        date: "2025",
        type: "image",
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Ffb7.jpeg",
        quote:
            "Nuestro cliente que está por terminar su tratamiento pregunta cuánto tiempo debe dejar pasar antes de reiniciar otro tratamiento. También menciona que ha estado sufriendo de colitis nerviosa, pero que se ha sentido muy bien desde que comenzó el tratamiento.",
        results: ["Mejora en la colitis nerviosa"],
    },


];