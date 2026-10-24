# Plan: Portfolio Landing Page – Diseñadora UX / Web / Ilustradora

## Context

Landing page portfolio en español para una diseñadora UX, diseñadora web e ilustradora. La referencia visual es el sitio de "megan roy": fondo crema, tipografía bold/redondeada, marquee animado con texto outline gigante, grid de proyectos en 3 columnas, separadores finos. El footer incluye un bloque estilo "Explore on Insta" con 3 posts y botón. Todo en español.

## Tokens de diseño (definitivos)

```
Fondo:        #FAF9F2  (crema cálido)
Texto:        #131816  (casi negro)
Acento:       #EEBBAA  (coral/rosa suave)
Divisoras:    #164427  (verde oscuro)
```

## Tipografía

| Uso | Familia | Peso |
|-----|---------|------|
| Logo / nombre | `Nunito` 900 Black *(ver nota sobre Hore)* | 900 |
| Headings sección | `Nunito` 900 Black, letter-spacing 9px, UPPERCASE | 900 |
| Body | `Nunito` 400 / 500 | 400–500 |

> **Nota sobre "Hore"**: la fuente "Hore" no está disponible en Google Fonts ni como fuente de archivo en este proyecto (`figma fonts list` devolvió vacío). Se usará **Nunito Black 900** para el logo, que tiene un carácter bold/redondeado similar. Si tienes el archivo de fuente Hore (.ttf/.woff2), puedes compartirlo para instalarlo con `@font-face`.

Google Fonts – cargar en `src/index.css` (antes de todo):
```css
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;900&display=swap');
```

## Animaciones

1. **Marquee horizontal** – texto gigante con `WebkitTextStroke` outline, scroll infinito izq→der con CSS `@keyframes marquee`. Texto repetido: `"diseño ux • diseño web • ilustración • diseño de estampas localizadas • estampas continuas • estampas personalizadas •"`
2. **Fade-in on scroll** – `IntersectionObserver` en React: cada sección entra con `opacity 0→1` + `translateY(24px→0)`, transition 600ms.
3. **Hover tarjetas portafolio** – `scale(1.03)` + `box-shadow` suave, transition 300ms.

## Estructura de secciones

### 1. Header (sticky)
- Logo izquierda: nombre en Nunito 900
- Nav derecha: Portafolio · Servicios · Tienda · Sobre mí · Contacto
- Hamburger para móvil (menú desplegable)
- Fondo transparente → `#FAF9F2` + borde inferior `#164427` 1px al hacer scroll (`scrollY > 50`)

### 2. Hero
- Marquee animado (texto outline grande, color `#EEBBAA` con `-webkit-text-stroke: 2px #131816`)
- Línea divisora `#164427` 1px
- Tagline centrado uppercase: **"SLOW DESIGN Y ARTE CONSCIENTE."**
- Subtítulo: frase descriptiva
- Línea divisora

### 3. Portafolio
- Grid 3 columnas (→ 2 col tablet → 1 col móvil), 6 tarjetas
- Cada tarjeta: imagen Unsplash, categoría uppercase small, título
- Hover: scale(1.03) + shadow

### 4. Servicios
- 3 columnas (→ 1 col móvil): UX Design · Diseño Web · Ilustración
- Número 01/02/03, título, descripción corta

### 5. Sobre mí
- Layout 2 columnas asimétricas: texto izq (60%) + foto der (40%), stack en móvil
- Bio, lista de skills con bullets, CTA "Descarga mi CV"
- Fade-in al entrar en viewport

### 6. Proceso de trabajo
- 4 pasos en fila horizontal (→ vertical en móvil), numerados 01–04

### 7. Testimonios
- 2–3 cards con cita, nombre y rol del cliente

### 8. Contacto
- CTA centrado grande, email + botón "Escríbeme"
- Links sociales: Behance · Instagram · LinkedIn

### 9. Footer
- **Bloque Instagram** (igual que `ig.png`):
  - Fondo oscuro `#131816`, heading `"Sígueme en Insta."` Nunito 900 con subrayado
  - Ícono circular de Instagram
  - 3 imágenes cuadradas en fila (Unsplash, coloridas/ilustración)
  - Botón `"Seguir en Instagram"` estilo pill con ícono
- Barra inferior: nombre · copyright · links de redes

## Archivos a modificar

| Archivo | Acción |
|---------|--------|
| `src/index.css` | `@import` Nunito, variables CSS tokens, `@keyframes marquee`, `.fade-in` utility |
| `src/App.tsx` | Todo el contenido de la landing (componentes inline, single-page) |

## Imágenes Unsplash

Buscar con la herramienta `search_photos` al implementar:
- Portafolio: "colorful illustration design", "ux design sketchbook", "surface pattern design"
- Sobre mí: "woman designer working studio"
- Footer Instagram: 3 imágenes de arte/ilustración coloridas

## Responsive

| Breakpoint | Comportamiento |
|------------|----------------|
| `>= 1024px` | Layout desktop completo |
| `768–1023px` | Grids 2 col, nav comprimida |
| `< 768px` | Stack vertical, hamburger activo |

## Verificación

1. Preview panel – scroll completo por todas las secciones
2. Marquee corre sin cortes
3. Fade-ins se disparan al entrar en viewport
4. Hover tarjetas funciona
5. Header cambia fondo al scrollear
6. Hamburger abre/cierra el menú en móvil
7. Breakpoints 375px y 1280px correctos
