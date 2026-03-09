import Layout from "@/components/Layout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { BookOpen, ExternalLink, ArrowRight, Star } from "lucide-react";

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

/** Converts any YouTube URL (watch?v=, /shorts/, or already /embed/) to an embed URL */
const toEmbedUrl = (url: string): string => {
  if (url.includes("/embed/")) return url;
  if (url.includes("/shorts/")) return url.replace("/shorts/", "/embed/");
  const match = url.match(/[?&]v=([^&]+)/);
  if (match) return `https://www.youtube.com/embed/${match[1]}`;
  return url;
};

const courses = [
  {
    title: "DesAprender Online – Curso 1",
    subtitle: "Las 7 cualidades del acompañamiento",
    description:
      "La versión online de la formación vivencial DesAprender. Explora las 7 cualidades relacionales y psicoemocionales necesarias para acompañar infancias y procesos de aprendizaje desde una perspectiva integral.",
    features: [
      "Clases en video con Germán Doin",
      "Material complementario descargable",
      "Acceso de por vida",
      "Dinámicas de reflexión personal",
    ],
    hotmartUrl: "https://hotmart.com/es/marketplace/productos/desaprender-las-7-cualidades-del-acompanamiento/Y78388649D",
    badge: "Más vendido",
    videoUrl: "https://www.youtube.com/embed/70nWUCtl4OI",
  },
  {
    title: "DesAprender Online – Curso 2",
    subtitle: "Profundización y práctica",
    description:
      "La continuación del proceso formativo. Profundiza en las herramientas del acompañamiento consciente con nuevas dinámicas, reflexiones y prácticas para integrar en tu vida cotidiana y profesional.",
    features: [
      "Contenido avanzado exclusivo",
      "Ejercicios prácticos integrativos",
      "Acceso de por vida",
      "Comunidad de aprendizaje",
    ],
    hotmartUrl: "https://hotmart.com/es/marketplace/productos/desaprender-2/Y78388649D",
    badge: null,
    videoUrl: "https://www.youtube.com/embed/pNE4_GFOqPw",
  },
];

const Cursos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pb-28 px-6 sm:px-12 lg:px-16 bg-gradient-to-b from-card to-background">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <BookOpen className="w-6 h-6 text-accent" strokeWidth={1.5} />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                Formación online
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
              Cursos <span className="italic text-accent">DesAprender</span>
            </h1>
            <p className="font-body text-base lg:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              La experiencia formativa de DesAprender en formato online. Accede a las herramientas
              del acompañamiento consciente desde cualquier lugar del mundo, a tu propio ritmo.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="relative border border-border rounded-sm bg-card overflow-hidden group hover:border-accent/40 transition-colors h-full flex flex-col">
                  {/* Top accent bar */}
                  <div className="h-2 bg-accent/60 group-hover:bg-accent transition-colors" />

                  {/* Badge */}
                  {course.badge && (
                    <div className="absolute top-5 right-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent text-accent-foreground font-body text-xs font-semibold rounded-sm">
                        <Star className="w-3 h-3" /> {course.badge}
                      </span>
                    </div>
                  )}

                  <div className="p-8 lg:p-10 flex flex-col flex-1">
                    {/* Responsive video embed */}
                    <div className="relative w-full aspect-video rounded-sm overflow-hidden mb-6 bg-muted">
                      <iframe
                        src={toEmbedUrl(course.videoUrl)}
                        title={course.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                        className="absolute inset-0 w-full h-full border-0"
                      />
                    </div>

                    <h2 className="font-display text-2xl text-foreground mb-1">{course.title}</h2>
                    <p className="font-body text-sm text-accent font-medium mb-4">{course.subtitle}</p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                      {course.description}
                    </p>

                    {/* Features list */}
                    <ul className="font-body text-sm text-muted-foreground space-y-2 mb-8">
                      {course.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-accent mt-0.5">✓</span> {f}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <a
                      href={course.hotmartUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 bg-primary text-primary-foreground font-body text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
                    >
                      Comprar en Hotmart
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Info */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-4">
              ¿Preferís la experiencia <span className="italic text-accent">presencial</span>?
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-xl mx-auto">
              DesAprender también se ofrece como taller vivencial presencial y como retiro
              de inmersión en distintos países de Latinoamérica.
            </p>
            <Link
              to="/desaprender"
              className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary font-body text-sm font-medium rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Ver DesAprender presencial
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Cursos;
