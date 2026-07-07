"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TopNavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Beranda', path: '/' },
        { name: 'Katalog', path: '/katalog' },
        { name: 'About Us', path: '/about' },
        { name: 'Kontak', path: '/kontak' },
        { name: 'Testimoni', path: '/testimoni' },
    ];

    return (
        <header className="bg-surface-container-lowest/90 backdrop-blur-[10px] sticky top-0 w-full z-50 border-b border-outline-variant shadow-sm transition-all">
            <div className="max-w-container-max mx-auto px-gutter flex justify-between items-center h-[64px] md:h-[72px]">
                <Link href="/" className="font-display text-headline-sm md:text-display-lg-mobile text-primary tracking-tight">
                    jieun.keun
                </Link>

                <nav className="hidden md:flex space-x-gutter">
                    {navLinks.map(link => (
                        <Link 
                            key={link.path}
                            href={link.path}
                            className={`font-label text-label-caps uppercase transition-colors duration-200 py-1 ${
                                pathname === link.path 
                                ? 'text-primary border-b-2 border-primary' 
                                : 'text-on-surface-variant hover:text-primary'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <button className="text-primary hover:opacity-80 transition-opacity">
                        <span className="material-symbols-outlined text-[24px]">search</span>
                    </button>
                    <a href="https://wa.me/6285695997686" target="_blank" rel="noreferrer" className="bg-primary text-on-primary px-6 py-2 rounded-full font-label text-label-caps uppercase hover:opacity-80 transition-opacity hidden sm:inline-flex items-center gap-2">
                        WhatsApp
                    </a>
                    <button className="md:hidden text-on-background p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span className="material-symbols-outlined text-[24px]">{isMenuOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden absolute top-[64px] left-0 w-full bg-surface-container-lowest border-b border-outline-variant p-6 space-y-4 z-40">
                    {navLinks.map(link => (
                        <Link 
                            key={link.path}
                            href={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="block font-label text-label-caps uppercase text-on-surface-variant hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}