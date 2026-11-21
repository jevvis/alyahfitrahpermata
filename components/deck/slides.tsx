'use client'

import type { CSSProperties, ReactNode } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { CATEGORIES, CONTACT, SOFTWARE } from '@/lib/works'
import { monogramBg } from '@/lib/paper'
import PaperSticker from '@/components/PaperSticker'

const S = (o: Record<string, string | number>) => o as CSSProperties
const mono = (c?: string): CSSProperties => ({ backgroundImage: monogramBg('AP', c), backgroundSize: '170px 170px' })
const FRAME = 'relative h-[720px] w-[1280px] overflow-hidden'

function Word({ text }: { text: string }) {
  return (
    <div className="flex items-baseline justify-center leading-[0.9]">
      <span className="font-script text-[150px] text-crimson-700">{text.slice(0, 1)}</span>
      <span className="font-display text-[104px] tracking-tight text-crimson-700">{text.slice(1).toUpperCase()}</span>
    </div>
  )
}

function Title({ children, seed, rot = -3, size = 52, className = '' }: { children: ReactNode; seed: number; rot?: number; size?: number; className?: string }) {
  return (
    <div className={`a ${className}`} style={S({ rotate: `${rot}deg` })}>
      <PaperSticker seed={seed} innerClassName="px-8 py-2.5">
        <span className="font-script leading-none text-crimson-700" style={{ fontSize: size }}>{children}</span>
      </PaperSticker>
    </div>
  )
}

function Wax() {
  return (
    <svg width="84" height="84" viewBox="0 0 74 74" aria-hidden="true">
      <defs><radialGradient id="wx" cx="40%" cy="35%"><stop offset="0" stopColor="#b3281f" /><stop offset="1" stopColor="#76130e" /></radialGradient></defs>
      <path d="M37 4c8 0 11 6 18 8 8 3 14 8 12 17-1 6 5 9 3 17-2 8-9 9-12 15-4 7-12 10-21 9-9-1-13-7-19-12C11 53 4 49 6 41c2-7-3-11 0-18C9 15 17 14 23 9c5-3 8-5 14-5z" fill="url(#wx)" />
      <path d="M37 51c-9-7-14-12-14-18 0-5 4-8 8-8 3 0 5 2 6 4 1-2 3-4 6-4 4 0 8 3 8 8 0 6-5 11-14 18z" fill="#8f1b14" stroke="#b83a2e" strokeWidth="1.2" />
    </svg>
  )
}

/* 1. Sampul */
export function CoverSlide() {
  const { t } = useLanguage()
  return (
    <div className={`${FRAME} bg-crimson-700`}>
      <div className="absolute inset-0" style={mono()} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(60,0,14,.55)_100%)]" />
      <div className="a absolute left-[90px] top-[120px]" style={S({ rotate: '-3deg' })}>
        <PaperSticker seed={11} innerClassName="px-[70px] py-[44px]">
          <Word text={t('cover.port')} />
          <Word text={t('cover.folio')} />
        </PaperSticker>
      </div>
      <div className="a absolute left-[650px] top-[90px] h-[580px] w-[400px]" style={S({ '--d': '250ms', rotate: '2deg' })}>
        <div className="absolute inset-x-0 bottom-0 top-[120px]">
          <PaperSticker seed={23} tone="paper" className="h-full" innerClassName="h-full w-full"><span className="block h-full w-full" /></PaperSticker>
        </div>
        <img src="/profile.png" alt="Alyah Fitrah Permata" className="absolute bottom-0 left-1/2 h-[580px] w-auto -translate-x-1/2 drop-shadow-[0_14px_16px_rgba(40,0,10,.45)]" />
      </div>
      <div className="a absolute bottom-[56px] left-[90px] text-cream" style={S({ '--d': '400ms' })}>
        <p className="text-[34px] font-extrabold italic leading-tight">{t('cover.name')} <span className="text-[26px] font-light not-italic">{t('cover.year')}</span></p>
        <p className="mt-1 w-[520px] text-[19px] font-semibold leading-snug opacity-90">{t('cover.role')}</p>
      </div>
    </div>
  )
}

