create extension if not exists pgcrypto;

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  image_url text not null,
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references public.categories(id) on delete set null,
  name text not null,
  slug text not null unique,
  description text,
  price_label text not null,
  image_url text not null,
  tag text,
  is_featured boolean not null default false,
  is_active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.kontak (
  id uuid primary key default gen_random_uuid(),
  nama text not null,
  email text not null,
  pesan text not null,
  created_at timestamptz not null default now()
);

alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.kontak enable row level security;

drop policy if exists "Public can read active categories" on public.categories;
create policy "Public can read active categories"
  on public.categories
  for select
  using (is_active = true);

drop policy if exists "Public can read active products" on public.products;
create policy "Public can read active products"
  on public.products
  for select
  using (is_active = true);

drop policy if exists "Public can send contact messages" on public.kontak;
create policy "Public can send contact messages"
  on public.kontak
  for insert
  with check (true);

insert into public.categories (name, slug, image_url, sort_order)
values
  (
    'Furniture',
    'furniture',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAWq7IVX35XojsF-lWqHcRlaPJR2-8gmPzQwcgsKxxGo9KYGaoffkQqdMHNuErQ-1cvdyNPN4RwB7zHCqkF6SDJ0MxOHZu8LmRgxXrDMvlkTnWFiTlxkpH7hXIC3JdaUqPzbeTDBKK7GTteWHkGDjqD3kPt3n_Du8PsQfbqDtdmi3I0_5cMkp_YMwh2MnFuLsEpwGG5QGF8HWed_mGdb6UuhYAUtJE6PhQipn7nPq2AUuPLFm-HkkuLw_gEq33K4aKBES6Swwh8d8uH',
    1
  ),
  (
    'Accents',
    'accents',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDabe-V33v-XigIXWq8dwSBmIw4rls9LPIK-qDuf47jDYak2R4tyO2DUtIFoE-Ybk7Zpywu-kRLviaBs_nNBsVZkxNfwtkruCJLw3H-aMIY5CYH43Ps7MT11qF1OP8keOZpwqaH3wlzS4GlSMkJJBc6pL17SCZVNqFC6bUOGz6IfDQCe7GJbi1mCuk-QgUfNcnAX157jaaKw9-_2GRL2G0UhM4DpCIWyx-ixIGHu11phCxkOpX9MnJAaICEZGUTD9N7jc-nI6l2DUjJ',
    2
  ),
  (
    'Lifestyle',
    'lifestyle',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCmnN4Wdzk6_wY0D1HnYxH6n2ozXmkj96-QLwqDVArMGFuCrb247Gb9zzUWGooLKZJxaf49W10qk523T_jK1TnfAjM5ZPQoZ5rZeJ-UeAy4-swDRW5VyXDfavbVK5QDAMKNEAeB3duiRQMh-DW2M9RU0vdwLcl1qUaDHKYES-1Xswi3dJCY51kDYz2lCBJNqdmUq6c_HeJD2Ra8WjXJMJ_OkZEScPSVjje6_RAeVIFBG03aiGZfcxCjOTt5PEPJYx52SzB3TcD8ztjZ',
    3
  )
on conflict (slug) do update
set
  name = excluded.name,
  image_url = excluded.image_url,
  sort_order = excluded.sort_order,
  is_active = true;

insert into public.products (
  category_id,
  name,
  slug,
  description,
  price_label,
  image_url,
  tag,
  is_featured,
  sort_order
)
values
  (
    (select id from public.categories where slug = 'furniture'),
    'Nara Side Table',
    'nara-side-table',
    'Meja samping handmade dengan sentuhan minimalis.',
    'Rp 1.250k',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAYyNu7nAqkYyOZOJtu85YxpBqfaeZ94bcMvwPXdyDX81treeAm-vTBtL3YCNpd4RsQqdkKM5WTrpXtzgxdNF06O-BJvFedzfbLbGq8cMgluU-mDwISu1wo1Bgaw2BKQQFgA-5si36-_W0QlgCLxqU8FxUcDxFya3csDwo1ufizqb6Z4qNB4p4WtC7uDdJgfugjBv8MmK88Uwh8OVbwgkQ6OjFeMUfOW4SgfCDKsu6fL4AFH3Dge47SxkruePf68bTlpDjvtkNt-RPe',
    'Baru',
    true,
    1
  ),
  (
    (select id from public.categories where slug = 'lifestyle'),
    'Kumi Ceramic Mug',
    'kumi-ceramic-mug',
    'Mug keramik untuk rutinitas pagi yang lebih tenang.',
    'Rp 185k',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCyy91pswBpv-aDrarnRq85EWHoVFTZCzaeJFIqONLgDNCKr2tiIyWmpc5lvKvWSesX3bZk_xMmY6lPf7Jl4vlcBZzxid_r_GqMeRLo0sQkay267YhynjF-YbaLPGZJsvpaPWwzEoW_AnEJ0GMlU-juymC6AcWN5Gmmh9oJXhk_sJLfYGJCfqFaNKBWLvamf35wKdZtYmCIG6t63RyjCm1sb2XHBbEyV8tEr3flQx_DxjvIQt6Y9nEwN1C7SWHAfrolQGGNxjMxJ_O7',
    null,
    true,
    2
  ),
  (
    (select id from public.categories where slug = 'furniture'),
    'Kursi Jati Minimalis',
    'kursi-jati-minimalis',
    'Kursi kayu jati dengan proporsi ringan untuk ruang kecil.',
    'Rp 1.250k',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAU-6w4EU_YJLlepe07vMqUDXDm7n6sPCbCBkljf8Yt61Cr4Lz18zkYuceQMkyT1IeMqXOjjuwSMlzlYh2aD7E_c0s2SCGGjQrJS18khSz4u_qfvPwWuMyf8lOUqVs2yxyXZWHBNHsSYsQ2CC-ZLhYOKFP_CbaEYVowDltA5tuB_W3Azsp5DOfzGqFFY5xHkmI2akytFWjcoNhEu7LgIOIkYgcKaZc855F3fV9zujxVURQe61uUXDtXFG5r783ZgG4qLji-2QrNPpeP',
    null,
    true,
    3
  ),
  (
    (select id from public.categories where slug = 'accents'),
    'Macrame Senja',
    'macrame-senja',
    'Dekorasi macrame untuk aksen dinding yang hangat.',
    'Rp 200k',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDH5qU0n6asj-BVq41iJsTLCODo4LCYnct-XK-TOct-X5H9x07PNU3LIW7x2SgozD5O7EGGqbqwePSPUGGV6K-Il-c4oYThial3cF-8WqgtwDhBgtJMz0P7LbWZVoSKX9HPwFR7_iFxNaQUKPVd0Ws9sEzrd61tXekq3-0ABz-Qkl-p1SwgEKDMStn_loXl4uzzBKFKlyTvgemEEF98CxnH2NwzQSxPdlM-ZeJzGQvlbTVNTOXlZZ4K6Y-CP1q4lhpV1zwcWMVOLWAt',
    null,
    true,
    4
  )
on conflict (slug) do update
set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  price_label = excluded.price_label,
  image_url = excluded.image_url,
  tag = excluded.tag,
  is_featured = excluded.is_featured,
  sort_order = excluded.sort_order,
  is_active = true;
