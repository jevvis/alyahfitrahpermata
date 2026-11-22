// Data non-teks. Teks (judul, deskripsi) ada di contexts/LanguageContext.tsx (kunci cat.N.*, col.N.*).
export type Work = { src: string; ratio: 'poster' | 'square' | 'wide'; ar?: number }
export type Collection = { id: number; kind: 'poster' | 'feed' | 'sheet' | 'print'; items: Work[] }
export type Category = { id: number; hero: string; collections: Collection[] }

const W = (name: string, ratio: Work['ratio'] = 'poster', ar?: number): Work => ({ src: `/works/${name}.jpg`, ratio, ar })

export const CATEGORIES: Category[] = [
  { id: 1, hero: '/works/poster-garda.jpg', collections: [
    { id: 1, kind: 'poster', items: [W('poster-garda'), W('poster-siaga')] },
  ] },
  { id: 2, hero: '/works/after-taman-bungkul.jpg', collections: [
    { id: 2, kind: 'feed', items: [W('after-taman-bungkul'), W('after-rumah-wanula'), W('staff-fundraising')] },
  ] },
  { id: 3, hero: '/works/sparked-foto.jpg', collections: [
    { id: 3, kind: 'print', items: [W('sparked-foto', 'wide', 1600 / 1200)] },
    { id: 4, kind: 'print', items: [W('enlit-foto', 'poster', 1200 / 2133)] },
  ] },
  { id: 4, hero: '/works/sertif-enlit.jpg', collections: [
    { id: 5, kind: 'sheet', items: [W('sertif-enlit', 'wide', 1800 / 1272), W('paper-enlit', 'wide', 1542 / 1490)] },
    { id: 6, kind: 'sheet', items: [W('sertif-fundraising', 'wide', 1800 / 1272), W('sertif-sparked', 'wide', 1800 / 1272)] },
  ] },
]

export const CONTACT = {
  email: 'alyahfitrahpermata@gmail.com',
  instagram: '@alyahftrh_',
  phone: '081244805269',
  whatsapp: '6281244805269',
  linkedin: '',
  city: 'Surabaya',
}
export const SOFTWARE = [
  { k: 'Ca', n: 'Canva' },
  { k: 'Cc', n: 'CapCut' },
  { k: 'Dc', n: 'Google Docs' },
  { k: 'Sh', n: 'Spreadsheet' },
]
export const NAV = [
  { id: 'cover', key: 'nav.home' },
  { id: 'about', key: 'nav.about' },
  { id: 'profile', key: 'nav.profile' },
  { id: 'works', key: 'nav.works' },
  { id: 'contact', key: 'nav.contact' },
] as const
