"use client";

import Image from "next/image";
import Link from "next/link";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type CartItem = {
  id: string;
  name: string;
  price: string;
  image: string;
  category?: string;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Omit<CartItem, "quantity">) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

function parsePrice(price: string) {
  const digits = price.replace(/[^\d]/g, "");
  return Number(digits || "0");
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

function buildWhatsAppLink(items: CartItem[]) {
  const summary = items
    .map((item) => `${item.quantity}x ${item.name}`)
    .join("%0A");

  const text = `Halo, saya ingin memesan:%0A${summary}`;
  return `https://wa.me/6285695997686?text=${text}`;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = window.localStorage.getItem("jieun-cart");
    if (saved) {
      try {
        setCartItems(JSON.parse(saved));
      } catch {
        window.localStorage.removeItem("jieun-cart");
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("jieun-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Omit<CartItem, "quantity">) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev.flatMap((item) => {
        if (item.id !== id) return [item];
        const nextQuantity = item.quantity + delta;
        return nextQuantity > 0 ? [{ ...item, quantity: nextQuantity }] : [];
      })
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const itemCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0),
    [cartItems]
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        itemCount,
        subtotal,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
      }}
    >
      {children}
      <CartDrawer />
    </CartContext.Provider>
  );
}

function CartDrawer() {
  const { cartItems, isCartOpen, closeCart, updateQuantity, removeFromCart, clearCart, itemCount, subtotal } =
    useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[80]">
      <div className="absolute inset-0 bg-black/40" onClick={closeCart} />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-surface-container-lowest shadow-2xl">
        <div className="flex items-center justify-between border-b border-outline-variant px-4 py-4">
          <div>
            <p className="font-label text-[10px] uppercase tracking-[0.2em] text-primary">Keranjang</p>
            <h2 className="font-headline text-headline-sm text-on-surface">{itemCount} item</h2>
          </div>
          <button className="rounded-full p-2 text-on-surface-variant hover:bg-surface-container-high" onClick={closeCart}>
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <span className="material-symbols-outlined mb-3 text-[48px] text-on-surface-variant">shopping_bag</span>
            <h3 className="font-headline text-headline-sm text-on-surface">Belum ada barang</h3>
            <p className="mt-2 font-body text-body-md text-on-surface-variant">Tambah produk dari katalog untuk melihatnya di sini.</p>
            <Link href="/katalog" className="mt-5 rounded-full bg-primary px-5 py-2 font-label text-[10px] uppercase text-on-primary" onClick={closeCart}>
              Lihat katalog
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-4 py-4">
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3 rounded-xl border border-outline-variant bg-surface-container-low p-3">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-surface-container-highest">
                      <Image src={item.image} alt={item.name} fill sizes="64px" className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <p className="font-label text-[10px] uppercase text-primary">{item.category ?? "Produk"}</p>
                        <h3 className="font-body text-body-sm font-semibold text-on-surface">{item.name}</h3>
                      </div>
                      <div className="mt-2 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 rounded-full border border-outline-variant p-1">
                          <button className="h-7 w-7 rounded-full text-on-surface-variant hover:bg-surface-container-high" onClick={() => updateQuantity(item.id, -1)}>
                            −
                          </button>
                          <span className="min-w-6 text-center font-label text-[12px]">{item.quantity}</span>
                          <button className="h-7 w-7 rounded-full text-on-surface-variant hover:bg-surface-container-high" onClick={() => updateQuantity(item.id, 1)}>
                            +
                          </button>
                        </div>
                        <button className="text-[12px] text-primary" onClick={() => removeFromCart(item.id)}>
                          Hapus
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-outline-variant bg-surface-container-low p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-body text-body-md text-on-surface-variant">Subtotal</span>
                <span className="font-headline text-headline-sm text-on-surface">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 rounded-full border border-outline-variant px-4 py-2 font-label text-[10px] uppercase text-on-surface-variant" onClick={clearCart}>
                  Kosongkan
                </button>
                <a href={buildWhatsAppLink(cartItems)} target="_blank" rel="noreferrer" className="flex-1 rounded-full bg-primary px-4 py-2 text-center font-label text-[10px] uppercase text-on-primary">
                  Pesan via WhatsApp
                </a>
              </div>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
