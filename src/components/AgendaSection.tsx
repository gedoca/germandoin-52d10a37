import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const events = [
  { city: "Panamá", period: "Abril", active: true, link: "/panama" },
  { city: "Guadalajara", period: "Abril", active: true, link: "/guadalajara" },
  { city: "San Luis Potosí", period: "Mayo", active: true, link: "/agenda" },
  { city: "Tepoztlan", period: "Mayo / Junio", active: false, link: "/tepoztlan" },
  { city: "San Miguel de Allende", period: "Junio", active: false, link: "/allende" },
  { city: "Chiapas", period: "Mayo / Junio", active: false },
  { city: "México DF", period: "Junio", active: true, link: "/estado-de-mexico" },
  { city: "Roma", period: "Julio", active: false },
  { city: "España", period: "Julio / Agosto", active: false },
  { city: "Tenerife", period: "Agosto", active: false },
];

const AgendaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="agenda" className="py-24 lg:py-32 px-6 sm:px-12 lg:px-16 bg-card">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-accent" />
            <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
              Agenda internacional
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
            Encuentros <span className="italic text-accent">2026</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.06 * i }}
              className={`group relative rounded-sm border transition-all duration-300 ${
                event.active
                  ? "border-accent bg-primary shadow-lg ring-1 ring-accent/20"
                  : "border-border bg-background hover:border-accent/30 hover:shadow-md"
              }`}
            >
              {event.active && (
                <div className="absolute -top-3 left-4">
                  <span className="font-body text-[10px] tracking-widest uppercase bg-accent text-accent-foreground px-3 py-1 rounded-full">
                    Destacado
                  </span>
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin
                    className={`w-4 h-4 shrink-0 ${
                      event.active ? "text-accent" : "text-accent"
                    }`}
                    strokeWidth={1.5}
                  />
                  <h3
                    className={`font-display text-lg font-semibold ${
                      event.active ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {event.city}
                  </h3>
                </div>

                <p
                  className={`font-body text-sm mb-5 ${
                    event.active ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
                >
                  {event.period}
                </p>

                {event.active && event.link ? (
                  <Link
                    to={event.link}
                    className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 bg-accent text-accent-foreground font-body text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
                  >
                    Ver actividades
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <div className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 border border-border text-muted-foreground font-body text-xs tracking-wide rounded-sm">
                    <Clock className="w-3.5 h-3.5" />
                    Próximamente
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
