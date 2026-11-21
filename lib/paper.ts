// Tepi kertas sobek: polygon clip-path dengan jitter acak yang deterministik (seed tetap, aman untuk SSR).
function rng(seed: number) {
  let s = seed >>> 0 || 1
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0
    return s / 4294967296
  }
}

export function tornClip(seed: number, jitter = 1.6, step = 6): string {
  const r = rng(seed * 7919)
  const pts: string[] = []
  const j = () => (r() - 0.5) * 2 * jitter
  for (let x = 0; x <= 100; x += step) pts.push(`${Math.min(100, Math.max(0, x + j() * 0.5)).toFixed(2)}% ${Math.max(0, j() + 1.2).toFixed(2)}%`)
  for (let y = step; y < 100; y += step) pts.push(`${(100 - Math.abs(j()) - 0.6).toFixed(2)}% ${y}%`)
  for (let x = 100; x >= 0; x -= step) pts.push(`${Math.min(100, Math.max(0, x + j() * 0.5)).toFixed(2)}% ${(100 - Math.abs(j()) - 0.6).toFixed(2)}%`)
  for (let y = 100 - step; y > 0; y -= step) pts.push(`${(Math.abs(j()) + 0.6).toFixed(2)}% ${y}%`)
  return `polygon(${pts.join(',')})`
}

// Pola monogram (inisial) sebagai latar SVG berulang.
export function monogramBg(letters: string, color = 'rgba(255,255,255,0.075)'): string {
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' width='170' height='170'>` +
    `<g fill='${color}' font-family='Impact,Arial Black,sans-serif' font-weight='900' font-size='58'>` +
    `<text x='14' y='70' transform='rotate(-14 40 50)'>${letters}</text>` +
    `<text x='96' y='148' transform='rotate(-14 120 128)'>${letters}</text></g></svg>`
  return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`
}
