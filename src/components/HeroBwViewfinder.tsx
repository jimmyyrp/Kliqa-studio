import { useState } from 'react'
import { Camera, Volume2, VolumeX, Palette, FileImage } from 'lucide-react'
import { BW_HERO_POSES, IMAGE_DIMENSIONS } from '../galleryData'

export function HeroBwViewfinder() {
  const [activePoseIdx, setActivePoseIdx] = useState(0)
  const [isFlashing, setIsFlashing] = useState(false)
  const [flashCount, setFlashCount] = useState(14)
  const [inverted, setInverted] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(false)
  const currentPose = BW_HERO_POSES[activePoseIdx]
  const poseDims = IMAGE_DIMENSIONS[currentPose.imageUrl]

  const triggerShutter = () => {
    setIsFlashing(true)
    setFlashCount((prev) => prev + 1)
    if (soundEnabled) {
      try {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
        const ctx = new AudioCtx()
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = 'triangle'
        osc.frequency.setValueAtTime(600, ctx.currentTime)
        osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.08)
        gain.gain.setValueAtTime(0.3, ctx.currentTime)
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08)
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.start()
        osc.stop(ctx.currentTime + 0.09)
      } catch {
        // audio policy fallback
      }
    }
    setTimeout(() => {
      setIsFlashing(false)
    }, 180)
  }

  const nextPose = () => {
    triggerShutter()
    setActivePoseIdx((prev) => (prev + 1) % BW_HERO_POSES.length)
  }

  return (
    <div
      className="relative border-2 border-[#111111] overflow-hidden shadow-2xl flex items-center justify-center transition-colors duration-300 w-full h-[400px] sm:h-[480px] md:h-[540px] lg:h-[580px] rounded-xs"
      style={{
        backgroundColor: inverted ? '#111111' : '#FFFFFF',
      }}
    >
      {/* Real High-Resolution .JPG Image rendered directly from public/images/ */}
      <div className="w-full h-full p-4 sm:p-6 md:p-8 pb-16 sm:pb-20 md:pb-22 flex items-center justify-center transition-all duration-300 select-none">
        <img
          src={currentPose.imageUrl}
          alt={currentPose.name}
          className="w-full h-full object-contain max-h-[460px] drop-shadow-xs transition-transform duration-300"
          style={{
            filter: inverted ? 'invert(1)' : 'none',
          }}
          fetchPriority="high"
          decoding="async"
          width={poseDims?.width}
          height={poseDims?.height}
        />
      </div>

      {/* Studio Camera Strobe Flash Overlay */}
      <div
        className="absolute inset-0 bg-white pointer-events-none transition-opacity duration-150 ease-out"
        style={{
          opacity: isFlashing ? 0.96 : 0,
          zIndex: 50,
        }}
      />

      {/* Camera Viewfinder Framing & Top HUD Overlay */}
      <div
        className="absolute inset-0 pointer-events-none flex flex-col justify-between p-3 sm:p-5 md:p-6 select-none"
        style={{ zIndex: 10 }}
      >
        {/* Top HUD Bar */}
        <div className="flex justify-between items-start font-mono text-[10px] sm:text-[11px] tracking-wider">
          <div className="flex items-center gap-2 bg-black/85 text-white px-2.5 sm:px-3 py-1">
            <span className="font-bold">VIEWFINDER</span>
            <span className="text-white/40">•</span>
            <span className="text-white/80 flex items-center gap-1">
              <FileImage size={11} />
              <span>JPG</span>
            </span>
          </div>

          <div className="bg-black/85 text-white/80 px-2.5 sm:px-3 py-1 font-mono text-[10px] sm:text-[11px]">
            <span>{currentPose.tag}</span>
          </div>
        </div>

        {/* Viewfinder Corner Framing Brackets */}
        <div className="absolute inset-x-4 sm:inset-x-8 inset-y-12 sm:inset-y-16 pointer-events-none">
          <div className="absolute top-0 left-0 w-4 sm:w-6 h-4 sm:h-6 border-t-2 border-l-2 border-neutral-400/60" />
          <div className="absolute top-0 right-0 w-4 sm:w-6 h-4 sm:h-6 border-t-2 border-r-2 border-neutral-400/60" />
          <div className="absolute bottom-12 sm:bottom-14 left-0 w-4 sm:w-6 h-4 sm:h-6 border-b-2 border-l-2 border-neutral-400/60" />
          <div className="absolute bottom-12 sm:bottom-14 right-0 w-4 sm:w-6 h-4 sm:h-6 border-b-2 border-r-2 border-neutral-400/60" />
        </div>

        {/* Camera Parameter Specs Bar (Above bottom controls) */}
        <div className="flex justify-between items-end font-mono text-[10px] md:text-xs mb-12 sm:mb-14">
          <div className="bg-black/85 text-white px-2.5 sm:px-3 py-1 sm:py-1.5 flex gap-2.5 sm:gap-3 text-[9px] sm:text-[11px]">
            <div>
              <span className="text-white/50 block text-[7px] sm:text-[8px]">LENS</span>
              <span className="font-bold">{currentPose.lens}</span>
            </div>
            <div>
              <span className="text-white/50 block text-[7px] sm:text-[8px]">SPEED</span>
              <span className="font-bold">{currentPose.shutter}</span>
            </div>
            <div>
              <span className="text-white/50 block text-[7px] sm:text-[8px]">FOTO</span>
              <span className="font-bold">#{flashCount}</span>
            </div>
          </div>

          {/* Placeholder to balance the flex row (specs bar sits left) */}
          <div />
        </div>
      </div>

      {/* Interactive Bottom Control Bar - Ergonomic & Responsive */}
      <div
        className="absolute bottom-2 sm:bottom-3 inset-x-2 sm:inset-x-3 flex items-center justify-between gap-1.5 sm:gap-2 p-1.5 sm:p-2 bg-black/90"
        style={{ zIndex: 20 }}
      >
        <button
          type="button"
          onClick={triggerShutter}
          className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 bg-[#0040FF] hover:bg-blue-600 active:scale-95 text-white font-mono text-[11px] sm:text-xs tracking-wider uppercase transition-all cursor-pointer font-bold"
          title="Klik shutter remote kamera"
        >
          <Camera size={14} className="shrink-0" />
          <span>KLIK SHUTTER</span>
        </button>

        <button
          type="button"
          onClick={nextPose}
          className="flex-1 sm:flex-initial flex items-center justify-center gap-1 px-2.5 sm:px-3 py-2 bg-white/15 hover:bg-white/25 active:scale-95 text-white font-mono text-[11px] sm:text-xs tracking-wider transition-all cursor-pointer truncate"
          title={`Ganti pose karakter: ${currentPose.name}`}
        >
          <Camera size={13} className="shrink-0" />
          <span className="truncate">GANTI ({activePoseIdx + 1}/{BW_HERO_POSES.length})</span>
        </button>

        <div className="flex items-center gap-1 shrink-0">
          {/* Contrast Invert Toggle */}
          <button
            type="button"
            onClick={() => setInverted(!inverted)}
            className={`p-2 font-mono text-xs tracking-wider border cursor-pointer transition-colors ${
              inverted
                ? 'bg-white text-black font-bold border-white'
                : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
            }`}
            title="Balik warna kanvas (Invert Black/White)"
            aria-label="Balik warna kanvas"
          >
            <Palette size={13} />
          </button>

          {/* Sound FX Toggle */}
          <button
            type="button"
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 text-white/80 hover:text-white bg-white/10 transition-colors cursor-pointer"
            title={soundEnabled ? 'Matikan audio shutter' : 'Nyalakan efek audio shutter'}
            aria-label={soundEnabled ? 'Matikan audio' : 'Nyalakan audio'}
          >
            {soundEnabled ? <Volume2 size={13} className="text-emerald-400" /> : <VolumeX size={13} />}
          </button>
        </div>
      </div>
    </div>
  )
}


