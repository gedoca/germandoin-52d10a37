import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mic,
  Users,
  Compass,
  Calendar,
  MapPin,
  Clock,
  Heart,
  Brain,
  Drama,
  Flower2,
  ArrowRight,
} from "lucide-react";
import Layout from "@/components/Layout";
import germanPortrait from "@/assets/german-portrait.jpg";

const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const activities = [
  {
    icon: Mic,
    type: "Conferencia",
    title: "Pedagogía del Vínculo",
    date: "14 de abril",
    time: "7:00 pm",
    location: "Guadalajara",
    featured: false,
    highlights: [
      "Por qué la inteligencia vincular es clave en la educación",
      "Cómo los vínculos condicionan el aprendizaje",
      "Educar desde la presencia y la autenticidad",
    ],
    description: null,
    methodology: null,
    itinerary: null,
  },
  {
    icon: Users,
    type: "Taller Presencial",
    title: "Eneagrama para Educadores",
    date: "18 de abril",
    time: "12:00 pm",
    location: "Espacio Alas, Guadalajara",
    featured: false,
    highlights: [
      "Autoconocimiento para acompañar procesos de aprendizaje",
      "Patrones de personalidad en el aula",
      "Herramientas prácticas para la transformación educativa",
    ],
    description: null,
    methodology: null,
    itinerary: null,
  },
  {
    icon: Compass,
    type: "Retiro Vivencial",
    title: "DesAprender",
    date: "24 y 25 de abril",
    time: "Jornada completa",
    location: "Guadalajara",
    featured: true,
    highlights: [],
    description:
      "Una experiencia de dos días para deconstruir la historia pedagógica personal. Un espacio seguro para soltar certezas, reconectar con la vocación y redescubrir el arte de acompañar.",
    methodology: [
      { icon: Heart, label: "Psicoterapia humanista" },
      { icon: Brain, label: "Pedagogías alternativas" },
      { icon: Drama, label: "Movimiento / Teatro" },
      { icon: Flower2, label: "Prácticas contemplativas" },
    ],
    itinerary: [
      { day: "Sábado", theme: "El educador que aprendí a ser" },
      { day: "Domingo", theme: "El educador que quiero ser" },
    ],
  },
];

