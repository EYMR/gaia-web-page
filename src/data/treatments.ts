export type Treatment = {
    category: string;
    conditions: string[];
    duration: string;
    success?: string;
}


export const treatments: Treatment[] = [
    {
        category: "Paquete Nutritivo",
        conditions: [
            "Cáncer",
            "Desnutrición",
            "Anemia ferropénica",
            "Deficiencias vitamínicas",
            "Pérdida de peso involuntaria",
            "Fatiga crónica",
        ],
        duration: "8-16 semanas",
    },
    {
        category: "Paquete Completo",
        conditions: [
            "Cáncer de mama",
            "Cáncer de próstata",
            "Cáncer de colon",
            "Cáncer de pulmón",
            "Leucemia",
        ],
        duration: "6-12 semanas",
    },
    {
        category: "Paquete Detox",
        conditions: [
            "Gastritis crónica",
            "Síndrome de intestino irritable",
            "Colitis ulcerosa",
            "Reflujo gastroesofágico",
            "Estreñimiento crónico",
        ],
        duration: "4 semanas"
    },

    {
        category: "Cuidado Renal",
        conditions: [
            "Insuficiencia renal crónica",
            "Nefropatía diabética",
            "Litiasis renal (cálculos renales)",
            "Infecciones urinarias recurrentes",
            "Síndrome nefrótico",
        ],
        duration: "8-16 semanas",
    },
    {
        category: "Control Glucosa",
        conditions: [
            "Diabetes tipo 2",
            "Prediabetes",
            "Hipoglucemia reactiva",
            "Síndrome metabólico",
            "Resistencia a la insulina",
        ],
        duration: "6-12 semanas",
    },
    {
        category: "Control Glucosa Completo",
        conditions: [
            "Diabetes tipo 1",
            "Diabetes tipo 2",
            "Prediabetes",
            "Neuropatía diabética",
        ],
        duration: "12-24 semanas",
    },

]
