import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare } from "lucide-react";
import { WHATSAPP_URL } from "@/data/agenda";

const AgendaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="agenda" className="py-24 lg:py-32 px-6 sm:px-12 lg:px-16 bg-card">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12 bg-accent" />
          <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">Agenda</span>
          <div className="h-px w-12 bg-accent" />
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
          Próximos <span className="italic text-accent">encuentros</span>
        </h2>
        <p className="font-body text-base lg:text-lg text-muted-foreground leading-relaxed mb-8">
          Estoy armando la agenda 2027. Escribime por WhatsApp para enterarte de las próximas fechas o para
          llevar una actividad a tu ciudad.
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
      </motion.div>
    </section>
  );
};

export default AgendaSection;
