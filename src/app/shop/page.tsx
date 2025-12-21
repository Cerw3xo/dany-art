import type { Product } from "@/data/products";
import { fetchProducts, convertStrapiProduct } from "@/lib/strapi";
import ShopClient from "./ShopClient";

export const revalidate = 60;

export default async function ShopPage() {
  const strapiProducts = await fetchProducts();
  const products = strapiProducts
    .map(convertStrapiProduct)
    .filter(Boolean) as Product[];

  return <ShopClient products={products} />;
}
