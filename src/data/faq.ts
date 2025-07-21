
export type FAQ = {
    category: string; // "appointments", "payments", "services", "products", "legal", "general"
    q: string;        // Pregunta
    a: string;        // Respuesta
}

export const faqData: FAQ[] = [
    // Appointments
    {
        category: "appointments",
        q: "¿Cómo agendo una consulta?",
        a: "Ve a la sección Agenda, llena el formulario y serás redirigido a WhatsApp con un mensaje prellenado. Confirmaremos tu cita tan pronto como sea posible.",
    },
    {
        category: "appointments",
        q: "¿Cuánto tiempo dura una consulta?",
        a: "Las consultas presenciales duran aproximadamente 60-90 minutos, mientras que las consultas en línea tienen una duración de 45-60 minutos.",
    },
    {
        category: "appointments",
        q: "¿Puedo cancelar o reprogramar mi cita?",
        a: "Sí, puedes cancelar o reprogramar con al menos 24 horas de anticipación. Contacta por WhatsApp para hacer cambios.",
    },
    {
        category: "appointments",
        q: "¿Ofrecen consultas de emergencia?",
        a: "No manejamos emergencias médicas. En caso de emergencia, contacta a tu médico o acude al hospital más cercano.",
    },
    {
        category: "appointments",
        q: "¿Qué debo llevar a mi primera consulta?",
        a: "Trae estudios médicos recientes, lista de medicamentos actuales, historial clínico y cualquier información relevante sobre tu salud.",
    },

    // Payments
    {
        category: "payments",
        q: "¿Aceptan pago por transferencia?",
        a: "Sí. Te enviaremos los datos bancarios por WhatsApp. Una vez recibido el comprobante tu cita queda confirmada.",
    },
    {
        category: "payments",
        q: "¿Cuáles son las formas de pago disponibles?",
        a: "Aceptamos efectivo, transferencia bancaria, tarjetas de débito/crédito y pagos por aplicaciones móviles.",
    },
    {
        category: "payments",
        q: "¿Manejan planes de pago o descuentos?",
        a: "Ofrecemos descuentos por paquetes de consultas y planes de pago para tratamientos prolongados. Consulta disponibilidad.",
    },
    {
        category: "payments",
        q: "¿Emiten facturas?",
        a: "Sí, podemos emitir facturas fiscales. Proporciona tus datos fiscales al momento del pago.",
    },

    // Services
    {
        category: "services",
        q: "¿Las terapias sustituyen atención médica?",
        a: "No. Nuestros servicios son complementarios. Ante una emergencia contacta a tu médico o acude a un hospital.",
    },
    {
        category: "services",
        q: "¿Qué tipo de tratamientos ofrecen?",
        a: "Ofrecemos acupuntura, medicina tradicional china, homeopatía y medicina tradicional mexicana.",
    },
    {
        category: "services",
        q: "¿Cuántas sesiones necesito?",
        a: "Depende de tu condición específica. Generalmente se requieren 3-8 sesiones, pero se evalúa caso por caso.",
    },
    {
        category: "services",
        q: "¿Atienden niños y adultos mayores?",
        a: "Sí, atendemos pacientes de todas las edades con tratamientos adaptados a cada grupo etario.",
    },
    {
        category: "services",
        q: "¿Hay contraindicaciones para los tratamientos?",
        a: "Algunos tratamientos tienen contraindicaciones específicas. Se evalúa cada caso durante la consulta inicial.",
    },

    // Products
    {
        category: "products",
        q: "¿Hacen envíos de productos a todo México?",
        a: "Enviamos por paquetería certificada a cualquier punto del país. Costos y tiempos varían según destino.",
    },
    {
        category: "products",
        q: "¿Qué tipo de productos manejan?",
        a: "Vendemos tinturas, suplementos naturales, pomadas, entre otros.",
    },
    {
        category: "products",
        q: "¿Los productos requieren receta?",
        a: "La mayoría son de venta libre, pero recomendamos consulta previa para uso adecuado y dosificación.",
    },
    {
        category: "products",
        q: "¿Cuál es el tiempo de entrega?",
        a: "Entregas locales: 1-2 días. Envíos nacionales: 3-7 días hábiles dependiendo del destino.",
    },
    {
        category: "products",
        q: "¿Tienen garantía los productos?",
        a: "Garantizamos la calidad de nuestros productos. Aceptamos devoluciones por defectos de fabricación.",
    },

    // Legal
    {
        category: "legal",
        q: "¿Están certificados para ejercer?",
        a: "Sí, contamos con todas las certificaciones y registros necesarios para ejercer medicina tradicional.",
    },
    {
        category: "legal",
        q: "¿Cómo protegen mis datos personales?",
        a: "Cumplimos con la Ley Federal de Protección de Datos. Tus datos solo se usan para fines terapéuticos.",
    },
    {
        category: "legal",
        q: "¿Puedo solicitar mi historial médico?",
        a: "Sí, tienes derecho a acceder a tu información. Solicítala por correo electrónico con identificación oficial.",
    },

    // General
    {
        category: "general",
        q: "¿Qué es la medicina tradicional?",
        a: "Es un sistema de salud que utiliza conocimientos ancestrales, plantas medicinales y terapias naturales para tratar enfermedades.",
    },
    {
        category: "general",
        q: "¿Dónde están ubicados?",
        a: "Nos encontramos en El Pueblito, Corregidora, Querétaro. También ofrecemos consultas en línea.",
    },
    {
        category: "general",
        q: "¿Cuáles son sus horarios de atención?",
        a: "Lunes a viernes de 9:00 AM a 6:00 PM, sábados de 9:00 AM a 2:00 PM. Domingos sin servicio.",
    },
    {
        category: "general",
        q: "¿Ofrecen consultas en línea?",
        a: "Sí, realizamos consultas por videollamada para seguimientos y casos que no requieren exploración física.",
    },
]