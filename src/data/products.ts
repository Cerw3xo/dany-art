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
    subCategory?: string;
};

export const products: Product[] = [

    {
        id: "etiketa-vino",
        slug: "etiketa-vino",
        name: "Etiketa na víno",
        price: 400,
        currency: "CZK",
        category: "grafika",
        images: ["/portfolio/etikety/vino.jpg"],
        thumbnail: "/portfolio/etikety/vino.jpg",
        available: true,
        summary: "Originální etiketa na víno.",
    },
    {
        id: "vino-palava",
        slug: "vino-palava",
        name: "Etiketa Pálava",
        price: 400,
        currency: "CZK",
        category: "grafika",
        images: ["/portfolio/etikety/vino-palava.jpg"],
        thumbnail: "/portfolio/etikety/vino-palava.jpg",
        available: true,
        summary: "Etiketa na víno Pálava.",
    },
    {
        id: "etiketa-vino-lipa",
        slug: "etiketa-vino-lipa",
        name: "Etiketa Lípa",
        price: 400,
        currency: "CZK",
        category: "grafika",
        images: ["/portfolio/etikety/vino-lipa.jpg"],
        thumbnail: "/portfolio/etikety/vino-lipa.jpg",
        available: true,
        summary: "Etiketa na víno Lípa.",
    },
    {
        id: "etiketa-vino-suchyna",
        slug: "etiketa-vino-suchyna",
        name: "Etiketa Suchyňa",
        price: 400,
        currency: "CZK",
        category: "grafika",
        images: ["/portfolio/etikety/vino-suchyna.jpg"],
        thumbnail: "/portfolio/etikety/vino-suchyna.jpg",
        available: true,
        summary: "Etiketa na víno Suchyňa.",
    },
    {
        id: "etiketa-vino-svatebni",
        slug: "etiketa-vino-svatebni",
        name: "Etiketa Svatební",
        price: 400,
        currency: "CZK",
        category: "grafika",
        images: ["/portfolio/etikety/vino-svatebni.jpg"],
        thumbnail: "/portfolio/etikety/vino-svatebni.jpg",
        available: true,
        summary: "Svatební etiketa na víno.",
    },
    {
        id: "etiketa-baric",
        slug: "etiketa-baric",
        name: "Etiketa Barič",
        price: 400,
        currency: "CZK",
        category: "grafika",
        images: ["/portfolio/etikety/etiketa-vino.jpg"],
        thumbnail: "/portfolio/etikety/etiketa-vino.jpg",
        available: true,
        summary: "Etiketa Barič.",
    },

    // Grafika
    {
        id: "grafika-folklor",
        slug: "grafika-folklor",
        name: "Folklórní grafika",
        price: 500,
        currency: "CZK",
        category: "grafika",
        images: ["/portfolio/grafika/grafika-folklor.jpg"],
        thumbnail: "/portfolio/grafika/grafika-folklor.jpg",
        available: true,
        summary: "Folklórní motiv.",
    },
    {
        id: "grafika-makky",
        slug: "grafika-makky",
        name: "Grafika měkký",
        price: 500,
        currency: "CZK",
        category: "grafika",
        images: ["/portfolio/grafika/grafika-makky.jpg"],
        thumbnail: "/portfolio/grafika/grafika-makky.jpg",
        available: true,
        summary: "Měkká grafika.",
    },
    {
        id: "grafika-rozmarin",
        slug: "grafika-rozmarin",
        name: "Grafika Rozmarýn",
        price: 500,
        currency: "CZK",
        category: "grafika",
        images: ["/portfolio/grafika/grafika-rozmarin.jpg"],
        thumbnail: "/portfolio/grafika/grafika-rozmarin.jpg",
        available: true,
        summary: "Grafika s motivem rozmarýnu.",
    },

    // Knihy
    {
        id: "kniha-svadlencin-pomocnik",
        slug: "kniha-svadlencin-pomocnik",
        name: "Kniha Svadlencin pomocník",
        price: 600,
        currency: "CZK",
        category: "rucni-tvorba",
        images: ["/portfolio/knihy/svadlencin-pomocnik.jpg"],
        thumbnail: "/portfolio/knihy/svadlencin-pomocnik.jpg",
        available: true,
        summary: "Ručně vázaná kniha.",
    },
    {
        id: "nalezenecek4",
        slug: "nalezenecek4",
        name: "Nalezenéček 4",
        price: 600,
        currency: "CZK",
        category: "rucni-tvorba",
        images: ["/portfolio/knihy/nalezenecek4.jpg"],
        thumbnail: "/portfolio/knihy/nalezenecek4.jpg",
        available: true,
        summary: "Kniha Nalezenéček.",
    },

    // Malba
    {
        id: "malba-kravy",
        slug: "malba-kravy",
        name: "Obraz krávy",
        price: 1200,
        currency: "CZK",
        category: "obrazy",
        images: ["/portfolio/malba/kravy.jpeg"],
        thumbnail: "/portfolio/malba/kravy.jpeg",
        available: true,
        summary: "Originální obraz krav.",
    },
    {
        id: "malba-obraz-dany",
        slug: "malba-obraz-dany",
        name: "Obraz Dany",
        price: 1200,
        currency: "CZK",
        category: "obrazy",
        images: ["/portfolio/malba/obraz-dany.jpg"],
        thumbnail: "/portfolio/malba/obraz-dany.jpg",
        available: true,
        summary: "Obraz Dany.",
    },


    {
        id: "taska-dame-kafe",
        slug: "taska-dame-kafe",
        name: "Taška Dámy kafe",
        price: 350,
        currency: "CZK",
        category: "obleceni-a-doplnky",
        images: ["/portfolio/textil/taska-dame-kafe.jpg"],
        thumbnail: "/portfolio/textil/taska-dame-kafe.jpg",
        available: true,
        summary: "Ručně malovaná taška.",
    },
    {
        id: "taska-slnecnice",
        slug: "taska-slnecnice",
        name: "Taška Slnečnice",
        price: 350,
        currency: "CZK",
        category: "obleceni-a-doplnky",
        images: ["/portfolio/textil/taska-slnecnice.jpg"],
        thumbnail: "/portfolio/textil/taska-slnecnice.jpg",
        available: true,
        summary: "Taška s motivem slunečnic.",
    },
    {
        id: "tricko-dame-kafe",
        slug: "tricko-dame-kafe",
        name: "Tričko Dámy kafe",
        price: 490,
        currency: "CZK",
        category: "obleceni-a-doplnky",
        images: ["/portfolio/textil/tricko-dame-kafe.JPG"],
        thumbnail: "/portfolio/textil/tricko-dame-kafe.JPG",
        available: true,
        summary: "Tričko s autorským motivem.",
    },

];