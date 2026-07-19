import type { Metadata } from "next";
import "./globals.css";

// Import komponen yang sudah Anda buat sebelumnya
import AnnouncementBar from "../components/AnnouncementBar";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";
import { CartProvider } from "../components/CartProvider";

export const metadata: Metadata = {
  title: "jieun.keun - Handcrafted Goods",
  description: "Handcrafted goods made with slow living philosophy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-background min-h-screen flex flex-col antialiased">
        <CartProvider>
          <AnnouncementBar />
          <TopNavBar />
          
          {/* Konten halaman utama (page) akan di-render di dalam children ini */}
          {children}
          
          <Footer />
          <BottomNav />

          {/* Floating WhatsApp Button (Hanya tampil di Mobile) */}
          <a 
            href="https://wa.me/6285695997686" 
            target="_blank" 
            rel="noopener noreferrer"
            className="md:hidden fixed bottom-24 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center hover:scale-110 transition-transform"
          >
            <span className="material-symbols-outlined text-3xl">forum</span>
          </a>
        </CartProvider>
      </body>
    </html>
  );
}