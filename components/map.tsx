'use client'

import { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default marker icon
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
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
  lokasi: {
    lat: number
    lng: number
  }
}

interface MapProps {
  umkmList: Umkm[]
}

export function Map({ umkmList }: MapProps) {
  const center: [number, number] = [-6.2088, 106.8456]
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => {
      setIsMounted(false)
    }
  }, [])

  if (!isMounted) {
    return (
      <div className="h-[500px] w-full bg-slate-100 rounded-lg flex items-center justify-center">
        <p className="text-slate-500">Memuat peta...</p>
      </div>
    )
  }

  return (
    <MapContainer
      key="map-container"
      center={center}
      zoom={12}
      scrollWheelZoom={false}
      style={{ height: '500px', width: '100%', borderRadius: '0.5rem' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {umkmList.map((umkm) => (
        <Marker
          key={umkm.id}
          position={[umkm.lokasi.lat, umkm.lokasi.lng]}
          icon={icon}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-base">{umkm.nama}</h3>
              <p className="text-sm text-gray-600 mt-1">{umkm.kategori}</p>
              <p className="text-sm mt-2">{umkm.deskripsi}</p>
              <p className="text-xs text-gray-500 mt-2">{umkm.alamatLengkap}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
