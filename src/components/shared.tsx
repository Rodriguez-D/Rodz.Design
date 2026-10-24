import React, { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'

export const H2 = 'font-outfit font-bold uppercase text-fg tracking-[9px] text-[0.75rem]'

export type Work = { url: string; title: string; cat: string; gallery?: string[] }

export const PORTFOLIO: Work[] = [
  // vertical 2:3
  { url: '/portfolio/work-1.jpg', title: 'Guanaco Silvestre', cat: 'Ilustración', gallery: ['/portfolio/work-1.jpg', '/portfolio/guanaco-2.jpg', '/portfolio/work-1.jpg'] },
  // vertical 5:7
  { url: '/portfolio/work-3.png', title: 'Palacio Barolo', cat: 'Ilustración', gallery: ['/portfolio/work-3.png', '/portfolio/barolo-2.jpg', '/portfolio/barolo-3.jpg'] },
  // horizontal 16:9
  { url: '/portfolio/work-2.jpg', title: 'Cápsula guanacos infantiles', cat: 'Ilustración' },
  // horizontal 4:3
  { url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop&auto=format&q=80', title: 'Sistema Cromático', cat: 'Diseño Web' },
  // vertical 3:4
  { url: 'https://images.unsplash.com/photo-1677297680558-df5641e505ee?w=600&h=800&fit=crop&auto=format&q=80', title: 'Estampas Oníricas', cat: 'Ilustración' },
  // square 1:1
  { url: 'https://images.unsplash.com/photo-1780404361406-14cc5150ac1f?w=700&h=700&fit=crop&auto=format&q=80', title: 'Mural Urbano', cat: 'Ilustración' },
  // horizontal 3:2
  { url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&h=600&fit=crop&auto=format&q=80', title: 'Interfaz Serenidad', cat: 'UX Design' },
  // vertical 2:3
  { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=900&fit=crop&auto=format&q=80', title: 'Marca Raíz', cat: 'Branding' },
  // square 1:1
  { url: 'https://images.unsplash.com/photo-1596443686812-2f45229eebc3?w=700&h=700&fit=crop&auto=format&q=80', title: 'Estampas Celestes', cat: 'Estampas' },
  // horizontal 16:9
  { url: 'https://images.unsplash.com/photo-1762865417860-a7649c9f4745?w=900&h=506&fit=crop&auto=format&q=80', title: 'App Bienestar', cat: 'UX Design' },
  // vertical 3:5
  { url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=500&h=833&fit=crop&auto=format&q=80', title: 'Fauna Nocturna', cat: 'Ilustración' },
  // horizontal 4:3
  { url: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=800&h=600&fit=crop&auto=format&q=80', title: 'Jardín Tipográfico', cat: 'Branding' },
  // — Load More batch —
  { url: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=700&h=700&fit=crop&auto=format&q=80', title: 'Tejido Urbano', cat: 'Estampas' },
  { url: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&h=900&fit=crop&auto=format&q=80', title: 'Flujo Digital', cat: 'UX Design' },
  { url: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=900&h=506&fit=crop&auto=format&q=80', title: 'Paleta Salvaje', cat: 'Ilustración' },
  { url: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=700&h=700&fit=crop&auto=format&q=80', title: 'Espacio Blanco', cat: 'Diseño Web' },
  { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&auto=format&q=80', title: 'Retrato de Marca', cat: 'Branding' },
  { url: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=900&h=600&fit=crop&auto=format&q=80', title: 'Textura Viva', cat: 'Estampas' },
]

export const ABOUT_IMG = 'https://images.unsplash.com/photo-1744686909434-fd158fca1c35?w=600&h=750&fit=crop&auto=format'

export const INSTA_POSTS = [
  { img: '/insta/post-1.png', href: 'https://www.instagram.com/p/DeF3CEYDKkC/' },
  { img: '/insta/post-2.png', href: 'https://www.instagram.com/p/DeQM4mbjK_e/' },
  { img: '/insta/post-3.png', href: 'https://www.instagram.com/p/DeSsWMujNx8/' },
]

export const MARQUEE_TEXT = 'diseño ux • diseño web • ilustración • diseño de estampas localizadas • estampas continuas • estampas personalizadas • '

export function FadeSection({ children, className = '', id }: { children: ReactNode; className?: string; id?: string }) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold: 0, rootMargin: '0px 0px -20px 0px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <section ref={ref as React.RefObject<HTMLElement>} id={id} className={`fade-section ${className}`}>
      {children}
    </section>
  )
}

export function IgIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export const INSTAGRAM_URL = 'https://www.instagram.com/creativecuis/'
export const INSTAGRAM_HANDLE = '@creativecuis'
export const BEHANCE_URL = 'https://www.behance.net/creativecuis'
export const BEHANCE_UX_URL = 'https://www.behance.net/Rodriguez-Diana'
export const BEHANCE_LINKS = [
  { label: 'Behance Ilustración', url: BEHANCE_URL },
  { label: 'Behance UX y Web', url: BEHANCE_UX_URL },
]
export const PINTEREST_URL = 'https://ar.pinterest.com/creativecuis/'
