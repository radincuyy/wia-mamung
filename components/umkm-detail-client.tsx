'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import {
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Star,
  Share2,
  Heart,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// Fix for default marker icon
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

interface Umkm {
  id: number
  nama: string
  deskripsi: string
  kategori: string
  alamatLengkap: string
  foto?: string
  lokasi: {
    lat: number
    lng: number
  }
}

const categoryColors: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  Kuliner: {
    bg: 'bg-orange-50',
    text: 'text-orange-700',
    border: 'border-orange-200',
  },
  Fashion: {
    bg: 'bg-pink-50',
    text: 'text-pink-700',
    border: 'border-pink-200',
  },
  Kerajinan: {
    bg: 'bg-purple-50',
    text: 'text-purple-700',
    border: 'border-purple-200',
  },
  default: {
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    border: 'border-blue-200',
  },
}

// Gallery images (in real app, this would come from data)
const getGalleryImages = (mainImage?: string) => {
  const images = [
    mainImage ||
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
    'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&q=80',
  ]
  return images
}

export function UmkmDetailClient({ umkm }: { umkm: Umkm }) {
  const colors = categoryColors[umkm.kategori] || categoryColors.default
  const galleryImages = getGalleryImages(umkm.foto)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  const googleMapsUrl = `https://www.google.com/maps?q=${umkm.lokasi.lat},${umkm.lokasi.lng}`

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    )
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    )
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: umkm.nama,
          text: umkm.deskripsi,
          url: window.location.href,
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-16 md:top-20 z-[90]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button
                variant="ghost"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="hidden sm:inline">Kembali ke Beranda</span>
                <span className="sm:hidden">Kembali</span>
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart
                  className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`}
                />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleShare}>
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Gallery */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-64 sm:h-80 md:h-96 bg-slate-100">
                <img
                  src={galleryImages[currentImageIndex]}
                  alt={`${umkm.nama} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Gallery Navigation */}
                {galleryImages.length > 1 && (
                  <>
                    <button
                      onClick={handlePreviousImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} / {galleryImages.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnail Gallery */}
              <div className="p-4 grid grid-cols-4 gap-2">
                {galleryImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-20 rounded-lg overflow-hidden ${
                      currentImageIndex === index
                        ? 'ring-2 ring-blue-600'
                        : 'opacity-60 hover:opacity-100'
                    } transition-all`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Information */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                    {umkm.nama}
                  </h1>
                  <Badge
                    className={`${colors.bg} ${colors.text} border ${colors.border}`}
                  >
                    {umkm.kategori}
                  </Badge>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-slate-600 font-medium">
                  4.9 (128 ulasan)
                </span>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-900 mb-3">
                  Tentang
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  {umkm.deskripsi}
                </p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  UMKM ini telah berdiri sejak lama dan menjadi favorit
                  masyarakat sekitar. Dengan komitmen untuk memberikan produk
                  dan layanan terbaik, kami terus berinovasi untuk memenuhi
                  kebutuhan pelanggan.
                </p>
              </div>

              {/* Address */}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-900 mb-3">
                  Alamat
                </h2>
                <div className="flex items-start gap-3 text-slate-600 bg-slate-50 p-4 rounded-lg">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600" />
                  <span>{umkm.alamatLengkap}</span>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">
                  Kontak
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-600 bg-slate-50 p-4 rounded-lg">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Telepon</p>
                      <a
                        href="tel:+6281234567890"
                        className="font-medium hover:text-blue-600"
                      >
                        +62 812-3456-7890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 bg-slate-50 p-4 rounded-lg">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Email</p>
                      <a
                        href={`mailto:info@${umkm.nama.toLowerCase().replace(/\s+/g, '')}.com`}
                        className="font-medium hover:text-blue-600 text-sm"
                      >
                        info@{umkm.nama.toLowerCase().replace(/\s+/g, '')}.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg sticky top-32">
              <div className="p-4 border-b">
                <h2 className="text-xl font-bold text-slate-900">Lokasi</h2>
              </div>
              <div className="h-64 md:h-80">
                <MapContainer
                  center={[umkm.lokasi.lat, umkm.lokasi.lng]}
                  zoom={15}
                  scrollWheelZoom={false}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker
                    position={[umkm.lokasi.lat, umkm.lokasi.lng]}
                    icon={icon}
                  >
                    <Popup>
                      <div className="p-2">
                        <h3 className="font-bold text-base">{umkm.nama}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {umkm.kategori}
                        </p>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
              <div className="p-4">
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <MapPin className="h-5 w-5 mr-2" />
                    Buka di Google Maps
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
