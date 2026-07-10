export default function About() {
  return (
    <main className="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col flex-grow">
      {/* Section 1: Hero */}
      <section className="py-margin-desktop px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-margin-desktop items-center">
          <div className="space-y-6">
            <h1 className="font-display-lg-mobile md:text-display-lg text-on-surface">Presisi dalam Setiap Sentuhan</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">jieun.keun lahir dari perpaduan antara keahlian tradisional dan presisi teknis. Kami percaya bahwa setiap karya buatan tangan membawa jiwa pembuatnya, diperkuat dengan akurasi desain modern. Pendekatan kami menggabungkan inovasi material dengan keindahan rancang bangun.</p>
          </div>
          <div className="relative">
            <img alt="Workshop" className="w-full h-auto rounded-xl shadow-[0_4px_20px_rgba(91,74,58,0.06)] border border-outline-variant object-cover aspect-[4/3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0GdHjBA797IVyRdKdeAnNZd4POeRMyEtSEoRCMEu_VFV_oQcJ5CaAlZYZ4G5Qcwg7LHJc8P8v2GDczU0xF4gbgukbUFZa70kj8ul7R7b4AXuTJqgxt2csyls4fl7WyWlSA0ekVJ3lqVaBU4SowFSzq7ABSMur4FG_1FQYrCw3W2dbqfIUqnVJUm_WT3xeNf1zUHp-Y37lZDAwt2dU9KYqmouB-_UudHEuNwnMtZG_f_J-r-0Y0bNB2C2c4RHzMOkmb3fjpxDbBatI" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-tertiary-container opacity-20 rounded-full z-[-1]"></div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Values */}
      <section className="bg-surface-container py-margin-desktop">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-margin-desktop">
            <h2 className="font-headline-md text-headline-md text-on-surface">Nilai-Nilai Kami</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">Prinsip yang memandu setiap karya yang kami ciptakan.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Value 1 */}
            <div className="bg-surface-container-lowest/90 backdrop-blur-[10px] p-gutter rounded-xl shadow-[0_4px_20px_rgba(91,74,58,0.06)] border border-outline-variant text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-primary-container rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-primary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Presisi Teknis</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Kami mengutamakan akurasi dalam setiap detail desain. Memadukan keindahan estetika dengan standar teknis yang ketat.</p>
            </div>
            {/* Value 2 */}
            <div className="bg-surface-container-lowest/90 backdrop-blur-[10px] p-gutter rounded-xl shadow-[0_4px_20px_rgba(91,74,58,0.06)] border border-outline-variant text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-secondary-container rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-secondary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Keahlian (Craftsmanship)</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Dedikasi terhadap detail dan kualitas material. Kami merancang untuk bertahan melewati ujian waktu melalui struktur yang kokoh.</p>
            </div>
            {/* Value 3 */}
            <div className="bg-surface-container-lowest/90 backdrop-blur-[10px] p-gutter rounded-xl shadow-[0_4px_20px_rgba(91,74,58,0.06)] border border-outline-variant text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-tertiary-container rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-tertiary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>science</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Inovasi Material</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Mengeksplorasi potensi batas setiap material. Menguji ketahanan dan fungsi untuk menghasilkan performa terbaik.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Process */}
      <section className="py-margin-desktop px-gutter max-w-container-max mx-auto">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-margin-desktop text-center">Proses Kreatif</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-margin-desktop">
          <div className="space-y-gutter">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-caps text-label-caps flex-shrink-0 mt-1">1</div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">Analisis &amp; Desain</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Semuanya dimulai dari kalkulasi. Merancang struktur teknis dan merencanakan cetak biru secara matematis sebelum implementasi.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-caps text-label-caps flex-shrink-0 mt-1">2</div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">Rekayasa Material</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Memilih spesifikasi material yang tepat. Kami mengkalibrasi tekstur, warna, dan kekuatan struktural secara cermat.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-label-caps text-label-caps flex-shrink-0 mt-1">3</div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">Konstruksi &amp; Presisi</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Menyatukan semua elemen dengan teknik tingkat tinggi. Memastikan setiap detail, toleransi ukuran, dan sambungan dieksekusi sempurna.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img alt="Sketsa" className="w-full h-full object-cover rounded-xl shadow-[0_4px_20px_rgba(91,74,58,0.06)] border border-outline-variant aspect-square" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-eYWspVzZLf9PUuyfFMPGTRDDGsHIfyj4jbneYPq7jbDI_WE98Ks_jeN0BBEM5V2G9tFRb18nLwg3Nr7xSz2DeS2h9kIMsZXBhniee6_vHNnroXtl07YL7r0v-XMmU0w8THeRbvpExbjVBiEVCGOCfVdvg8egnLyUMhtCfSSTbxFb2klcEQA-VObxfrORthzJtD8gRBH6xWZti-0RFKaN-LlqIefzzBEW4LLAhOrw7o0SUx7hxHsTDy7UE_-KjL-SKyHXI3suilY9" />
            <img alt="Material" className="w-full h-full object-cover rounded-xl shadow-[0_4px_20px_rgba(91,74,58,0.06)] border border-outline-variant aspect-square" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrc3CtnJT6V8-9DVyQ9saHI2tWFVbH-5A3iH48wYP9tbcMV4y39vMwkgoUdYpCBWa_Wzj343TPPOM6Q29_PuR_eqURA-G0Cncwib7KKNtGyvGRgPd092F7cFG9n6JvWCOjAdzZrDqNuTCDfTy-jaHDLDdD3KtM0DY0gvdbBdeu999GE-E-2yXTeDDCxY6fceKQ8sN2iRBJlom4sYRgjADwxeyBcUVCLZ4nvVsH_FkSV-8uIiSB66Sk8Z8-xwnSZvyAMz45zzUdlTLQ" />
          </div>
        </div>
      </section>

      {/* Section 4: Founder's Note */}
      <section className="bg-primary-container/20 py-margin-desktop px-gutter">
        <div className="max-w-[800px] mx-auto bg-surface-container-lowest/90 backdrop-blur-[10px] p-margin-desktop rounded-xl shadow-[0_4px_20px_rgba(91,74,58,0.06)] border-l-4 border-primary border-t border-r border-b border-outline-variant flex flex-col md:flex-row gap-gutter items-center">
          <img alt="Founder" className="w-32 h-32 rounded-full object-cover border-2 border-outline-variant shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAujcScKdWnFQ8SG-_5AcjtCUKJlJhPN4rj_ZmbVv5XZGG0c8hOfbxO-N_KZ-nVL3IUHN-mIwzliufOLUVvaWvXKlXakg1Nm6cv_GGCEdC61YABrw9ljDTYXnh_ssf3XhzlwHVuyfl9V5KgZfToFozFT63JfJsvzeWd4sRZ0uED_84GYEJiI94_9WMNhl4rFBffuryO02FJs6YXG1UjMTwiRIuRt4J5sfOtcCdtEvPgNolI3mCnD_Ok-uAeXu_8mgYDFCFmGAzH3mxE" />
          <div>
            <span className="material-symbols-outlined text-primary text-4xl mb-2 block" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
            <p className="font-body-lg text-body-lg text-on-surface-variant italic mb-4">"Tujuan kami bukan sekadar merancang sesuatu yang fungsional, tetapi menciptakan arsitektur—baik fisik maupun digital—yang memiliki keandalan struktural. Kami merayakan ketelitian karena di situlah letak kualitas sejati."</p>
            <p className="font-headline-sm text-headline-sm text-on-surface">— Jieun, Pendiri</p>
          </div>
        </div>
      </section>
    </main>
  );
}