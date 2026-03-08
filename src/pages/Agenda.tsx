import Layout from "@/components/Layout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Clock, Calendar, MessageSquare } from "lucide-react";
import { upcomingEvents, WHATSAPP_URL } from "@/data/agenda";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const internationalTour = [
  { city: "Panamá", period: "Abril 2025", active: true, link: "/panama" },
  { city: "Monterrey", period: "Mayo 2025", active: true },
  { city: "Chiapas", period: "Junio 2025", active: true },
  { city: "México DF", period: "Junio 2025", active: true },
  { city: "Guadalajara", period: "Abril 2025", active: true, link: "/guadalajara" },
  { city: "Roma", period: "Julio 2025", active: false },
  { city: "España", period: "Julio / Agosto 2025", active: false },
  { city: "Tenerife", period: "Agosto 2025", active: false },
];

const Agenda = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pb-24 px-6 sm:px-12 lg:px-16 bg-gradient-to-b from-card to-background">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <Calendar className="w-6 h-6 text-accent" strokeWidth={1.5} />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                Agenda
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
              Próximos <span className="italic text-accent">encuentros</span>
            </h1>
            <p className="font-body text-base lg:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Retiros, talleres y charlas en distintos países. Consultá por disponibilidad
              y reservá tu lugar.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Próximas actividades */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                Próximas actividades
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-12">
              Retiros, talleres y <span className="italic text-accent">charlas</span>
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {upcomingEvents.map((event, i) => (
              <FadeIn key={i} delay={0.08 * i}>
                <div className={`relative border rounded-sm overflow-hidden group transition-colors h-full flex flex-col ${
                  event.highlighted
                    ? "border-accent/40 bg-card"
                    : "border-border bg-card hover:border-accent/30"
                }`}>
                  {event.highlighted && (
                    <div className="h-2 bg-accent" />
                  )}
                  <div className="p-6 lg:p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-body text-xs tracking-widest uppercase text-accent font-medium">
                        {event.type}
                      </span>
                    </div>
                    <div className="flex items-start gap-3 mb-4">
                      <event.icon className="w-6 h-6 text-accent mt-1 shrink-0" strokeWidth={1.5} />
                      <h3 className="font-display text-2xl text-foreground">{event.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-2 font-body text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-accent" /> {event.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-accent" /> {event.dateDetail}
                      </span>
                    </div>
                    <div className="mt-auto flex gap-3 pt-4">
                      <Link
                        to={event.link}
                        className="inline-flex items-center gap-2 px-5 py-2.5 border border-primary text-primary font-body text-sm font-medium rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        Ver detalles
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-body text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        Más información
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gira internacional */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16 bg-card">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                Gira internacional
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-12">
              Encuentros <span className="italic text-accent">2025</span>
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {internationalTour.map((event, i) => (
              <FadeIn key={i} delay={0.06 * i}>
                <div className={`rounded-sm border transition-all duration-300 ${
                  event.active
                    ? "border-accent/40 bg-background hover:border-accent hover:shadow-md"
                    : "border-border bg-background hover:border-accent/30 hover:shadow-md"
                }`}>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-accent shrink-0" strokeWidth={1.5} />
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {event.city}
                      </h3>
                    </div>
                    <p className="font-body text-sm mb-5 text-muted-foreground">
                      {event.period}
                    </p>
                    {event.active && (event as any).link ? (
                      <Link
                        to={(event as any).link}
                        className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 bg-primary text-primary-foreground font-body text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
                      >
                        Ver actividades
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : event.active ? (
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 border border-primary text-primary font-body text-sm font-medium rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        Consultar
                      </a>
                    ) : (
                      <div className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 border border-border text-muted-foreground font-body text-xs tracking-wide rounded-sm">
                        <Clock className="w-3.5 h-3.5" />
                        Próximamente
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-4">
              ¿Querés traer una actividad a <span className="italic text-accent">tu ciudad</span>?
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-xl mx-auto">
              Si sos organizador/a, escuela o colectivo y querés coordinar un taller,
              retiro o charla en tu comunidad, escribinos.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Contactar por WhatsApp
            </a>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Agenda;
