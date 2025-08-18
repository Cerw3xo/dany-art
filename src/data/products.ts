// src/data/products.ts
import type { Category } from "./categories";

export type Product = {
    id: string;
    slug: string;
    name: string;
    price: number;
    currency: "CZK";
    category: Category;
    images: string[];
    thumbnail: string;
    summary?: string;
    available: boolean;
    featured?: boolean;
    subCategory?: string; // napr. "tricka"
};

export const products: Product[] = [
    {
        id: "p1",
        slug: "kapka-v-mori-kniha",
        name: "Kapka v moři – kniha",
        price: 600,
        currency: "CZK",
        category: "grafika",
        images: ["/portfolio/1.jpg"],
        thumbnail: "/portfolio/1.jpg",
        available: true,
        summary: "Autorská kniha, měkká vazba.",
    },
    {
        id: "p2",
        slug: "no-mezi-etiketa",
        name: "No Mezi – etiketa",
        price: 400,
        currency: "CZK",
        category: "grafika",
        images: ["/portfolio/2.jpg"],
        thumbnail: "/portfolio/2.jpg",
        available: true,
    },
    {
        id: "p3",
        slug: "mikina-danyss-art",
        name: "Mikina DanyssArt",
        price: 990,
        currency: "CZK",
        category: "obleceni-a-doplnky",
        images: ["/portfolio/1.jpg"],
        thumbnail: "/portfolio/1.jpg",
        available: true,
        subCategory: "tricka",
    },
    {
        id: "p4",
        slug: "taska-slunecnice",
        name: "Taška Slunečnice",
        price: 350,
        currency: "CZK",
        category: "obleceni-a-doplnky",
        images: ["/portfolio/3.jpg"],
        thumbnail: "/portfolio/3.jpg",
        available: true,
    },
];