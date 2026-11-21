'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { CATEGORIES } from '@/lib/works'
import { monogramBg } from '@/lib/paper'
import { scrollToId } from '@/lib/hooks'
import PaperSticker from './PaperSticker'

const ROT = [-3, 2, -2, 3]

export default function TocRope() {
  const { t } = useLanguage()
  const open = (i: number) => {
    window.dispatchEvent(new CustomEvent('works-tab', { detail: i }))
    scrollToId('works')
  }
  return (
    <section id="toc" className="relative overflow-hidden bg-crimson-700 px-4 py-24 sm:px-8">
      <div className="absolute inset-0" style={{ backgroundImage: monogramBg('AP'), backgroundSize: '170px 170px' }} />
      <div className="relative mx-auto max-w-6xl">
        <div className="reveal mx-auto mb-14 w-fit" style={{ ['--r' as string]: '-2deg' } as React.CSSProperties}>
          <PaperSticker seed={61} innerClassName="px-8 py-3">
            <h2 className="text-center font-script text-[clamp(2rem,5vw,3.6rem)] leading-tight text-crimson-700">{t('toc.title')}</h2>
          </PaperSticker>
        </div>

        <div className="relative">
          <ul className="relative grid grid-cols-2 gap-x-4 gap-y-14 md:grid-cols-4">
            {CATEGORIES.map((c, i) => (
              <li key={c.id} className="reveal relative pt-5" style={{ ['--d' as string]: `${i * 140}ms` } as React.CSSProperties}>
                {/* ekor tali: menyambung ke tepi kiri/kanan layar (tetap penuh walau di-zoom out) */}
                {(i === 0 || i % 2 === 0) && (
                  <span aria-hidden="true" className={`pointer-events-none absolute top-[6.5px] h-[7px] w-screen rounded-full ${i === 0 ? '' : 'md:hidden'}`} style={{ right: `calc(100% + ${i === 0 ? 24 : 8}px)`, background: 'repeating-linear-gradient(90deg, rgba(130,90,40,.45) 0 3px, transparent 3px 9px) center/100% 2px no-repeat, #f3e5c0' }} />
                )}
                {(i === CATEGORIES.length - 1 || i % 2 === 1) && (
                  <span aria-hidden="true" className={`pointer-events-none absolute top-[6.5px] h-[7px] w-screen rounded-full ${i === CATEGORIES.length - 1 ? '' : 'md:hidden'}`} style={{ left: `calc(100% + ${i === CATEGORIES.length - 1 ? 24 : 8}px)`, background: 'repeating-linear-gradient(90deg, rgba(130,90,40,.45) 0 3px, transparent 3px 9px) center/100% 2px no-repeat, #f3e5c0' }} />
                )}
                {/* tali: tiap segmen menggantung dan menyambung ke kartu sebelah; pin tepat di titik tengah tali */}
                <svg className="pointer-events-none absolute top-0 h-8" style={{ left: i === 0 ? -24 : -8, width: `calc(100% + ${(i === 0 ? 24 : 8) + (i === CATEGORIES.length - 1 ? 24 : 8)}px)` }} viewBox="0 0 100 32" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0 10 Q50 22 100 10" stroke="#f3e5c0" strokeWidth="7" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                  <path d="M0 10 Q50 22 100 10" stroke="rgba(130,90,40,.45)" strokeWidth="2" strokeDasharray="3 6" fill="none" vectorEffect="non-scaling-stroke" />
                </svg>
                <span className="pin absolute top-1 z-10 h-6 w-6 rounded-full bg-[radial-gradient(circle_at_35%_30%,#ff6b6b,#b3001b_70%)] shadow-[0_4px_6px_rgba(0,0,0,.45)]" style={{ left: 'calc(50% - 12px)', ['--d' as string]: `${300 + i * 140}ms` } as React.CSSProperties} />
                <button onClick={() => open(i)} className="sway block w-full" style={{ ['--r' as string]: `${ROT[i]}deg`, ['--d' as string]: `${i * 400}ms` } as React.CSSProperties} aria-label={`${t('toc.open')} ${t(`cat.${c.id}.name`)}`}>
                  <PaperSticker seed={70 + i} innerClassName="px-5 pb-6 pt-7 sm:px-7">
                    <span className="block text-center font-script text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.05] text-crimson-700">{t(`cat.${c.id}.name`)}</span>
                  </PaperSticker>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <p className="reveal mt-14 text-center text-sm text-[#f3e5c0]/90">{t('toc.sub')}</p>
      </div>
    </section>
  )
}
