import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router'
import { INSTAGRAM_URL, BEHANCE_LINKS, PINTEREST_URL } from '@/components/shared'

const TIENDA_LINKS = [
  { label: 'Tienda Nube', href: 'https://www.tiendanube.com' },
]

const NAV_LINKS = [
  { label: 'Portafolio', to: '/#portafolio' },
  { label: 'Sobre mí', to: '/sobre-mi' },
]

const NAV_LINKS_AFTER = [
  { label: 'Contacto', to: '/contacto' },
]

function TiendaDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="nav-link text-lg font-semibold font-outfit flex items-center gap-1 cursor-pointer"
      >
        Tienda
        <svg
          width="10" height="10" viewBox="0 0 10 10" fill="none"
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-bg border border-divider shadow-sm min-w-[220px] z-50">
          <div className="px-5 py-3 border-b border-divider/30">
            <span className="text-xs font-outfit font-bold uppercase tracking-widest text-fg/60">
              Tiendas
            </span>
          </div>
          {TIENDA_LINKS.map(t => (
            <a
              key={t.label}
              href={t.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between px-5 py-4 text-base font-outfit font-semibold text-fg hover:bg-accent/20 transition-colors duration-150 group"
            >
              {t.label}
              <svg width="14" height="14" viewBox="0 0 10 10" fill="none" className="opacity-50 group-hover:opacity-90 transition-opacity">
                <path d="M2 8L8 2M8 2H4M8 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Root() {
  const [scrolled, setScrolled] = useState(false)
  const [overPlain, setOverPlain] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [tiendaMobileOpen, setTiendaMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const heroEl = document.querySelector<HTMLElement>('section.pt-20')
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 50)
      const heroBottom = heroEl ? heroEl.offsetTop + heroEl.offsetHeight : 300
      setOverPlain(y < heroBottom)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  useEffect(() => {
    setMenuOpen(false)
    setTiendaMobileOpen(false)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-bg text-fg font-nunito">

      {/* ── HEADER ──────────────────────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: overPlain ? 'rgba(237, 167, 63, 0.12)' : 'rgba(237, 167, 63, 0.30)',
          backdropFilter: 'blur(18px) saturate(1.6)',
          WebkitBackdropFilter: 'blur(18px) saturate(1.6)',
          boxShadow: '0 4px 24px rgba(22, 68, 39, 0.10), 0 1px 0 rgba(238, 187, 170, 0.30)',
          borderBottom: '1px solid rgba(237, 167, 63, 0.35)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl md:text-3xl font-fraunces italic font-semibold tracking-tight text-fg hover:text-divider transition-colors">
            Diana Rodz
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(l => {
              const isRoute = !l.to.includes('#')
              return isRoute ? (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `nav-link text-lg font-semibold font-outfit${isActive ? ' text-divider nav-link-active' : ''}`
                  }
                >
                  {l.label}
                </NavLink>
              ) : (
                <a
                  key={l.to}
                  href={l.to}
                  className={`nav-link text-base font-semibold font-outfit${location.pathname === '/' ? ' text-divider nav-link-active' : ''}`}
                >
                  {l.label}
                </a>
              )
            })}
            <TiendaDropdown />
            {NAV_LINKS_AFTER.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `nav-link text-lg font-semibold font-outfit${isActive ? ' text-divider nav-link-active' : ''}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Abrir menú"
          >
            <span className={`block w-6 h-[2px] bg-fg origin-center transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-[2px] bg-fg transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[2px] bg-fg origin-center transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 bg-bg border-t border-divider ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="px-6 py-5 flex flex-col gap-4">
            {NAV_LINKS.map(l => {
              const isRoute = !l.to.includes('#')
              return isRoute ? (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className="nav-link text-lg font-bold font-outfit"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </NavLink>
              ) : (
                <a
                  key={l.to}
                  href={l.to}
                  onClick={() => setMenuOpen(false)}
                  className={`nav-link text-lg font-bold font-outfit${location.pathname === '/' ? ' text-divider nav-link-active' : ''}`}
                >
                  {l.label}
                </a>
              )
            })}

            {/* Tienda — mobile accordion */}
            <div>
              <button
                onClick={() => setTiendaMobileOpen(o => !o)}
                className="nav-link text-lg font-bold font-outfit flex items-center gap-2 w-full cursor-pointer"
              >
                Tienda
                <svg
                  width="10" height="10" viewBox="0 0 10 10" fill="none"
                  className={`transition-transform duration-200 ${tiendaMobileOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {tiendaMobileOpen && (
                <div className="mt-2 pl-3 flex flex-col gap-2 border-l border-divider/40">
                  {TIENDA_LINKS.map(t => (
                    <a
                      key={t.label}
                      href={t.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMenuOpen(false)}
                      className="text-base font-outfit font-semibold text-fg/80 hover:text-fg transition-colors"
                    >
                      {t.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {NAV_LINKS_AFTER.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                className="nav-link text-lg font-bold font-outfit"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* ── PAGE CONTENT ────────────────────────────────────────────────────── */}
      <Outlet />

      {/* ── FOOTER BAR ──────────────────────────────────────────────────────── */}
      <div className="bg-fg border-t border-bg/10 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] font-outfit font-semibold text-bg tracking-wide">
            © 2026 Diana Rodz. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {[...BEHANCE_LINKS, { label: 'Instagram', url: INSTAGRAM_URL }, { label: 'Pinterest', url: PINTEREST_URL }].map(r => (
              <a key={r.label} href={r.url} target="_blank" rel="noopener noreferrer" className="text-[11px] font-outfit font-semibold uppercase tracking-widest text-bg hover:text-bg transition-colors duration-200">
                {r.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
