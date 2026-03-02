import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Germán tiene una capacidad única para abrir espacios donde lo profundo se vuelve accesible. Su trabajo me transformó como educadora y como persona.",
    author: "María L.",
    role: "Docente, Buenos Aires",
  },
  {
    text: "DesAprender fue una experiencia que cambió mi manera de entender el acompañamiento. Profundo, humano, transformador.",
    author: "Carlos R.",
    role: "Terapeuta, Bogotá",
  },
  {
    text: "El enfoque vincular de Germán integra cuerpo, emoción y conciencia de una forma que no encontré en ningún otro espacio.",
    author: "Ana P.",
    role: "Psicóloga, Santiago",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-24 lg:py-32 px-6 sm:px-12 lg:px-16 bg-card">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-accent" />
            <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
              Testimonios
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>

          <Quote className="w-10 h-10 text-accent/40 mx-auto mb-8" strokeWidth={1} />

          <div className="min-h-[160px] flex items-center justify-center">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-display text-xl sm:text-2xl lg:text-3xl italic text-foreground leading-relaxed text-balance">
                "{testimonials[current].text}"
              </p>
              <div className="mt-8">
                <p className="font-body text-sm font-semibold text-foreground">
                  {testimonials[current].author}
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-border hover:border-accent transition-colors"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? "bg-accent" : "bg-border"
                  }`}
                  aria-label={`Ir al testimonio ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full border border-border hover:border-accent transition-colors"
              aria-label="Testimonio siguiente"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
