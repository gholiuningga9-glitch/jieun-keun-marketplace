export default function TestimoniPage() {
    const testimonials = [
        {
            id: 1,
            name: "Budi Santoso",
            review: "Kualitas barang DIY dari jieun.keun sangat luar biasa. Detailnya rapi, materialnya terasa premium, dan potongannya sangat presisi. Sangat cocok untuk melengkapi ruang kerja minimalis.",
            role: "Arsitek",
            avatar: "https://i.pravatar.cc/150?u=11"
        },
        {
            id: 2,
            name: "Siti Aminah",
            review: "Pengiriman cepat dan packaging sangat aman. Saya sangat suka konsep desain modern dan sentuhan alam yang ditawarkan. Membawa suasana tenang ke dalam rumah.",
            role: "Ibu Rumah Tangga",
            avatar: "https://i.pinimg.com/736x/18/35/18/1835183e41beb15e65cbaf78809a99cf.jpg"
        },
        {
            id: 3,
            name: "Rendi Wijaya",
            review: "Produk dekorasi ruangannya benar-benar mengubah suasana kamar. Tekstur material alaminya sangat menonjol. Estetika dan fungsionalitas yang sepadan dengan harganya.",
            role: "Desainer Interior",
            avatar: "https://i.pinimg.com/1200x/12/c9/a9/12c9a98a498d548717af91233205dcb9.jpg"
        },
        {
            id: 4,
            name: "Andin Lestari",
            review: "Suka sekali dengan estetikanya! Warna dan materialnya bikin ruangan terasa lebih hangat. Koleksinya sangat mencerminkan filosofi slow living. Pasti akan belanja lagi.",
            role: "Kreator Konten",
            avatar:"https://i.pinimg.com/736x/db/f9/25/dbf92538bab817623f30088ea70e2d67.jpg"
        },
        {
            id: 5,
            name: "Dimas Pratama",
            review: "Awalnya ragu untuk beli online, tapi setelah barang sampai ternyata jauh lebih bagus dari fotonya. Karya tangan yang dieksekusi dengan sangat sempurna dan solid.",
            role: "Karyawan Swasta",
            avatar:"https://i.pinimg.com/736x/74/12/87/7412878ce93a94d0954a33e04cac0268.jpg"
        },
        {
            id: 6,
            name: "Kartika Sari",
            review: "Sangat menghargai konsistensi gaya dari brand ini. Produknya awet, desainnya timeless dan elegan. Cocok untuk dijadikan hadiah bagi orang terdekat.",
            role: "Kolektor Seni",
            avatar: "https://i.pinimg.com/736x/8e/80/44/8e8044de9721c07aafe1faad5d9d5f9c.jpg"
        }
    ];

    return (
        <div className="max-w-container-max mx-auto px-gutter pt-4 pb-section-gap min-h-screen animate-in fade-in duration-500">
            <div className="text-center mb-12">
                <span className="font-label text-lg md:text-xl font-bold text-primary uppercase tracking-widest mb-2 block">Ulasan</span>
                <h1 className="font-display text-display-md text-on-background">Dibuat Dengan Hati. Diapresiasi Pelanggan.</h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((testi) => (
                    <div key={testi.id} className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant card-shadow flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                        <div>
                            <div className="flex gap-1 mb-4 text-[#F59E0B]">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                ))}
                            </div>
                            <p className="font-body text-lg text-on-surface mb- leading-relaxed">
                                "{testi.review}"
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-4 border-t border-outline-variant pt-4">
                            <img 
                                src={testi.avatar} 
                                alt={`Avatar ${testi.name}`} 
                                className="w-10 h-10 rounded-full object-cover border border-outline-variant"
                            />
                            <div>
                                <p className="font-label text-label-lg font-bold text-on-background">{testi.name}</p>
                                <p className="font-body text-[11px] uppercase tracking-wider text-on-surface-variant">{testi.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}