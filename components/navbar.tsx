'use client'

import { useState } from 'react'
import { Store, MapPin, Building2, Info, Menu, X } from 'lucide-react'

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="bg-white shadow-md sticky top-0 z-[100]">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2 cursor-pointer">
                        <div className="bg-blue-600 p-2 rounded-lg">
                            <Store className="h-5 w-5 md:h-6 md:w-6 text-white" />
                        </div>
                        <span className="text-xl md:text-2xl font-bold text-slate-900">
                            UMKM<span className="text-blue-600">.</span>
                        </span>
                    </a>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <a
                            href="/"
                            className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
                        >
                            Beranda
                        </a>
                        <a
                            href="/#wilayah-section"
                            className="text-slate-700 hover:text-blue-600 font-medium transition-colors flex items-center gap-2"
                        >
                            <Building2 className="h-4 w-4" />
                            Wilayah
                        </a>
                        <a
                            href="/#umkm-list"
                            className="text-slate-700 hover:text-blue-600 font-medium transition-colors flex items-center gap-2"
                        >
                            <MapPin className="h-4 w-4" />
                            Lokasi
                        </a>
                        <a
                            href="/#tentang"
                            className="text-slate-700 hover:text-blue-600 font-medium transition-colors flex items-center gap-2"
                        >
                            <Info className="h-4 w-4" />
                            Tentang
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6 text-slate-700" />
                        ) : (
                            <Menu className="h-6 w-6 text-slate-700" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-slate-200 bg-white">
                        <div className="flex flex-col space-y-4">
                            <a
                                href="/"
                                className="text-slate-700 hover:text-blue-600 font-medium transition-colors py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Beranda
                            </a>
                            <a
                                href="/#wilayah-section"
                                className="text-slate-700 hover:text-blue-600 font-medium transition-colors flex items-center gap-2 py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Building2 className="h-4 w-4" />
                                Wilayah
                            </a>
                            <a
                                href="/#umkm-list"
                                className="text-slate-700 hover:text-blue-600 font-medium transition-colors flex items-center gap-2 py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <MapPin className="h-4 w-4" />
                                Lokasi
                            </a>
                            <a
                                href="/#tentang"
                                className="text-slate-700 hover:text-blue-600 font-medium transition-colors flex items-center gap-2 py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Info className="h-4 w-4" />
                                Tentang
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
