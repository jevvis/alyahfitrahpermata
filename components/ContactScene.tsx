'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { CONTACT } from '@/lib/works'
import { monogramBg } from '@/lib/paper'
import PaperSticker from './PaperSticker'

const field = 'w-full rounded-lg border border-crimson-500/20 bg-white/70 px-3.5 py-2.5 text-sm text-crimson-900 outline-none transition placeholder:text-crimson-700/40 focus:border-crimson-500 focus:bg-white focus:ring-2 focus:ring-crimson-500/20'

export default function ContactScene() {
  const { t } = useLanguage()
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [msg, setMsg] = useState('')
  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(t('ct.mailSubject'))}&body=${encodeURIComponent(`${msg}\n\n— ${name} (${mail})`)}`
  }
  const links = [
    { show: !!CONTACT.email, title: 'Email', sub: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { show: !!CONTACT.instagram, title: 'Instagram', sub: CONTACT.instagram, href: `https://instagram.com/${CONTACT.instagram.replace('@', '')}` },
    { show: !!CONTACT.linkedin, title: 'LinkedIn', sub: CONTACT.linkedin, href: `https://${CONTACT.linkedin}` },
    { show: !!CONTACT.whatsapp, title: 'WhatsApp', sub: CONTACT.phone, href: `https://wa.me/${CONTACT.whatsapp}` },
  ].filter((l) => l.show)

  return (
    <section id="contact" className="relative overflow-hidden bg-crimson-700 px-4 pb-10 pt-24 sm:px-8">
      <div className="absolute inset-0" style={{ backgroundImage: monogramBg('AP'), backgroundSize: '170px 170px' }} />
      <div className="relative mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        <div className="reveal">
          <PaperSticker seed={140} tone="paper" innerClassName="px-6 pb-7 pt-8 sm:px-8">
            <h2 className="font-script text-4xl leading-none text-crimson-700">{t('ct.title')}</h2>
            <p className="mb-5 mt-2 text-sm text-crimson-700/80">{t('ct.sub')}</p>
            <form onSubmit={submit} className="space-y-3">
              <label className="block"><span className="mb-1 block text-xs font-bold text-crimson-700">{t('ct.name')}</span><input className={field} value={name} onChange={(e) => setName(e.target.value)} placeholder={t('ct.namePh')} required /></label>
              <label className="block"><span className="mb-1 block text-xs font-bold text-crimson-700">{t('ct.email')}</span><input className={field} type="email" value={mail} onChange={(e) => setMail(e.target.value)} placeholder={t('ct.emailPh')} required /></label>
              <label className="block"><span className="mb-1 block text-xs font-bold text-crimson-700">{t('ct.message')}</span><textarea className={`${field} min-h-[110px] resize-y`} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder={t('ct.messagePh')} required /></label>
              <button type="submit" className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-crimson-700 px-5 py-3 text-sm font-bold text-cream shadow-[0_10px_22px_rgba(11,31,94,.4)] transition hover:bg-crimson-900">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z" /></svg>
                {t('ct.send')}
              </button>
              <p className="text-center text-[11px] text-crimson-700/70">{t('ct.note')}</p>
            </form>
          </PaperSticker>
        </div>

        <div className="space-y-8">
          {links.length > 0 ? (
            <div className="reveal" style={{ '--d': '120ms' } as React.CSSProperties}>
              <PaperSticker seed={150} tone="paper" innerClassName="px-6 pb-6 pt-7 sm:px-8">
                <h3 className="font-script text-3xl leading-none text-crimson-700">{t('ct.findme')}</h3>
                <ul className="mt-4 divide-y divide-crimson-500/15">
                  {links.map((l) => (
                    <li key={l.title}>
                      <a href={l.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-3 py-3 text-crimson-700 transition hover:translate-x-1">
                        <span><span className="block text-sm font-extrabold">{l.title}</span><span className="block text-xs opacity-75">{l.sub}</span></span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9" /></svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </PaperSticker>
            </div>
          ) : null}

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
      </div>
      <p className="relative mt-14 text-center text-xs font-semibold text-cream/80">
        © {new Date().getFullYear()} Alyah Fitrah Permata. {t('footer.rights')}
      </p>
    </section>
  )
}
