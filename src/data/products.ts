export type Product = {
    id: string;
    name: string;
    category: "Paquetes Completos" | "Tinturas" | "Tónicos" | "Detox" | "Pomadas" | "Otros";
    size: string;       // Ej. "55 ml"   "240 ml"
    price: number;      // MXN
    sendable: boolean;  // Envío paquetería
    image?: string; // URL de la imagen (opcional)
};

export const products: Product[] = [

    /* —— Paquetes Completos —— */
    {
        id: "pac-ntv",
        name: "Paquete Nutritivo",
        category: "Paquetes Completos",
        size: "1 mes",
        price: 2900,
        sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },


{
        id: "pac-cmp",
        name: "Paquete Completo",
        category: "Paquetes Completos",
        size: "1 mes",
        price: 2500,
        sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },
    {
        id: "pac-dtx",
        name: "Paquete Detox",
        category: "Paquetes Completos",
        size: "1 mes",
        price: 2100,
        sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },
    {
        id: "pac-hrb",
        name: "Paquete Cuidado Renal",
        category: "Paquetes Completos",
        size: "1 mes",
        price: 2500,
        sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },
    {
        id: "pac-glc",
        name: "Paquete Control Glucosa",
        category: "Paquetes Completos",
        size: "1 mes",
        price: 2100,
        sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },
    {
        id: "pac-glce",
        name: "Paquete Control Glucosa Completo",
        category: "Paquetes Completos",
        size: "1 mes",
        price: 2700,
        sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },

    /* —— Tinturas —— */
    {
        id: "got-leafc",
        name: "Lechero Africano",
        category: "Tinturas",
        size: "55 ml",
        price: 180,
        sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },
    {
        id: "got-klnc",
        name: "Kalanchoe",
        category: "Tinturas",
        size: "55 ml",
        price: 180,
        sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },
    {
        id: "got-dtx",
        name: "Detox",
        category: "Tinturas",
        size: "55 ml",
        price: 180,
        sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },
    {
        id: "got-dlr",
        name: "Dolor",
        category: "Tinturas",
        size: "55 ml",
        price: 180,
        sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },
    {
        id: "got-sno",
        name: "Sistema Nervioso",
        category: "Tinturas",
        size: "55 ml",
        price: 180,
        sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },
    {
        id: "got-ugto",
        name: "Uña de Gato",
        category: "Tinturas",
        size: "55 ml",
        price: 180,
        sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },
    {
        id: "got-chrm",
        name: "Control Hormonal",
        category: "Tinturas",
        size: "55 ml",
        price: 150,
        sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },
    {
        id: "got-hrbi",
        name: "Herbal Indispensable",
        category: "Tinturas",
        size: "55 ml",
        price: 150,
        sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },
    {
        id: "got-nem",
        name: "Neem",
        category: "Tinturas",
        size: "55 ml",
        price: 190,
        sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },
    {
        id: "got-crlgl",
        name: "Control Glucosa",
        category: "Tinturas",
        size: "55 ml",
        price: 200,
        sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },

    /* —— Tónicos 120 ml —— */
    {
        id: "ton-antb",
        name: "Tónico Antibiótico (No Fármaco)",
        category: "Tónicos",
        size: "120 ml",
        price: 320,
        sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },
    /* —— Tónicos 240 ml —— */
    {
        id: "ton-prst",
        name: "Tónico Parásitos",
        category: "Tónicos",
        size: "240 ml",
        price: 320,
        sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },
    {
        id: "ton-dtpx",
        name: "Tónico DTXP",
        category: "Tónicos",
        size: "240 ml",
        price: 320,
        sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },
    {
        id: "ton-glesp",
        name: "Tónico Control Glucosa Especial",
        category: "Tónicos",
        size: "240 ml",
        price: 320,
        sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },

    /* —— Tónicos 500 ml —— */
    {
        id: "ton-mplas",
        name: "Tónico Macerado de Plantas",
        category: "Tónicos",
        size: "500 ml",
        price: 320,
        sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },
    {
        id: "ton-ntv",
        name: "Tónico Nutritivo",
        category: "Tónicos",
        size: "500 ml",
        price: 340,
        sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },
    {
        id: "ton-fem",
        name: "Tónico Control Neuropatías",
        category: "Tónicos",
        size: "500 ml",
        price: 340,
        sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },
    {
        id: "ton-rnl",
        name: "Tónico Salud Renal",
        category: "Tónicos",
        size: "500 ml",
        price: 340,
        sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },
    {
        id: "ton-art",
        name: "Tónico Regenerador Digestivo",
        category: "Tónicos",
        size: "500 ml",
        price: 340,
        sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },

    /* —— Detox —— */
    {
        id: "det-dig", name: "Limpieza Digestiva", category: "Detox", size: "500ml", price: 890, sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },

    /* —— Pomadas —— */
    {
        id: "pom-arn",
        name: "Pomada de Árnica",
        category: "Pomadas",
        size: "60 g",
        price: 150,
        sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },
    {
        id: "pom-cal",
        name: "Caléndula Calmante",
        category: "Pomadas",
        size: "60 g",
        price: 150,
        sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },
    {
        id: "pom-res",
        name: "Descongestionante Herbal",
        category: "Pomadas",
        size: "60 g",
        price: 170,
        sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },

    /* —— Otros —— */
    {
        id: "otr-ace",
        name: "Shampoo",
        category: "Otros",
        size: "500 ml",
        price: 150,
        sendable: true,
        image: "https://storage.googleapis.com/gaia-web-a0afb.firebasestorage.app/public%2Flogo.jpg"
    },
];