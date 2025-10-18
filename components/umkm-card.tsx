'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, ExternalLink, Star, Image as ImageIcon } from "lucide-react"

interface UmkmCardProps {
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

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  'Kuliner': { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
  'Fashion': { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200' },
  'Kerajinan': { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  'default': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' }
}

export function UmkmCard({ id, nama, deskripsi, kategori, alamatLengkap, foto, lokasi }: UmkmCardProps) {
  const colors = categoryColors[kategori] || categoryColors.default
  
  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 overflow-hidden flex flex-col h-full">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100 flex-shrink-0">
        {foto ? (
          <img
            src={foto}
            alt={nama}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
            <ImageIcon className="h-16 w-16 text-slate-400" />
          </div>
        )}
        {/* Category Badge Overlay */}
        <div className="absolute top-3 right-3">
          <Badge
            className={`${colors.bg} ${colors.text} border ${colors.border} shadow-lg backdrop-blur-sm`}
          >
            {kategori}
          </Badge>
        </div>
      </div>

      {/* Content wrapper with flex-grow */}
      <div className="flex flex-col flex-grow">
        <CardHeader className="pb-3 flex-grow">
          <CardTitle className="text-xl group-hover:text-blue-600 transition-colors line-clamp-1">
            {nama}
          </CardTitle>
          <CardDescription className="line-clamp-2 text-base min-h-[3rem]">
            {deskripsi}
          </CardDescription>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="text-sm text-slate-600 ml-1">(4.9)</span>
          </div>
        </CardHeader>

        <CardContent className="pt-0 mt-auto">
          <div className="flex items-start gap-2 text-sm text-slate-600 mb-4 bg-slate-50 p-3 rounded-lg min-h-[4rem]">
            <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-600" />
            <span className="line-clamp-2">{alamatLengkap}</span>
          </div>

          <Button
            variant="default"
            className="w-full group-hover:bg-blue-600 transition-colors shadow-md"
            onClick={() => window.open(`/umkm/${id}`, '_blank')}
          >
            Lihat Detail Lengkap
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </div>
    </Card>
  )
}
