'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { monogramBg } from '@/lib/paper'
import { scrollToId } from '@/lib/hooks'
import PaperSticker from './PaperSticker'

function Word({ text }: { text: string }) {
  const first = text.slice(0, 1)
  const rest = text.slice(1).toUpperCase()
  return (
    <div className="flex items-baseline justify-center leading-[0.9]">
      <span className="font-script text-[clamp(3.6rem,10vw,9rem)] text-crimson-700">{first}</span>
      <span className="font-display text-[clamp(2.6rem,7vw,6.6rem)] tracking-tight text-crimson-700">{rest}</span>
    </div>
  )
}

export default function CoverScene() {
  const { t } = useLanguage()
  const [shift, setShift] = useState(0)
  useEffect(() => {
    const on = () => setShift(Math.min(window.scrollY, 600))
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <section id="cover" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-crimson-700 px-4 pb-28 pt-24">
      <div className="absolute inset-0" style={{ backgroundImage: monogramBg('AP'), backgroundSize: '170px 170px', transform: `translateY(${shift * 0.12}px)` }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(6,16,64,.55)_100%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center md:flex-row md:justify-center">
        <div className="stick in relative z-10" style={{ ['--r' as string]: '-3deg', animation: 'none' } as React.CSSProperties} aria-label="Portfolio">
          <PaperSticker seed={11} innerClassName="px-[clamp(1.8rem,4.5vw,4rem)] py-[clamp(1.4rem,3.4vw,3.2rem)]">
            <Word text={t('cover.port')} />
            <Word text={t('cover.folio')} />
          </PaperSticker>
        </div>

        <div className="stick in relative z-20 -mt-8 md:-ml-6 md:mt-0" style={{ ['--r' as string]: '2deg', ['--d' as string]: '250ms', animation: 'none' } as React.CSSProperties}>
          <div className="absolute inset-x-[-6%] bottom-0 top-[22%]">
            <PaperSticker seed={23} tone="paper" className="h-full" innerClassName="h-full w-full">
              <span className="block h-full w-full" />
            </PaperSticker>
          </div>
          <img src="/profile.png" alt="Alyah Fitrah Permata" className="relative mx-auto h-[min(44svh,360px)] w-auto drop-shadow-[0_14px_16px_rgba(6,14,55,.45)] md:h-[min(58svh,520px)]" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-30 px-4 text-center text-[#f3e5c0]">
        <p className="text-base font-extrabold italic sm:text-lg">{t('cover.name')} <span className="font-light not-italic">{t('cover.year')}</span></p>
        <p className="mt-0.5 text-xs font-semibold opacity-90 sm:text-sm">{t('cover.role')}</p>
        <button onClick={() => scrollToId('about')} className="no-print mt-2 text-xs font-bold underline underline-offset-4 opacity-80 hover:opacity-100">{t('cover.cta')}</button>
      </div>
    </section>
  )
}
