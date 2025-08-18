// src/data/categories.ts
export const categories = [
    { slug: "obleceni-a-doplnky", label: "Oblečení a doplňky" },
    { slug: "grafika", label: "Grafika" },
    { slug: "rucni-tvorba", label: "Ruční tvorba" },
    { slug: "obrazy", label: "Obrazy" },
] as const;

export type Category = typeof categories[number]["slug"];
export const isCategory = (v: string): v is Category =>
    categories.some((c) => c.slug === v);
export const categoryLabel = (c: Category) =>
    categories.find((x) => x.slug === c)!.label;
