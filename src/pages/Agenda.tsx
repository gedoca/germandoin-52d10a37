import Layout from "@/components/Layout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MessageSquare } from "lucide-react";
import { WHATSAPP_URL } from "@/data/agenda";

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
              Retiros, talleres y charlas en distintos países.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Agenda en preparación */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="p-10 border border-border rounded-sm bg-card">
              <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-4">
                Agenda 2027 <span className="italic text-accent">en preparación</span>
              </h2>
              <p className="font-body text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
                Estoy armando la agenda 2027. Escribime por WhatsApp para enterarte de las próximas fechas o
                para llevar una actividad a tu ciudad.
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
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6"><div className="h-px bg-border" /></div>

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
