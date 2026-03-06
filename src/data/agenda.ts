import { Compass, Sparkles, HeartHandshake, PartyPopper } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface AgendaEvent {
  type: "Retiro" | "Taller" | "Festival";
  name: string;
  icon: LucideIcon;
  location: string;
  date: string;
  dateDetail: string;
  link: string;
  highlighted: boolean;
  /** Used by subpages to find their next event */
  slug: "viaje-sanador" | "desaprender" | "vinculos-autenticos" | "fiesta-pedagogia";
}

const WHATSAPP_URL = "https://wa.me/5491162720879";

/*
 * ─── AGENDA CENTRALIZADA ─────────────────────────────────────
 * Esta es la ÚNICA fuente de verdad para fechas y actividades.
 * Editá este array para actualizar todo el sitio automáticamente.
 * ──────────────────────────────────────────────────────────────
 */
export const upcomingEvents: AgendaEvent[] = [
  {
    type: "Retiro",
    name: "Viaje Sanador",
    icon: Compass,
    location: "Panamá",
    date: "Abril 2025",
    dateDetail: "10 al 12 de Abril",
    link: "/viaje-sanador",
    highlighted: true,
    slug: "viaje-sanador",
  },
  {
    type: "Taller",
    name: "DesAprender",
    icon: Sparkles,
    location: "Monterrey, México",
    date: "Mayo 2025",
    dateDetail: "16 y 17 de Mayo",
    link: "/desaprender",
    highlighted: false,
    slug: "desaprender",
  },
  {
    type: "Retiro",
    name: "DesAprender",
    icon: Sparkles,
    location: "Monterrey, México",
    date: "Mayo 2025",
    dateDetail: "22 al 24 de Mayo",
    link: "/desaprender",
    highlighted: false,
    slug: "desaprender",
  },
  {
    type: "Retiro",
    name: "Vínculos Auténticos",
    icon: HeartHandshake,
    location: "Monterrey, México",
    date: "Mayo 2025",
    dateDetail: "29 al 31 de Mayo",
    link: "/vinculos-autenticos",
    highlighted: false,
    slug: "vinculos-autenticos",
  },
  {
    type: "Retiro",
    name: "Viaje Sanador",
    icon: Compass,
    location: "Chiapas, México",
    date: "Junio 2025",
    dateDetail: "5 al 7 de Junio",
    link: "/viaje-sanador",
    highlighted: false,
    slug: "viaje-sanador",
  },
  {
    type: "Retiro",
    name: "Viaje Sanador",
    icon: Compass,
    location: "México DF",
    date: "Junio 2025",
    dateDetail: "19 al 21 de Junio",
    link: "/viaje-sanador",
    highlighted: false,
    slug: "viaje-sanador",
  },
  {
    type: "Festival",
    name: "Fiesta de la Pedagogía Viva",
    icon: PartyPopper,
    location: "Por confirmar",
    date: "Julio 2025",
    dateDetail: "3 al 5 de Julio",
    link: "/agenda",
    highlighted: true,
    slug: "fiesta-pedagogia",
  },
];

/** Get next events for a given retreat slug */
export function getNextEventsForSlug(slug: AgendaEvent["slug"]): AgendaEvent[] {
  return upcomingEvents.filter((e) => e.slug === slug);
}

export { WHATSAPP_URL };
