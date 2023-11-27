export interface ReviewItemProps {
    id?: number;
    name?: string;
    date?: string;
    review?: string;
    img?: string; // Marking img as optional since it might be undefined in some cases
    product?: string;
    type?: string;
    rating?: number; // Marking rating as optional since it might be undefined in some cases
}

export const reviewData: ReviewItemProps[] = [
    {
        id: Math.random(),
        name: "Вікторія",
        date: "26/07/2023",
        review: "Ідеальний продукт, найкращий з мого арсеналу косметики. підлаштовується під тон шкіри, матує, тримається протягом всього дня.",
        img: '\item.jpg',
        product: 'Dior Diorskin Forever Undercover 24H Full Coverage Foundation',
        type: 'Тональна основа',
        rating: 4
    },
    {
        id: Math.random(),
        name: "Лілія",
        date: "23/07/2023",
        review: "Замовляла декілька ароматів, і більше всі сподобався Chocolate Mousse 1231396",
        img: '\prod4.png',
        product: 'Aromika Mano Namai Palsaptis',
        type: 'Дифузор',
        rating: 3
    },
    {
        id: Math.random(),
        name: "Катерина",
        date: "18/07/2023",
        review: "Дуже ніжний запах,але не стійкий. Насправді мені сподобався,свіжий та не навʼязливий, для літа саме те)",
        img: '\prod3.png',
        product: 'Juliette Has a Gun Lady Vengeance',
        type: 'Парфумована вода',
        rating: 4.5
    },
    {
        id: Math.random(),
        name: "Вікторія",
        date: "26/07/2023",
        review: "Ідеальний продукт, найкращий з мого арсеналу косметики. підлаштовується під тон шкіри, матує, тримається протягом всього дня.",
        img: '',
        product: 'Dior Diorskin Forever Undercover 24H Full Coverage Foundation',
        type: 'Тональна основа'
    },
    {
        id: Math.random(),
        name: "Вікторія",
        date: "26/07/2023",
        review: "Ідеальний продукт, найкращий з мого арсеналу косметики. підлаштовується під тон шкіри, матує, тримається протягом всього дня.",
        img: '',
        product: 'Dior Diorskin Forever Undercover 24H Full Coverage Foundation',
        type: 'Тональна основа'
    },

]
