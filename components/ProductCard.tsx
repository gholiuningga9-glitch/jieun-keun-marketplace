import Image from "next/image";

interface ProductCardProps {
    name: string;
    price: string;
    image: string;
    tag?: string;
    category?: string;
}

export default function ProductCard({ name, price, image, tag, category }: ProductCardProps) {
    return (
        <div className="group solid-panel rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all">
            <div className="aspect-square relative overflow-hidden bg-surface-container-low">
                <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {tag && <div className="absolute top-2 left-2 bg-primary text-[8px] text-on-primary px-2 py-0.5 rounded-full font-label uppercase">{tag}</div>}
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-body text-body-md text-on-surface truncate font-semibold">{name}</h3>
                {category && <p className="font-body text-[12px] text-on-surface-variant mb-1">{category}</p>}
                <p className="font-label text-[12px] text-primary mt-auto">{price}</p>
                <button className="mt-3 w-full border border-outline-variant text-[10px] py-2 rounded-full font-label uppercase hover:bg-primary hover:text-white transition-colors">Pesan WhatsApp</button>
            </div>
        </div>
    );
}
