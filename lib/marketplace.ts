import {
  categories as fallbackCategories,
  featuredProducts as fallbackFeaturedProducts,
  type Category,
  type Product,
} from "./home-data";
import { createServerSupabaseClient } from "./supabase";

type CategoryRow = {
  name: string;
  slug: string;
  image_url: string;
};

type ProductRow = {
  name: string;
  price_label: string;
  image_url: string;
  tag: string | null;
  categories:
    | {
        name: string;
      }
    | {
        name: string;
      }[]
    | null;
};

function toCategory(row: CategoryRow): Category {
  return {
    name: row.name,
    href: `/katalog?category=${row.slug}`,
    image: row.image_url,
  };
}

function toProduct(row: ProductRow): Product {
  const category = Array.isArray(row.categories)
    ? row.categories[0]
    : row.categories;

  return {
    name: row.name,
    price: row.price_label,
    image: row.image_url,
    tag: row.tag ?? undefined,
    category: category?.name ?? "Produk",
  };
}

export async function getCategories(): Promise<Category[]> {
  const supabase = createServerSupabaseClient();

  if (!supabase) {
    return fallbackCategories;
  }

  const { data, error } = await supabase
    .from("categories")
    .select("name, slug, image_url")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (error || !data?.length) {
    return fallbackCategories;
  }

  return data.map(toCategory);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const supabase = createServerSupabaseClient();

  if (!supabase) {
    return fallbackFeaturedProducts;
  }

  const { data, error } = await supabase
    .from("products")
    .select("name, price_label, image_url, tag, categories(name)")
    .eq("is_active", true)
    .eq("is_featured", true)
    .order("sort_order", { ascending: true })
    .limit(8);

  if (error || !data?.length) {
    return fallbackFeaturedProducts;
  }

  return data.map(toProduct);
}

export async function getProducts(categorySlug?: string): Promise<Product[]> {
  const supabase = createServerSupabaseClient();

  if (!supabase) {
    return fallbackFeaturedProducts;
  }

  let query = supabase
    .from("products")
    .select("name, price_label, image_url, tag, categories!inner(name, slug)")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (categorySlug) {
    query = query.eq("categories.slug", categorySlug);
  }

  const { data, error } = await query;

  if (error || !data?.length) {
    return fallbackFeaturedProducts;
  }

  return data.map(toProduct);
}
