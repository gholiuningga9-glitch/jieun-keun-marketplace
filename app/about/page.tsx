"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col flex-grow">
      
      {/* Section 1: Hero */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-margin-desktop px-gutter max-w-container-max mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-margin-desktop items-center">
          <div className="space-y-6">
            <h1 className="font-display-lg-mobile md:text-display-lg text-on-surface">Seni Fungsional Tanpa Batas</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">jieun.keun hadir sebagai ruang bagi karya tangan yang merayakan keindahan bentuk organik dan estetika. Setiap produk dirancang bukan sekadar sebagai benda fungsional, melainkan elemen seni yang menghidupkan ruangan. Pendekatan desain yang diterapkan berfokus pada eksplorasi bentuk-bentuk tak terduga dan material eksperimental, menghasilkan koleksi dekorasi eksentrik dengan karakter visual yang kuat dan tidak ada duanya.</p>
          </div>
          <div className="relative">
            <img alt="Workshop" className="w-full h-auto rounded-xl shadow-[0_4px_20px_rgba(91,74,58,0.06)] border border-outline-variant object-cover aspect-[4/3]" src="/profil.png" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-tertiary-container opacity-20 rounded-full z-[-1]"></div>
          </div>
        </div>
      </motion.section>

      {/* Section 2: Nilai-Nilai */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-surface-container py-margin-desktop"
      >
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-margin-desktop">
            <h2 className="font-headline-md text-headline-md text-on-surface">Nilai Inti</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">Prinsip yang memandu setiap karya cipta jieun.keun.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="bg-surface-container-lowest/90 backdrop-blur-[10px] p-gutter rounded-xl shadow-[0_4px_20px_rgba(91,74,58,0.06)] border border-outline-variant text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-primary-container rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-primary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Keindahan Organik</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Menghargai ketidaksempurnaan dan bentuk alami. Membiarkan material berbicara melalui tekstur aslinya tanpa manipulasi berlebih.</p>
            </div>
            <div className="bg-surface-container-lowest/90 backdrop-blur-[10px] p-gutter rounded-xl shadow-[0_4px_20px_rgba(91,74,58,0.06)] border border-outline-variant text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-secondary-container rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-secondary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>pan_tool</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Proses Manual</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Menerapkan filosofi slow living. Setiap produk dibentuk menggunakan tangan secara perlahan, memastikan karya memiliki jiwanya sendiri.</p>
            </div>
            <div className="bg-surface-container-lowest/90 backdrop-blur-[10px] p-gutter rounded-xl shadow-[0_4px_20px_rgba(91,74,58,0.06)] border border-outline-variant text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-tertiary-container rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-tertiary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>palette</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Eksplorasi Bentuk</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Mendobrak pakem desain konvensional. Mengolah material mentah menjadi bentuk eksentrik dan surealis yang mencuri perhatian.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 3: Proses Kreatif */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="py-margin-desktop px-gutter max-w-container-max mx-auto"
      >
        <h2 className="font-headline-md text-headline-md text-on-surface mb-margin-desktop text-center">Proses Kreatif</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-margin-desktop">
          <div className="space-y-gutter">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-caps text-label-caps flex-shrink-0 mt-1">1</div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">Imajinasi &amp; Sketsa</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Dimulai dari ide abstrak. Menggambarkan bentuk-bentuk asimetris dan eksperimental sebelum menyentuh material dasar.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-caps text-label-caps flex-shrink-0 mt-1">2</div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">Pembentukan Material</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Memproses tanah liat dan kayu secara langsung. Membiarkan sentuhan tangan yang memandu hasil akhir tanpa bergantung pada cetakan pabrik.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-label-caps text-label-caps flex-shrink-0 mt-1">3</div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">Penyempurnaan Akhir</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Melakukan pewarnaan dan pelapisan. Mempertahankan tekstur asli dan guratan acak agar karakter unik setiap produk tetap menonjol.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img alt="Sketsa" className="w-full h-full object-cover rounded-xl shadow-[0_4px_20px_rgba(91,74,58,0.06)] border border-outline-variant aspect-square" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-eYWspVzZLf9PUuyfFMPGTRDDGsHIfyj4jbneYPq7jbDI_WE98Ks_jeN0BBEM5V2G9tFRb18nLwg3Nr7xSz2DeS2h9kIMsZXBhniee6_vHNnroXtl07YL7r0v-XMmU0w8THeRbvpExbjVBiEVCGOCfVdvg8egnLyUMhtCfSSTbxFb2klcEQA-VObxfrORthzJtD8gRBH6xWZti-0RFKaN-LlqIefzzBEW4LLAhOrw7o0SUx7hxHsTDy7UE_-KjL-SKyHXI3suilY9" />
            <img alt="Material" className="w-full h-full object-cover rounded-xl shadow-[0_4px_20px_rgba(91,74,58,0.06)] border border-outline-variant aspect-square" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrc3CtnJT6V8-9DVyQ9saHI2tWFVbH-5A3iH48wYP9tbcMV4y39vMwkgoUdYpCBWa_Wzj343TPPOM6Q29_PuR_eqURA-G0Cncwib7KKNtGyvGRgPd092F7cFG9n6JvWCOjAdzZrDqNuTCDfTy-jaHDLDdD3KtM0DY0gvdbBdeu999GE-E-2yXTeDDCxY6fceKQ8sN2iRBJlom4sYRgjADwxeyBcUVCLZ4nvVsH_FkSV-8uIiSB66Sk8Z8-xwnSZvyAMz45zzUdlTLQ" />
          </div>
        </div>
      </motion.section>

      {/* Section 4: Quote */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-primary-container/20 py-margin-desktop px-gutter"
      >
        <div className="max-w-[800px] mx-auto bg-surface-container-lowest/90 backdrop-blur-[10px] p-margin-desktop rounded-xl shadow-[0_4px_20px_rgba(91,74,58,0.06)] border-l-4 border-primary border-t border-r border-b border-outline-variant flex flex-col md:flex-row gap-gutter items-center">
          <img alt="Founder" className="w-32 h-32 rounded-full object-cover border-2 border-outline-variant shadow-sm" src="profil2.jpeg" />
          <div>
            <span className="material-symbols-outlined text-primary text-4xl mb-2 block" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
            <p className="font-body-lg text-body-lg text-on-surface-variant italic mb-4">"Tujuan utama bukan sekadar membuat barang, tetapi menciptakan karya fungsional yang bisa disentuh dan dihidupi setiap hari. Biarkan ketidaksempurnaan buatan tangan yang bercerita."</p>
            <p className="font-headline-sm text-headline-sm text-on-surface">— Gholl, Founder</p>
          </div>
        </div>
      </motion.section>
    </main>
  );
}