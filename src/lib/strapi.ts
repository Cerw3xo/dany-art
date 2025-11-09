// src/lib/strapi.ts

// URL Strapi backendu (môžeš dať do .env.local)
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://dany-art-production.up.railway.app';

// Typy pre Strapi odpoveď (prispôsobiť podľa tvojho Content Type)
export interface StrapiProduct {
    id: number;
    attributes: {
        name: string;
        slug: string;
        price: number;
        description?: string;
        category?: string;
        subcategory?: string;
        available?: boolean;
        featured?: boolean;
        images?: { data: { attributes: { url: string } }[] };
        thumbnail?: { data?: { attributes: { url: string } } };
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
            next: { revalidate: 60 },
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
    if (!p || !p.attributes || !p.attributes.slug) return undefined;
    return {
        id: String(p.id),
        slug: p.attributes.slug,
        name: p.attributes.name,
        price: p.attributes.price,
        currency: 'CZK', // stále fixne, uprav ak máš v API
        category: p.attributes.category || '',
        subcategory: p.attributes.subcategory,
        images:
            (p.attributes.images?.data || []).map(
                (img) => `${STRAPI_URL}${img.attributes.url}`
            ),
        thumbnail: p.attributes.thumbnail?.data?.attributes?.url
            ? `${STRAPI_URL}${p.attributes.thumbnail.data.attributes.url}`
            : '',
        summary: p.attributes.description || '',
        available: p.attributes.available ?? true,
        featured: p.attributes.featured,
    };
}
