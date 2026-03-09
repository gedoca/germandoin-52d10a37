import Layout from "@/components/Layout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, MessageSquare, Users, Brain, Flower2, Clock, Video } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5491162720879";

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

const modalities = [
  {
    icon: Brain,
    title: "Sesión individual",
    description:
      "Un espacio de escucha profunda y acompañamiento personalizado para explorar tus procesos internos, desafíos y caminos de transformación.",
  },
  {
    icon: Users,
    title: "Sesión vincular / pareja",
    description:
      "Un encuentro para trabajar la relación desde la honestidad, la vulnerabilidad y la co-creación. Para parejas o vínculos significativos.",
  },
  {
    icon: Flower2,
    title: "Acompañamiento continuo",
    description:
      "Un proceso sostenido en el tiempo con encuentros periódicos para profundizar en tu desarrollo personal y relacional.",
  },
];

const SesionesTerapia = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pb-28 px-6 sm:px-12 lg:px-16 bg-gradient-to-b from-card to-background">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <Heart className="w-6 h-6 text-accent" strokeWidth={1.5} />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                Acompañamiento terapéutico
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
              Sesiones de <span className="italic text-accent">Terapia</span>
            </h1>
            <p className="font-body text-base lg:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Espacios de acompañamiento individual y vincular de manera online,
              orientados al autoconocimiento, la madurez emocional y la
              transformación de los vínculos.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Modalidades */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                Modalidades
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-12">
              ¿Cómo <span className="italic text-accent">trabajamos</span>?
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-6">
            {modalities.map((mod, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="border border-border rounded-sm p-6 lg:p-8 bg-card hover:border-accent/30 transition-colors h-full">
                  <mod.icon className="w-8 h-8 text-accent mb-4" strokeWidth={1.5} />
                  <h3 className="font-display text-xl text-foreground mb-3">{mod.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Detalles */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16 bg-card">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                Información práctica
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-12">
              Detalles del <span className="italic text-accent">espacio</span>
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            <FadeIn delay={0.1}>
              <div className="flex items-start gap-4 p-6 border border-border rounded-sm bg-background">
                <Video className="w-6 h-6 text-accent mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-display text-lg text-foreground mb-1">Modalidad online</h4>
                  <p className="font-body text-sm text-muted-foreground">
                    Las sesiones se realizan por videollamada, lo que permite conectar desde cualquier lugar del mundo.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex items-start gap-4 p-6 border border-border rounded-sm bg-background">
                <Clock className="w-6 h-6 text-accent mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-display text-lg text-foreground mb-1">Duración y frecuencia</h4>
                  <p className="font-body text-sm text-muted-foreground">
                    Cada sesión tiene una duración de 55 minutos. La frecuencia se define en conjunto según el proceso y las necesidades.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-4">
              ¿Querés iniciar un <span className="italic text-accent">proceso</span>?
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-xl mx-auto">
              Escribime para coordinar una primera sesión exploratoria sin compromiso. Conversamos sobre tu momento actual y vemos si este espacio es para vos.
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

export default SesionesTerapia;
