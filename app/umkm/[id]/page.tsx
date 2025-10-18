import { promises as fs } from 'fs'
import path from 'path'
import { UmkmDetailClient } from '@/components/umkm-detail-client'
import { notFound } from 'next/navigation'

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

// Disable static generation for this page
export const dynamic = 'force-dynamic'

export default async function UmkmDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const umkmList = await getUmkmData()
  const umkm = umkmList.find((u) => u.id === parseInt(params.id))

  if (!umkm) {
    notFound()
  }

  return <UmkmDetailClient umkm={umkm} />
}
