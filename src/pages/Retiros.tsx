import Layout from "@/components/Layout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Compass, HeartHandshake, Sparkles, ArrowRight } from "lucide-react";

const retreats = [
  {
    icon: Sparkles,
    name: "DesAprender",
    subtitle: "Las 7 cualidades del acompañamiento del otro",
    description:
      "Formación vivencial con más de 500 participantes en 7 países. Un espacio para soltar certezas y redescubrir el arte de acompañar.",
    link: "/desaprender",
  },
  {
    icon: Compass,
    name: "Viaje Sanador",
    subtitle: "Retiro de autoconocimiento transpersonal",
    description:
      "Exploración emocional profunda e integración consciente. Un viaje hacia lo esencial a través del cuerpo, la emoción y la presencia.",
    link: "/viaje-sanador",
  },
  {
    icon: HeartHandshake,
    name: "Vínculos Auténticos",
    subtitle: "Inteligencia vincular aplicada",
    description:
      "Herramientas para relaciones personales y profesionales más genuinas. Una invitación a vincularnos desde la verdad.",
    link: "/vinculos-autenticos",
  },
];

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

const Retiros = () => {
  return (
    <Layout>
      <section className="pt-28 pb-24 lg:pb-32 px-6 sm:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                Retiros y experiencias
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              Espacios de <span className="italic text-accent">transformación</span>
            </h1>
            <p className="font-body text-muted-foreground max-w-2xl mb-16 text-base lg:text-lg leading-relaxed">
              Cada retiro es una invitación a detenerse, mirar hacia adentro y reconectar
              con lo esencial. Experiencias vivenciales diseñadas para acompañar procesos
              reales de cambio.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {retreats.map((retreat, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="relative bg-card border border-border rounded-sm overflow-hidden group hover:border-accent/40 transition-colors h-full flex flex-col">
                  <div className="h-2 bg-accent/60 group-hover:bg-accent transition-colors" />
                  <div className="p-8 lg:p-10 flex flex-col flex-1">
                    <retreat.icon className="w-7 h-7 text-accent mb-5" strokeWidth={1.5} />
                    <h2 className="font-display text-2xl text-foreground mb-1">
                      {retreat.name}
                    </h2>
                    <p className="font-body text-sm text-accent font-medium mb-4">{retreat.subtitle}</p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                      {retreat.description}
                    </p>
                    <Link
                      to={retreat.link}
                      className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 border border-primary text-primary font-body text-sm font-medium rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      Ver detalles
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Retiros;
