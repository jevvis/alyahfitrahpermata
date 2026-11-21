import { useId } from 'react'

// Ikon aplikasi (gambar ulang sebagai SVG, mengikuti bentuk dan warna logo aplikasinya).
type Props = { k: string; className?: string }

function Doc({ main, fold, children }: { main: string; fold: string; children: React.ReactNode }) {
  return (
    <>
      <path d="M12 4h17l9 9v29a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" fill={main} />
      <path d="M29 4v7a2 2 0 0 0 2 2h7z" fill={fold} />
      {children}
    </>
  )
}

export default function ToolIcon({ k, className = 'h-12 w-12' }: Props) {
  const gid = `ic-canva-${useId().replace(/:/g, '')}`
  return (
    <svg viewBox="0 0 48 48" className={`${className} drop-shadow-[0_4px_6px_rgba(6,14,55,.3)]`} role="img" aria-hidden="true">
      {k === 'Ca' && (
        <>
          <defs>
            <linearGradient id={gid} x1="0.1" y1="0.95" x2="0.9" y2="0.05">
              <stop offset="0" stopColor="#00c4cc" />
              <stop offset="0.55" stopColor="#4f6bf0" />
              <stop offset="1" stopColor="#7d2ae8" />
            </linearGradient>
          </defs>
          <circle cx="24" cy="24" r="23" fill={`url(#${gid})`} />
          <path d="M31.6 17.6A11 11 0 1 0 31.6 30.4" fill="none" stroke="#fff" strokeWidth="4.6" strokeLinecap="round" />
        </>
      )}
      {k === 'Cc' && (
        <>
          <rect x="1" y="1" width="46" height="46" rx="11" fill="#0b0b0f" />
          <path d="M9 19 24 11.5v6.5l-8 3.6v6.8l8 3.6v6.5L9 30z" fill="#fff" />
          <path d="M27 17.5 39 23v2L27 30.5V25l5.2-2L27 21z" fill="#fff" />
        </>
      )}
      {k === 'Dc' && (
        <Doc main="#4285f4" fold="#a1c2fa">
          <rect x="16" y="22" width="16" height="2.6" rx="1.2" fill="#fff" />
          <rect x="16" y="27.5" width="16" height="2.6" rx="1.2" fill="#fff" />
          <rect x="16" y="33" width="10" height="2.6" rx="1.2" fill="#fff" />
        </Doc>
      )}
      {k === 'Sh' && (
        <Doc main="#0f9d58" fold="#87ceac">
          <rect x="16" y="22" width="16" height="14.5" rx="1.2" fill="none" stroke="#fff" strokeWidth="2.2" />
          <path d="M16 27h16M16 31.8h16M22.4 22v14.5" stroke="#fff" strokeWidth="2" />
        </Doc>
      )}
    </svg>
  )
}
