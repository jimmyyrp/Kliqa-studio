import { useState, useRef, useEffect } from 'react'
import {
  Maximize2,
  X,
  Check,
  Camera,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Columns,
  Shield,
  Sparkles,
  Zap,
  Sliders,
  Users,
  Download,
} from 'lucide-react'
import { BW_SERVICES } from '../galleryData'
import { HeroBwViewfinder } from './HeroBwViewfinder'

export function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView] as const
}

// ─── HERO SECTION ────────────────────────────────────────────────────────────

export function HeroSection() {
  return (
    <section className="min-h-[85vh] px-4 sm:px-6 md:px-10 pt-24 sm:pt-28 md:pt-32 pb-12 md:pb-20 flex items-center">
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Left Column: Headline & Value Proposition */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-[#0040FF] rounded-full animate-ping" />
            <span className="font-mono text-[10px] sm:text-xs tracking-widest text-neutral-600 uppercase font-semibold">
              SELF-PHOTO &amp; MONOCHROME STUDIO — EST. 2026
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-bold leading-[0.94] tracking-tight text-[#111111] mb-5 sm:mb-6">
            FOTO YANG<br />
            BIKIN KAMU<br />
            INGAT.
          </h1>

          <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl mb-6 sm:mb-8">
            Abadikan momen seru dengan foto hitam-putih berkarakter dan pencahayaan studio profesional. Tanpa canggung di depan fotografer, pegang remote shutter nirkabelmu sendiri!
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
            <a
              href="#paket"
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#111111] hover:bg-[#0040FF] text-white font-mono text-xs sm:text-sm tracking-wider font-semibold transition-all shadow-md active:scale-95 flex items-center gap-2 group"
            >
              <span>PILIH PAKET FOTO</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#layanan"
              className="px-5 sm:px-6 py-3.5 sm:py-4 border border-[#111111] bg-white hover:bg-neutral-100 font-mono text-xs sm:text-sm tracking-wider transition-colors text-neutral-900 font-medium"
            >
              LIHAT 6 KATEGORI →
            </a>
          </div>

          {/* Quick Studio Features Bar */}
          <div className="pt-6 border-t border-neutral-300 grid grid-cols-3 gap-2 font-mono text-[10px] sm:text-xs text-neutral-600">
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#0040FF] shrink-0" />
              <span className="font-medium">100% Remote Klik</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#0040FF] shrink-0" />
              <span className="font-medium">Ruang Privat AC</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5 text-[#0040FF] shrink-0" />
              <span className="font-medium">All File Digital JPG</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Interactive Camera Viewfinder */}
        <div className="lg:col-span-6 w-full">
          <HeroBwViewfinder />
        </div>
      </div>
    </section>
  )
}

// ─── ABOUT SECTION ───────────────────────────────────────────────────────────

export function AboutSection() {
  const [ref, inView] = useInView()
  return (
    <section id="tentang" className="border-t border-[#DDDDDD] px-4 sm:px-6 md:px-10 py-16 md:py-28">
      <div
        ref={ref}
        className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
      >
        {/* Left Title Column */}
        <div className="lg:col-span-4">
          <div className="font-mono text-xs tracking-widest text-[#0040FF] font-bold uppercase mb-3">
            02 / 04 • KONSEP STUDIO
          </div>
          <h2
            className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight text-[#111111] transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(24px)',
            }}
          >
            KLIQA<br />
            ITU APA?
          </h2>
        </div>

        {/* Right Description Column */}
        <div className="lg:col-span-8 space-y-6">
          <p
            className="font-sans text-lg sm:text-xl md:text-2xl text-neutral-900 leading-relaxed font-medium transition-all duration-700 delay-100"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(24px)',
            }}
          >
            Tempat untuk foto, ketawa, dan menyimpan momen yang mungkin tidak akan terulang lagi.
          </p>

          <p
            className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed transition-all duration-700 delay-200"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(24px)',
            }}
          >
            Di KLIQA, kami menghadirkan nuansa visual monokrom berkarakter khas studio profesional—mulai dari sesi self-photo solo yang santai, keseruan foto bareng sahabat, bilik photobooth cetak kilat, hingga creative shoot berkonsep artistik.
          </p>

          {/* Interactive Feature Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 transition-all duration-700 delay-300"
            style={{
              opacity: inView ? 1 : 0,
            }}
          >
            <div className="bg-white p-5 border border-neutral-200 hover:border-[#0040FF] transition-all group">
              <div className="w-9 h-9 bg-neutral-100 text-[#0040FF] flex items-center justify-center font-mono font-bold text-sm mb-3 group-hover:bg-[#0040FF] group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="font-serif text-lg font-bold text-neutral-900 mb-1">
                FOTO SENDIRI
              </h3>
              <p className="font-sans text-xs text-neutral-500 leading-relaxed">
                Pegang remote clicker nirkabel sepuasnya di ruang privat ber-AC.
              </p>
            </div>

            <div className="bg-white p-5 border border-neutral-200 hover:border-[#0040FF] transition-all group">
              <div className="w-9 h-9 bg-neutral-100 text-[#0040FF] flex items-center justify-center font-mono font-bold text-sm mb-3 group-hover:bg-[#0040FF] group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="font-serif text-lg font-bold text-neutral-900 mb-1">
                BARENG SQUAD
              </h3>
              <p className="font-sans text-xs text-neutral-500 leading-relaxed">
                Muat hingga 6 orang dengan properti kacamata retro &amp; bando seru.
              </p>
            </div>

            <div className="bg-white p-5 border border-neutral-200 hover:border-[#0040FF] transition-all group">
              <div className="w-9 h-9 bg-neutral-100 text-[#0040FF] flex items-center justify-center font-mono font-bold text-sm mb-3 group-hover:bg-[#0040FF] group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="font-serif text-lg font-bold text-neutral-900 mb-1">
                ALL FILE DIGITAL
              </h3>
              <p className="font-sans text-xs text-neutral-500 leading-relaxed">
                Unduh semua file JPG resolusi tinggi langsung ke ponselmu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── SERVICES SECTION ────────────────────────────────────────────────────────

export function ServicesSection() {
  const [selected, setSelected] = useState<string | null>('SOLO')
  const [activeMobileIndex, setActiveMobileIndex] = useState(0)
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel')
  const [activeModal, setActiveModal] = useState<(typeof BW_SERVICES)[0] | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const selectedService = BW_SERVICES.find((s) => s.tag === selected)

  const toggle = (tag: string, index?: number) => {
    setSelected((prev) => (prev === tag ? null : tag))
    if (index !== undefined) {
      setActiveMobileIndex(index)
    }
  }

  // Smoothly scroll to a specific card in mobile carousel
  const scrollToCard = (index: number) => {
    setActiveMobileIndex(index)
    setSelected(BW_SERVICES[index].tag)
    if (carouselRef.current && viewMode === 'carousel') {
      const container = carouselRef.current
      const card = container.children[index] as HTMLElement
      if (card) {
        const scrollOffset = card.offsetLeft - (container.clientWidth - card.clientWidth) / 2
        container.scrollTo({ left: Math.max(0, scrollOffset), behavior: 'smooth' })
      }
    }
  }

  // Track touch swipe in mobile carousel
  const handleCarouselScroll = () => {
    if (!carouselRef.current || viewMode !== 'carousel') return
    const container = carouselRef.current
    const scrollCenter = container.scrollLeft + container.clientWidth / 2
    let closestIndex = 0
    let minDistance = Infinity

    Array.from(container.children).forEach((child, i) => {
      const el = child as HTMLElement
      const childCenter = el.offsetLeft + el.clientWidth / 2
      const distance = Math.abs(scrollCenter - childCenter)
      if (distance < minDistance) {
        minDistance = distance
        closestIndex = i
      }
    })

    if (closestIndex !== activeMobileIndex && closestIndex >= 0 && closestIndex < BW_SERVICES.length) {
      setActiveMobileIndex(closestIndex)
    }
  }

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModal(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section id="layanan" className="border-t border-[#DDDDDD] px-4 sm:px-6 md:px-10 py-16 md:py-28">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-8 border-b border-neutral-300">
          <div>
            <div className="font-mono text-xs tracking-widest text-[#0040FF] font-bold uppercase mb-2">
              03 / 04 • KATEGORI FOTO STUDIO
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#111111]">
              MAU FOTO APA<br />
              HARI INI?
            </h2>
            <p className="text-neutral-600 text-sm md:text-base mt-2 max-w-xl">
              Pilih dari 6 kategori sesi foto berkarakter. Dilengkapi tata cahaya studio monokrom berpresisi tinggi dan remote shutter nirkabel.
            </p>
          </div>

          <div className="flex items-center justify-between md:flex-col md:items-end gap-2">
            <span className="font-mono text-xs text-neutral-500">
              6 Kategori Pilihan • Klik untuk memilih
            </span>
          </div>
        </div>

        {/* Category Navigation Bar & Mobile View Switcher */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-2">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full sm:w-auto py-1">
            {BW_SERVICES.map((s, idx) => {
              const isCurrent = activeMobileIndex === idx || selected === s.tag
              return (
                <button
                  key={s.tag}
                  type="button"
                  onClick={() => scrollToCard(idx)}
                  className={`px-3 py-1.5 font-mono text-[11px] tracking-wider whitespace-nowrap transition-all border shrink-0 cursor-pointer ${
                    isCurrent
                      ? 'bg-[#111111] text-white border-[#111111] shadow-xs font-bold'
                      : 'bg-white text-neutral-600 border-neutral-300 hover:border-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  {s.tag}
                </button>
              )
            })}
          </div>

          {/* Mobile Display Mode Toggle (Carousel vs Grid) */}
          <div className="flex md:hidden items-center gap-1 bg-neutral-200/70 p-1 border border-neutral-300 text-[11px] font-mono self-end sm:self-auto rounded-xs">
            <button
              type="button"
              onClick={() => setViewMode('carousel')}
              className={`flex items-center gap-1 px-2.5 py-1 transition-all ${
                viewMode === 'carousel'
                  ? 'bg-white text-black font-bold shadow-xs'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              <Columns className="w-3 h-3" />
              <span>Geser (1 Layar)</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1 px-2.5 py-1 transition-all ${
                viewMode === 'grid'
                  ? 'bg-white text-black font-bold shadow-xs'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              <LayoutGrid className="w-3 h-3" />
              <span>Semua Kartu</span>
            </button>
          </div>
        </div>

        {/* 6 Services Cards Container */}
        <div
          ref={carouselRef}
          onScroll={handleCarouselScroll}
          className={
            viewMode === 'carousel'
              ? 'flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-3 pt-1 -mx-4 px-4 md:mx-0 md:px-0'
              : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6'
          }
        >
          {BW_SERVICES.map((s, idx) => {
            const isSelected = selected === s.tag
            return (
              <div
                key={s.tag}
                onClick={() => toggle(s.tag, idx)}
                className={`group relative flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 border bg-white ${
                  viewMode === 'carousel'
                    ? 'w-[84vw] max-w-[340px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink md:snap-align-none'
                    : 'w-full'
                } ${
                  isSelected
                    ? 'border-[#0040FF] ring-2 ring-[#0040FF] shadow-lg'
                    : 'border-[#DDDDDD] hover:border-[#111111]'
                }`}
              >
                {/* Visual 2D Artwork Frame */}
                <div className="relative w-full h-56 sm:h-64 md:h-72 bg-[#F4F4F2] overflow-hidden border-b border-[#EEEEEE] flex items-center justify-center p-3">
                  {/* Studio Viewfinder Corner Marks */}
                  <div className="absolute inset-3 border border-neutral-300/60 pointer-events-none z-10">
                    <span className="absolute -top-1 -left-1 text-[10px] font-mono text-neutral-400 font-bold">+</span>
                    <span className="absolute -top-1 -right-1 text-[10px] font-mono text-neutral-400 font-bold">+</span>
                    <span className="absolute -bottom-1 -left-1 text-[10px] font-mono text-neutral-400 font-bold">+</span>
                    <span className="absolute -bottom-1 -right-1 text-[10px] font-mono text-neutral-400 font-bold">+</span>
                  </div>

                  {/* 2D Monochrome Artwork */}
                  <img
                    src={s.imageUrl}
                    alt={s.titleDetail || s.title}
                    className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Top Left Tag & Highlight */}
                  <div className="absolute top-2.5 left-2.5 z-20 flex flex-wrap gap-1.5 items-center max-w-[70%]">
                    <span className="font-mono text-[9px] tracking-wider px-2 py-0.5 bg-[#111111] text-white font-semibold">
                      {s.tag}
                    </span>
                    <span className="font-mono text-[9px] tracking-wider px-1.5 py-0.5 bg-white/90 text-neutral-800 border border-neutral-300 truncate">
                      {s.highlight}
                    </span>
                  </div>

                  {/* Top Right Zoom Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveModal(s)
                    }}
                    title="Perbesar Visual 2D"
                    className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1 px-2 py-1 bg-white/95 hover:bg-black hover:text-white text-neutral-800 border border-neutral-300 shadow-xs font-mono text-[9px] tracking-wider transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3 h-3" />
                    <span className="hidden sm:inline">PERBESAR</span>
                  </button>

                  {/* Bottom Camera Metadata HUD */}
                  <div className="absolute bottom-2 left-2.5 right-2.5 z-20 flex justify-between items-center bg-white/95 backdrop-blur-xs px-2.5 py-1 border border-neutral-200 text-neutral-700 font-mono text-[9px] tracking-wider">
                    <span>{s.lens}</span>
                    <span className="text-neutral-400">•</span>
                    <span>{s.iso}</span>
                    <span className="text-neutral-400">•</span>
                    <span>{s.time}</span>
                  </div>
                </div>

                {/* Card Information Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase block">
                          {s.titleDetail}
                        </span>
                        <h3 className="font-serif text-2xl font-bold leading-tight tracking-tight text-[#111111]">
                          {s.title.replace('\n', ' ')}
                        </h3>
                      </div>

                      {isSelected && (
                        <div className="flex items-center gap-1 bg-[#0040FF] text-white px-2 py-0.5 font-mono text-[9px] tracking-wider shrink-0 font-bold">
                          <Check className="w-3 h-3" />
                          <span>TERPILIH</span>
                        </div>
                      )}
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-neutral-700 font-medium mb-1.5 leading-relaxed">
                      {s.sub}
                    </p>

                    <p className="font-sans text-[11px] sm:text-xs text-neutral-500 leading-relaxed line-clamp-2">
                      {s.detailSub || s.desc}
                    </p>
                  </div>

                  {/* Select Trigger */}
                  <div className="mt-4 pt-3 border-t border-neutral-100 flex justify-between items-center">
                    <span
                      className={`font-mono text-[11px] tracking-wider font-semibold ${
                        isSelected ? 'text-[#0040FF]' : 'text-neutral-900 group-hover:text-[#0040FF]'
                      }`}
                    >
                      {isSelected ? '✓ KATEGORI AKTIF' : 'PILIH KATEGORI →'}
                    </span>
                    <span
                      className={`w-6 h-6 flex items-center justify-center rounded-full border transition-all ${
                        isSelected
                          ? 'bg-[#0040FF] text-white border-[#0040FF]'
                          : 'border-neutral-300 group-hover:border-neutral-900 text-neutral-700'
                      }`}
                    >
                      {isSelected ? <Check className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile Swipe Navigation Controls (Only in Carousel mode) */}
        {viewMode === 'carousel' && (
          <div className="flex md:hidden items-center justify-between mt-3 pt-3 border-t border-neutral-200">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-neutral-800">
                {String(activeMobileIndex + 1).padStart(2, '0')} / {String(BW_SERVICES.length).padStart(2, '0')}
              </span>
              <span className="text-[11px] text-neutral-500 font-sans truncate max-w-[140px]">
                {BW_SERVICES[activeMobileIndex]?.titleDetail}
              </span>
            </div>

            {/* Indicator Dots */}
            <div className="flex items-center gap-1.5">
              {BW_SERVICES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToCard(idx)}
                  className={`h-1.5 transition-all rounded-full ${
                    activeMobileIndex === idx ? 'w-5 bg-[#0040FF]' : 'w-1.5 bg-neutral-300'
                  }`}
                  aria-label={`Ke slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrow Nav Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                disabled={activeMobileIndex === 0}
                onClick={() => scrollToCard(Math.max(0, activeMobileIndex - 1))}
                className="p-1.5 border border-neutral-300 rounded disabled:opacity-30 hover:bg-neutral-100 text-neutral-700 transition-colors cursor-pointer"
                aria-label="Slide sebelumnya"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                disabled={activeMobileIndex === BW_SERVICES.length - 1}
                onClick={() => scrollToCard(Math.min(BW_SERVICES.length - 1, activeMobileIndex + 1))}
                className="p-1.5 border border-neutral-300 rounded disabled:opacity-30 hover:bg-neutral-100 text-neutral-700 transition-colors cursor-pointer"
                aria-label="Slide berikutnya"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Selection Confirmation Bar */}
        {selectedService && (
          <div className="mt-8 bg-[#111111] text-white p-5 sm:p-6 border border-[#111111] flex flex-wrap justify-between items-center gap-4 transition-all duration-300 shadow-md">
            <div>
              <span className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase block mb-1">
                KATEGORI FOTO TERPILIH
              </span>
              <div className="font-serif text-xl sm:text-2xl font-bold">
                {selectedService.title.replace('\n', ' ')} —{' '}
                <span className="text-neutral-300 font-sans text-sm sm:text-base font-normal">
                  {selectedService.titleDetail}
                </span>
              </div>
            </div>

            <a
              href="#paket"
              className="px-6 py-3 bg-[#0040FF] hover:bg-blue-600 text-white font-mono text-xs tracking-wider font-bold transition-all shadow-xs active:scale-95 flex items-center gap-2"
            >
              <span>LANJUT KE PILIHAN PAKET →</span>
            </a>
          </div>
        )}
      </div>

      {/* Fullscreen Visual Modal Lightbox */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative bg-white max-w-3xl w-full border border-neutral-200 overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-neutral-200 bg-neutral-50">
              <div>
                <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase block">
                  KLIQA / {activeModal.tag} — VISUAL MONOKROM
                </span>
                <h3 className="font-serif text-xl font-bold text-neutral-900">
                  {activeModal.titleDetail} ({activeModal.title.replace('\n', ' ')})
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="p-1.5 hover:bg-neutral-200 rounded-md transition-colors text-neutral-700 cursor-pointer"
                title="Tutup (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="relative bg-[#F9F9F8] p-6 flex items-center justify-center min-h-[360px] max-h-[60vh] overflow-hidden">
              {/* Studio Corner Crosshairs */}
              <div className="absolute inset-6 border border-neutral-300 pointer-events-none">
                <span className="absolute -top-1 -left-1 text-xs font-mono font-bold text-neutral-400">+</span>
                <span className="absolute -top-1 -right-1 text-xs font-mono font-bold text-neutral-400">+</span>
                <span className="absolute -bottom-1 -left-1 text-xs font-mono font-bold text-neutral-400">+</span>
                <span className="absolute -bottom-1 -right-1 text-xs font-mono font-bold text-neutral-400">+</span>
              </div>

              <img
                src={activeModal.imageUrl}
                alt={activeModal.titleDetail}
                className="max-h-[50vh] w-auto object-contain mix-blend-multiply"
              />
            </div>

            {/* Modal Footer Specs & Action */}
            <div className="p-6 bg-white border-t border-neutral-200 flex flex-wrap justify-between items-center gap-4">
              <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-neutral-600">
                <div className="flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-neutral-800" />
                  <span>{activeModal.lens}</span>
                </div>
                <span>•</span>
                <span>{activeModal.iso}</span>
                <span>•</span>
                <span>{activeModal.shutter}</span>
                <span>•</span>
                <span>{activeModal.time}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSelected(activeModal.tag)
                    setActiveModal(null)
                  }}
                  className="px-5 py-2.5 bg-[#0040FF] hover:bg-blue-700 text-white font-mono text-xs tracking-wider font-bold transition-colors cursor-pointer"
                >
                  PILIH KATEGORI INI
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-4 py-2.5 border border-neutral-300 hover:bg-neutral-100 font-mono text-xs tracking-wider transition-colors text-neutral-700 cursor-pointer"
                >
                  TUTUP
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

// ─── TAGLINE SECTION ─────────────────────────────────────────────────────────

export function TaglineSection() {
  const [ref, inView] = useInView(0.2)
  const words = ['KLIK.', 'JEPRET.', 'JADI KENANGAN.']

  return (
    <section className="border-t border-[#DDDDDD] px-4 sm:px-6 md:px-10 py-16 md:py-24 overflow-hidden bg-[#F7F6F2]">
      <div ref={ref} className="max-w-[1400px] mx-auto space-y-2 sm:space-y-4">
        {words.map((word, i) => (
          <div
            key={word}
            className={`font-serif text-3xl sm:text-6xl md:text-7xl lg:text-[5.8rem] font-bold leading-tight tracking-tight transition-all duration-700 ${
              i === 0 ? 'ml-0' : i === 1 ? 'ml-4 sm:ml-12 md:ml-[14%]' : 'ml-8 sm:ml-24 md:ml-[28%]'
            } ${i === 2 ? 'text-[#0040FF]' : 'text-[#111111]'}`}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(36px)',
              transitionDelay: `${i * 180}ms`,
            }}
          >
            {word}
          </div>
        ))}
      </div>
    </section>
  )
}

