import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Instagram, Youtube } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for future form handling
    alert("Gracias por tu mensaje. Germán se pondrá en contacto contigo pronto.");
    setForm({ name: "", email: "", message: "" });
  };

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
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-16">
            Conversemos
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <label className="font-body text-sm text-muted-foreground mb-2 block">Nombre</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="font-body text-sm text-muted-foreground mb-2 block">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="font-body text-sm text-muted-foreground mb-2 block">Mensaje</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="¿En qué puedo ayudarte?"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-10 py-3.5 bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide rounded-sm hover:opacity-90 transition-opacity"
            >
              Enviar mensaje
            </button>
          </motion.form>

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
                  href="tel:+5491162720879"
                  className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  +54 911 6272 0879
                </a>
                <a
                  href="mailto:germandoin@gmail.com"
                  className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4 text-accent" />
                  germandoin@gmail.com
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
