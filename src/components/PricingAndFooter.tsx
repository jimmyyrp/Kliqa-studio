import { useState } from 'react'
import { Check, Phone, MapPin, Clock, ShieldCheck, ArrowUp, AtSign } from 'lucide-react'
import { waLink, toWaDisplay, SIMULATION_NOTICE, useDeveloper } from '../developer'

export function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<'SOLO' | 'BARENG' | 'PRO'>('BARENG')
  const [mobileView, setMobileView] = useState<'focused' | 'all'>('focused')

  const packages = [
    {
      id: 'SOLO' as const,
      name: 'SOLO SELF-PHOTO',
      price: 'Rp 65.000',
      tagline: 'Ideal untuk profil, wisuda solo, & portofolio santai',
      duration: '15 Menit',
      persons: '1 Orang',
      prints: '1 Lembar Cetak 4R',
      popular: false,
      features: [
        'Semua file digital JPG asli resolusi tinggi',
        'Bebas klik remote shutter nirkabel sepuasnya',
        'Akses properti studio (kacamata retro, topi)',
        'Lighting monokrom studio & live viewfinder',
        'Ruang privat tertutup tanpa fotografer',
      ],
    },
    {
      id: 'BARENG' as const,
      name: 'BARENG BESTIES (DUO/TRIO)',
      price: 'Rp 110.000',
      tagline: 'Paling diminati untuk teman, pasangan & keluarga kecil',
      duration: '25 Menit',
      persons: '2 - 4 Orang',
      prints: '2 Lembar Cetak 4R + Photostrip',
      popular: true,
      features: [
        'Semua file digital JPG resolusi tinggi via Google Drive',
        '2 cetakan 4R + 2 photostrip 4-cut instan',
        'Bebas ganti pose & properti sepuasnya',
        'Free akses kostum, bando & kacamata retro',
        'Ruang ber-AC privat tanpa rasa canggung',
      ],
    },
    {
      id: 'PRO' as const,
      name: 'PARTY & PHOTOBOOTH',
      price: 'Rp 195.000',
      tagline: 'Sesi maksimal untuk geng rame-rame & perayaan seru',
      duration: '40 Menit',
      persons: 's/d 6 Orang',
      prints: '4 Lembar Cetak + GIF Animasi',
      popular: false,
      features: [
        'Unlimited take foto selama 40 menit',
        '4 cetakan 4R + 4 photostrip 4-cut cetak kilat',
        'GIF animasi digital bergerak dari sesi fotomu',
        'Link download cloud instan di hari yang sama',
        'Pilihan latar belakang hitam / putih / abu-abu',
      ],
    },
  ]

  const activePackage = packages.find((p) => p.id === selectedPlan) || packages[1]

  return (
    <section id="paket" className="border-t border-[#DDDDDD] px-4 sm:px-6 md:px-10 py-16 md:py-28">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 pb-6 border-b border-neutral-300 gap-4">
          <div>
            <div className="font-mono text-xs text-[#0040FF] font-bold tracking-wider mb-2">
              04 / 04 • BIAYA TRANSPARAN • TANPA HIDDEN FEE
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#111111]">
              PILIH PAKET FOTO
            </h2>
          </div>
          <div className="flex items-center gap-4 font-mono text-xs text-neutral-500">
            <span>Harga & paket contoh — website simulasi</span>
          </div>
        </div>

        {/* Mobile View Toggle & Fast Tabs */}
        <div className="block md:hidden mb-6">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="font-mono text-[11px] text-neutral-500 font-semibold">
              PILIH PAKET:
            </span>
            <div className="flex items-center bg-neutral-200/80 p-0.5 rounded text-[11px] font-mono">
              <button
                type="button"
                onClick={() => setMobileView('focused')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  mobileView === 'focused' ? 'bg-white text-black font-bold shadow-xs' : 'text-neutral-600'
                }`}
              >
                Tab Cepat
              </button>
              <button
                type="button"
                onClick={() => setMobileView('all')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  mobileView === 'all' ? 'bg-white text-black font-bold shadow-xs' : 'text-neutral-600'
                }`}
              >
                Lihat 3 Paket
              </button>
            </div>
          </div>

          {/* Tab Selector Buttons */}
          <div className="grid grid-cols-3 gap-1.5 p-1 bg-neutral-200/60 rounded border border-neutral-300">
            {packages.map((pkg) => (
              <button
                key={pkg.id}
                type="button"
                onClick={() => {
                  setSelectedPlan(pkg.id)
                  setMobileView('focused')
                }}
                className={`py-2 px-1 text-center font-mono text-[11px] transition-all rounded cursor-pointer ${
                  selectedPlan === pkg.id
                    ? 'bg-[#111111] text-white font-bold shadow-xs'
                    : 'bg-transparent text-neutral-700 hover:bg-white/60'
                }`}
              >
                <div className="truncate">{pkg.id}</div>
                <div className="text-[9px] opacity-80">{pkg.price.replace('Rp ', '')}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Focused Single-Plan View */}
        {mobileView === 'focused' && (
          <div className="block md:hidden">
            <div
              className={`border-2 p-6 bg-white shadow-xl transition-all ${
                activePackage.popular ? 'border-[#0040FF]' : 'border-[#111111]'
              }`}
            >
              <div className="flex justify-between items-start mb-3">
                <span className="font-mono text-xs font-bold text-neutral-500">
                  {activePackage.persons} • {activePackage.duration}
                </span>
                {activePackage.popular && (
                  <span className="font-mono text-[10px] bg-[#0040FF] text-white font-bold px-2 py-0.5">
                    FAVORIT
                  </span>
                )}
              </div>

              <h3 className="font-serif text-2xl font-bold text-black mb-1">
                {activePackage.name}
              </h3>
              <p className="font-sans text-xs text-neutral-500 mb-4">{activePackage.tagline}</p>

              <div className="font-serif text-3xl text-black font-bold mb-4 pb-4 border-b border-neutral-200">
                {activePackage.price}
              </div>

              <div className="space-y-2.5 mb-6 font-sans text-xs">
                <div className="font-semibold text-neutral-900 flex items-center gap-2 pb-1 text-sm text-[#0040FF]">
                  <ShieldCheck size={16} />
                  <span>{activePackage.prints}</span>
                </div>
                {activePackage.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2 text-neutral-700">
                    <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <a
                href={waLink(
                  `Halo KLIQA Studio, saya mau booking paket ${activePackage.name} (${activePackage.price})`
                )}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 text-center font-mono text-xs tracking-wider transition-colors uppercase font-bold flex items-center justify-center gap-2 bg-[#0040FF] hover:bg-blue-600 text-white shadow-md active:scale-98"
              >
                <Phone size={14} />
                <span>BOOKING VIA WHATSAPP</span>
              </a>
            </div>
          </div>
        )}

        {/* Desktop 3-Column Grid (Or mobile when 'all' is toggled) */}
        <div
          className={`${
            mobileView === 'all' ? 'grid grid-cols-1' : 'hidden md:grid md:grid-cols-3'
          } gap-6`}
        >
          {packages.map((pkg) => {
            const isSelected = selectedPlan === pkg.id
            return (
              <div
                key={pkg.id}
                onClick={() => setSelectedPlan(pkg.id)}
                className={`border-2 p-6 md:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'border-[#0040FF] bg-white shadow-xl md:scale-102'
                    : 'border-[#111111] bg-[#F7F6F2] hover:border-neutral-700'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-xs font-bold text-neutral-500">
                      {pkg.persons} • {pkg.duration}
                    </span>
                    {pkg.popular && (
                      <span className="font-mono text-[10px] bg-[#0040FF] text-white font-bold px-2 py-0.5">
                        FAVORIT
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-black mb-1">
                    {pkg.name}
                  </h3>
                  <p className="font-sans text-xs text-neutral-500 mb-5 min-h-[32px]">
                    {pkg.tagline}
                  </p>

                  <div className="font-serif text-3xl md:text-4xl text-black font-bold mb-6">
                    {pkg.price}
                  </div>

                  <div className="space-y-3 mb-8 font-sans text-xs border-t border-neutral-200 pt-4">
                    <div className="font-semibold text-neutral-900 flex items-center gap-2">
                      <ShieldCheck size={15} className="text-[#0040FF]" />
                      <span>{pkg.prints}</span>
                    </div>
                    {pkg.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-neutral-600">
                        <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={waLink(
                    `Halo KLIQA Studio, saya mau booking paket ${pkg.name} (${pkg.price})`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-3.5 text-center font-mono text-xs tracking-wider transition-colors uppercase font-bold flex items-center justify-center gap-2 ${
                    isSelected
                      ? 'bg-[#0040FF] hover:bg-blue-600 text-white'
                      : 'bg-[#111111] hover:bg-neutral-800 text-white'
                  }`}
                >
                  <Phone size={14} />
                  <span>BOOKING SEKARANG</span>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function FooterSection() {
  const dev = useDeveloper()
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="lokasi" className="border-t border-[#DDDDDD] bg-[#111111] text-white px-4 sm:px-6 md:px-10 py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Simulation / Demo Disclaimer */}
        <div className="mb-12 border border-neutral-800 bg-neutral-900/60 p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-[10px] tracking-widest bg-white text-black font-bold px-2 py-0.5">
              {SIMULATION_NOTICE.badge}
            </span>
            <span className="font-serif text-lg font-bold">{SIMULATION_NOTICE.title}</span>
          </div>
          <p className="font-sans text-xs text-neutral-400 max-w-3xl leading-relaxed mb-4">
            {SIMULATION_NOTICE.body}
          </p>
          <p className="font-sans text-xs text-neutral-300 mb-3">{SIMULATION_NOTICE.cta}</p>
          <a
            href={waLink(SIMULATION_NOTICE.waMessage, dev.whatsapp)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black hover:bg-[#0040FF] hover:text-white font-mono text-xs tracking-wider font-bold transition-colors active:scale-95"
          >
            <Phone size={14} />
            <span>CHAT {dev.name.toUpperCase()} — {toWaDisplay(dev.whatsapp)}</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2 space-y-4">
            <span className="font-serif text-3xl font-bold tracking-tight">
              KLIQA STUDIO
            </span>
            <p className="font-sans text-xs text-neutral-400 max-w-md leading-relaxed">
              Self-Photo &amp; Monochrome Studio modern dengan visual monokrom berkarakter khas studio foto Indonesia. Privasi terjaga, bebas berekspresi tanpa fotografer.
            </p>
            <div className="font-mono text-xs text-neutral-400 pt-2">
              <span>Website simulasi untuk keperluan demo &amp; portofolio</span>
            </div>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <span className="text-white/40 block">LOKASI &amp; JAM BUKA</span>
            <div className="flex items-start gap-2 text-neutral-400">
              <MapPin size={15} className="text-[#0040FF] shrink-0 mt-0.5" />
              <span>Jl. Senopati No. 88, Kebayoran Baru, Jakarta Selatan (fiktif)</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <Clock size={15} className="text-[#0040FF] shrink-0" />
              <span>Senin - Minggu: 10:00 - 21:00 WIB (contoh)</span>
            </div>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <span className="text-white/40 block">KONTAK &amp; RESERVASI</span>
            <a
              href={waLink('Halo KLIQA Studio, saya ingin tanya jadwal', dev.whatsapp)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-neutral-300 hover:text-[#0040FF] transition-colors"
            >
              <Phone size={15} className="text-[#0040FF] shrink-0" />
              <span>WhatsApp: {toWaDisplay(dev.whatsapp)}</span>
            </a>
            <div className="text-neutral-500 flex items-center gap-1.5">
              <AtSign size={15} className="shrink-0" />
              <span>Instagram: @kliqa.studio (contoh)</span>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[11px] text-neutral-500">
          <div>
            © 2026 KLIQA STUDIO — Simulasi. Develop oleh{' '}
            <a
              href={waLink(SIMULATION_NOTICE.waMessage, dev.whatsapp)}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-300 hover:text-[#0040FF] underline underline-offset-2 transition-colors"
            >
              {dev.name}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span>Self-Photo &amp; Monochrome Studio • Jakarta</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 bg-neutral-800 hover:bg-[#0040FF] text-white transition-colors flex items-center gap-1 cursor-pointer"
              title="Kembali ke atas"
            >
              <ArrowUp size={13} />
              <span className="hidden sm:inline">KE ATAS</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}


