'use client'

import {
  Store,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Store className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl">
                UMKM MAMUNG
              </h3>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Temukan berbagai jenis usaha lokal, dari kuliner, kerajinan, sampai layanan jasa di sekitar Anda.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-blue-600 p-2 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-pink-600 p-2 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-blue-400 p-2 rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-blue-700 p-2 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Navigasi</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="/#wilayah-section"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  Wilayah
                </a>
              </li>
              <li>
                <a
                  href="/#umkm-list"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  Peta Lokasi
                </a>
              </li>
              <li>
                <a
                  href="/#umkm-list"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  Jelajahi UMKM
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Informasi
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-400 text-xs mb-1">Lokasi</p>
                  <p className="text-slate-300">Jakarta & Sekitarnya</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Store className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-400 text-xs mb-1">Total UMKM</p>
                  <p className="text-slate-300">10+ UMKM Terdaftar</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-400 text-xs mb-1">Kontak</p>
                  <a
                    href="mailto:info@umkm-mamung.id"
                    className="hover:text-blue-400 transition-colors"
                  >
                    info@umkm-mamung.id
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400 text-center md:text-left">
              &copy; 2024 UMKM MAMUNG. Dibuat dengan ❤️ untuk UMKM Indonesia.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="/"
                className="hover:text-blue-400 transition-colors"
              >
                Tentang
              </a>
              <a
                href="/"
                className="hover:text-blue-400 transition-colors"
              >
                Kontak
              </a>
              <a
                href="/"
                className="hover:text-blue-400 transition-colors"
              >
                Bantuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
