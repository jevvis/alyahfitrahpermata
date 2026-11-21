'use client'

import { useReveal } from '@/lib/hooks'
import Navbar from '@/components/Navbar'
import CoverScene from '@/components/CoverScene'
import AboutCollage from '@/components/AboutCollage'
import TocRope from '@/components/TocRope'
import WorksScene from '@/components/WorksScene'
import ContactScene from '@/components/ContactScene'
import { AboutSlide, CertSlideA, CertSlideB, ContactSlide, CoverSlide, DocSlide, EduExpSlide, FeedSlide, PosterSlide, TocSlide } from '@/components/deck/slides'

export default function Page() {
  useReveal()
  return (
    <main>
      {/* situs (layar) */}
      <div className="site">
        <Navbar />
        <CoverScene />
        <AboutCollage />
        <TocRope />
        <WorksScene />
        <ContactScene />
      </div>

      {/* versi cetak / PDF: 10 halaman 16:9, hanya tampil saat "Simpan PDF" */}
      <div className="print-deck" aria-hidden="true">
        {[CoverSlide, AboutSlide, EduExpSlide, TocSlide, PosterSlide, FeedSlide, DocSlide, CertSlideA, CertSlideB, ContactSlide].map((S, i) => (
          <div key={i} className="slide-wrap"><S /></div>
        ))}
      </div>
    </main>
  )
}
