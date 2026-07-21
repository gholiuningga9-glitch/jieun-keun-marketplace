    import Link from 'next/link';
    import Image from 'next/image';
    import ProductCard from '../components/ProductCard';
    import { brandStory, hero } from '../lib/home-data';
    import { getCategories, getFeaturedProducts } from '../lib/marketplace';

    export default async function HomePage() {
        const [categories, featuredProducts] = await Promise.all([
            getCategories(),
            getFeaturedProducts(),
        ]);

        return (
            <div className="animate-in fade-in duration-500">
                <section className="relative -mt-8">
                    <div className="aspect-[4/5] w-full overflow-hidden relative md:aspect-video md:max-h-[600px]">
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10 pointer-events-none"></div>
                        <Image
                            src="/bg.png"
                            alt="Koleksi produk handmade jieun.keun"
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 p-margin-mobile w-full z-20">
                            <span className="font-label text-label-caps text-primary uppercase tracking-widest mb-2 block">{hero.eyebrow}</span>
                            <h1 className="font-display text-display-lg-mobile text-white mb-3">{hero.title}</h1>
                            <p className="font-body text-body-md text-white/80 mb-6 max-w-xs">{hero.description}</p>
                            <div className="flex gap-2">
                                <Link href="/katalog" className="flex-1 bg-primary text-on-primary py-3.5 rounded-full font-label text-center uppercase text-[10px] shadow-lg">Belanja Sekarang</Link>
                                <Link href="/kontak" className="flex-1 bg-surface-container-highest/50 backdrop-blur-md text-white border border-outline-variant py-3.5 rounded-full font-label text-center uppercase text-[10px]">Tanya Kami</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-section-gap px-margin-mobile bg-surface-container-low max-w-container-max mx-auto">
                    <div className="flex justify-between items-end mb-unit-lg px-gutter">
                        <h2 className="font-headline text-headline-sm text-on-surface">Kategori</h2>
                        <Link href="/katalog" className="text-primary font-label text-[10px] uppercase border-b border-primary">Semua</Link>
                    </div>
                    <div className="flex gap-4 overflow-x-auto hide-scrollbar px-gutter">
                        {categories.map((cat) => (
                            <Link key={cat.name} href={cat.href} className="flex-shrink-0 w-32 group">
                                <div className="aspect-square rounded-full overflow-hidden border border-outline-variant mb-2 group-hover:scale-105 transition-transform">
                                    <Image
                                        src={cat.image}
                                        alt={cat.name}
                                        width={128}
                                        height={128}
                                        sizes="128px"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <p className="text-center font-label text-[10px] uppercase text-on-surface-variant group-hover:text-primary">{cat.name}</p>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="py-section-gap px-gutter max-w-container-max mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="font-headline text-headline-sm text-on-surface">Terbaik Minggu Ini</h2>
                        <Link href="/katalog" className="text-primary"><span className="material-symbols-outlined">grid_view</span></Link>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {featuredProducts.map((product) => (
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
                </section>

                <section className="py-section-gap px-margin-mobile bg-surface-container-high relative overflow-hidden">
                    <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary mb-6">
                            <Image
                                src={brandStory.image}
                                alt="Artisan jieun.keun"
                                width={128}
                                height={128}
                                sizes="128px"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <span className="font-label text-label-caps text-primary uppercase mb-2">{brandStory.eyebrow}</span>
                        <h2 className="font-headline text-headline-sm text-on-surface mb-4">{brandStory.title}</h2>
                        <p className="font-body text-body-md text-on-surface-variant mb-6 max-w-xs">{brandStory.description}</p>
                        <Link href="/about" className="font-label text-[10px] text-primary uppercase border-b border-primary pb-1">Selengkapnya</Link>
                    </div>
                </section>
            </div>
        );
    }
