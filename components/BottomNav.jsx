import Link from 'next/link';

export default function BottomNav() {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-outline-variant px-6 py-2 flex justify-between items-center z-[100] md:hidden">
            <Link href="/" className="flex flex-col items-center text-primary">
                <span className="material-symbols-outlined text-[24px]">home</span>
                <span className="text-[8px] font-label uppercase">Home</span>
            </Link>
            <Link href="/katalog" className="flex flex-col items-center text-on-surface-variant">
                <span className="material-symbols-outlined text-[24px]">local_mall</span>
                <span className="text-[8px] font-label uppercase">Shop</span>
            </Link>
            <Link href="/kontak" className="flex flex-col items-center bg-primary text-on-primary p-2 rounded-full -mt-6 shadow-lg border-4 border-background">
            
            <span className="material-symbols-outlined text-[24px] fill">chat</span>
            </Link>
            <Link href="/testimoni" className="flex flex-col items-center text-on-surface-variant">
                <span className="material-symbols-outlined text-[24px]">star</span>
                <span className="text-[8px] font-label uppercase">Reviews</span>
            </Link>
            <Link href="/about" className="flex flex-col items-center text-on-surface-variant">
                <span className="material-symbols-outlined text-[24px]">info</span>
                <span className="text-[8px] font-label uppercase">About</span>
            </Link>
        </div>
    );
}