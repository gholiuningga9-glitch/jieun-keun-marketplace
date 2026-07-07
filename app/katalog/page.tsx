import Link from "next/link";
import ProductCard from "../../components/ProductCard";
import { getCategories, getProducts } from "../../lib/marketplace";

type KatalogPageProps = {
  searchParams: Promise<{
    category?: string;
  }>;
};

export default async function KatalogPage({ searchParams }: KatalogPageProps) {
  const { category } = await searchParams;
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(category),
  ]);

  return (
    <main className="max-w-container-max mx-auto w-full px-gutter py-section-gap">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="font-label text-label-caps uppercase text-primary">
            Katalog
          </span>
          <h1 className="font-display text-display-lg-mobile text-on-surface">
            Pilihan Handmade
          </h1>
          <p className="mt-2 max-w-xl font-body text-body-md text-on-surface-variant">
            Produk dari Supabase akan muncul di sini setelah tabel dibuat dan
            env diisi.
          </p>
        </div>
        <Link
          href="/katalog"
          className="font-label text-[10px] uppercase text-primary border-b border-primary self-start"
        >
          Reset Filter
        </Link>
      </div>

      <div className="mb-8 flex gap-2 overflow-x-auto hide-scrollbar">
        {categories.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="shrink-0 rounded-full border border-outline-variant px-4 py-2 font-label text-[10px] uppercase text-on-surface-variant hover:border-primary hover:text-primary"
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            price={product.price}
            tag={product.tag}
            category={product.category}
            image={product.image}
          />
        ))}
      </div>
    </main>
  );
}
