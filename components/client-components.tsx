'use client'

import dynamic from 'next/dynamic'
import { UmkmList } from '@/components/umkm-list'

const Map = dynamic(() => import('@/components/map').then((mod) => mod.Map), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] w-full bg-muted rounded-lg flex items-center justify-center">
      <p className="text-muted-foreground">Memuat peta...</p>
    </div>
  ),
})

interface Umkm {
  id: number
  nama: string
  deskripsi: string
  kategori: string
  alamatLengkap: string
  lokasi: {
    lat: number
    lng: number
  }
}

interface ClientComponentsProps {
  umkmList: Umkm[]
}

export function ClientComponents({ umkmList }: ClientComponentsProps) {
  return (
    <>
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Peta Lokasi UMKM</h2>
          <p className="text-slate-600">Temukan UMKM terdekat dengan peta interaktif</p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white relative z-10">
          <Map umkmList={umkmList} />
        </div>
      </div>

      <div id="umkm-list">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Jelajahi UMKM</h2>
          <p className="text-slate-600">Temukan UMKM terbaik sesuai kebutuhan Anda</p>
        </div>
        <UmkmList umkmList={umkmList} />
      </div>
    </>
  )
}
