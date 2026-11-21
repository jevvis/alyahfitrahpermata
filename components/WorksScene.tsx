'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { CATEGORIES, type Collection } from '@/lib/works'
import { monogramBg } from '@/lib/paper'
import PaperSticker from './PaperSticker'

/** Ponsel dengan feed: karya tampil sebagai postingan (gaya mockup di slide acuan). */
function PhoneFeed({ src, ratio, handle = 'Alyah Fitrah Permata' }: { src: string; ratio: 'poster' | 'square' | 'wide'; handle?: string }) {
  const aspect = ratio === 'poster' ? 'aspect-[3/4]' : ratio === 'square' ? 'aspect-square' : 'aspect-[16/10]'
  return (
    <div className="mx-auto w-[min(250px,62vw)] rounded-[2.2rem] bg-[#15151a] p-2 shadow-[0_28px_50px_rgba(40,0,10,.35)]">
      <div className="overflow-hidden rounded-[1.7rem] bg-white">
        <div className="mx-auto mt-1.5 h-4 w-20 rounded-full bg-[#15151a]" />
        <div className="flex items-center gap-2 px-3 py-2">
          <span className="h-6 w-6 rounded-full bg-crimson-500" />
          <span className="text-[11px] font-bold text-[#222]">{handle}</span>
          <span className="ml-auto text-[#888]">···</span>
        </div>
        <img src={src} alt="" className={`${aspect} w-full object-cover`} loading="lazy" />
        <div className="flex items-center gap-3 px-3 py-2 text-[#222]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#c0132f" stroke="#c0132f" strokeWidth="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z" /></svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z" /></svg>
        </div>
        <div className="space-y-1 px-3 pb-3"><i className="block h-1.5 w-4/5 rounded bg-black/10" /><i className="block h-1.5 w-3/5 rounded bg-black/10" /></div>
      </div>
    </div>
  )
}

