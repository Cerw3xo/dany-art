import { error } from "console";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://dany-art-production.up.railway.app';

export interface StrapiProduct {
    id: number;
    documentId: string;
    name: string;
    slug: string;
    price: number;
    description?: string;
    category?: string;
    subcategory?: string;
    available?: boolean;
    featured?: boolean;
    images?: Array<{
        id: number;
        url: string;
        name?: string
    }>;
    thumbnail?: {
        id: number;
        url: string;
        name?: string;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;

}

export interface StrapiResponse<T> {
    data: T;
}


export async function fetchProductBySlug(slug: string): Promise<StrapiProduct | null> {
    try {
        const response = await fetch(
            `${STRAPI_URL}/api/produkts?filter[slug][$eq]=${slug}&populate=*`,
            {
                next: { revalidate: 60 },
            }
        );
        if (!response.ok) throw new Error(`Strapi API error: ${response.status}`);
        const json: StrapiResponse<StrapiProduct[]> = await response.json();
        if (!json.data || !json.data.length) return null;
        return json.data[0]
    } catch (error) {
        console.error('Chyba pri fetch produktu zo Strapi:', error)
        return null
    }
}

export async function fetchProducts(): Promise<StrapiProduct[]> {
    try {
        const response = await fetch(`${STRAPI_URL}/api/produkts?populate=*`, {
            next: { revalidate: 60 },
        });
        if (!response.ok)
            throw new Error(`Strapi API error: ${response.status}`);
        const json: StrapiResponse<StrapiProduct[]> = await response.json();

        return json.data;
    } catch (error) {
        console.error('Chyba pri fetchnutí produktov zo Strapi:', error);
        return [];
    }
}


// Mapa na front-end Product typ
export function convertStrapiProduct(p: StrapiProduct) {
    if (!p || !p.slug) {
        console.warn('⚠️ Produkt nemá slug, preskakujem:', p);
        return undefined;
    }


    return {
        id: String(p.id || p.documentId),
        slug: p.slug,
        name: p.name,
        price: p.price,
        currency: 'CZK',
        category: p.category || '',
        subcategory: p.subcategory,
        images: (p.images || []).map((img) => `${STRAPI_URL}${img.url}`),
        thumbnail: p.thumbnail?.url ? `${STRAPI_URL}${p.thumbnail.url}` : '',
        summary: p.description || '',
        available: p.available ?? true,
        featured: p.featured,
    };
}
