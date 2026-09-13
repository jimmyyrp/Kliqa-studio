# KLIQA — Self-Photo & Monochrome Studio (Website Simulasi)

> **Website ini adalah simulasi / demo desain.** Semua nama, alamat, harga, dan paket
> di dalamnya hanya contoh — bukan penawaran resmi. Tidak ada transaksi yang diproses.
>
> Mau dibuatkan website seperti ini untuk bisnis kamu? Hubungi developer:
> **Jimmy — [081276484493](https://wa.me/6281276484493)**

Simulasi landing page untuk studio self-photo & photobooth dengan visual monokrom
berkarakter. Dibangun dengan React + Vite + Tailwind CSS v4.

## Fitur

- **Hero interaktif viewfinder kamera** — klik shutter, ganti pose, invert hitam/putih, efek suara shutter
- **6 kategori sesi foto** — Solo, Besties, Photobooth, Creative Shoot, Couple, Wisuda
- **Carousel mobile + grid desktop** dengan lightbox perbesar visual
- **Paket harga** dengan pemilihan paket & tombol booking WhatsApp
- **Kontak WhatsApp dinamis** — nomor diambil live dari [`api/developer.json`](https://github.com/jimmyyrp/jimmyyrp/blob/main/api/developer.json):
  ```json
  {
    "success": true,
    "version": "1.0.0",
    "data": { "developer": { "name": "Jimmy", "whatsapp": "081276484493" } }
  }
  ```
  (fallback otomatis ke `Jimmy / 081276484493` bila jaringan gagal)
- **SEO lengkap** — meta description, Open Graph, Twitter Card, canonical, JSON-LD
  structured data, `robots.txt`, `sitemap.xml`, dan favicon huruf "K" (SVG)

## Menjalankan Lokal

**Prasyarat:** Node.js ≥ 20

1. Install dependencies:
   ```bash
   npm install
   ```
2. Jalankan dev server:
   ```bash
   npm run dev
   ```
3. Buka `http://localhost:3000`

## Perintah

| Perintah          | Fungsi                                |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Dev server Vite (port 3000)           |
| `npm run build`   | Build produksi ke `dist/`             |
| `npm run preview` | Preview hasil build produksi          |
| `npm run lint`    | Typecheck TypeScript (`tsc --noEmit`) |
| `npm run format`  | Format kode dengan oxfmt              |

## Struktur Proyek

```
├── index.html                   # HTML shell + meta SEO + JSON-LD
├── public/
│   ├── favicon.svg              # Favicon huruf "K"
│   ├── icon-512.svg             # Ikon 512px (maskable, PWA)
│   ├── site.webmanifest         # Manifest PWA
│   ├── robots.txt               # Aturan crawler
│   ├── sitemap.xml              # Sitemap
│   └── images/                  # Visual monokrom (.jpg)
├── src/
│   ├── main.tsx                 # Entrypoint React
│   ├── App.tsx                  # Komposisi halaman
│   ├── index.css                # Tailwind v4 + font global
│   ├── developer.ts             # Konfigurasi developer & link WA
│   ├── galleryData.ts           # Data pose & kategori foto
│   └── components/
│       ├── Nav.tsx              # Navigasi + drawer mobile
│       ├── HeroBwViewfinder.tsx # Viewfinder kamera interaktif
│       ├── Sections.tsx         # Hero, Tentang, Layanan, Tagline
│       └── PricingAndFooter.tsx # Paket harga + footer + disclaimer
└── vercel.json                  # Konfigurasi deploy Vercel
```

## Deploy

Siap deploy ke [Vercel](https://vercel.com) — konfigurasi sudah ada di `vercel.json`
(framework Vite, build `npm run build`, output `dist/`).

---

© 2026 KLIQA STUDIO — Simulasi. Develop oleh [Jimmy](https://wa.me/6281276484493).
