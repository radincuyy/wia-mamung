'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, SlidersHorizontal } from 'lucide-react'

interface FilterSectionProps {
  onSearchChange: (value: string) => void
  onCategoryChange: (value: string) => void
  categories: string[]
}

export function FilterSection({ onSearchChange, onCategoryChange, categories }: FilterSectionProps) {
  const [search, setSearch] = useState('')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearch(value)
    onSearchChange(value)
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-100 p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <SlidersHorizontal className="h-5 w-5 text-blue-600" />
        <h3 className="font-semibold text-slate-900">Filter & Pencarian</h3>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
          <Input
            type="text"
            placeholder="Cari nama UMKM, deskripsi, atau alamat..."
            value={search}
            onChange={handleSearchChange}
            className="pl-12 h-12 text-base border-2 focus:border-blue-500 rounded-xl"
          />
        </div>
        <Select onValueChange={onCategoryChange}>
          <SelectTrigger className="w-full sm:w-[220px] h-12 border-2 rounded-xl">
            <SelectValue placeholder="Semua Kategori" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Kategori</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
