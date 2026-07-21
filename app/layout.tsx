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
          {children}
          
          <Footer />
          <BottomNav />
        </CartProvider>
      </body>
    </html>
  );
}