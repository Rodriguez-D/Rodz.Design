import { useState, useEffect, type CSSProperties } from 'react'
import { FadeSection, IgIcon, H2, PORTFOLIO, type Work, INSTA_POSTS, MARQUEE_TEXT, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '@/components/shared'

const BATCH = 12
const MARQUEE_COLORS = ['#EDA73F', '#164427', '#D9694F', '#3E8E8A', '#8A4F7D', '#C9A227']
const MARQUEE_PHRASES = MARQUEE_TEXT.split('•').map(t => t.trim()).filter(Boolean)

function useColumnCount() {
  const calc = () => (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1)
  const [n, setN] = useState(calc)
  useEffect(() => {
    const on = () => setN(calc())
    window.addEventListener('resize', on)
    return () => window.removeEventListener('resize', on)
  }, [])
  return n
}

export default function Home() {
  const cols = useColumnCount()
  const [visible, setVisible] = useState(BATCH)
  const shown = PORTFOLIO.slice(0, visible)
  const hasMore = visible < PORTFOLIO.length
  const [active, setActive] = useState<Work | null>(null)

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-20 overflow-hidden">
        <div className="overflow-hidden py-10 md:py-16 cursor-default select-none">
          <div className="marquee-inner">
            {[0, 1].map(i => (
              <span
                key={i}
                aria-hidden={i === 1}
                className="font-mplus font-black uppercase leading-none pr-6"
                style={{ fontSize: 'clamp(60px,12vw,130px)', color: 'transparent', WebkitTextStroke: '2px #EEBBAA' }}
              >
                {MARQUEE_PHRASES.map((t, j) => (
                  <span key={j}>
                    <span className="marquee-glass" style={{ '--c': MARQUEE_COLORS[j % MARQUEE_COLORS.length] } as CSSProperties}>{t}</span>
                    <span className="marquee-glass" style={{ '--c': '#EEBBAA' } as CSSProperties}>{' • '}</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-divider" />
        <div className="text-center py-14 px-6">
          <h1 className="hero-glow font-outfit font-bold uppercase" style={{ fontSize: 'clamp(1.7rem,3vw,2.2rem)', letterSpacing: '9px', border: 'none', boxShadow: 'none' }}>
            Slow design y Arte consciente.
          </h1>
          <p className="mt-4 text-base font-normal text-fg/80 mx-auto leading-relaxed md:whitespace-nowrap">
            Diseñadora UX, diseñadora web e ilustradora que crea con intención, calma y cada detalle importa.
          </p>
        </div>
        <div className="border-t border-transparent" />
      </section>

      {/* ── PORTAFOLIO ────────────────────────────────────────────────────── */}
      <section id="portafolio" className="pb-16">
        <div className="flex gap-[6px] px-[6px] items-start">
          {Array.from({ length: cols }, (_, c) => (
            <div key={c} className="flex-1 min-w-0">
          {shown.filter((_, i) => i % cols === c).map(p => (
            <div key={p.title} className="masonry-item cursor-pointer" role="button" tabIndex={0} onClick={() => setActive(p)} onKeyDown={e => e.key === 'Enter' && setActive(p)}>
              <div className="masonry-img-wrap">
                <div className="masonry-label">
                  {p.title}
                  <span className="masonry-label-sep">|</span>
                  {p.cat}
                </div>
                <img src={p.url} alt={p.title} loading="lazy" />
              </div>
            </div>
          ))}
            </div>
          ))}
        </div>
        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisible(v => Math.min(v + BATCH, PORTFOLIO.length))}
              className="font-outfit font-bold uppercase px-10 py-4 bg-fg text-bg hover:bg-divider transition-colors duration-300 cursor-pointer"
              style={{ fontSize: '0.65rem', letterSpacing: '6px' }}
            >
              Cargar más
            </button>
          </div>
        )}
      </section>

      {active && (
        <div className="fixed inset-0 z-[10000] bg-bg overflow-y-auto" style={{ backgroundImage: "url('/paper-texture2.jpg')", backgroundSize: 'cover', backgroundBlendMode: 'multiply' }} role="dialog" aria-modal="true" aria-label={active.title}>
          <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-bg/90 backdrop-blur border-b border-divider/20">
            <p className="font-outfit font-semibold text-lg text-fg">
              {active.title}<span className="mx-2 opacity-30">|</span>{active.cat}
            </p>
            <button
              onClick={() => setActive(null)}
              aria-label="Cerrar"
              className="w-11 h-11 flex items-center justify-center text-fg hover:text-divider cursor-pointer"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 3L19 19M19 3L3 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            </button>
          </div>
          <div className="max-w-3xl mx-auto px-4 py-8 flex flex-col gap-4">
            {(active.gallery ?? [active.url, active.url, active.url]).map((src, i) => (
              <img key={i} src={src} alt={`${active.title} — imagen ${i + 1}`} className="w-full h-auto block bg-white" />
            ))}
          </div>
        </div>
      )}

      {/* ── INSTAGRAM ─────────────────────────────────────────────────────── */}
      <div className="bg-divider py-16 px-6 mt-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-outfit font-bold text-bg leading-tight mb-1">
            Sígueme en <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-accent">Instagram.</a>
          </h2>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 mt-5 mb-8 group w-fit">
            <div className="w-14 h-14 rounded-full border-2 border-bg flex items-center justify-center text-bg group-hover:bg-bg group-hover:text-divider transition-colors duration-300">
              <IgIcon size={26} />
            </div>
            <span className="text-xl md:text-2xl font-outfit font-bold text-accent tracking-wide">{INSTAGRAM_HANDLE}</span>
          </a>
          <div className="grid grid-cols-3 gap-2 mb-8">
            {INSTA_POSTS.map((p, i) => (
              <a key={p.href} href={p.href} target="_blank" rel="noopener noreferrer" className="aspect-square overflow-hidden bg-bg/10 block">
                <img src={p.img} alt={`Publicación ${i + 1} de Instagram`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </a>
            ))}
          </div>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 font-outfit font-bold uppercase px-7 py-3.5 bg-bg text-fg hover:bg-accent transition-colors duration-300" style={{ fontSize: '0.65rem', letterSpacing: '4px' }}>
            <IgIcon size={14} />
            Seguir en Insta
          </a>
        </div>
      </div>
    </>
  )
}
