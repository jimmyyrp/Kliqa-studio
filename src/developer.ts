import { useEffect, useState } from 'react'

// ─── Developer / Site Contact Config ──────────────────────────────────────────
// Fetched live from: https://github.com/jimmyyrp/jimmyyrp/blob/main/api/developer.json
// {
//   "success": true,
//   "version": "1.0.0",
//   "data": { "developer": { "name": "Jimmy", "whatsapp": "081276484493" } }
// }

export const DEVELOPER_JSON_URL =
  'https://raw.githubusercontent.com/jimmyyrp/jimmyyrp/main/api/developer.json'

/** Nomor WhatsApp lokal (08xx) dikonversi ke format internasional wa.me (62xx). */
export function toWaNumber(local: string): string {
  const digits = local.replace(/\D/g, '')
  if (digits.startsWith('62')) return digits
  if (digits.startsWith('0')) return `62${digits.slice(1)}`
  return digits
}

/** Bangun link chat WhatsApp dengan pesan yang sudah ter-encode. */
export function waLink(message: string, whatsapp: string = DEFAULT_WA_LOCAL): string {
  const num = toWaNumber(whatsapp)
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`
}

export const DEFAULT_WA_LOCAL = '081276484493'

export interface DeveloperInfo {
  name: string
  whatsapp: string
}

/** Tampilkan nomor WhatsApp lokal dalam format ramah dibaca: 0812-7648-4493. */
export function toWaDisplay(local: string): string {
  const d = toWaNumber(local).replace(/^62/, '0')
  if (d.length >= 10) return `${d.slice(0, 4)}-${d.slice(4, 8)}-${d.slice(8)}`
  return d
}

/** Info developer default (fallback jika fetch gagal / offline). */
export const DEFAULT_DEVELOPER: DeveloperInfo = {
  name: 'Jimmy',
  whatsapp: '081276484493',
}

// ─── Simulasi / Demo Notice ───────────────────────────────────────────────────

export const SIMULATION_NOTICE = {
  badge: 'SIMULASI / DEMO',
  title: 'Website Simulasi — Bukan Toko Online',
  body: 'Website ini adalah simulasi desain website studio foto. Semua nama, alamat, harga, dan paket di dalamnya hanya contoh — bukan penawaran resmi. Tidak ada transaksi yang diproses di sini.',
  cta: 'Mau website seperti ini untuk bisnis kamu?',
  waMessage:
    'Halo Jimmy! Saya lihat demo website studio foto (KLIQA) — saya tertarik dibuatkan website seperti ini.',
}

/**
 * Ambil info developer dari JSON di GitHub.
 * Mengembalikan null jika jaringan gagal — pemanggil wajib fallback ke DEFAULT_DEVELOPER.
 */
/**
 * Hook: ambil info developer dari JSON di GitHub sekali saat mount.
 * Nilai awal = DEFAULT_DEVELOPER, lalu diperbarui hasil fetch (jika berhasil).
 */
export function useDeveloper(): DeveloperInfo {
  const [dev, setDev] = useState<DeveloperInfo>(DEFAULT_DEVELOPER)
  useEffect(() => {
    let alive = true
    fetchDeveloperInfo().then((info) => {
      if (info && alive) setDev(info)
    })
    return () => {
      alive = false
    }
  }, [])
  return dev
}

export async function fetchDeveloperInfo(): Promise<DeveloperInfo | null> {
  try {
    const res = await fetch(DEVELOPER_JSON_URL)
    if (!res.ok) return null
    const json = (await res.json()) as {
      success?: boolean
      data?: { developer?: { name?: string; whatsapp?: string } }
    }
    if (json?.success && json.data?.developer?.name && json.data?.developer?.whatsapp) {
      return {
        name: json.data.developer.name,
        whatsapp: json.data.developer.whatsapp,
      }
    }
    return null
  } catch {
    return null
  }
}
