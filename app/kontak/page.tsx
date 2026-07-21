"use client";

import { useState } from "react";

export default function Kontak() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    const formData = new FormData(e.currentTarget);
    
    // GANTI TULISAN DI BAW
    formData.append("access_key", "1d36068b-0bf9-495d-9086-6994d7b4d9c6");
    formData.append("subject", "Pesan Baru dari Website jieun.keun");

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setStatusMessage("Pesan berhasil terkirim!");
            (e.target as HTMLFormElement).reset(); 
        } else {
            setStatusMessage("Gagal mengirim pesan. Silakan coba lagi.");
        }
    } catch (error) {
        setStatusMessage("Terjadi kesalahan pada sistem.");
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
   <main className="flex-grow max-w-container-max mx-auto px-gutter pt-4 pb-margin-desktop w-full grid grid-cols-1 md:grid-cols-12 gap-margin-desktop bg-background text-on-background font-body-md antialiased">
      <div className="md:col-span-12 text-center mb-margin-desktop">
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">Sapa Kami.</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Punya pertanyaan, ide kolaborasi, atau ingin memesan karya kustom? Kami selalu senang mendengar dari Anda. Pilih jalur komunikasi yang paling nyaman di bawah ini.
        </p>
      </div>
      <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-gutter mb-margin-desktop">
        <a 
          className="block bg-surface-container-lowest/90 backdrop-blur-[10px] rounded-xl p-margin-desktop shadow-[0_4px_20px_rgba(0,30,43,0.06)] border border-outline-variant hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group" 
          href="https://wa.me/6285695997686?text=Halo%20Admin%20jieun.keun,%20saya%20tertarik%20untuk%20melakukan%20pembelian..." 
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-primary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_bag</span>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Hubungi Admin (Pembelian)</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Tanya seputar stok, detail produk, atau mulai proses pemesanan karya handcrafted kami. Respon cepat di jam kerja.
            </p>
            <div className="flex items-center text-primary font-label-caps text-label-caps group-hover:gap-2 transition-all">
              <span>Chat via WhatsApp</span>
              <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
            </div>
          </div>
        </a>
        <a 
          className="block bg-surface-container-lowest/90 backdrop-blur-[10px] rounded-xl p-margin-desktop shadow-[0_4px_20px_rgba(0,30,43,0.06)] border border-outline-variant hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group" 
          href="https://wa.me/6285695997686?text=Halo%20tim%20jieun.keun,%20saya%20seorang%20kreator%20dan%20tertarik%20untuk%20bergabung..." 
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-primary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>palette</span>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Bergabung sebagai Kreator</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Punya keahlian crafting dan ingin karya Anda menjangkau audiens yang lebih luas? Mari diskusikan peluang kolaborasi.
            </p>
            <div className="flex items-center text-primary font-label-caps text-label-caps group-hover:gap-2 transition-all">
              <span>Chat via WhatsApp</span>
              <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
            </div>
          </div>
        </a>
      </div>

      <div className="md:col-span-7 bg-surface-container-lowest/90 backdrop-blur-[10px] rounded-xl p-gutter md:p-margin-desktop shadow-[0_4px_20px_rgba(0,30,43,0.06)] border border-outline-variant border-l-4 border-l-primary">
        <h2 className="font-headline-md text-headline-md text-on-background mb-6">Kirim Pesan</h2>
     
        <form onSubmit={handleSubmit} className="space-y-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div>
              <label className="block font-label-caps text-label-caps text-on-background mb-2" htmlFor="name">Nama Lengkap</label>
              <input required className="w-full bg-surface-container/30 border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-background focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none placeholder:text-on-surface-variant/50" id="name" name="name" placeholder="Nama Anda" type="text" />
            </div>
            <div>
              <label className="block font-label-caps text-label-caps text-on-background mb-2" htmlFor="email">Email</label>
              <input required className="w-full bg-surface-container/30 border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-background focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none placeholder:text-on-surface-variant/50" id="email" name="email" placeholder="nama@email.com" type="email" />
            </div>
          </div>
          <div>
            <label className="block font-label-caps text-label-caps text-on-background mb-2" htmlFor="subject">Subjek</label>
            <input required className="w-full bg-surface-container/30 border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-background focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none placeholder:text-on-surface-variant/50" id="subject" name="subject" placeholder="Tujuan pesan" type="text" />
          </div>
          <div>
            <label className="block font-label-caps text-label-caps text-on-background mb-2" htmlFor="message">Pesan</label>
            <textarea required className="w-full bg-surface-container/30 border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-background focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none placeholder:text-on-surface-variant/50 resize-none" id="message" name="message" placeholder="Tuliskan pesan Anda di sini..." rows={5}></textarea>
          </div>
          
          <div className="mt-4">
            <button disabled={isSubmitting} className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-3 rounded-full hover:opacity-90 disabled:opacity-50 transition-opacity w-full md:w-auto" type="submit">
              {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
            </button>
          
            {statusMessage && (
                <p className={`text-sm mt-3 font-body-md ${statusMessage.includes("berhasil") ? "text-green-600" : "text-error"}`}>
                    {statusMessage}
                </p>
            )}
          </div>
        </form>
      </div>

      <div className="md:col-span-5 space-y-gutter">
        <div className="bg-surface-container-lowest/90 backdrop-blur-[10px] rounded-xl p-gutter shadow-[0_4px_20px_rgba(0,30,43,0.06)] border border-outline-variant">
          <h3 className="font-headline-sm text-headline-sm text-on-background mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">Schedule</span> Jam Operasional
          </h3>
          <ul className="space-y-3 font-body-md text-on-surface-variant">
            <li className="flex justify-between border-b border-outline-variant/50 pb-2">
              <span>Senin - Jumat</span>
              <span className="text-on-background">09:00 - 17:00 WIB</span>
            </li>
            <li className="flex justify-between border-b border-outline-variant/50 pb-2">
              <span>Sabtu</span>
              <span className="text-on-background">10:00 - 15:00 WIB</span>
            </li>
            <li className="flex justify-between pb-2">
              <span>Minggu &amp; Hari Libur</span>
              <span className="text-error">Tutup</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-surface-container-lowest/90 backdrop-blur-[10px] rounded-xl p-gutter shadow-[0_4px_20px_rgba(0,30,43,0.06)] border border-outline-variant">
          <h3 className="font-headline-sm text-headline-sm text-on-background mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">mail</span> Informasi Kontak
          </h3>
          <div className="space-y-4 font-body-md text-on-surface-variant">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-1">call</span>
              <div>
                <p className="font-bold text-on-background">WhatsApp (Fast Response)</p>
                <p>+62 856-9599-7686</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-1">alternate_email</span>
              <div>
                <p className="font-bold text-on-background">Email</p>
                <p>Uningga88@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}