export default function WorksScene() {
  const { t } = useLanguage()
  const [tab, setTab] = useState(0)
  const [box, setBox] = useState<{ cat: number; src: string; title: string; desc: string } | null>(null)

  useEffect(() => {
    const h = (e: Event) => setTab(((e as CustomEvent).detail as number) ?? 0)
    window.addEventListener('works-tab', h)
    return () => window.removeEventListener('works-tab', h)
  }, [])

  const cat = CATEGORIES[tab]
  const gallery = useMemo(
    () => cat.collections.flatMap((c) => c.items.map((it) => ({ src: it.src, title: t(`col.${c.id}.title`), desc: t(`col.${c.id}.desc`) }))),
    [cat, t]
  )

  const move = useCallback(
    (d: number) => {
      if (!box) return
      const i = gallery.findIndex((g) => g.src === box.src)
      const n = gallery[(i + d + gallery.length) % gallery.length]
      setBox({ cat: tab, src: n.src, title: n.title, desc: n.desc })
    },
    [box, gallery, tab]
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setBox(null)
      if (e.key === 'ArrowRight') move(1)
      if (e.key === 'ArrowLeft') move(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [move])

  const fan = cat.collections.flatMap((c) => c.items).slice(0, 3)
  const count = cat.collections.reduce((n, c) => n + c.items.length, 0)

  const renderCollection = (c: Collection, idx: number) => (
    <section key={c.id} className="relative px-4 py-14 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div style={{ ['--d' as string]: `${idx * 60}ms` } as React.CSSProperties}>
            <PaperSticker seed={90 + c.id} className="-rotate-2" innerClassName="px-6 py-2.5">
              <h3 className="font-script text-[clamp(1.7rem,3.6vw,3rem)] leading-none text-crimson-700">{t(`col.${c.id}.title`)}</h3>
            </PaperSticker>
          </div>
          <p className="max-w-md text-sm font-medium text-crimson-500">{t(`col.${c.id}.desc`)}</p>
        </div>

        {c.kind === 'poster' && (
          <div className="mt-9 grid grid-cols-1 items-start gap-8 sm:grid-cols-2">
            {c.items.map((it, i) => (
              <button key={it.src} onClick={() => setBox({ cat: tab, src: it.src, title: t(`col.${c.id}.title`), desc: t(`col.${c.id}.desc`) })} className="group block text-left" style={{ ['--d' as string]: `${i * 120}ms` } as React.CSSProperties} aria-label={`${t('works.view')}: ${t(`col.${c.id}.title`)}`}>
                <img src={it.src} alt="" className="mx-auto w-[78%] max-w-[360px] rounded-xl object-cover shadow-[0_22px_40px_rgba(60,0,10,.28)] transition duration-500 group-hover:-translate-y-2 group-hover:rotate-[-1.5deg]" loading="lazy" />
              </button>
            ))}
          </div>
        )}

        {c.kind === 'feed' && (
          <div className="mt-9 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {c.items.map((it, i) => (
              <button key={it.src} onClick={() => setBox({ cat: tab, src: it.src, title: t(`col.${c.id}.title`), desc: t(`col.${c.id}.desc`) })} className="group block" style={{ ['--d' as string]: `${i * 120}ms` } as React.CSSProperties} aria-label={`${t('works.view')}: ${t(`col.${c.id}.title`)}`}>
                <div className="transition duration-500 group-hover:-translate-y-2"><PhoneFeed src={it.src} ratio="square" /></div>
              </button>
            ))}
          </div>
        )}

        {(c.kind === 'sheet' || c.kind === 'print') && (
          <div className="mt-9">
            {c.items.map((it) => (
              <button key={it.src} onClick={() => setBox({ cat: tab, src: it.src, title: t(`col.${c.id}.title`), desc: t(`col.${c.id}.desc`) })} className="group mx-auto block w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-[0_26px_50px_rgba(60,0,10,.2)] ring-1 ring-black/5" aria-label={`${t('works.view')}: ${t(`col.${c.id}.title`)}`}>
                <img src={it.src} alt="" className="aspect-[16/9] w-full object-cover transition duration-700 group-hover:scale-[1.03]" loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )

  return (
    <section id="works" className="relative bg-white text-crimson-700">
      {/* tab kategori (menempel di atas saat scroll) */}
      <div className="tabbar sticky top-0 z-30 border-b border-crimson-500/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 pb-0 sm:px-10">
          <div className="no-scrollbar -mb-px flex gap-1 overflow-x-auto" role="tablist">
            {CATEGORIES.map((c, i) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={tab === i}
                onClick={() => setTab(i)}
                className={`shrink-0 rounded-t-xl px-4 py-2.5 text-sm font-bold transition-all duration-300 sm:px-6 ${tab === i ? 'rounded-full bg-crimson-500 text-white shadow-[0_8px_18px_rgba(163,12,43,.35)]' : 'text-crimson-500 hover:bg-crimson-500/5'}`}
              >
                {t(`cat.${c.id}.name`)}
              </button>
            ))}
          </div>
        </div>
        <div className="h-[3px] w-full bg-gradient-to-r from-crimson-500/70 via-crimson-500 to-crimson-500/70" />
      </div>

      <div key={tab} className="tabin">
        {/* pembuka kategori: layar terbelah diagonal */}
        <div className="relative isolate overflow-hidden bg-white">
          <div className="absolute inset-y-0 left-0 w-full bg-crimson-700 [clip-path:polygon(0_0,62%_0,38%_100%,0_100%)] md:[clip-path:polygon(0_0,56%_0,40%_100%,0_100%)]" style={{ backgroundImage: monogramBg('AP') , backgroundSize: '170px 170px' }} />
          <div className="relative mx-auto grid min-h-[min(78svh,640px)] max-w-6xl items-center gap-8 px-4 py-16 sm:px-10 md:grid-cols-2">
            <div>
              <div className="stick in" style={{ ['--r' as string]: '-3deg' } as React.CSSProperties}>
                <PaperSticker seed={120 + tab} className="inline-block" innerClassName="px-7 py-4">
                  <h2 className="font-script text-[clamp(2.4rem,6vw,4.6rem)] leading-[0.95] text-crimson-700">{t(`cat.${cat.id}.name`)}</h2>
                </PaperSticker>
              </div>
              <p className="mt-6 text-sm font-extrabold uppercase tracking-widest text-cream/80">{count} {t('works.items')}</p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-cream/90 sm:text-base">{t(`cat.${cat.id}.desc`)}</p>
            </div>
            <div className="relative flex justify-center md:justify-end">
              <div className="relative flex h-[min(52vw,300px)] w-full max-w-md items-center justify-center" aria-hidden="true">
                {fan.map((it, i) => (
                  <img key={it.src} src={it.src} alt="" className="absolute h-full w-[44%] rounded-2xl border-4 border-white object-cover object-top shadow-[0_24px_44px_rgba(40,0,10,.4)]" style={{ transform: `translateX(${(i - (fan.length - 1) / 2) * 62}%) rotate(${(i - (fan.length - 1) / 2) * 7}deg)`, zIndex: i }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {cat.collections.map(renderCollection)}
      </div>

      {box ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" onClick={() => setBox(null)} role="dialog" aria-modal="true">
          <button onClick={() => setBox(null)} aria-label={t('works.close')} className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-crimson-700 hover:bg-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
          </button>
          {gallery.length > 1 ? (
            <>
              <button onClick={(e) => { e.stopPropagation(); move(-1) }} aria-label={t('works.prev')} className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-crimson-700 hover:bg-white"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="m15 6-6 6 6 6" /></svg></button>
              <button onClick={(e) => { e.stopPropagation(); move(1) }} aria-label={t('works.next')} className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-crimson-700 hover:bg-white"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6" /></svg></button>
            </>
          ) : null}
          <figure className="max-h-[92vh]" onClick={(e) => e.stopPropagation()}>
            <img src={box.src} alt={box.title} className="max-h-[84vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl" />
            <figcaption className="mx-auto mt-3 max-w-xl text-center text-white"><span className="block text-sm font-bold">{box.title}</span><span className="mt-1 block text-xs opacity-80">{box.desc}</span></figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  )
}
