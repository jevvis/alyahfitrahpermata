'use client'

import { RefObject, useEffect, useState } from 'react'

export const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v))
export const smooth = (v: number) => { const x = clamp(v); return x * x * (3 - 2 * x) }

/** Progres scroll melalui satu section tinggi (0 di atas, 1 saat section selesai terpegang). */
export function useSectionProgress(ref: RefObject<HTMLElement>) {
  const [p, setP] = useState(0)
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const total = r.height - window.innerHeight
      const v = total <= 0 ? 0 : clamp(-r.top / total)
      setP((prev) => (Math.abs(prev - v) > 0.004 ? v : prev))
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [ref])
  return p
}

/** Menambah kelas "in" pada elemen .reveal / .polaroid saat masuk layar. */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .stick, .polaroid')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
      { threshold: 0.15 }
    )
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [])
}

export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
