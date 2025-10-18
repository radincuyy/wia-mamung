import { promises as fs } from 'fs'
import path from 'path'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { WilayahSection } from '@/components/wilayah-section'
import { ClientComponents } from '@/components/client-components'

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

async function getUmkmData(): Promise<Umkm[]> {
  const filePath = path.join(process.cwd(), 'public', 'data', 'umkm.json')
  const fileContents = await fs.readFile(filePath, 'utf8')
  return JSON.parse(fileContents)
}

export default async function Home() {
  const umkmList = await getUmkmData()

  return (
    <>
      <main className="min-h-screen">
        <HeroSection />
        <WilayahSection />
        <div className="bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4 py-12">
            <ClientComponents umkmList={umkmList} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
