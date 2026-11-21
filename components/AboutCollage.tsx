'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { CONTACT, SOFTWARE } from '@/lib/works'
import { monogramBg } from '@/lib/paper'
import { scrollToId } from '@/lib/hooks'
import PaperSticker from './PaperSticker'

function Title({ children, seed, rot = -3, className = '' }: { children: React.ReactNode; seed: number; rot?: number; className?: string }) {
  return (
    <div className={`stick ${className}`} style={{ ['--r' as string]: `${rot}deg`, ['--r0' as string]: `${rot - 8}deg` } as React.CSSProperties}>
      <PaperSticker seed={seed} innerClassName="px-5 py-2">
        <span className="font-script text-[clamp(1.6rem,3.2vw,2.6rem)] leading-none text-crimson-700">{children}</span>
      </PaperSticker>
    </div>
  )
}

function Wax() {
  return (
    <svg width="74" height="74" viewBox="0 0 74 74" aria-hidden="true">
      <defs>
        <radialGradient id="wx" cx="40%" cy="35%"><stop offset="0" stopColor="#3d6bdc" /><stop offset="1" stopColor="#17399a" /></radialGradient>
      </defs>
      <path d="M37 4c8 0 11 6 18 8 8 3 14 8 12 17-1 6 5 9 3 17-2 8-9 9-12 15-4 7-12 10-21 9-9-1-13-7-19-12C11 53 4 49 6 41c2-7-3-11 0-18C9 15 17 14 23 9c5-3 8-5 14-5z" fill="url(#wx)" />
      <path d="M37 51c-9-7-14-12-14-18 0-5 4-8 8-8 3 0 5 2 6 4 1-2 3-4 6-4 4 0 8 3 8 8 0 6-5 11-14 18z" fill="#1f46b0" stroke="#7fa0f2" strokeWidth="1.2" />
    </svg>
  )
}

const Icon = ({ d }: { d: React.ReactNode }) => (
  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-crimson-700 text-cream">
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{d}</svg>
  </span>
)

export default function AboutCollage() {
  const { t } = useLanguage()
  return (
    <section id="about" className="relative overflow-hidden bg-[#fbf7f0] px-4 py-24 sm:px-8">
      <div className="absolute inset-0 opacity-70" style={{ backgroundImage: monogramBg('AP', 'rgba(23,57,154,0.06)'), backgroundSize: '170px 170px' }} />
      <div className="relative mx-auto grid max-w-6xl gap-8 md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="reveal relative pt-6">
            <div className="absolute -top-1 left-2 z-20"><Title seed={3} rot={-4}>{t('about.title')}</Title></div>
            <PaperSticker seed={21} tone="paper" innerClassName="relative px-6 pb-8 pt-16 sm:px-9">
              <span className="absolute left-5 top-4 flex gap-3">{[0, 1, 2].map((i) => <i key={i} className="h-3.5 w-3.5 rounded-full bg-[#fbf7f0] shadow-[inset_0_1px_2px_rgba(0,0,0,.25)]" />)}</span>
              <div className="grid items-center gap-5 sm:grid-cols-[minmax(150px,230px)_1fr]">
                <img src="/profile.png" alt="Alyah Fitrah Permata" className="mx-auto w-[62%] -rotate-2 drop-shadow-[0_10px_14px_rgba(8,20,70,.3)] sm:w-full" />
                <div>
                  <p className="text-[15px] leading-relaxed text-crimson-700 sm:-rotate-1 sm:text-base">{t('about.bio')}</p>
                  <p className="mt-5 text-sm font-extrabold tracking-wide text-crimson-700">{t('about.software')}</p>
                  <div className="mt-2 flex flex-wrap gap-3">
                    {SOFTWARE.map((s) => (
                      <span key={s.k} className="flex w-16 flex-col items-center gap-1 text-center">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-crimson-700 font-display text-sm text-cream shadow-md transition hover:-translate-y-1 hover:rotate-6">{s.k}</span>
                        <span className="text-[10px] font-bold leading-tight text-crimson-700">{s.n}</span>
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 text-sm font-extrabold tracking-wide text-crimson-700">{t('sk.hard')}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {[1, 2, 3].map((i) => <span key={i} className="rounded-full bg-crimson-700 px-3 py-1 text-xs font-bold text-cream">{t(`sk.h${i}`)}</span>)}
                  </div>
                  <p className="mt-4 text-sm font-extrabold tracking-wide text-crimson-700">{t('sk.soft')}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {[1, 2, 3, 4, 5, 6, 7].map((i) => <span key={i} className="rounded-full border border-crimson-500/50 px-3 py-1 text-xs font-semibold text-crimson-700">{t(`sk.s${i}`)}</span>)}
                  </div>
                </div>
              </div>
            </PaperSticker>
          </div>

          <div className="reveal relative mt-10 pt-6" style={{ '--d': '100ms' } as React.CSSProperties}>
            <div className="absolute left-1 top-0 z-20"><Title seed={9} rot={-2}>{t('about.edu')}</Title></div>
            <PaperSticker seed={41} tone="paper" innerClassName="px-6 pb-6 pt-14 sm:px-9">
              <ul className="space-y-4 text-crimson-700">
                {[1, 2].map((i) => (
                  <li key={i} className="border-b border-crimson-500/30 pb-3 last:border-0 last:pb-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <p className="text-base font-extrabold">{t(`edu.${i}.school`)}</p>
                      <p className="text-sm font-semibold">{t(`edu.${i}.meta`)}</p>
                    </div>
                    <p className="text-sm">{t(`edu.${i}.prog`)}</p>
                  </li>
                ))}
              </ul>
            </PaperSticker>
          </div>
        </div>

        <div className="space-y-8 md:col-span-5">
          <div className="reveal relative pt-6" style={{ '--d': '120ms' } as React.CSSProperties}>
            <div className="absolute left-1 top-0 z-20"><Title seed={8} rot={-2}>{t('about.exp')}</Title></div>
            <PaperSticker seed={34} tone="paper" innerClassName="relative px-6 pb-6 pt-14">
              <div className="absolute right-4 top-3 z-10 -rotate-6"><Wax /></div>
              <p className="max-w-[78%] border-b border-crimson-500/40 pb-2 text-sm font-semibold text-crimson-700">{t('about.exp.1')}</p>
              <p className="mt-2 max-w-[78%] border-b border-crimson-500/40 pb-2 text-sm text-crimson-700">{t('about.exp.2')}</p>
              <p className="mt-2 border-b border-crimson-500/40 pb-2 text-sm text-crimson-700">{t('about.exp.3')}</p>
            </PaperSticker>
          </div>

          <div className="reveal relative pt-6" style={{ '--d': '220ms' } as React.CSSProperties}>
            <div className="absolute left-1 top-0 z-20"><Title seed={13} rot={-3}>{t('about.contact')}</Title></div>
            <PaperSticker seed={55} tone="paper" innerClassName="px-6 pb-6 pt-14">
              <div className="space-y-4 text-sm text-crimson-700">
                <p className="flex items-center gap-3"><Icon d={<><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></>} />{CONTACT.city}</p>
                <button onClick={() => scrollToId('contact')} className="no-print w-full rounded-full bg-crimson-700 px-5 py-2.5 text-sm font-bold text-cream shadow-[0_8px_18px_rgba(11,31,94,.35)] transition hover:bg-crimson-900">{t('about.cta')}</button>
              </div>
            </PaperSticker>
          </div>
        </div>
      </div>
    </section>
  )
}
