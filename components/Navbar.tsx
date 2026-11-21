'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { NAV } from '@/lib/works'
import { scrollToId } from '@/lib/hooks'

const ORDER = ['cover', 'about', 'toc', 'works', 'contact']
const MAP: Record<string, string> = { cover: 'cover', about: 'about', toc: 'works', works: 'works', contact: 'contact' }

export default function Navbar() {
  const { t, lang, setLang } = useLanguage()
  const [active, setActive] = useState('cover')
  const [onDark, setOnDark] = useState(true)
  const [hidden, setHidden] = useState(false)
  const hiddenRef = useRef(false)

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      const wk = document.getElementById('works')
      const inW = !!wk && wk.getBoundingClientRect().top < 60
      let h = hiddenRef.current
      if (!inW || y < last) h = false
      else if (y > last && y > 200) h = true
      last = y
      if (h !== hiddenRef.current) { hiddenRef.current = h; setHidden(h); document.body.dataset.nav = h ? 'hidden' : 'shown' }
      const line = window.innerHeight * 0.4
      let cur = 'cover'
      for (const id of ORDER) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) cur = id
      }
      setActive(MAP[cur])
      const c = document.getElementById('contact')
      const inWorks = !!wk && wk.getBoundingClientRect().top < 60 && !(c && c.getBoundingClientRect().top < 60)
      setOnDark(!inWorks)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const line = onDark ? 'bg-white/20' : 'bg-black/10'
  return (
    <header className={`no-print fixed left-1/2 top-4 z-50 w-max max-w-[calc(100vw-1rem)] -translate-x-1/2 transition-transform duration-300 sm:top-5 ${hidden ? '-translate-y-24' : ''}`}>
      <nav
        className={`flex items-center gap-0.5 rounded-full border px-1.5 py-1.5 text-[12px] font-bold shadow-lg backdrop-blur-xl transition-colors duration-500 sm:gap-1 sm:text-sm ${
          onDark ? 'border-white/15 bg-[#5c0112]/70 text-[#f3e5c0]' : 'border-black/5 bg-white/90 text-crimson-700'
        }`}
        aria-label="Main"
      >
        {NAV.map((n) => (
          <button
            key={n.id}
            onClick={() => scrollToId(n.id)}
            className={`rounded-full px-2.5 py-2 transition-all duration-300 sm:px-4 ${active === n.id ? 'bg-crimson-500 text-white shadow-[0_6px_16px_rgba(163,12,43,.45)]' : 'opacity-80 hover:opacity-100'}`}
            aria-current={active === n.id ? 'true' : undefined}
          >
            {t(n.key)}
          </button>
        ))}
        <span className={`mx-0.5 h-5 w-px ${line}`} />
        {/* pilihan bahasa: segmen ID | EN */}
        <div className={`flex rounded-full p-0.5 text-[11px] font-extrabold sm:text-xs ${onDark ? 'bg-white/10' : 'bg-black/5'}`} role="group" aria-label="Language">
          {(['id', 'en'] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
              className={`rounded-full px-2 py-1.5 transition sm:px-2.5 ${lang === l ? (onDark ? 'bg-[#f3e5c0] text-crimson-700' : 'bg-crimson-700 text-white') : 'opacity-70 hover:opacity-100'}`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        {/* simpan PDF */}
        <button
          onClick={() => window.print()}
          aria-label={t('deck.pdf')}
          title={t('deck.pdf')}
          className={`ml-0.5 flex items-center gap-1.5 rounded-full px-2.5 py-2 transition sm:px-3.5 ${onDark ? 'bg-[#f3e5c0] text-crimson-700 hover:bg-white' : 'bg-crimson-700 text-white hover:bg-crimson-900'}`}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12m0 0-5-5m5 5 5-5M4 20h16" /></svg>
          <span className="hidden sm:inline">PDF</span>
        </button>
      </nav>
    </header>
  )
}
