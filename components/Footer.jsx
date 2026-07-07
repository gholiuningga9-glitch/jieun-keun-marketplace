import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-surface-container-low w-full py-margin-desktop border-t border-outline-variant mt-auto">
            <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-4 gap-margin-desktop">
                <div className="md:col-span-1">
                    <Link href="/" className="font-display text-headline-sm md:text-headline-md text-primary mb-4 block">jieun.keun</Link>
                    <p className="font-body text-body-md text-on-surface-variant">
                        Handcrafted goods made with slow living philosophy. Technical artisanship.
                    </p>
                </div>
                <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-gutter font-body text-body-md text-on-background">
                    <div className="flex flex-col space-y-2">
                        <p className="font-label text-label-caps text-on-surface-variant mb-2 uppercase">Pautan</p>
                        <Link href="/" className="text-on-surface-variant hover:text-primary transition-colors">Beranda</Link>
                        <Link href="/katalog" className="text-on-surface-variant hover:text-primary transition-colors">Katalog</Link>
                        <Link href="/about" className="text-on-surface-variant hover:text-primary transition-colors">About Us</Link>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <p className="font-label text-label-caps text-on-surface-variant mb-2 uppercase">Informasi</p>
                        <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Shipping Info</a>
                        <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Wholesale</a>
                        <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</a>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <p className="font-label text-label-caps text-on-surface-variant mb-2 uppercase">Socials</p>
                        <a href="#" className="flex items-center gap-2 text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-sm">photo_camera</span> Instagram</a>
                        <a href="#" className="flex items-center gap-2 text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-sm">play_arrow</span> TikTok</a>
                    </div>
                </div>
            </div>
            <div className="max-w-container-max mx-auto px-gutter mt-margin-desktop pt-gutter border-t border-outline-variant text-center md:text-left">
                <p className="font-body text-body-md text-on-surface-variant">© 2024 jieun.keun. Handcrafted with heart.</p>
            </div>
        </footer>
    );
}