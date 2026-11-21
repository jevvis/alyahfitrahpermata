import type { Metadata } from 'next'
import { Inter, Lobster, Archivo_Black } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const script = Lobster({ subsets: ['latin'], weight: '400', variable: '--font-script' })
const display = Archivo_Black({ subsets: ['latin'], weight: '400', variable: '--font-display' })

export const metadata: Metadata = {
  title: 'Alyah Fitrah Permata | Portfolio',
  description: 'Portfolio of Alyah Fitrah Permata, International Relations student at UPN “Veteran” Jawa Timur: content creation, project management, editing, activities, and certificates.',
  keywords: ['Alyah Fitrah Permata', 'International Relations', 'Content Creator', 'Project Management', 'Editing', 'UPN Veteran Jawa Timur'],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${script.variable} ${display.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
