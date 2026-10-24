import { Link } from 'react-router'
import { FadeSection, ABOUT_IMG, BEHANCE_URL, BEHANCE_UX_URL } from '@/components/shared'

const SKILLS = ['UX Research', 'Figma', 'Diseño Web', 'Ilustración Digital', 'Estampas', 'Branding', 'Prototipos', 'HTML & CSS']

export default function SobreMi() {
  return (
    <main className="pt-20">

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <FadeSection className="py-20 px-6 border-b border-divider">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-3 order-2 lg:order-1">
            <h2 className="font-outfit font-bold uppercase text-fg tracking-[9px] text-[1.5rem] mb-10">Sobre mí.</h2>
            <p className="text-3xl md:text-4xl font-outfit font-bold text-fg leading-snug mb-7">
              Creo desde la calma.<br />Diseño con propósito.
            </p>
            <p className="text-sm font-normal text-fg/65 leading-relaxed mb-4 max-w-xl">
              Soy diseñadora UX, diseñadora web e ilustradora. Trabajo con marcas que creen que la belleza y la funcionalidad no están reñidas. Me especializo en proyectos que necesitan identidad, coherencia y un toque de originalidad genuina.
            </p>
            <p className="text-sm font-normal text-fg/65 leading-relaxed mb-9 max-w-xl">
              Cuando no estoy diseñando, ilustro, busco patrones en las baldosas de la ciudad y leo sobre sistemas de diseño con un café que siempre se enfría demasiado pronto.
            </p>
            <ul className="flex flex-wrap gap-2 mb-9">
              {SKILLS.map(skill => (
                <li key={skill} className="text-[10px] font-outfit font-semibold uppercase tracking-wider px-3 py-1.5 border border-divider text-fg/60">
                  {skill}
                </li>
              ))}
            </ul>
            <Link
              to="/contacto"
              className="inline-block font-outfit font-bold uppercase px-7 py-3.5 bg-fg text-bg hover:bg-divider transition-colors duration-300"
              style={{ fontSize: '0.65rem', letterSpacing: '6px' }}
            >
              Trabajemos juntas
            </Link>
          </div>
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="aspect-[3/4] overflow-hidden bg-accent/30 max-w-sm mx-auto lg:max-w-none">
              <img src={ABOUT_IMG} alt="Diseñadora trabajando en su estudio" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </FadeSection>

      {/* ── SERVICIOS ─────────────────────────────────────────────────────── */}
      <FadeSection id="servicios" className="py-20 px-6 border-t border-divider">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-outfit font-bold uppercase text-fg tracking-[9px] text-[1.5rem] mb-14">Servicios.</h2>

          {/* Subsección: Experiencias & Interfaces */}
          <p className="text-[9px] font-outfit font-bold uppercase tracking-[6px] text-fg/30 mb-8">Experiencias & Interfaces</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mb-16">
            {[
              { n: '01', title: 'Diseño UX', desc: 'Investigación de usuarios, arquitectura de información, wireframes y prototipos que ponen a las personas en el centro. Diseño funcional y con propósito.' },
              { n: '02', title: 'Diseño Web', desc: 'Sitios web con identidad propia, cuidados al detalle. Desde la estructura hasta la última micro-interacción. Funcionales, bellos y rápidos.' },
            ].map(s => (
              <div key={s.n} className="border-t-2 border-fg pt-6">
                <span className="text-xs font-outfit font-bold uppercase tracking-widest text-fg/25">{s.n}</span>
                <h3 className="text-lg font-outfit font-bold uppercase text-fg mt-2 mb-5 leading-tight" style={{ letterSpacing: '4px' }}>
                  {s.title}
                </h3>
                <p className="text-sm font-normal text-fg/65 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-16 -mt-4">
            <a
              href={BEHANCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-outfit font-bold border-[3px] border-fg text-fg hover:bg-fg hover:text-bg transition-colors duration-300 group px-7 py-4"
              style={{ fontSize: '0.65rem', letterSpacing: '6px', textTransform: 'uppercase' }}
            >
              Behance · Ilustración
              <svg width="13" height="13" viewBox="0 0 12 12" fill="none" className="group-hover:translate-x-0.5 transition-transform duration-300">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href={BEHANCE_UX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-outfit font-bold border-[3px] border-fg text-fg hover:bg-fg hover:text-bg transition-colors duration-300 group px-7 py-4"
              style={{ fontSize: '0.65rem', letterSpacing: '6px', textTransform: 'uppercase' }}
            >
              Behance · UX y Web
              <svg width="13" height="13" viewBox="0 0 12 12" fill="none" className="group-hover:translate-x-0.5 transition-transform duration-300">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Subsección: Ilustración & Estampas */}
          <p className="text-[9px] font-outfit font-bold uppercase tracking-[6px] text-fg/30 mb-8">Ilustración & Estampas</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">
            {[
              { n: '03', title: 'Ilustración', desc: 'Ilustraciones originales con alma propia. Para marcas que quieren comunicar de forma original y memorable.' },
              { n: '04', title: 'Estampas Localizadas', desc: 'Diseños de estampas ubicadas con precisión en una prenda o producto. Composición pensada para cada pieza.' },
              { n: '05', title: 'Estampas Continuas', desc: 'Patrones que se repiten de forma fluida y sin cortes visibles. Ideales para telas, papeles y superficies.' },
              { n: '06', title: 'Estampas Personalizadas', desc: 'Estampas creadas desde cero según tu identidad, paleta y propósito. Únicas y adaptadas a tu proyecto.' },
            ].map(s => (
              <div key={s.n} className="border-t-2 border-fg pt-6">
                <span className="text-xs font-outfit font-bold uppercase tracking-widest text-fg/25">{s.n}</span>
                <h3 className="text-lg font-outfit font-bold uppercase text-fg mt-2 mb-5 leading-tight" style={{ letterSpacing: '4px' }}>
                  {s.title}
                </h3>
                <p className="text-sm font-normal text-fg/65 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeSection>



    </main>
  )
}
