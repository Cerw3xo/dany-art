import { products } from "@/data/products";
import Link from "next/link";
import { formatPrice } from "@/lib/format";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return <section>Produkt nenalezen</section>;

  return (
    <section>
      <h1>{product.name}</h1>
      <p>Cena: {formatPrice(product.price)}</p>
      <div>
        {product.images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={product.name}
            style={{ maxWidth: "320px" }}
          />
        ))}
      </div>
      <p>
        <Link href="/shop">← Zpět do e‑shopu</Link>
      </p>
    </section>
  );
}
