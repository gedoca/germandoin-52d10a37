import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "+15", label: "años de trayectoria" },
  { number: "+4000", label: "estudiantes en cursos" },
  { number: "+500", label: "participantes en DesAprender" },
  { number: "7", label: "países con presencia" },
];

const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24 lg:py-32 px-6 sm:px-12 lg:px-16 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Impacto y <span className="italic text-accent">experiencia</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="text-center"
            >
              <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-accent">
                {stat.number}
              </span>
              <p className="font-body text-sm sm:text-base mt-2 text-primary-foreground/70">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
