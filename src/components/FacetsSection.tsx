import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Film, GraduationCap, Heart } from "lucide-react";

const facets = [
  {
    icon: Film,
    title: "Realizador Audiovisual y Productor de Contenidos",
    lines: [
      "Dirección y producción de proyectos documentales y contenidos transformadores.",
      "Comunicación con propósito.",
      "Narrativas que movilizan conciencia colectiva.",
    ],
    cta: "Ver proyectos",
    link: "/perfil",
  },
  {
    icon: GraduationCap,
    title: "Especialista en Pedagogías Alternativas",
    lines: [
      "Investigación, asesoramiento y diseño de espacios educativos transformadores.",
      "Acompañamiento a instituciones, docentes y familias.",
      "Más de 4000 personas han participado en sus formaciones.",
    ],
    cta: "Explorar propuestas educativas",
    link: "/retiros",
  },
  {
    icon: Heart,
    title: "Psicoterapeuta Gestalt-Transpersonal",
    lines: [
      "Trabajo terapéutico individual y grupal.",
      "Investigación vincular e inteligencia vincular.",
      "Exploración de estados ampliados de consciencia.",
      "Integración cuerpo–emoción–conciencia.",
    ],
    cta: "Conocer el enfoque terapéutico",
    link: "/contacto",
  },
];

const FacetsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24 lg:py-32 px-6 sm:px-12 lg:px-16 bg-card">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-accent" />
            <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
              Áreas de trabajo
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Tres facetas, <span className="italic text-accent">una visión</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {facets.map((facet, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="bg-background rounded-sm p-8 lg:p-10 flex flex-col border border-border hover:border-accent/40 transition-colors group"
            >
              <facet.icon className="w-8 h-8 text-accent mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <h3 className="font-display text-xl text-foreground mb-4 leading-snug">
                {facet.title}
              </h3>
              <ul className="space-y-2 mb-8 flex-1">
                {facet.lines.map((line, j) => (
                  <li key={j} className="font-body text-sm text-muted-foreground leading-relaxed">
                    {line}
                  </li>
                ))}
              </ul>
              <Link
                to={facet.link}
                className="inline-flex items-center font-body text-sm font-medium text-primary hover:text-accent transition-colors tracking-wide"
              >
                {facet.cta}
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacetsSection;
