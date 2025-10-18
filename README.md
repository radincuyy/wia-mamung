# 🏪 UMKM MAMUNG

Website direktori UMKM lokal dengan peta interaktif untuk menemukan dan mendukung usaha mikro, kecil, dan menengah di Indonesia.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Fitur

- 🗺️ **Peta Interaktif** - Visualisasi lokasi UMKM dengan Leaflet.js
- 🔍 **Pencarian & Filter** - Cari UMKM berdasarkan nama atau kategori
- 📱 **Responsive Design** - Tampilan optimal di semua device
- ⚡ **Fast Performance** - Static Site Generation untuk loading cepat
- 🎨 **Modern UI** - Desain modern dengan Tailwind CSS

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm atau yarn

### Installation

```bash
# Clone repository
git clone https://github.com/username/umkm-mamung.git
cd umkm-mamung

# Install dependencies
npm install

# Run development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 📦 Build & Deploy

### Build untuk Production

```bash
npm run build
```

Output akan ada di folder `/out` dan siap untuk di-deploy ke hosting static.

### Deploy ke Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy ke Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

## 📝 Menambah Data UMKM

Edit file `public/data/umkm.json`:

```json
{
  "id": 1,
  "nama": "Nama UMKM",
  "deskripsi": "Deskripsi singkat",
  "kategori": "Kuliner",
  "alamatLengkap": "Alamat lengkap",
  "foto": "https://link-foto.jpg",
  "lokasi": {
    "lat": -6.2088,
    "lng": 106.8456
  }
}
```

Setelah edit, jalankan `npm run build` untuk rebuild.

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Map:** Leaflet.js + React Leaflet
- **Icons:** Lucide React
- **Build:** Static Site Generation (SSG)

## 📁 Project Structure

```
umkm-mamung/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── umkm/[id]/        # Detail UMKM pages
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── navbar.tsx        # Navigation
│   ├── hero-section.tsx  # Hero section
│   ├── wilayah-section.tsx # Region carousel
│   ├── umkm-list.tsx     # UMKM list
│   ├── map.tsx           # Interactive map
│   └── footer.tsx        # Footer
├── public/data/          # Static data
│   └── umkm.json        # UMKM database
└── lib/                 # Utilities
```

## 🎯 Features Detail

### Peta Interaktif
- Menampilkan lokasi semua UMKM di peta
- Marker dengan popup informasi
- Zoom dan pan untuk eksplorasi
- Integrasi dengan OpenStreetMap

### Pencarian & Filter
- Pencarian real-time berdasarkan nama/deskripsi
- Filter berdasarkan kategori (Kuliner, Fashion, Kerajinan)
- Hasil pencarian instant

### Detail UMKM
- Galeri foto
- Informasi lengkap (deskripsi, alamat, kontak)
- Peta lokasi spesifik
- Link ke Google Maps

## 🤝 Contributing

Contributions are welcome! Silakan buat issue atau pull request.

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 📧 Contact

- Email: info@umkm-mamung.id
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Leaflet](https://leafletjs.com/) - Map library
- [Unsplash](https://unsplash.com/) - Images

---

Dibuat dengan ❤️ untuk UMKM Indonesia
