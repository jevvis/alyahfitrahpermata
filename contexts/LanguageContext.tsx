'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'id' | 'en'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'id',
  setLang: () => {},
  t: (key) => key,
})

export function useLanguage() {
  return useContext(LanguageContext)
}


// ─── KAMUS DWIBAHASA ID/EN UNTUK ALYAH FITRAH PERMATA (ORDER 43) (isi dari CV dan berkas klien) ───
const translations: Record<Language, Record<string, string>> = {
  id: {
    'nav.home': "Beranda",
    'nav.about': "Tentang",
    'nav.works': "Karya & Kegiatan",
    'nav.works.s': "Karya",
    'nav.contact': "Kontak",
    'cover.port': "Port",
    'cover.folio': "Folio",
    'cover.name': "Alyah Fitrah Permata",
    'cover.year': "2026",
    'cover.role': "Mahasiswi Hubungan Internasional · Konten & Manajemen Proyek",
    'cover.cta': "Kenalan dulu ↓",
    'about.title': "Tentang Saya",
    'about.cta': "Hubungi saya",
    'about.bio': "Halo, saya Alyah Fitrah Permata, mahasiswi Hubungan Internasional UPN “Veteran” Jawa Timur angkatan 2024 dengan IPK 3,77. Saya aktif di organisasi dan kepanitiaan kampus, serta menekuni pembuatan konten, manajemen proyek, dan penyuntingan dengan Canva dan CapCut.",
    'about.software': "TOOLS",
    'about.skills': "KEAHLIAN",
    'sk.hard': "Hard skill",
    'sk.soft': "Soft skill",
    'sk.h1': "Pembuatan konten",
    'sk.h2': "Manajemen proyek",
    'sk.h3': "Penyuntingan",
    'sk.s1': "Kerja sama tim",
    'sk.s2': "Kreativitas",
    'sk.s3': "Komunikasi",
    'sk.s4': "Empati",
    'sk.s5': "Kepemimpinan",
    'sk.s6': "Manajemen waktu",
    'sk.s7': "Pemecahan masalah",
    'about.edu': "Pendidikan",
    'edu.1.school': "UPN “Veteran” Jawa Timur",
    'edu.1.meta': "2024 – 2028",
    'edu.1.prog': "Hubungan Internasional (IPK: 3,77)",
    'edu.2.school': "SMA Negeri 2 Baubau",
    'edu.2.meta': "2021 – 2024",
    'edu.2.prog': "Ilmu Pengetahuan Alam (IPA)",
    'about.exp': "Pengalaman",
    'about.exp.1': "(Okt – Des 2025) Anggota Divisi Fundraising, BEM FISIBPOL UPN “Veteran” Jawa Timur: 16 Days of Activism Against Gender-Based Violence.",
    'about.exp.2': "Anggota Divisi PDD, Hubungan Internasional UPN “Veteran” Jawa Timur: SparkED 2025 (proyek akhir mata kuliah Politik Internasional).",
    'about.exp.3': "(Jun 2026) Paper Presenter, ENLIT International Youth Conference 2026.",
    'about.contact': "Domisili",
    'toc.title': "Daftar Isi",
    'toc.sub': "Daftar karya, dokumentasi, dan sertifikat dalam portofolio ini.",
    'toc.open': "Buka",
    'toc.page': "hal.",
    'deck.pdf': "Simpan PDF",
    'cat.1.name': "Desain Edukasi",
    'cat.1.desc': "Poster dan sampul booklet edukasi tentang bela negara serta keselamatan dan kesadaran remaja perempuan.",
    'cat.2.name': "Konten Kegiatan",
    'cat.2.desc': "Konten media sosial dari kegiatan 16 Days of Activism Against Gender-Based Violence 2025 yang diselenggarakan BEM FISIBPOL UPN “Veteran” Jawa Timur.",
    'cat.3.name': "Dokumentasi Kegiatan",
    'cat.3.desc': "Foto dari kepanitiaan dan konferensi yang pernah saya ikuti.",
    'cat.4.name': "Sertifikat & Prestasi",
    'cat.4.desc': "Sertifikat dan makalah dari konferensi, kegiatan organisasi, dan kepanitiaan.",
    'col.1.title': "Poster & Booklet Edukasi",
    'col.1.desc': "Poster “Bela Negara Dimulai dari Kita” dan sampul booklet “SIAGA: Panduan Edukasi Remaja” (Safety Information & Awareness for Girls Assurance) dari Kelompok 3 – Sustainable Development.",
    'col.2.title': "16 Days of Activism 2025",
    'col.2.desc': "After report kampanye offline di Taman Bungkul dan kunjungan ke Rumah Wanula Pondok Kasih, serta perkenalan Staff Fundraising.",
    'col.3.title': "Webinar SparkED 2025",
    'col.3.desc': "Dokumentasi kepanitiaan Webinar SparkED: Indonesia-Canada Digital Elaboration, Program Studi Hubungan Internasional UPN “Veteran” Jawa Timur.",
    'col.4.title': "ENLIT International Youth Conference 2026",
    'col.4.desc': "Saat menjadi paper presenter di ENLIT International Youth Conference 2026, Surabaya, 18 Juni 2026.",
    'col.5.title': "Paper Presenter ENLIT 2026",
    'col.5.desc': "Sertifikat apresiasi sebagai paper presenter dan makalah “Analysis of U.S. Troop Withdrawal from Afghanistan in the Early Biden Administration (January–April 2021)”, ditulis bersama dua rekan penulis.",
    'col.6.title': "Organisasi & Kepanitiaan",
    'col.6.desc': "Sertifikat Anggota Fundraising (Speak Without Fear, BEM FISIBPOL, 30 November 2025) dan sertifikat Panitia Webinar SparkED (19 Desember 2025).",
    'works.view': "Lihat karya",
    'works.close': "Tutup",
    'works.prev': "Sebelumnya",
    'works.next': "Berikutnya",
    'ct.title': "Hubungi saya",
    'ct.sub': "Punya pertanyaan atau ingin berkolaborasi? Hubungi saya lewat kontak di bawah.",
    'ct.findme': "Temukan Saya",
    'ct.tagline': "Mahasiswi Hubungan Internasional yang terbuka untuk peluang di bidang konten, manajemen proyek, dan penyuntingan.",
    'works.items': "karya",
    'thanks.line1': "Terima",
    'thanks.line2': "Kasih",
    'footer.rights': "Hak cipta dilindungi.",
  },

  en: {
    'nav.home': "Home",
    'nav.about': "About",
    'nav.works': "Work & Activities",
    'nav.works.s': "Work",
    'nav.contact': "Contact",
    'cover.port': "Port",
    'cover.folio': "Folio",
    'cover.name': "Alyah Fitrah Permata",
    'cover.year': "2026",
    'cover.role': "International Relations Student · Content & Project Management",
    'cover.cta': "Get to know me ↓",
    'about.title': "About Me",
    'about.cta': "Get in touch",
    'about.bio': "Hello, I am Alyah Fitrah Permata, a 2024 International Relations student at UPN “Veteran” Jawa Timur with a 3.77 GPA. I am active in campus organisations and committees, and I work in content creation, project management, and editing with Canva and CapCut.",
    'about.software': "TOOLS",
    'about.skills': "SKILLS",
    'sk.hard': "Hard skills",
    'sk.soft': "Soft skills",
    'sk.h1': "Content creation",
    'sk.h2': "Project management",
    'sk.h3': "Editing",
    'sk.s1': "Teamwork",
    'sk.s2': "Creativity",
    'sk.s3': "Communication",
    'sk.s4': "Empathy",
    'sk.s5': "Leadership",
    'sk.s6': "Time management",
    'sk.s7': "Problem solving",
    'about.edu': "Education",
    'edu.1.school': "UPN “Veteran” Jawa Timur",
    'edu.1.meta': "2024 – 2028",
    'edu.1.prog': "International Relations (GPA: 3.77)",
    'edu.2.school': "SMA Negeri 2 Baubau",
    'edu.2.meta': "2021 – 2024",
    'edu.2.prog': "Natural Sciences (IPA)",
    'about.exp': "Experience",
    'about.exp.1': "(Oct – Dec 2025) Fundraising Division Member, BEM FISIBPOL UPN “Veteran” Jawa Timur: 16 Days of Activism Against Gender-Based Violence.",
    'about.exp.2': "PDD Division Member, International Relations UPN “Veteran” Jawa Timur: SparkED 2025 (final project for the International Politics course).",
    'about.exp.3': "(Jun 2026) Paper Presenter, ENLIT International Youth Conference 2026.",
    'about.contact': "Based in",
    'toc.title': "Table of Content",
    'toc.sub': "A table of contents listing the work, documentation, and certificates in this portfolio.",
    'toc.open': "Open",
    'toc.page': "p.",
    'deck.pdf': "Save PDF",
    'cat.1.name': "Educational Design",
    'cat.1.desc': "Educational poster and booklet cover about national defence awareness and the safety and awareness of teenage girls.",
    'cat.2.name': "Activity Content",
    'cat.2.desc': "Social media content from the 16 Days of Activism Against Gender-Based Violence 2025 programme organised by BEM FISIBPOL UPN “Veteran” Jawa Timur.",
    'cat.3.name': "Event Documentation",
    'cat.3.desc': "Photos from the committees and conferences I have taken part in.",
    'cat.4.name': "Certificates & Achievements",
    'cat.4.desc': "Certificates and a paper from a conference, organisational activities, and committees.",
    'col.1.title': "Educational Poster & Booklet",
    'col.1.desc': "“Bela Negara Dimulai dari Kita” poster and the “SIAGA: Panduan Edukasi Remaja” booklet cover (Safety Information & Awareness for Girls Assurance) from Group 3 – Sustainable Development.",
    'col.2.title': "16 Days of Activism 2025",
    'col.2.desc': "After reports of the offline campaign at Taman Bungkul and the visit to Rumah Wanula Pondok Kasih, plus the Fundraising Staff introduction.",
    'col.3.title': "SparkED Webinar 2025",
    'col.3.desc': "Committee documentation of the SparkED Webinar: Indonesia-Canada Digital Elaboration, International Relations Study Program, UPN “Veteran” Jawa Timur.",
    'col.4.title': "ENLIT International Youth Conference 2026",
    'col.4.desc': "As a paper presenter at the ENLIT International Youth Conference 2026, Surabaya, 18 June 2026.",
    'col.5.title': "ENLIT 2026 Paper Presenter",
    'col.5.desc': "Certificate of appreciation as a paper presenter and the paper “Analysis of U.S. Troop Withdrawal from Afghanistan in the Early Biden Administration (January–April 2021)”, co-written with two other authors.",
    'col.6.title': "Organisation & Committees",
    'col.6.desc': "Fundraising Member certificate (Speak Without Fear, BEM FISIBPOL, 30 November 2025) and the SparkED Webinar Committee certificate (19 December 2025).",
    'works.view': "View work",
    'works.close': "Close",
    'works.prev': "Previous",
    'works.next': "Next",
    'ct.title': "Contact me",
    'ct.sub': "Have a question or want to collaborate? Reach me through the contacts below.",
    'ct.findme': "Find Me",
    'ct.tagline': "An International Relations student open to opportunities in content creation, project management, and editing.",
    'works.items': "items",
    'thanks.line1': "Thank",
    'thanks.line2': "You",
    'footer.rights': "All rights reserved.",
  },
}
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('id')

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('site_language') as Language
      if (savedLang === 'id' || savedLang === 'en') {
        setLangState(savedLang)
        return
      }
      const userLang = navigator.language || (navigator as any).userLanguage || ''
      if (userLang.toLowerCase().startsWith('id')) {
        setLangState('id')
      } else {
        setLangState('en')
      }
    } catch {
      setLangState('id')
    }
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    try {
      localStorage.setItem('site_language', newLang)
    } catch {}
  }

  const t = (key: string): string => {
    return translations[lang]?.[key] ?? translations['id']?.[key] ?? key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
