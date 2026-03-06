import { Compass, Sparkles, HeartHandshake, PartyPopper, Mic, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface AgendaEvent {
  type: "Retiro" | "Taller" | "Festival" | "Conferencia";
  name: string;
  icon: LucideIcon;
  location: string;
  date: string;
  dateDetail: string;
  link: string;
  highlighted: boolean;
  slug: "viaje-sanador" | "desaprender" | "vinculos-autenticos" | "fiesta-pedagogia" | "guadalajara";
}

const WHATSAPP_URL = "https://wa.me/5491162720879";

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
    type: "Conferencia",
    name: "Pedagogía del Vínculo",
    icon: Mic,
    location: "Guadalajara",
    date: "Abril 2025",
    dateDetail: "14 de Abril",
    link: "/guadalajara",
    highlighted: false,
    slug: "guadalajara",
  },
  {
    type: "Taller",
    name: "Eneagrama para Educadores",
    icon: Users,
    location: "Espacio Alas, Guadalajara",
    date: "Abril 2025",
    dateDetail: "18 de Abril",
    link: "/guadalajara",
    highlighted: false,
    slug: "guadalajara",
  },
  {
    type: "Retiro",
    name: "DesAprender",
    icon: Sparkles,
    location: "Guadalajara",
    date: "Abril 2025",
    dateDetail: "24 y 25 de Abril",
    link: "/guadalajara",
    highlighted: false,
    slug: "guadalajara",
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

export function getNextEventsForSlug(slug: AgendaEvent["slug"]): AgendaEvent[] {
  return upcomingEvents.filter((e) => e.slug === slug);
}

export { WHATSAPP_URL };
