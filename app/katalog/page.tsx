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
        </div>
        <Link
          href="/katalog"
          className="font-label text-[10px] uppercase text-primary border-b border-primary self-start"
        >
          Reset Filter
        </Link>
      </div>

      <div className="mb-8 flex gap-2 overflow-x-auto hide-scrollbar">
        {categories.map((item) => {
          // Mengecek apakah kategori tombol ini sama dengan parameter kategori di URL
          const isActive = category?.toLowerCase() === item.name.toLowerCase();

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`shrink-0 rounded-full border px-4 py-2 font-label text-[10px] uppercase transition-colors ${
                isActive
                  ? "border-primary bg-primary text-white" // Warna biru dan teks putih jika aktif
                  : "border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary" // Warna default jika tidak aktif
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            id={product.name}
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
