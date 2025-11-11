export type Subcategory = {
    slug: string;
    label: string;
}

export type Category = {
    slug: string;
    label: string;
    subcategories?: Subcategory[];
}

export const categories: Category[] = [
    {
        slug: "obleceni-a-doplnky", label: "Oblečení a doplňky",
        subcategories: [
            { slug: "tricka", label: "Trička" },
            { slug: "mikiny", label: "Mikiny" },
            { slug: "platene-tasky", label: "Plátěné tašky" },
            { slug: "ostatni-textil", label: "Ostatní textil" },
        ]
    },
    {
        slug: "grafika", label: "Grafika",
        subcategories: [
            {
                slug: "tradicni-grafika", label: "Tradiční grafika"
            },
            { slug: "digitalni-grafika", label: "Digitální grafika" }
        ]
    },
    {
        slug: "keramika", label: "Keramika",
        subcategories: [
            { slug: "broze", label: "Brože" },
            { slug: "ostatní-keramicke-produkty", label: "Ostatní keramické produkty" }
        ]
    },
    { slug: "obrazy-a-ilustrace", label: "Obrazy a ilustrace" },
    { slug: "knihy", label: "Knihy" },
    { slug: "ostatni-autorska-tvorba", label: " Ostatní autorská tvorba" }
]



export function categoryLabel(slug: string): string | undefined {
    return categories.find((cat) => cat.slug === slug)?.label;
}

export function subcategoryLabel(categorySlug: string, subSlug: string): string | undefined {
    const category = categories.find((cat) => cat.slug === categorySlug);
    return category?.subcategories?.find((sub) => sub.slug === subSlug)?.label;
}

export function isCategory(slug: string): boolean {
    return categories?.some((cat) => cat.slug === slug)
}

export function isSubcategory(categorySlug: string, subSlug: string): boolean {
    const category = categories.find((cat) => cat.slug === categorySlug);
    return !!category?.subcategories?.some((sub) => sub.slug === subSlug)
}