const Guadalajara = () => {
  return (
    <>
      <SiteNavbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[85vh] flex items-center bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--accent)/0.3),transparent_60%)]" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 lg:px-16 py-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-8">
                <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-primary-foreground/20">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="font-body text-sm text-primary-foreground/80 tracking-wide">
                    Guadalajara · Abril 2025
                  </span>
                </div>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-primary-foreground mb-6">
                Encuentros sobre
                <br />
                <span className="text-accent italic">Educación y Vínculo</span>
                <br />
                con Germán Doin
              </h1>
              <p className="font-display text-xl sm:text-2xl italic text-primary-foreground/70 mb-8">
                "La educación cambia cuando cambiamos nosotros"
              </p>
              <p className="font-body text-base sm:text-lg text-primary-foreground/60 max-w-2xl mx-auto leading-relaxed">
                Desde la creación de <em>La Educación Prohibida</em>, Germán ha
                recorrido un camino profundo de investigación, formación y
                acompañamiento. Estos encuentros son una invitación a explorar
                la educación desde la presencia, el vínculo y la transformación
                personal.
              </p>
              <div className="mt-10">
                <a
                  href="#propuestas"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-accent-foreground font-body font-medium text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity"
                >
                  Ver las propuestas
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Propuestas */}
        <section
          id="propuestas"
          className="py-24 lg:py-32 px-6 sm:px-12 lg:px-16 bg-background"
        >
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-accent" />
                <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                  Propuestas en Guadalajara
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                Tres caminos, una{" "}
                <span className="italic text-accent">búsqueda</span>
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mb-16">
                Cada actividad ofrece una puerta de entrada distinta a la
                transformación educativa y vincular.
              </p>
            </FadeIn>

            <div className="grid lg:grid-cols-3 gap-8">
              {activities.map((activity, i) => (
                <FadeIn key={i} delay={0.1 * i}>
                  <div
                    className={`relative flex flex-col h-full rounded-sm border overflow-hidden transition-colors ${
                      activity.featured
                        ? "border-accent bg-card shadow-lg ring-1 ring-accent/20"
                        : "border-border bg-card hover:border-accent/40"
                    }`}
                  >
                    {/* Top bar */}
                    <div
                      className={`h-2 ${
                        activity.featured ? "bg-accent" : "bg-accent/40"
                      }`}
                    />

                    {activity.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="font-body text-[10px] tracking-widest uppercase bg-accent text-accent-foreground px-3 py-1 rounded-full">
                          Evento principal
                        </span>
                      </div>
                    )}

                    <div className="p-8 lg:p-10 flex flex-col flex-1">
                      <activity.icon
                        className="w-7 h-7 text-accent mb-4"
                        strokeWidth={1.5}
                      />
                      <span className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">
                        {activity.type}
                      </span>
                      <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                        {activity.title}
                      </h3>

                      {/* Meta */}
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2 text-muted-foreground font-body text-sm">
                          <Calendar className="w-4 h-4 text-accent" />
                          {activity.date}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground font-body text-sm">
                          <Clock className="w-4 h-4 text-accent" />
                          {activity.time}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground font-body text-sm">
                          <MapPin className="w-4 h-4 text-accent" />
                          {activity.location}
                        </div>
                      </div>

                      {/* Highlights */}
                      {activity.highlights.length > 0 && (
                        <ul className="space-y-2 mb-6">
                          {activity.highlights.map((h, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 font-body text-sm text-muted-foreground"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Description for featured */}
                      {activity.description && (
                        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                          {activity.description}
                        </p>
                      )}

                      {/* Methodology */}
                      {activity.methodology && (
                        <div className="mb-6">
                          <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-3">
                            Metodología
                          </p>
                          <div className="grid grid-cols-2 gap-3">
                            {activity.methodology.map((m, j) => (
                              <div
                                key={j}
                                className="flex items-center gap-2 font-body text-sm text-foreground"
                              >
                                <m.icon
                                  className="w-4 h-4 text-accent"
                                  strokeWidth={1.5}
                                />
                                {m.label}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Itinerary */}
                      {activity.itinerary && (
                        <div className="mb-6">
                          <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-3">
                            Itinerario
                          </p>
                          <div className="space-y-2">
                            {activity.itinerary.map((item, j) => (
                              <div
                                key={j}
                                className="flex items-center gap-3 bg-muted/50 rounded-sm px-4 py-3"
                              >
                                <span className="font-display text-sm font-semibold text-accent">
                                  {item.day}
                                </span>
                                <span className="font-body text-sm text-muted-foreground italic">
                                  {item.theme}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* CTA */}
                      <div className="mt-auto pt-4">
                        <a
                          href="#contacto"
                          className={`inline-flex items-center justify-center w-full gap-2 px-6 py-3 font-body text-sm font-medium rounded-sm transition-colors ${
                            activity.featured
                              ? "bg-primary text-primary-foreground hover:opacity-90"
                              : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          }`}
                        >
                          Más información / Inscripción
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Sobre Germán */}
        <section className="py-24 lg:py-32 px-6 sm:px-12 lg:px-16 bg-card">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="grid md:grid-cols-[280px_1fr] gap-12 items-center">
                <div className="relative">
                  <img
                    src={germanPortrait}
                    alt="Germán Doin Campos"
                    className="w-full aspect-[3/4] object-cover object-top rounded-sm"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-px w-12 bg-accent" />
                    <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                      Sobre Germán Doin
                    </span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-6">
                    Comunicador, educador y{" "}
                    <span className="italic text-accent">terapeuta</span>
                  </h2>
                  <div className="font-body text-muted-foreground leading-relaxed space-y-4">
                    <p>
                      Germán Doin Campos es un profesional argentino dedicado a
                      la investigación de modelos educativos alternativos desde
                      2009. Director del documental{" "}
                      <em>La Educación Prohibida</em> (2012), uno de los más
                      vistos en habla hispana.
                    </p>
                    <p>
                      Especializado en psicoterapia gestalt-transpersonal,
                      integra comunicación, educación y terapia en una visión que
                      busca transformar los vínculos humanos desde la conciencia.
                    </p>
                  </div>
                  <div className="mt-8">
                    <a
                      href="/"
                      className="inline-flex items-center gap-2 font-body text-sm text-accent hover:text-foreground transition-colors"
                    >
                      Conocer más sobre su trabajo
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Contact CTA */}
        <section
          id="contacto"
          className="py-24 lg:py-32 px-6 sm:px-12 lg:px-16 bg-primary text-center"
        >
          <FadeIn>
            <div className="max-w-2xl mx-auto">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-primary-foreground mb-4">
                ¿Quieres participar?
              </h2>
              <p className="font-body text-primary-foreground/70 mb-8">
                Escríbenos para más información sobre cualquiera de las
                actividades o para reservar tu lugar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5491162720879"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-accent-foreground font-body font-medium text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity"
                >
                  Contactar por WhatsApp
                </a>
                <a
                  href="mailto:germandoin@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-primary-foreground/30 text-primary-foreground font-body font-medium text-sm tracking-wide rounded-sm hover:bg-primary-foreground/10 transition-colors"
                >
                  Enviar email
                </a>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default Guadalajara;
