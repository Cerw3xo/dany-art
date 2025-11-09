// src/lib/strapi.ts

// URL Strapi backendu (môžeš dať do .env.local)
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://dany-art-production.up.railway.app';

// Typy pre Strapi odpoveď (prispôsobiť podľa tvojho Content Type)
export interface StrapiProduct {
    id: number;
    attributes: {
        nazov: string;
        slug: string;
        cena: number;
        popis?: string;
        kategoria?: string;
        subkategoria?: string;
        dostupny?: boolean;
        featured?: boolean;
        obrazky?: { data: { attributes: { url: string } }[] };
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
}

export interface StrapiResponse<T> {
    data: T;
}

// Fetch všetky produkty zo Strapi
export async function fetchProducts(): Promise<StrapiProduct[]> {
    try {
        const response = await fetch(`${STRAPI_URL}/api/produkts?populate=*`, {
            next: { revalidate: 60 }, // ISR revalidácia v Next.js
        });
        if (!response.ok) throw new Error(`Strapi API error: ${response.status}`);
        const json: StrapiResponse<StrapiProduct[]> = await response.json();
        return json.data;
    } catch (error) {
        console.error('Chyba pri fetchnutí produktov zo Strapi:', error);
        return [];
    }
}

// Mapa na front-end Product typ
export function convertStrapiProduct(p: StrapiProduct) {
    return {
        id: String(p.id),
        slug: p.attributes.slug,
        name: p.attributes.nazov,
        price: p.attributes.cena,
        currency: 'CZK',
        category: p.attributes.kategoria || '',
        subcategory: p.attributes.subkategoria,
        images: (p.attributes.obrazky?.data || []).map(img => `${STRAPI_URL}${img.attributes.url}`),
        thumbnail: p.attributes.obrazky?.data?.[0] ? `${STRAPI_URL}${p.attributes.obrazky.data[0].attributes.url}` : '',
        summary: p.attributes.popis,
        available: p.attributes.dostupny ?? true,
        featured: p.attributes.featured,
    };
}
