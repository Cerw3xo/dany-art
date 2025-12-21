

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://dany-art-production.up.railway.app';

export interface DescriptionBlock {
    id: number;
    title: string;
    content: string;
}

export interface StrapiProduct {
    id: number;
    documentId: string;
    name: string;
    slug: string;
    price: number;
    description?: string;
    summary?: string;
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
    sizes?: string[];
    description_blocks?: DescriptionBlock[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;

}

export interface StrapiResponse<T> {
    data: T;
}


export async function fetchProductBySlug(slug: string): Promise<StrapiProduct | null> {
    try {
        const url = `${STRAPI_URL}/api/produkts?filters[slug][$eq]=${slug}&populate[0]=images&populate[1]=thumbnail&populate[2]=description_blocks`;
        const response = await fetch(url, {
            next: { revalidate: 60 },
        });

        if (!response.ok) {
            console.error(`Strapi API error: ${response.status} ${response.statusText}`);
            throw new Error(`Strapi API error: ${response.status}`);
        }

        const json: StrapiResponse<StrapiProduct[]> = await response.json();

        if (!json.data || !json.data.length) {
            return null;
        }

        return json.data[0];
    } catch (error) {
        console.error('Chyba při načítání produktu ze Strapi:', error);
        return null;
    }
}

export async function fetchProducts(): Promise<StrapiProduct[]> {
    try {
        const url = `${STRAPI_URL}/api/produkts?populate=*`;
        const response = await fetch(url, {
            next: { revalidate: 60 },
        });

        if (!response.ok) {
            console.error(`Strapi API error: ${response.status} ${response.statusText}`);
            throw new Error(`Strapi API error: ${response.status}`);
        }

        const json: StrapiResponse<StrapiProduct[]> = await response.json();
        return json.data;
    } catch (error) {
        console.error('Chyba při načítání produktů ze Strapi:', error);
        return [];
    }
}


export function convertStrapiProduct(p: StrapiProduct) {
    if (!p || !p.slug) {
        return undefined;
    }

    const convertedImages = (p.images || []).map((img) =>
        img.url.startsWith('http') ? img.url : `${STRAPI_URL}${img.url}`
    );

    const thumbnailUrl = p.thumbnail?.url
        ? (p.thumbnail.url.startsWith('http') ? p.thumbnail.url : `${STRAPI_URL}${p.thumbnail.url}`)
        : '';


    return {
        id: String(p.id || p.documentId),
        slug: p.slug,
        name: p.name,
        price: p.price,
        currency: 'CZK',
        category: p.category || '',
        subcategory: p.subcategory,
        images: convertedImages,
        thumbnail: thumbnailUrl,
        summary: p.summary || p.description || '',
        available: p.available ?? true,
        featured: p.featured,
        sizes: p.sizes,
        description_blocks: p.description_blocks || [],

    };
}
