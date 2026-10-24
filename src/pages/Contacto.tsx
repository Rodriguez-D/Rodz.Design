import { FadeSection, H2, INSTAGRAM_URL, BEHANCE_LINKS } from '@/components/shared'

export default function Contacto() {
  return (
    <main className="pt-20">

      {/* ── CONTACTO ──────────────────────────────────────────────────────── */}
      <FadeSection className="py-28 px-6 border-b border-divider">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className={`${H2} mb-8`}>Contacto.</h2>
          <p className="text-3xl md:text-4xl font-outfit font-bold text-fg leading-snug mb-5">
            ¿Tienes un proyecto<br />en mente?
          </p>
          <p className="text-sm font-normal text-fg/55 mb-11 leading-relaxed">
            Cuéntame tu idea. Respondo en menos de 48 horas.
          </p>
          <a
            href="mailto:hola@tudominio.com"
            className="inline-block font-outfit font-bold uppercase px-10 py-4 bg-fg text-bg hover:bg-divider transition-colors duration-300 mb-10"
            style={{ fontSize: '0.65rem', letterSpacing: '6px' }}
          >
            Hablemos
          </a>
          <div className="flex justify-center gap-8">
            {[...BEHANCE_LINKS, { label: 'Instagram', url: INSTAGRAM_URL }, { label: 'LinkedIn', url: '' }].map(r => (
              <a key={r.label} href={r.url || '#'} target={r.url ? '_blank' : undefined} rel="noopener noreferrer" className="nav-link text-[10px] font-outfit font-semibold uppercase tracking-widest">
                {r.label}
              </a>
            ))}
          </div>
        </div>
      </FadeSection>

      {/* ── INFO ──────────────────────────────────────────────────────────── */}
      <FadeSection className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {[
            {
              n: '01',
              title: 'Email',
              desc: 'hola@tudominio.com',
              link: 'mailto:hola@tudominio.com',
            },
            {
              n: '02',
              title: 'Disponibilidad',
              desc: 'Actualmente disponible para proyectos freelance. Tiempo de respuesta menor a 48 h.',
              link: null,
            },
            {
              n: '03',
              title: 'Redes',
              desc: 'Instagram · Behance Ilustración · Behance UX y Web · @creativecuis',
              link: INSTAGRAM_URL,
            },
          ].map(item => (
            <div key={item.n} className="border-t-2 border-fg pt-6">
              <span className="text-xs font-outfit font-bold uppercase tracking-widest text-fg/25">{item.n}</span>
              <h3 className="text-sm font-outfit font-bold uppercase text-fg mt-2 mb-4 leading-tight" style={{ letterSpacing: '4px' }}>
                {item.title}
              </h3>
              {item.link ? (
                <a href={item.link} className="text-sm font-normal text-fg/65 hover:text-fg transition-colors leading-relaxed underline underline-offset-4 decoration-accent">
                  {item.desc}
                </a>
              ) : (
                <p className="text-sm font-normal text-fg/65 leading-relaxed">{item.desc}</p>
              )}
            </div>
          ))}
        </div>
      </FadeSection>

    </main>
  )
}
