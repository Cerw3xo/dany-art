export type Product = {
    id: string;
    slug: string;
    name: string;
    price: number;
    currency: string;
    category: string;
    images: string[];
    thumbnail: string;
    summary?: string;
    available: boolean;
    variants?: [];
    featured?: boolean;
    subcategory?: string;
    sizes?: string[];
    sizeChart?: string;
};
