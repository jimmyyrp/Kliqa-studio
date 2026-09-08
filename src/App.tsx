import { useState, useEffect } from 'react'
import { Nav } from './components/Nav'
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  TaglineSection,
} from './components/Sections'
import { PricingSection, FooterSection } from './components/PricingAndFooter'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#111111] antialiased selection:bg-[#0040FF] selection:text-white">
      {/* Navigation */}
      <Nav scrolled={scrolled} />

      {/* Main Page Sections */}
      <main>
        {/* 1. Hero with Camera Viewfinder */}
        <HeroSection />

        {/* 2. About KLIQA */}
        <AboutSection />

        {/* 3. Services with Visuals ("Mau Foto Apa Hari Ini?") */}
        <ServicesSection />

        {/* 4. Marquee Tagline */}
        <TaglineSection />

        {/* 5. Pricing Packages & Booking */}
        <PricingSection />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  )
}
