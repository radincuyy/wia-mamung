'use client'

import { Button } from '@/components/ui/button'

export function HeroSection() {
  const scrollToUmkm = () => {
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

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              UMKM MAMUNG.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Temukan berbagai jenis usaha lokal, dari kuliner, kerajinan,
              sampai layanan jasa. Gunakan peta interaktif untuk mencari lokasi
              UMKM terdekat dan dukung perekonomian di sekitar kita.
            </p>

            <Button
              size="lg"
              onClick={scrollToUmkm}
              className="bg-white text-blue-700 hover:bg-blue-50 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-xl font-semibold w-full sm:w-auto relative z-10 cursor-pointer"
            >
              Jelajahi UMKM
            </Button>
          </div>

          {/* Right Content - Image Only */}
          <div className="relative order-first lg:order-last">
            <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80"
                alt="UMKM Store"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
