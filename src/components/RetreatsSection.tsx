import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, HeartHandshake, Sparkles } from "lucide-react";

const retreats = [
  {
    icon: Sparkles,
    name: "DesAprender",
    subtitle: "Las 7 cualidades del acompañamiento del otro",
    description:
      "Formación vivencial con más de 500 participantes en 7 países. Un espacio para soltar certezas y redescubrir el arte de acompañar.",
  },
  {
    icon: Compass,
    name: "Viaje Sanador",
    subtitle: "Retiro de autoconocimiento transpersonal",
    description:
      "Exploración emocional profunda e integración consciente. Un viaje hacia lo esencial a través del cuerpo, la emoción y la presencia.",
  },
  {
    icon: HeartHandshake,
    name: "Vínculos Auténticos",
    subtitle: "Inteligencia vincular aplicada",
    description:
      "Herramientas para relaciones personales y profesionales más genuinas. Una invitación a vincularnos desde la verdad.",
  },
];

const RetreatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="retiros" className="py-24 lg:py-32 px-6 sm:px-12 lg:px-16">
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
              Retiros y experiencias
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
            Espacios de <span className="italic text-accent">transformación</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {retreats.map((retreat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="relative bg-card border border-border rounded-sm overflow-hidden group hover:border-accent/40 transition-colors"
            >
              <div className="h-2 bg-accent/60 group-hover:bg-accent transition-colors" />
              <div className="p-8 lg:p-10">
                <retreat.icon className="w-7 h-7 text-accent mb-5" strokeWidth={1.5} />
                <h3 className="font-display text-2xl font-semibold text-foreground mb-1">
                  {retreat.name}
                </h3>
                <p className="font-body text-sm text-accent font-medium mb-4">{retreat.subtitle}</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                  {retreat.description}
                </p>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center w-full px-6 py-3 border border-primary text-primary font-body text-sm font-medium rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Más información
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RetreatsSection;
