'use client'

import { useState } from 'react'
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react'

interface WilayahCard {
  id: string
  nama: string
  jumlahUmkm: number
  image: string
  color: string
}

const wilayahData: WilayahCard[] = [
  {
    id: 'jakarta-pusat',
    nama: 'Jakarta Pusat',
    jumlahUmkm: 45,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
    color: 'bg-green-100'
  },
  {
    id: 'jakarta-selatan',
    nama: 'Jakarta Selatan',
    jumlahUmkm: 38,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
    color: 'bg-blue-100'
  },
  {
    id: 'jakarta-timur',
    nama: 'Jakarta Timur',
    jumlahUmkm: 32,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
    color: 'bg-green-100'
  },
  {
    id: 'jakarta-barat',
    nama: 'Jakarta Barat',
    jumlahUmkm: 28,
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&q=80',
    color: 'bg-purple-100'
  },
  {
    id: 'jakarta-utara',
    nama: 'Jakarta Utara',
    jumlahUmkm: 25,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80',
    color: 'bg-orange-100'
  },
  {
    id: 'bekasi',
    nama: 'Bekasi',
    jumlahUmkm: 42,
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80',
    color: 'bg-pink-100'
  }
]

interface WilayahSectionProps {
  onWilayahSelect?: (wilayahId: string) => void
}

export function WilayahSection({ onWilayahSelect }: WilayahSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Responsive cards to show
  const getCardsToShow = () => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth < 640) return 1 // mobile
    if (window.innerWidth < 1024) return 2 // tablet
    return 3 // desktop
  }

  const [cardsToShow, setCardsToShow] = useState(getCardsToShow())

  // Update cards to show on resize
  useState(() => {
    if (typeof window === 'undefined') return
    
    const handleResize = () => {
      setCardsToShow(getCardsToShow())
      setCurrentIndex(0) // Reset to first card on resize
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => 
      Math.min(wilayahData.length - cardsToShow, prev + 1)
    )
  }

  const handleWilayahClick = (wilayahId: string) => {
    if (onWilayahSelect) {
      onWilayahSelect(wilayahId)
    }
    // Scroll to UMKM list with navbar offset
    const element = document.getElementById('umkm-list')
    if (element) {
      const navbarHeight = 80 // Height of navbar (h-20 = 80px)
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  const canGoPrevious = currentIndex > 0
  const canGoNext = currentIndex < wilayahData.length - cardsToShow

  return (
    <div id="wilayah-section" className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 md:mb-4">
            Wilayah
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            Ayo Jelajahi berbagai jenis usaha lokal di wilayah kalian berada
          </p>
        </div>

        {/* Cards Container with Navigation */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-20">
            <button
              onClick={handlePrevious}
              disabled={!canGoPrevious}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white p-2 sm:p-3 rounded-full shadow-lg transition-all hover:scale-110 disabled:hover:scale-100"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-20">
            <button
              onClick={handleNext}
              disabled={!canGoNext}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white p-2 sm:p-3 rounded-full shadow-lg transition-all hover:scale-110 disabled:hover:scale-100"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          {/* Cards Carousel */}
          <div className="overflow-hidden px-2 sm:px-4">
            <div
              className="flex transition-transform duration-300 ease-in-out gap-4 md:gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              }}
            >
              {wilayahData.map((wilayah) => (
                <div
                  key={wilayah.id}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / cardsToShow}% - ${cardsToShow === 1 ? '1rem' : cardsToShow === 2 ? '0.75rem' : '1rem'})` }}
                >
                  <div
                    className={`${wilayah.color} rounded-2xl md:rounded-3xl p-4 md:p-6 hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer group h-full`}
                    onClick={() => handleWilayahClick(wilayah.id)}
                  >
                    {/* Image */}
                    <div className="relative h-40 sm:h-44 md:h-48 mb-4 md:mb-6 rounded-xl md:rounded-2xl overflow-hidden bg-white shadow-md">
                      <img
                        src={wilayah.image}
                        alt={wilayah.nama}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-1 md:mb-2">
                        {wilayah.nama}
                      </h3>
                      <p className="text-sm md:text-base text-slate-600 mb-3 md:mb-4">
                        {wilayah.jumlahUmkm} UMKM
                      </p>
                      <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 mx-auto group-hover:gap-2 transition-all text-sm md:text-base">
                        Lihat Lokasi
                        <MapPin className="h-3 w-3 md:h-4 md:w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: wilayahData.length - cardsToShow + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index 
                    ? 'w-8 bg-blue-600' 
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
