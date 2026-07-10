## Plan: Página /barcelona — "El Camino del Vínculo"

### 1. Nueva página `src/pages/Barcelona.tsx`

Estructura vertical, ancho de columna moderado (~max-w-3xl) para lectura cómoda, envuelta en `<Layout>` con `FadeIn` de la web.

- **Hero compacto** (no full-screen): eyebrow "Barcelona · Julio 2026", título "El Camino del Vínculo" (font-display), subtítulo "Laboratorio vivencial de Inteligencia Vincular", línea con facilitador "Facilita: Germán Doin — Counsellor en Gestalt-Transpersonal, Director de La Educación Prohibida".
- **Ficha del evento** (card destacada con borde/acento tierra):
  - Fecha: Miércoles 22 de julio · 18:30hs
  - Duración: 3 horas
  - Lugar: Institut Integratiu · Carrer València 661, 08027 Barcelona
  - Aporte: 20€
  - CTA principal "Inscribirme" (botón sólido, estilo del sitio).
- **Texto descriptivo**: párrafos con `leading-relaxed`, `space-y-6`, tipografía body ~18px. La pregunta central *"¿Alcanza con conocerse a uno mismo para construir vínculos auténticos?"* se destaca como blockquote grande en font-display italic, con barra lateral de color acento.
- **CTA final**: bloque centrado repitiendo "Inscribirme" + recordatorio corto de fecha/lugar.
- SEO: `<title>` y `<meta description>` propios (via document.title en useEffect, como hacen otras páginas si aplica; si no, se omite).

### 2. Link de inscripción

El botón "Inscribirme" abre el mismo Google Form al que hoy redirige `public/barcelona.html`:
`https://docs.google.com/forms/d/e/1FAIpQLSc2ps_LMxdNSFZjxhIzIopaaRDSoHViPKV4E8FshO9U2Qmrvg/viewform` (target `_blank`, `rel="noopener"`).

### 3. Reemplazar el redirect actual

Borrar `public/barcelona.html` para que la ruta `/barcelona` deje de ser interceptada por el archivo estático y sea manejada por React Router.

### 4. Routing

- `src/App.tsx`: agregar `<Route path="/barcelona" element={<Barcelona />} />` y el import.
- Nota: el sitio usa `HashRouter`, así que la URL real será `/#/barcelona`. Se mantiene para consistencia con el resto del sitio.

### 5. Agenda centralizada

`src/data/agenda.ts`: agregar el evento y extender el union type `slug` con `"barcelona"`.

```ts
{
  type: "Taller Vivencial",
  name: "El Camino del Vínculo",
  icon: HeartHandshake,
  location: "Institut Integratiu, Barcelona",
  date: "Julio 2026",
  dateDetail: "Miércoles 22 de Julio · 18:30hs · 20€",
  link: "/barcelona",
  highlighted: true,
  slug: "barcelona",
}
```

### 6. Home — banner de anuncio

En `src/components/HeroSection.tsx`, agregar un tercer botón/enlace en el bloque de CTAs:
- "Próxima actividad en Barcelona · 22 de Julio" → `/barcelona`, estilo outline con acento, visible en mobile y desktop.

Además agregar "Barcelona" al dropdown Agenda en `src/components/SiteNavbar.tsx` (`agendaLinks`).

### 7. Diseño y responsive

- Colores/tipografías existentes: DM Serif Display títulos, DM Sans cuerpo, paleta tierra (terracota/ocre/verde/crema) vía tokens semánticos de `index.css`.
- Ficha del evento y CTAs con clases del sitio (`bg-primary`, `text-primary-foreground`, `border-accent`, etc.), sin hardcodear colores.
- Mobile-first: padding `px-6`, la ficha pasa a columna única, botones full-width en `sm:` hacia abajo.

### Archivos afectados

- **Nuevo**: `src/pages/Barcelona.tsx`
- **Editados**: `src/App.tsx`, `src/data/agenda.ts`, `src/components/HeroSection.tsx`, `src/components/SiteNavbar.tsx`
- **Eliminado**: `public/barcelona.html`
