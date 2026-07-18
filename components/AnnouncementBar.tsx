export default function AnnouncementBar() {
    return (
        <div className="bg-primary text-on-primary py-2 overflow-hidden flex items-center relative z-50 w-full">
            <style>
                {`
                @keyframes marquee {
                    0% { transform: translateX(100vw); }
                    100% { transform: translateX(-100%); }
                }
                .animate-marquee {
                    display: inline-block;
                    white-space: nowrap;
                    animation: marquee 30s linear infinite;
                }
                `}
            </style>
            
            <div className="animate-marquee font-label text-[10px] md:text-xs uppercase tracking-widest whitespace-nowrap">
                <span className="mx-4">✦</span>
                NIKMATI GRATIS ONGKIR PULAU JAWA
                <span className="mx-4">✦</span>
                PENGIRIMAN AMAN & CEPAT
                <span className="mx-4">✦</span>
                GARANSI KUALITAS PRODUK
                <span className="mx-4">✦</span>
                HANDCRAFTED WITH HEART
                
                <span className="mx-4">✦</span>
                NIKMATI GRATIS ONGKIR PULAU JAWA
                <span className="mx-4">✦</span>
                PENGIRIMAN AMAN & CEPAT
                <span className="mx-4">✦</span>
                GARANSI KUALITAS PRODUK
                <span className="mx-4">✦</span>
                HANDCRAFTED WITH HEART
            </div>
        </div>
    );
}