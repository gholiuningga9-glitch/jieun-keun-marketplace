"use client";

import Image from "next/image";
import { useCart } from "./CartProvider";

interface ProductCardProps {
    id?: string;
    name: string;
    price: string;
    image: string;
    tag?: string;
    category?: string;
}

export default function ProductCard({ id, name, price, image, tag, category }: ProductCardProps) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            id: id ?? `${name}-${category ?? "produk"}`,
            name,
            price,
            image,
            category,
        });
    };

    return (
        <div className="group solid-panel rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all">
            <div className="aspect-square relative overflow-hidden bg-surface-container-low">
                <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
                {tag && <div className="absolute top-2 left-2 bg-primary text-[8px] text-on-primary px-2 py-0.5 rounded-full font-label uppercase">{tag}</div>}
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-body text-body-md text-on-surface truncate font-semibold">{name}</h3>
                {category && <p className="font-body text-[12px] text-on-surface-variant mb-1">{category}</p>}
                <p className="font-label text-[12px] text-primary mt-auto">{price}</p>
                
                <div className="mt-3 flex gap-2 w-full">
                    <a
                        href={`https://wa.me/6285695997686?text=Halo,%20saya%20ingin%20memesan%20produk%20${encodeURIComponent(name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-outline-variant text-[10px] py-2 px-1 rounded-full font-label uppercase hover:bg-primary hover:text-white transition-colors flex items-center justify-center text-center leading-tight text-on-surface"
                    > Checkout
                    </a>
                    <button 
                        onClick={handleAddToCart} 
                        className="flex-1 rounded-full bg-primary py-2 px-1 flex items-center justify-center text-center font-label text-[10px] uppercase text-on-primary hover:opacity-90 transition-opacity leading-tight"
                    >Keranjang
                    </button>
                </div>
            </div>
        </div>
    );
}