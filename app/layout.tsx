import type { Metadata } from "next";
import "./globals.css";

// Import komponen yang sudah Anda buat sebelumnya
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";

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
      <body className="bg-background text-on-background min-h-screen flex flex-col antialiased">
        <TopNavBar />
        {/* Konten halaman utama (page) akan di-render di dalam children ini */}
        {children}
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}