import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-24 lg:py-32 px-6 sm:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-accent" />
            <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
              Sobre mí
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-8">
            Una trayectoria de
            <br />
            <span className="text-accent italic">búsqueda y servicio</span>
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16">
          <FadeIn delay={0.1}>
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
          </FadeIn>

          {/* Timeline */}
          <FadeIn delay={0.2}>
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
                  <span className="font-display text-sm font-semibold text-accent">{event.year}</span>
                  <p className="font-body text-sm text-muted-foreground mt-0.5">{event.text}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
