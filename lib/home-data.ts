export type Category = {
  name: string;
  href: string;
  image: string;
};

export type Product = {
  name: string;
  price: string;
  image: string;
  tag?: string;
  category: string;
};

export const hero = {
  eyebrow: "Karya Tangan Digital",
  title: "Keindahan DIY yang Elegan.",
  description: "Koleksi unik material alami dengan presisi desain modern.",
  image:
    "https://i.pinimg.com/1200x/0c/b9/e8/0cb9e88bc66ca1591e8533b9eb0152a4.jpg",
};

export const categories: Category[] = [
  {
    name: "Furniture",
    href: "/katalog?category=furniture",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAWq7IVX35XojsF-lWqHcRlaPJR2-8gmPzQwcgsKxxGo9KYGaoffkQqdMHNuErQ-1cvdyNPN4RwB7zHCqkF6SDJ0MxOHZu8LmRgxXrDMvlkTnWFiTlxkpH7hXIC3JdaUqPzbeTDBKK7GTteWHkGDjqD3kPt3n_Du8PsQfbqDtdmi3I0_5cMkp_YMwh2MnFuLsEpwGG5QGF8HWed_mGdb6UuhYAUtJE6PhQipn7nPq2AUuPLFm-HkkuLw_gEq33K4aKBES6Swwh8d8uH",
  },
  {
    name: "Accents",
    href: "/katalog?category=accents",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDabe-V33v-XigIXWq8dwSBmIw4rls9LPIK-qDuf47jDYak2R4tyO2DUtIFoE-Ybk7Zpywu-kRLviaBs_nNBsVZkxNfwtkruCJLw3H-aMIY5CYH43Ps7MT11qF1OP8keOZpwqaH3wlzS4GlSMkJJBc6pL17SCZVNqFC6bUOGz6IfDQCe7GJbi1mCuk-QgUfNcnAX157jaaKw9-_2GRL2G0UhM4DpCIWyx-ixIGHu11phCxkOpX9MnJAaICEZGUTD9N7jc-nI6l2DUjJ",
  },
  {
    name: "Lifestyle",
    href: "/katalog?category=lifestyle",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmnN4Wdzk6_wY0D1HnYxH6n2ozXmkj96-QLwqDVArMGFuCrb247Gb9zzUWGooLKZJxaf49W10qk523T_jK1TnfAjM5ZPQoZ5rZeJ-UeAy4-swDRW5VyXDfavbVK5QDAMKNEAeB3duiRQMh-DW2M9RU0vdwLcl1qUaDHKYES-1Xswi3dJCY51kDYz2lCBJNqdmUq6c_HeJD2Ra8WjXJMJ_OkZEScPSVjje6_RAeVIFBG03aiGZfcxCjOTt5PEPJYx52SzB3TcD8ztjZ",
  },
];

export const featuredProducts: Product[] = [
  {
    name: "Nara Side Table",
    price: "Rp 1.250k",
    tag: "Baru",
    category: "Furniture",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYyNu7nAqkYyOZOJtu85YxpBqfaeZ94bcMvwPXdyDX81treeAm-vTBtL3YCNpd4RsQqdkKM5WTrpXtzgxdNF06O-BJvFedzfbLbGq8cMgluU-mDwISu1wo1Bgaw2BKQQFgA-5si36-_W0QlgCLxqU8FxUcDxFya3csDwo1ufizqb6Z4qNB4p4WtC7uDdJgfugjBv8MmK88Uwh8OVbwgkQ6OjFeMUfOW4SgfCDKsu6fL4AFH3Dge47SxkruePf68bTlpDjvtkNt-RPe",
  },
  {
    name: "Kumi Ceramic Mug",
    price: "Rp 185k",
    category: "Lifestyle",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyy91pswBpv-aDrarnRq85EWHoVFTZCzaeJFIqONLgDNCKr2tiIyWmpc5lvKvWSesX3bZk_xMmY6lPf7Jl4vlcBZzxid_r_GqMeRLo0sQkay267YhynjF-YbaLPGZJsvpaPWwzEoW_AnEJ0GMlU-juymC6AcWN5Gmmh9oJXhk_sJLfYGJCfqFaNKBWLvamf35wKdZtYmCIG6t63RyjCm1sb2XHBbEyV8tEr3flQx_DxjvIQt6Y9nEwN1C7SWHAfrolQGGNxjMxJ_O7",
  },
  {
    name: "Kursi Jati Minimalis",
    price: "Rp 1.250k",
    category: "Furniture",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAU-6w4EU_YJLlepe07vMqUDXDm7n6sPCbCBkljf8Yt61Cr4Lz18zkYuceQMkyT1IeMqXOjjuwSMlzlYh2aD7E_c0s2SCGGjQrJS18khSz4u_qfvPwWuMyf8lOUqVs2yxyXZWHBNHsSYsQ2CC-ZLhYOKFP_CbaEYVowDltA5tuB_W3Azsp5DOfzGqFFY5xHkmI2akytFWjcoNhEu7LgIOIkYgcKaZc855F3fV9zujxVURQe61uUXDtXFG5r783ZgG4qLji-2QrNPpeP",
  },
  {
    name: "Macrame Senja",
    price: "Rp 200k",
    category: "Accents",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDH5qU0n6asj-BVq41iJsTLCODo4LCYnct-XK-TOct-X5H9x07PNU3LIW7x2SgozD5O7EGGqbqwePSPUGGV6K-Il-c4oYThial3cF-8WqgtwDhBgtJMz0P7LbWZVoSKX9HPwFR7_iFxNaQUKPVd0Ws9sEzrd61tXekq3-0ABz-Qkl-p1SwgEKDMStn_loXl4uzzBKFKlyTvgemEEF98CxnH2NwzQSxPdlM-ZeJzGQvlbTVNTOXlZZ4K6Y-CP1q4lhpV1zwcWMVOLWAt",
  },
];

export const brandStory = {
  eyebrow: "Cerita Kami",
  title: "Dibuat Dengan Hati.",
  description:
    "Merayakan apresiasi terhadap barang yang dibuat perlahan. Produk kami dirancang untuk menua dengan anggun.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDBO7eK3S63yCfchjJ1SokasPqDn1piug8S2eTAb5gYeELJbvdWXBgV8NqmsENryomHTc8qhsLa99PfF752kAdIdfnevc-7_LTbI5zCTWewrCovI8Nw_vQ74F8voSZlwU5gXO9nEvvWGLcIryrEpG7N86qbTfNNLaUSMJAji7V3bR_irNx-ZYG2TlygL7na_nlVBqxWCKaS9Dgta1Cd13rjjXX2xKkHntqHziQFo_iyfLXe56IXmSnk3Cs6aKdTZ0j3zmvklviqwOF6",
};
