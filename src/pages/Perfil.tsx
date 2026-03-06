import Layout from "@/components/Layout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import germanPortrait from "@/assets/german-portrait.jpg";

const timelineEvents = [
  { year: "2009", text: "Comienza la investigación de modelos educativos alternativos" },
  { year: "2012", text: "Dirige y produce el documental 'La Educación Prohibida'" },
  { year: "2013", text: "Funda Reevo – Red de Educación Alternativa" },
  { year: "2015", text: "Diseña la Semana de las Educaciones Alternativas en Bogotá" },
  { year: "2019", text: "Funda Proyecto C (2019–2023)" },
  { year: "2022", text: "Especialización en psicoterapia gestalt-transpersonal (SAT & Aramí)" },
  { year: "2025", text: "Mentor en ARKA – Escuela de Formación Transpersonal de Colombia" },
  { year: "2025", text: "Crea El Año del Salto" },
];

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
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

const Perfil = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pb-24 px-6 sm:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-16 items-start">
              <div>
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
                    Perfil y trayectoria
                  </span>
                </div>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-8">
                  Una trayectoria de{" "}
                  <span className="italic text-accent">búsqueda y servicio</span>
                </h1>
                <div className="font-body text-muted-foreground leading-relaxed space-y-4 text-base lg:text-lg">
                  <p>
                    <strong className="text-foreground">Germán Doin Campos</strong> es un profesional
                    argentino de 37 años, padre de dos hijos, técnico en Comunicación Social y
                    Producción Audiovisual.
                  </p>
                  <p>
                    Desde 2009 investiga y difunde modelos educativos alternativos, trabajo que lo
                    llevó a dirigir y producir <em>La Educación Prohibida</em> (2012), uno de los
                    documentales educativos más vistos en habla hispana.
                  </p>
                  <p>
                    Especializado en psicoterapia gestalt-transpersonal a través del Programa SAT y
                    Aramí, con formación en Eneagrama desde la perspectiva de Claudio Naranjo.
                  </p>
                  <p>
                    Su trabajo integra comunicación, educación y terapia en una visión que busca
                    transformar los vínculos humanos desde la conciencia.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 lg:py-24 px-6 sm:px-12 lg:px-16 bg-card">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-12">
              Proyectos <span className="italic text-accent">destacados</span>
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-background border border-border rounded-sm p-8 hover:border-accent/40 transition-colors">
                <h3 className="font-display text-xl text-foreground mb-2">ARKA</h3>
                <p className="font-body text-xs tracking-widest uppercase text-accent mb-4">
                  Mentor desde 2025
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                  Escuela de Formación Transpersonal de Colombia. Un espacio de formación profunda
                  que integra psicoterapia, autoconocimiento y espiritualidad.
                </p>
                <a
                  href="https://www.escuelaarka.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm text-primary hover:text-accent transition-colors"
                >
                  Visitar ARKA <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="bg-background border border-border rounded-sm p-8 hover:border-accent/40 transition-colors">
                <h3 className="font-display text-xl text-foreground mb-2">El Año del Salto</h3>
                <p className="font-body text-xs tracking-widest uppercase text-accent mb-4">
                  Creador
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                  Un programa de transformación personal que invita a dar el salto hacia una vida
                  más auténtica y alineada con el propósito.
                </p>
                <a
                  href="https://www.elaniodelsalto.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm text-primary hover:text-accent transition-colors"
                >
                  Visitar El Año del Salto <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 px-6 sm:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-12">
              Línea de <span className="italic text-accent">tiempo</span>
            </h2>
          </FadeIn>
          <div className="relative pl-8 border-l-2 border-accent/30 space-y-8">
            {timelineEvents.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative"
              >
                <div className="absolute -left-[calc(1rem+5px)] top-1.5 w-2.5 h-2.5 rounded-full bg-accent" />
                <span className="font-display text-sm text-accent">{event.year}</span>
                <p className="font-body text-sm text-muted-foreground mt-0.5">{event.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder: Social media feed */}
      <section className="py-16 lg:py-24 px-6 sm:px-12 lg:px-16 bg-card">
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-4">
              Últimas <span className="italic text-accent">publicaciones</span>
            </h2>
            <p className="font-body text-sm text-muted-foreground mb-8">
              Contenido reciente de Instagram y YouTube
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-muted rounded-sm flex items-center justify-center"
                >
                  <span className="font-body text-xs text-muted-foreground">Reel / Short {i}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Perfil;
