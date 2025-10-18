import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Navbar } from "@/components/navbar"
import { SmoothScrollHandler } from "@/components/smooth-scroll-handler"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Direktori UMKM Indonesia | Temukan UMKM Lokal Terbaik",
  description: "Website direktori UMKM lokal Indonesia dengan peta interaktif. Temukan dan dukung usaha mikro, kecil, dan menengah di sekitar Anda.",
  keywords: [
    "UMKM",
    "Indonesia",
    "direktori",
    "usaha lokal",
    "bisnis lokal",
    "peta UMKM",
  ],
  authors: [{ name: "Direktori UMKM Indonesia" }],
  openGraph: {
    title: "Direktori UMKM Indonesia",
    description: "Temukan dan dukung UMKM lokal Indonesia",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Direktori UMKM Indonesia",
    description: "Temukan dan dukung UMKM lokal Indonesia",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <SmoothScrollHandler />
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
