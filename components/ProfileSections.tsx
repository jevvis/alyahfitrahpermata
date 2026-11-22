'use client'

import type { CSSProperties, ReactNode } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { CERTS, EDU_COUNT, EXP } from '@/lib/profile'
import { SOFTWARE } from '@/lib/works'
import { monogramBg } from '@/lib/paper'
import PaperSticker from './PaperSticker'

const ROT = [-1.2, 1, -0.8, 1.4]
const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` }) as CSSProperties

function Pin({ delay = 0 }: { delay?: number }) {
  return <span className="pin absolute left-1/2 top-1 z-20 -ml-3 h-6 w-6 rounded-full bg-[radial-gradient(circle_at_35%_30%,#ff6b6b,#b3001b_70%)] shadow-[0_4px_6px_rgba(0,0,0,.45)]" style={d(delay)} />
}

function Title({ children, seed, rot = -2 }: { children: ReactNode; seed: number; rot?: number }) {
  return (
    <div className="stick w-fit" style={{ ['--r' as string]: `${rot}deg`, ['--r0' as string]: `${rot - 8}deg` } as CSSProperties}>
      <PaperSticker seed={seed} innerClassName="px-7 py-2.5">
        <h2 className="font-script text-[clamp(1.9rem,4vw,3.2rem)] leading-none text-crimson-700">{children}</h2>
      </PaperSticker>
    </div>
  )
}

/** Kerangka satu section: latar krem/merah dengan pola monogram, judul stiker, anak di dalam. */
function Frame({ id, dark, seed, title, sub, children }: { id: string; dark: boolean; seed: number; title: string; sub: string; children: ReactNode }) {
  return (
    <section id={id} className={`relative overflow-hidden px-4 py-20 sm:px-8 ${dark ? 'bg-crimson-700' : 'bg-[#fbf7f0]'}`}>
      <div className="absolute inset-0" style={{ backgroundImage: dark ? monogramBg('AP') : monogramBg('AP', 'rgba(23,57,154,0.06)'), backgroundSize: '170px 170px' }} />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-start gap-3">
          <Title seed={seed}>{title}</Title>
          <p className={`reveal pl-2 text-sm font-semibold ${dark ? 'text-cream/90' : 'text-crimson-700/80'}`}>{sub}</p>
        </div>
        {children}
      </div>
    </section>
  )
}

function Bullets({ text, className = '' }: { text: string; className?: string }) {
  return (
    <ul className={`space-y-1.5 text-sm leading-relaxed text-crimson-700 ${className}`}>
      {text.split('|').map((b) => (
        <li key={b} className="flex gap-2">
          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-crimson-500" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  )
}

const Period = ({ children }: { children: ReactNode }) => (
  <span className="inline-block rounded-full bg-crimson-700 px-3 py-1 text-[11px] font-extrabold tracking-wide text-cream">{children}</span>
)

function Polaroid({ src, caption, rot = 3, className = '', aspect = 'aspect-[4/3]' }: { src: string; caption?: string; rot?: number; className?: string; aspect?: string }) {
  return (
    <figure className={`bg-white p-1.5 pb-5 shadow-lg ${className}`} style={{ transform: `rotate(${rot}deg)` }}>
      <img src={src} alt="" className={`${aspect} w-full object-cover`} loading="lazy" />
      {caption ? <figcaption className="mt-1 pl-1 font-script text-lg leading-none text-crimson-700">{caption}</figcaption> : null}
    </figure>
  )
}

export function EducationSection() {
  const { t } = useLanguage()
  return (
    <Frame id="education" dark seed={201} title={t('sec.edu.title')} sub={t('sec.edu.sub')}>
      <div className="grid gap-10 md:grid-cols-2">
        {Array.from({ length: EDU_COUNT }, (_, i) => i + 1).map((n) => (
          <div key={n} className="reveal relative pt-4" style={d(n * 140)}>
            <Pin delay={300 + n * 120} />
            <div className="sway" style={{ ['--r' as string]: `${ROT[n - 1]}deg`, ['--d' as string]: `${n * 500}ms` } as CSSProperties}>
              <PaperSticker seed={210 + n} tone="paper" innerClassName="relative px-6 pb-7 pt-10 sm:px-8">
                {n === 1 ? (
                  <span className="absolute right-4 top-9 flex h-16 w-16 rotate-6 flex-col items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#2457d6,#0b1f5e)] text-center text-cream shadow-md">
                    <span className="px-1 text-[10px] font-extrabold leading-tight">{t('edu.gpa')}</span>
                  </span>
                ) : null}
                <Period>{t(`edu.${n}.meta`)}</Period>
                <h3 className="mt-3 max-w-[78%] text-lg font-extrabold leading-snug text-crimson-700">{t(`edu.${n}.school`)}</h3>
                <p className="text-sm font-semibold text-crimson-500">{t(`edu.${n}.prog`)}</p>
              </PaperSticker>
            </div>
          </div>
        ))}
      </div>
    </Frame>
  )
}

export function ExperienceSection() {
  const { t } = useLanguage()
  return (
    <Frame id="experience" dark={false} seed={221} title={t('sec.exp.title')} sub={t('sec.exp.sub')}>
      <div className="grid gap-10 lg:grid-cols-3">
        {EXP.map((e, i) => (
          <div key={e.id} className="reveal relative pt-4" style={d(i * 140)}>
            <Pin delay={300 + i * 120} />
            <div className="sway" style={{ ['--r' as string]: `${ROT[i]}deg`, ['--d' as string]: `${i * 600}ms` } as CSSProperties}>
              <PaperSticker seed={230 + i} tone="paper" innerClassName="relative px-6 pb-7 pt-10">
                <Period>{t(`exp.${e.id}.period`)}</Period>
                <h3 className="mt-3 text-lg font-extrabold leading-snug text-crimson-700">{t(`exp.${e.id}.role`)}</h3>
                <p className="text-sm font-semibold text-crimson-500">{t(`exp.${e.id}.org`)}</p>
                <Bullets text={t(`exp.${e.id}.desc`)} className="mt-3" />
                <Polaroid src={e.photo} aspect={e.aspect} rot={i % 2 ? -3 : 3} className={`ml-auto mt-5 ${e.aspect === 'aspect-[4/3]' ? 'w-[60%]' : 'w-[46%]'}`} />
              </PaperSticker>
            </div>
          </div>
        ))}
      </div>
    </Frame>
  )
}

export function AwardsSection() {
  const { t } = useLanguage()
  return (
    <Frame id="achievements" dark seed={241} title={t('sec.awd.title')} sub={t('sec.awd.sub')}>
      <div className="grid gap-10 md:grid-cols-12">
        <div className="reveal relative pt-4 md:col-span-5">
          <Pin delay={300} />
          <div style={{ transform: `rotate(${ROT[0]}deg)` }}>
            <PaperSticker seed={280} tone="paper" innerClassName="relative px-6 pb-7 pt-10 sm:px-8">
              <Polaroid src="/works/paper-enlit.jpg" rot={3} aspect="aspect-[1542/1490]" className="mx-auto mb-5 w-[78%]" />
              <h3 className="text-lg font-extrabold leading-snug text-crimson-700">{t('awd.1.title')}</h3>
              <p className="text-sm font-semibold text-crimson-500">{t('awd.1.meta')}</p>
              <p className="mt-3 text-sm leading-relaxed text-crimson-700">{t('awd.1.desc')}</p>
            </PaperSticker>
          </div>
        </div>
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 md:col-span-7">
          {CERTS.map((c, i) => (
            <a key={c.id} href={c.src} target="_blank" rel="noopener noreferrer" aria-label={`${t('cert.open')}: ${t(`cert.${c.id}`)}`} className={`reveal group relative block pt-4 ${i === 2 ? 'sm:col-span-2 sm:mx-auto sm:w-[calc(50%-1rem)]' : ''}`} style={d(i * 140)}>
              <Pin delay={300 + i * 100} />
              <figure className="bg-white p-2 pb-4 shadow-[0_14px_24px_rgba(5,15,50,.4)] transition duration-300 group-hover:-translate-y-1 group-hover:rotate-0" style={{ transform: `rotate(${ROT[(i + 1) % 4]}deg)` }}>
                <img src={c.src} alt={t(`cert.${c.id}`)} className="aspect-[1800/1272] w-full object-cover" loading="lazy" />
                <figcaption className="mt-2 px-1 text-center text-sm font-bold text-crimson-700">{t(`cert.${c.id}`)}</figcaption>
              </figure>
            </a>
          ))}
        </div>
      </div>
    </Frame>
  )
}

const Tick = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-crimson-500"><path d="m5 12 5 5L20 7" /></svg>
)

export function SkillsSection() {
  const { t } = useLanguage()
  const hard = [1, 2, 3].map((n) => t(`sk.h${n}`))
  const soft = [1, 2, 3, 4, 5, 6, 7].map((n) => t(`sk.s${n}`))
  return (
    <Frame id="skills" dark={false} seed={301} title={t('sec.skill.title')} sub={t('sec.skill.sub')}>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="reveal relative pt-4">
          <Pin delay={300} />
          <div style={{ transform: 'rotate(-1deg)' }}>
            <PaperSticker seed={310} tone="paper" innerClassName="px-6 pb-8 pt-10 sm:px-8">
              <h3 className="font-script text-3xl leading-none text-crimson-700">{t('sk.hard')}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {hard.map((x) => <span key={x} className="rounded-full bg-crimson-700 px-3.5 py-1.5 text-xs font-bold text-cream shadow-sm">{x}</span>)}
              </div>
              <h3 className="mt-7 font-script text-3xl leading-none text-crimson-700">{t('about.software')}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {SOFTWARE.map((s) => <span key={s.n} className="rounded-full border border-crimson-500/40 bg-white/60 px-3.5 py-1.5 text-xs font-bold text-crimson-700">{s.n}</span>)}
              </div>
            </PaperSticker>
          </div>
        </div>
        <div className="reveal relative pt-4" style={d(140)}>
          <Pin delay={420} />
          <div style={{ transform: 'rotate(1.2deg)' }}>
            <PaperSticker seed={320} tone="paper" innerClassName="px-6 pb-8 pt-10 sm:px-8">
              <h3 className="font-script text-3xl leading-none text-crimson-700">{t('sk.soft')}</h3>
              <ul className="mt-4 space-y-2.5">
                {soft.map((x) => <li key={x} className="flex gap-2 border-b border-crimson-500/30 pb-2 text-sm font-semibold text-crimson-700"><Tick />{x}</li>)}
              </ul>
            </PaperSticker>
          </div>
        </div>
      </div>
    </Frame>
  )
}
