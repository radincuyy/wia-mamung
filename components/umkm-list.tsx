'use client'

import { useState, useMemo } from 'react'
import { UmkmCard } from '@/components/umkm-card'
import { FilterSection } from '@/components/filter-section'

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

interface UmkmListProps {
  umkmList: Umkm[]
}

export function UmkmList({ umkmList }: UmkmListProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = useMemo(() => {
    return Array.from(new Set(umkmList.map((umkm) => umkm.kategori)))
  }, [umkmList])

  const filteredUmkm = useMemo(() => {
    return umkmList.filter((umkm) => {
      const matchesSearch = 
        umkm.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
        umkm.deskripsi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        umkm.alamatLengkap.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesCategory = 
        selectedCategory === 'all' || umkm.kategori === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [umkmList, searchQuery, selectedCategory])

  return (
    <div>
      <FilterSection
        onSearchChange={setSearchQuery}
        onCategoryChange={setSelectedCategory}
        categories={categories}
      />
      
    
      {filteredUmkm.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            Tidak ada UMKM yang ditemukan
          </p>
        </div>
      ) : (
        <>
          <p className="text-sm text-muted-foreground mb-4">
            Menampilkan {filteredUmkm.length} dari {umkmList.length} UMKM
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUmkm.map((umkm) => (
              <UmkmCard
                key={umkm.id}
                id={umkm.id}
                nama={umkm.nama}
                deskripsi={umkm.deskripsi}
                kategori={umkm.kategori}
                alamatLengkap={umkm.alamatLengkap}
                foto={umkm.foto}
                lokasi={umkm.lokasi}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
