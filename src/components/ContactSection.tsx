import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Instagram, Youtube, MessageSquare } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5491162720879";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contacto" className="py-24 lg:py-32 px-6 sm:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-accent" />
            <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
              Contacto
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Conversemos
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mb-16">
            La mejor forma de conectar es a través de WhatsApp. Escribí directamente para consultar sobre retiros, sesiones o cualquier propuesta.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <div className="border border-accent/30 rounded-sm bg-card p-8 lg:p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">Escribí por WhatsApp</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
                Consultá sobre retiros, talleres, sesiones individuales o cualquier propuesta. Germán responde personalmente.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-3.5 bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide rounded-sm hover:opacity-90 transition-opacity"
              >
                <MessageSquare className="w-4 h-4" />
                Abrir WhatsApp
              </a>
              <p className="font-body text-xs text-muted-foreground mt-4">
                +54 911 6272 0879
              </p>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Germán Doin Campos
              </h3>
              <div className="space-y-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  +54 911 6272 0879
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-body text-sm font-medium text-foreground mb-4">Redes sociales</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/germandoin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border rounded-sm hover:border-accent hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com/@germandoin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border rounded-sm hover:border-accent hover:text-accent transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="font-body text-sm text-muted-foreground leading-relaxed italic">
                "La mejor conversación comienza con una pregunta honesta."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
