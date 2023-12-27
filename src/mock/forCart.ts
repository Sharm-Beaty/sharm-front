export interface Image {
    id: string;
    order: number;
    url: string;
}

export interface CartItem {
    id: string;
    name: string;
    price: string;
    category: string;
    quantity: string;
    images: Image[];
}

export const forCart: CartItem[] = [
    {
        "id": "9ebecfb8-f5a9-4c9c-b5b0-984b1e707161",
        "name": "Dior Rouge Matte Lipstick",
        "price": "10.00",
        "category": "Помада для губ",
        "quantity": "5",
        "images": [],
    },
    {
        "id": "6d695fc0-4cd9-400a-a3ee-2b6803e23280",
        "name": "Pupa Eyebrow Intense Powder",
        "price": "11.00",
        "category": "Пудра для брів",
        "quantity": "2",
        "images": [
            {
                "id": "90b7e644-d1e7-4d84-b82b-f2fe89ff7ef5",
                "order": 1,
                "url": "http://beautyshop.fly.dev/media/2023/12/07/Screenshot_13_FOD6OQE.png"
            }
        ],
    },
]