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
            { slug: "platene-tasky", label: "Plátěné tašky" },
            { slug: "mikiny", label: "Mikyny" },
        ]
    },
    {
        slug: "grafika", label: "Grafika",
        subcategories: [
            {
                slug: "tradicni-grafika", label: "Tradiční grafika"
            },
            { slug: "printy", label: "Printy" }
        ]
    },
    {
        slug: "rucni-tvorba", label: "Ruční tvorba", subcategories: [
            { slug: "keramika", label: "Keramika" },
            { slug: "knihy", label: "Knihy" }
        ]
    },
    { slug: "obrazy", label: "Obrazy" },
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