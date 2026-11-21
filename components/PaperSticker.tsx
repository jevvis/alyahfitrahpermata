import { tornClip } from '@/lib/paper'

type Props = {
  seed?: number
  tone?: 'cream' | 'paper' | 'white'
  className?: string
  innerClassName?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

const TONE = {
  cream: 'bg-cream',
  paper: 'bg-paper',
  white: 'bg-[#fbf7f0]',
}

/** Kertas sobek: parent memberi bayangan (drop-shadow), anak dipotong dengan clip-path tak beraturan. */
export default function PaperSticker({ seed = 1, tone = 'cream', className = '', innerClassName = '', style, children }: Props) {
  return (
    <div className={className} style={{ filter: 'drop-shadow(0 12px 16px rgba(60,0,10,.32))', ...style }}>
      <div
        className={`${TONE[tone]} ${innerClassName}`}
        style={{
          clipPath: tornClip(seed),
          backgroundImage: 'radial-gradient(rgba(120,80,40,.07) 1px, transparent 1.2px)',
          backgroundSize: '5px 5px',
        }}
      >
        {children}
      </div>
    </div>
  )
}
