import { useState, useEffect } from 'react'
import { Menu, X, Phone, MapPin, ArrowRight, Sparkles } from 'lucide-react'

interface NavProps {
  scrolled: boolean
}

export function Nav({ scrolled }: NavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

  // ScrollSpy to highlight active menu section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['layanan', 'tentang', 'paket', 'lokasi']
      const scrollPosition = window.scrollY + 200

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { id: 'layanan', label: 'LAYANAN', href: '#layanan', desc: '6 Kategori foto studio & lighting monokrom' },
    { id: 'tentang', label: 'TENTANG', href: '#tentang', desc: 'Konsep studio, fasiltas & privasi' },
    { id: 'paket', label: 'PAKET & HARGA', href: '#paket', desc: 'Tarif transparan tanpa hidden fee' },
    { id: 'lokasi', label: 'LOKASI & JAM BUKA', href: '#lokasi', desc: 'Alamat Senopati & kontak WhatsApp' },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-10 py-3.5 md:py-4 flex justify-between items-center transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'bg-[#F7F6F2]/95 backdrop-blur-md border-b border-[#DDDDDD] shadow-xs'
            : 'bg-transparent'
        }`}
      >
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-[#111111] hover:text-[#0040FF] transition-colors"
          >
            KLIQA
          </a>
          <div className="hidden sm:flex items-center gap-2 border-l border-neutral-300 pl-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[10px] tracking-widest text-neutral-600 font-medium">
              SELF-PHOTO STUDIO • SENOPATI
            </span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.label}
                href={link.href}
                className={`font-mono text-xs tracking-wider transition-colors py-1 relative group ${
                  isActive ? 'text-[#0040FF] font-bold' : 'text-neutral-600 hover:text-[#0040FF]'
                }`}
              >
                <span>{link.label}</span>
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-[#0040FF] transition-all duration-200 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            )
          })}
          <a
            href="#paket"
            className="px-5 py-2.5 bg-[#111111] hover:bg-[#0040FF] text-white font-mono text-xs tracking-wider transition-all shadow-xs active:scale-95 flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span>BOOKING JADWAL</span>
          </a>
        </nav>

        {/* Mobile Actions: Compact Booking + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#paket"
            onClick={handleLinkClick}
            className="px-3.5 py-1.5 bg-[#111111] text-white font-mono text-[11px] tracking-wider font-semibold active:scale-95 transition-transform"
          >
            BOOKING
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu navigasi'}
            aria-expanded={mobileMenuOpen}
            className="p-2 text-neutral-900 hover:bg-neutral-200/60 border border-neutral-300 rounded transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs md:hidden animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute top-[57px] inset-x-0 bg-[#F7F6F2] border-b border-neutral-300 shadow-2xl p-5 sm:p-6 flex flex-col justify-between max-h-[calc(100vh-60px)] overflow-y-auto animate-in slide-in-from-top-3 duration-250"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Nav Links */}
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-neutral-400 uppercase mb-1">
                <span>NAVIGASI MENU</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  STUDIO OPEN
                </span>
              </div>
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`flex items-center justify-between p-3.5 bg-white border transition-all group ${
                      isActive ? 'border-[#0040FF] ring-1 ring-[#0040FF]' : 'border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] text-[#0040FF] font-bold">
                          0{idx + 1}
                        </span>
                        <span className={`font-serif text-lg font-bold transition-colors ${
                          isActive ? 'text-[#0040FF]' : 'text-neutral-900 group-hover:text-[#0040FF]'
                        }`}>
                          {link.label}
                        </span>
                      </div>
                      <p className="font-sans text-xs text-neutral-500 mt-0.5">{link.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#0040FF] transition-transform group-hover:translate-x-1" />
                  </a>
                )
              })}
            </div>

            {/* Quick Contact & WhatsApp in Mobile Drawer */}
            <div className="mt-6 pt-4 border-t border-neutral-200 space-y-3">
              <a
                href="https://wa.me/6281234567890?text=Halo%20KLIQA%20Studio,%20saya%20mau%20tanya%20jadwal%20booking"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-[#0040FF] text-white font-mono text-xs tracking-wider font-bold flex items-center justify-center gap-2 transition-colors active:scale-98 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>CHAT WHATSAPP STUDIO</span>
              </a>

              <div className="flex items-start gap-2.5 text-neutral-600 font-mono text-[11px] bg-white p-3 border border-neutral-200">
                <MapPin className="w-4 h-4 text-[#0040FF] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-neutral-900">KLIQA Senopati, Jaksel</span>
                  <span className="text-neutral-500">Jl. Senopati No. 88 • Buka 10:00 - 21:00 WIB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}


