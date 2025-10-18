import { Button } from '@/components/ui/button'
import { ArrowRight, Store } from 'lucide-react'

export function CTASection() {
  return (
    <div className="py-20 bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Store className="h-4 w-4" />
            <span>Bergabung dengan Ribuan UMKM Lainnya</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Punya UMKM?
            <br />
            Daftarkan Sekarang!
          </h2>

          <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Tingkatkan visibilitas bisnis Anda dan jangkau lebih banyak
            pelanggan dengan mendaftarkan UMKM Anda di platform kami.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-50 text-base sm:text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all font-semibold"
            >
              Daftar Gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-base sm:text-lg px-8 py-6 transition-all font-semibold"
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-white mb-1">
                100+
              </p>
              <p className="text-sm sm:text-base text-white/80">
                UMKM Terdaftar
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-white mb-1">
                10+
              </p>
              <p className="text-sm sm:text-base text-white/80">Kategori</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-white mb-1">
                1000+
              </p>
              <p className="text-sm sm:text-base text-white/80">Pengunjung</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