/* 2. Tentang */
export function AboutSlide() {
  const { t } = useLanguage()
  return (
    <div className={`${FRAME} bg-[#fbf7f0]`}>
      <div className="absolute inset-0 opacity-70" style={mono('rgba(130,0,30,0.06)')} />
      <div className="absolute left-[60px] top-[34px] z-20"><Title seed={3} rot={-4}>{t('about.title')}</Title></div>
      <div className="a absolute left-[60px] top-[120px] h-[560px] w-[760px]" style={S({ '--d': '120ms' })}>
        <PaperSticker seed={21} tone="paper" className="h-full" innerClassName="relative h-full px-10 py-9">
          <span className="absolute left-6 top-4 flex gap-4">{[0, 1, 2].map((i) => <i key={i} className="h-4 w-4 rounded-full bg-[#fbf7f0] shadow-[inset_0_1px_2px_rgba(0,0,0,.25)]" />)}</span>
          <div className="flex h-full items-end gap-8 pt-4">
            <img src="/profile.png" alt="Alyah Fitrah Permata" className="h-[470px] w-auto -rotate-2 drop-shadow-[0_10px_14px_rgba(60,0,10,.3)]" />
            <div className="pb-2">
              <p className="text-[19px] leading-relaxed text-crimson-700">{t('about.bio')}</p>
              <p className="mt-6 text-[15px] font-extrabold tracking-wide text-crimson-700">{t('about.software')}</p>
              <div className="mt-2 flex gap-3">
                {SOFTWARE.map((s) => (
                  <span key={s.k} className="flex w-[78px] flex-col items-center gap-1 text-center">
                    <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-crimson-700 font-display text-base text-cream shadow-md">{s.k}</span>
                    <span className="text-[11px] font-bold leading-tight text-crimson-700">{s.n}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </PaperSticker>
      </div>
      <div className="a absolute left-[850px] top-[120px] h-[560px] w-[370px]" style={S({ '--d': '260ms' })}>
        <PaperSticker seed={34} tone="paper" className="h-full" innerClassName="h-full px-8 py-9">
          <p className="text-[18px] font-extrabold tracking-wide text-crimson-700">{t('sk.hard')}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {[1, 2, 3].map((i) => <span key={i} className="rounded-full bg-crimson-700 px-4 py-1.5 text-[14px] font-bold text-cream">{t(`sk.h${i}`)}</span>)}
          </div>
          <p className="mt-9 text-[18px] font-extrabold tracking-wide text-crimson-700">{t('sk.soft')}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => <span key={i} className="rounded-full border border-crimson-500/50 px-4 py-1.5 text-[14px] font-semibold text-crimson-700">{t(`sk.s${i}`)}</span>)}
          </div>
        </PaperSticker>
      </div>
    </div>
  )
}

/* 3. Pendidikan + Pengalaman */
export function EduExpSlide() {
  const { t } = useLanguage()
  return (
    <div className={`${FRAME} bg-[#fbf7f0]`}>
      <div className="absolute inset-0 opacity-70" style={mono('rgba(130,0,30,0.06)')} />
      <div className="absolute left-[60px] top-[34px] z-20"><Title seed={9} rot={-2}>{t('about.edu')}</Title></div>
      <div className="a absolute left-[60px] top-[130px] h-[540px] w-[520px]" style={S({ '--d': '120ms' })}>
        <PaperSticker seed={41} tone="paper" className="h-full" innerClassName="h-full px-10 py-10">
          <ul className="space-y-8 text-crimson-700">
            {[1, 2].map((i) => (
              <li key={i} className="border-b border-crimson-500/30 pb-6 last:border-0">
                <p className="text-[26px] font-extrabold leading-tight">{t(`edu.${i}.school`)}</p>
                <p className="mt-1 text-[18px] font-semibold">{t(`edu.${i}.meta`)}</p>
                <p className="mt-1 text-[19px]">{t(`edu.${i}.prog`)}</p>
              </li>
            ))}
          </ul>
        </PaperSticker>
      </div>
      <div className="absolute left-[640px] top-[34px] z-20"><Title seed={8} rot={-2}>{t('about.exp')}</Title></div>
      <div className="a absolute left-[640px] top-[130px] h-[540px] w-[580px]" style={S({ '--d': '260ms' })}>
        <PaperSticker seed={34} tone="paper" className="h-full" innerClassName="relative h-full px-10 py-10">
          <div className="absolute right-6 top-5 -rotate-6"><Wax /></div>
          <ul className="space-y-6 pr-24 text-crimson-700">
            <li className="border-b border-crimson-500/40 pb-5 text-[19px] font-semibold leading-snug">{t('about.exp.1')}</li>
            <li className="border-b border-crimson-500/40 pb-5 pr-0 text-[19px] leading-snug" style={{ marginRight: -96 }}>{t('about.exp.2')}</li>
            <li className="border-b border-crimson-500/40 pb-5 text-[19px] leading-snug" style={{ marginRight: -96 }}>{t('about.exp.3')}</li>
          </ul>
        </PaperSticker>
      </div>
    </div>
  )
}

/* 4. Daftar isi */
const TOC_PAGES = ['5', '6', '7', '8–9']
const ROT = [-3, 2, -2, 3]

export function TocSlide() {
  const { t } = useLanguage()
  return (
    <div className={`${FRAME} bg-crimson-700`}>
      <div className="absolute inset-0" style={mono()} />
      <div className="absolute left-1/2 top-[50px] -translate-x-1/2"><Title seed={61} rot={-2} size={60}>{t('toc.title')}</Title></div>
      <ul className="absolute left-[50px] top-[270px] flex w-[1180px] justify-between">
        {CATEGORIES.map((c, i) => (
          <li key={c.id} className="a relative w-[265px] pt-5" style={S({ '--d': `${200 + i * 150}ms` })}>
            {i === 0 && <span aria-hidden="true" className="absolute top-[6.5px] h-[7px] w-[400px] rounded-full" style={{ right: 'calc(100% + 50px)', background: 'repeating-linear-gradient(90deg, rgba(130,90,40,.45) 0 3px, transparent 3px 9px) center/100% 2px no-repeat, #f3e5c0' }} />}
            {i === CATEGORIES.length - 1 && <span aria-hidden="true" className="absolute top-[6.5px] h-[7px] w-[400px] rounded-full" style={{ left: 'calc(100% + 50px)', background: 'repeating-linear-gradient(90deg, rgba(130,90,40,.45) 0 3px, transparent 3px 9px) center/100% 2px no-repeat, #f3e5c0' }} />}
            <svg className="pointer-events-none absolute top-0 h-8" style={{ left: i === 0 ? -50 : -8, width: 265 + (i === 0 ? 50 : 8) + (i === CATEGORIES.length - 1 ? 50 : 8) }} viewBox="0 0 100 32" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 10 Q50 22 100 10" stroke="#f3e5c0" strokeWidth="7" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
              <path d="M0 10 Q50 22 100 10" stroke="rgba(130,90,40,.45)" strokeWidth="2" strokeDasharray="3 6" fill="none" vectorEffect="non-scaling-stroke" />
            </svg>
            <span className="absolute top-1 z-10 h-6 w-6 rounded-full bg-[radial-gradient(circle_at_35%_30%,#ff6b6b,#b3001b_70%)] shadow-[0_4px_6px_rgba(0,0,0,.45)]" style={{ left: 'calc(50% - 12px)' }} />
            <div className="block" style={S({ rotate: `${ROT[i]}deg` })}>
              <PaperSticker seed={70 + i} innerClassName="px-6 pb-7 pt-8">
                <span className="block text-center font-script text-[36px] leading-[1.05] text-crimson-700">{t(`cat.${c.id}.name`)}</span>
                <span className="mt-3 block text-center text-[13px] font-extrabold uppercase tracking-widest text-crimson-500">
                  {c.collections.reduce((n, col) => n + col.items.length, 0)} {t('works.items')} · {t('toc.page')} {TOC_PAGES[i]}
                </span>
              </PaperSticker>
            </div>
          </li>
        ))}
      </ul>
      <p className="absolute inset-x-0 bottom-[70px] text-center text-[18px] text-[#f3e5c0]/90">{t('toc.sub')}</p>
    </div>
  )
}

/* kerangka slide kategori (panel miring di kiri) */
function CatSlide({ id, children }: { id: number; children: ReactNode }) {
  const { t } = useLanguage()
  const cat = CATEGORIES[id - 1]
  const count = cat.collections.reduce((n, c) => n + c.items.length, 0)
  return (
    <div className={`${FRAME} bg-white`}>
      <div className="absolute inset-0 bg-crimson-700" style={{ ...mono(), clipPath: 'polygon(0 0,470px 0,300px 720px,0 720px)' }} />
      <div className="absolute left-[50px] top-[150px] w-[340px]">
        <Title seed={120 + id} rot={-3} size={46} className="inline-block"><span className="block">{t(`cat.${id}.name`)}</span></Title>
        <p className="a mt-7 text-[13px] font-extrabold uppercase tracking-widest text-cream/80" style={S({ '--d': '150ms' })}>{count} {t('works.items')}</p>
        <p className="a mt-2 w-[300px] text-[16px] leading-relaxed text-cream/95" style={S({ '--d': '250ms' })}>{t(`cat.${id}.desc`)}</p>
      </div>
      <div className="absolute left-[520px] top-[50px] flex h-[620px] w-[720px] flex-col items-center justify-center">{children}</div>
    </div>
  )
}

function Caption({ col, className = '' }: { col: number; className?: string }) {
  const { t } = useLanguage()
  return (
    <div className={`a text-crimson-700 ${className}`} style={S({ '--d': '500ms' })}>
      <p className="text-[16px] font-extrabold leading-snug">{t(`col.${col}.title`)}</p>
      <p className="mt-1 text-[12.5px] leading-snug text-crimson-500">{t(`col.${col}.desc`)}</p>
    </div>
  )
}

const shadow = 'shadow-[0_22px_40px_rgba(60,0,10,.28)]'

/* 5. Desain edukasi (poster) */
export function PosterSlide() {
  const cat = CATEGORIES[0]
  return (
    <CatSlide id={1}>
      <div className="flex items-start gap-6">
        {cat.collections[0].items.map((it, i) => (
          <img key={it.src} src={it.src} alt="" className={`a h-[400px] w-auto rounded-xl ${shadow}`} style={S({ '--d': `${200 + i * 150}ms`, rotate: i ? '1.5deg' : '-1.5deg' })} />
        ))}
      </div>
      <Caption col={1} className="mt-8 w-[640px]" />
    </CatSlide>
  )
}

function Phone({ src, handle, d }: { src: string; handle: string; d: number }) {
  return (
    <div className="a w-[218px] rounded-[2rem] bg-[#15151a] p-2 shadow-[0_28px_50px_rgba(40,0,10,.35)]" style={S({ '--d': `${d}ms` })}>
      <div className="overflow-hidden rounded-[1.5rem] bg-white">
        <div className="mx-auto mt-1.5 h-3.5 w-16 rounded-full bg-[#15151a]" />
        <div className="flex items-center gap-2 px-3 py-2"><span className="h-5 w-5 rounded-full bg-crimson-500" /><span className="text-[10px] font-bold text-[#222]">{handle}</span></div>
        <img src={src} alt="" className="aspect-[3/4] w-full object-cover" />
        <div className="space-y-1 px-3 py-2.5"><i className="block h-1.5 w-4/5 rounded bg-black/10" /><i className="block h-1.5 w-3/5 rounded bg-black/10" /></div>
      </div>
    </div>
  )
}

/* 6. Konten kegiatan */
export function FeedSlide() {
  const { t } = useLanguage()
  const cat = CATEGORIES[1]
  return (
    <CatSlide id={2}>
      <div className="flex items-start gap-5">
        {cat.collections[0].items.map((it, i) => <Phone key={it.src} src={it.src} handle={t('cover.name')} d={200 + i * 150} />)}
      </div>
      <Caption col={2} className="mt-7 w-[680px]" />
    </CatSlide>
  )
}

/* 7. Dokumentasi kegiatan */
export function DocSlide() {
  const cat = CATEGORIES[2]
  const a = cat.collections[0].items[0]
  const b = cat.collections[1].items[0]
  return (
    <CatSlide id={3}>
      <div className="flex items-end gap-7">
        <div className="w-[400px]">
          <img src={a.src} alt="" className={`a w-[400px] rounded-xl ${shadow}`} style={S({ '--d': '200ms', rotate: '-1deg' })} />
          <Caption col={3} className="mt-4" />
        </div>
        <div className="w-[260px]">
          <img src={b.src} alt="" className={`a h-[360px] w-auto rounded-xl ${shadow}`} style={S({ '--d': '350ms', rotate: '1.5deg' })} />
          <Caption col={4} className="mt-4" />
        </div>
      </div>
    </CatSlide>
  )
}

/* 8-9. Sertifikat (lebar penuh) */
function CertSlide({ col, items }: { col: number; items: { src: string; ar?: number }[] }) {
  const { t } = useLanguage()
  return (
    <div className={`${FRAME} bg-white`}>
      <div className="absolute inset-x-0 top-0 h-[120px] bg-crimson-700" style={{ ...mono(), clipPath: 'polygon(0 0,100% 0,100% 62%,0 100%)' }} />
      <div className="absolute left-[50px] top-[22px]"><Title seed={140 + col} rot={-2} size={42}>{t('cat.4.name')}</Title></div>
      <div className="absolute inset-x-0 top-[150px] flex items-center justify-center gap-8 px-[50px]">
        {items.map((it, i) => (
          <img key={it.src} src={it.src} alt="" className={`a h-[390px] w-auto rounded-lg bg-white ${shadow} ring-1 ring-black/5`} style={S({ '--d': `${200 + i * 150}ms`, rotate: i ? '0.8deg' : '-0.8deg' })} />
        ))}
      </div>
      <Caption col={col} className="absolute inset-x-[90px] bottom-[52px] text-center" />
    </div>
  )
}

export const CertSlideA = () => <CertSlide col={5} items={CATEGORIES[3].collections[0].items} />
export const CertSlideB = () => <CertSlide col={6} items={CATEGORIES[3].collections[1].items} />

/* 10. Kontak + terima kasih */
export function ContactSlide() {
  const { t } = useLanguage()
  const rows = [
    { show: !!CONTACT.email, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}`, d: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></> },
    { show: !!CONTACT.whatsapp, label: 'WhatsApp', value: CONTACT.phone, href: `https://wa.me/${CONTACT.whatsapp}`, d: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /> },
    { show: !!CONTACT.instagram, label: 'Instagram', value: CONTACT.instagram, href: `https://instagram.com/${CONTACT.instagram.replace('@', '')}`, d: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /></> },
    { show: !!CONTACT.linkedin, label: 'LinkedIn', value: CONTACT.linkedin, href: `https://${CONTACT.linkedin}`, d: <path d="M4 9h4v11H4zM6 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM10 9h4v2c1-1.6 2.4-2.3 4-2.3 3 0 4 2 4 5V20h-4v-5.5c0-1.4-.5-2.2-1.7-2.2S14 13.200 14 14.700V20h-4z" /> },
    { show: !!CONTACT.city, label: t('about.contact'), value: CONTACT.city, href: '', d: <><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></> },
  ].filter((r) => r.show)
  return (
    <div className={`${FRAME} bg-crimson-700`}>
      <div className="absolute inset-0" style={mono()} />
      <div className="absolute left-[60px] top-[50px]"><Title seed={150} rot={-3} size={54}>{t('ct.findme')}</Title></div>
      <div className="a absolute left-[60px] top-[150px] w-[600px]" style={S({ '--d': '150ms' })}>
        <PaperSticker seed={55} tone="paper" innerClassName="px-10 py-9">
          <p className="mb-5 text-[17px] text-crimson-700/85">{t('ct.sub')}</p>
          <ul className="divide-y divide-crimson-500/20">
            {rows.map((r) => {
              const inner = (
                <span className="flex items-center gap-4 py-4 text-crimson-700">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-crimson-700 text-cream">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{r.d}</svg>
                  </span>
                  <span><span className="block text-[14px] font-extrabold uppercase tracking-wide opacity-75">{r.label}</span><span className="block text-[22px] font-bold">{r.value}</span></span>
                </span>
              )
              return <li key={r.label}>{r.href ? <a href={r.href} target="_blank" rel="noopener noreferrer">{inner}</a> : inner}</li>
            })}
          </ul>
        </PaperSticker>
      </div>
      <div className="a absolute left-[760px] top-[190px]" style={S({ '--d': '350ms', rotate: '-3deg' })}>
        <PaperSticker seed={160} innerClassName="px-14 py-8">
          <div className="text-center leading-[0.9] text-crimson-700">
            <div className="font-script text-[110px]">{t('thanks.line1')}</div>
            <div className="font-script text-[110px]">{t('thanks.line2')}</div>
          </div>
        </PaperSticker>
      </div>
      <p className="absolute inset-x-0 bottom-[44px] text-center text-[13px] font-semibold text-cream/80">© {new Date().getFullYear()} {t('cover.name')}. {t('footer.rights')}</p>
    </div>
  )
}
