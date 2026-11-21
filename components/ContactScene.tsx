'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { CONTACT } from '@/lib/works'
import { monogramBg } from '@/lib/paper'
import PaperSticker from './PaperSticker'

const ICON = {
  email: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></>,
  wa: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />,
  ig: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /></>,
  li: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />,
  pin: <><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
}

export default function ContactScene() {
  const { t } = useLanguage()
  const links = [
    { show: !!CONTACT.email, title: 'Email', sub: CONTACT.email, href: `mailto:${CONTACT.email}`, icon: ICON.email },
    { show: !!CONTACT.whatsapp, title: 'WhatsApp', sub: CONTACT.phone, href: `https://wa.me/${CONTACT.whatsapp}`, icon: ICON.wa },
    { show: !!CONTACT.instagram, title: 'Instagram', sub: CONTACT.instagram, href: `https://instagram.com/${CONTACT.instagram.replace('@', '')}`, icon: ICON.ig },
    { show: !!CONTACT.linkedin, title: 'LinkedIn', sub: CONTACT.linkedin, href: `https://${CONTACT.linkedin}`, icon: ICON.li },
    { show: !!CONTACT.city, title: t('about.contact'), sub: CONTACT.city, href: '', icon: ICON.pin },
  ].filter((l) => l.show)

  return (
    <section id="contact" className="relative overflow-hidden bg-crimson-700 px-4 pb-10 pt-24 sm:px-8">
      <div className="absolute inset-0" style={{ backgroundImage: monogramBg('AP'), backgroundSize: '170px 170px' }} />
      <div className="relative mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1.2fr_1fr]">
        <div className="reveal">
          <PaperSticker seed={150} tone="paper" innerClassName="px-6 pb-7 pt-8 sm:px-8">
            <h2 className="font-script text-4xl leading-none text-crimson-700">{t('ct.title')}</h2>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-crimson-700">{t('ct.tagline')}</p>
            <p className="mt-1 text-sm leading-relaxed text-crimson-700/75">{t('ct.sub')}</p>
            <ul className="mt-5 space-y-3">
              {links.map((l, i) => {
                const inner = (
                  <span className="relative flex items-center gap-3 rounded-2xl border border-crimson-500/20 bg-white/60 p-3 pr-9 text-crimson-700 transition group-hover:border-crimson-500 group-hover:bg-white">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-crimson-700 text-cream">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{l.icon}</svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] font-extrabold uppercase tracking-[0.18em] opacity-70">{l.title}</span>
                      <span className="block break-words text-sm font-bold">{l.sub}</span>
                    </span>
                    <span className="absolute right-3 top-2 text-[10px] font-extrabold text-crimson-500/70">{String(i + 1).padStart(2, '0')}</span>
                    {l.href ? <svg className="absolute bottom-2.5 right-3 text-crimson-500" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9" /></svg> : null}
                  </span>
                )
                return (
                  <li key={l.title} className="group">
                    {l.href ? <a href={l.href} target={l.href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer" className="block">{inner}</a> : inner}
                  </li>
                )
              })}
            </ul>
          </PaperSticker>
        </div>

        <div className="reveal flex justify-center" style={{ '--d': '240ms' } as React.CSSProperties}>
          <div className="sway" style={{ ['--r' as string]: '-3deg' } as React.CSSProperties}>
            <PaperSticker seed={160} innerClassName="px-10 py-6">
              <div className="text-center leading-[0.9] text-crimson-700">
                <div className="font-script text-[clamp(3.2rem,9vw,5.5rem)]">{t('thanks.line1')}</div>
                <div className="font-script text-[clamp(3.2rem,9vw,5.5rem)]">{t('thanks.line2')}</div>
              </div>
            </PaperSticker>
          </div>
        </div>
      </div>
      <p className="relative mt-14 text-center text-xs font-semibold text-cream/80">
        © {new Date().getFullYear()} Alyah Fitrah Permata. {t('footer.rights')}
      </p>
    </section>
  )
}
