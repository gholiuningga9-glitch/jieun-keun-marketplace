import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-surface-container-low w-full py-margin-desktop border-t border-outline-variant mt-auto">
            <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-4 gap-margin-desktop">
                <div className="md:col-span-1">
    <Link href="/" className="-mt-8 mb-4 inline-block hover:opacity-80 transition-opacity">
        <Image
            src="/logo-artisan.png" 
            alt="Logo jieun.keun"
            width={180}
            height={60}
            className="object-contain"
        />
    </Link>
    <p className="font-body text-body-md text-on-surface-variant">
        Handcrafted goods made with slow living philosophy. Technical artisanship.
    </p>
</div>
                <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-gutter font-body text-body-md text-on-background">
                    <div className="flex flex-col space-y-2">
                        <p className="font-label text-label-caps text-on-surface-variant mb-2 uppercase">Menu</p>
                        <Link href="/" className="text-on-surface-variant hover:text-primary transition-colors">Beranda</Link>
                        <Link href="/katalog" className="text-on-surface-variant hover:text-primary transition-colors">Katalog</Link>
                        <Link href="/about" className="text-on-surface-variant hover:text-primary transition-colors">About Us</Link>
                    </div>
                    
                
                    <div className="flex flex-col space-y-2">
                        <p className="font-label text-label-caps text-on-surface-variant mb-2 uppercase">Operasional</p>
                        <ul className="space-y-3 font-body text-body-sm text-on-surface-variant">
                            <li>Senin - Jumat: 09.00 - 17.00</li>
                            <li>Sabtu: 09.00 - 14.00</li>
                            <li>Minggu & Libur Nasional: Tutup</li>
                            <li className="pt-2 mt-2 border-t border-outline-variant">
                                <a href="https://wa.me/6285695997686" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                                    Chat WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col space-y-2">
    <p className="font-label text-label-caps text-on-surface-variant mb-2 uppercase">Socials</p>
    
    <a href="https://instagram.com/jieunkeun.id" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-on-surface-variant hover:text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
        @jieunkeun.id
    </a>
    
    <a href="https://wa.me/6285695997686" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-on-surface-variant hover:text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
        +6285695997686
    </a>
</div>
                </div>
            </div>
            <div className="max-w-container-max mx-auto px-gutter mt-margin-desktop pt-gutter border-t border-outline-variant text-center md:text-left">
                <p className="font-body text-body-md text-on-surface-variant">© 2024 jieun.keun. Handcrafted with heart.</p>
            </div>
        </footer>
    );
}