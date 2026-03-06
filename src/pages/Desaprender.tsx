import Layout from "@/components/Layout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Users, Clock, MapPin, ArrowLeft, Quote, BookOpen, Eye, Lightbulb, Heart, Compass } from "lucide-react";

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

const qualities = [
  { icon: Eye, title: "Observación", desc: "Otras maneras de observar los procesos de aprendizaje y las infancias desde una perspectiva psicoemocional integral y transpersonal." },
  { icon: Heart, title: "Integración", desc: "Conectar el campo de las ideas pedagógicas con las emociones y el cuerpo, iniciando un proceso de integración de tu práctica." },
  { icon: Compass, title: "Marco simbólico", desc: "Un marco simbólico de referencia para observar tus prácticas pedagógicas, a tus alumnos, hijos e inclusive cualquier proceso de aprendizaje." },
  { icon: Lightbulb, title: "Equilibrio", desc: "Criterios para observarte a la hora de acompañar procesos de forma equilibrada." },
  { icon: BookOpen, title: "Mirada integral", desc: "Una mirada integral que conecta la vida con el aprendizaje." },
];

const testimonials = [
  {
    text: "Gracias a ustedes por enriquecerme con más sabiduría. Desaprender me dejó una gran perspectiva hacia donde voy en el plano educativo.",
    date: "Mayo 2024",
  },
  {
    text: "DesAprender fue una experiencia que cambió mi manera de entender el acompañamiento. Profundo, humano, transformador.",
    author: "Carlos R.",
    date: "Bogotá",
  },
  {
    text: "Germán tiene una capacidad única para abrir espacios donde lo profundo se vuelve accesible. Su trabajo me transformó como educadora y como persona.",
    author: "María L.",
    date: "Buenos Aires",
  },
];

const Desaprender = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pb-28 px-6 sm:px-12 lg:px-16 bg-gradient-to-b from-card to-background">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <Link to="/retiros" className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Volver a Retiros
            </Link>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-4 mb-4">
              <Sparkles className="w-6 h-6 text-accent" strokeWidth={1.5} />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                Formación vivencial
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-2">
              Des)<span className="italic text-accent">aprender</span>
            </h1>
            <p className="font-display text-lg sm:text-xl text-muted-foreground mb-8">
              Las 7 cualidades del acompañamiento del otro
            </p>
            <p className="font-body text-base lg:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Una experiencia de formación grupal vivencial que aborda los desafíos del acompañamiento
              de infancias desde una perspectiva integral a través del cuerpo, las emociones y las ideas.
              Más de 500 participantes en 7 países.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">Contenido</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  En el Taller Vivencial DesAprender exploramos 7 cualidades relacionales y psicoemocionales
                  necesarias para el acompañamiento de infancias y procesos de aprendizaje por parte de
                  educadores, madres y padres. Se trata de habilidades que no son parte de las formaciones
                  académicas, sino que se cultivan a lo largo de la vida.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Estas cualidades forman parte del desarrollo que diversas educaciones alternativas han
                  teorizado y puesto en práctica en los últimos 100 años, desde el guía de María Montessori
                  hasta la mediación de A.S. Neill, desde Emmy Pikler hasta la educación libre, e incluso
                  el maestro ignorante de Rancière.
                </p>
              </div>
              <div>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  Trabajamos con dinámicas vivenciales donde se busca despertar la sabiduría instintiva
                  del cuerpo, para que afloren las emociones y nos permitan arribar a pensamientos e ideas
                  que integren la experiencia.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Diferentes ejercicios traídos de las educaciones alternativas, la psicología social,
                  la psicoterapia gestáltica y la danza movimiento terapia nos acompañan en el
                  descubrimiento de estas cualidades. En el camino nos guiamos con un marco simbólico
                  natural, en el que cada momento del proceso es una inspiración para ponerle imagen
                  y reflexión a las cualidades que buscamos desarrollar.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Qué aprenderemos */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16 bg-card">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                Qué aprenderemos
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-12">
              Herramientas para el <span className="italic text-accent">acompañamiento</span>
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualities.map((q, i) => (
              <FadeIn key={i} delay={0.08 * i}>
                <div className="p-6 border border-border rounded-sm bg-background hover:border-accent/40 transition-colors h-full">
                  <q.icon className="w-6 h-6 text-accent mb-4" strokeWidth={1.5} />
                  <h3 className="font-display text-lg text-foreground mb-2">{q.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{q.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Formatos */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">Formatos</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-12">
              Dos modalidades de <span className="italic text-accent">inmersión</span>
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="p-8 border border-border rounded-sm bg-card hover:border-accent/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-accent" strokeWidth={1.5} />
                  <h3 className="font-display text-xl text-foreground">Taller intensivo</h3>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  2 jornadas intensivas de 8 a 10 horas cada una. Requiere voluntad de participación
                  y confianza por parte de los participantes, condición para que el trabajo rinda frutos.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-8 border border-border rounded-sm bg-card hover:border-accent/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-accent" strokeWidth={1.5} />
                  <h3 className="font-display text-xl text-foreground">Retiro vivencial</h3>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  3 días y 2 noches incluyendo alojamiento y alimentación. Mayor involucramiento
                  de los participantes y mayor impacto psicoemocional de las dinámicas vivenciales.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16 bg-card">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">Equipo</span>
            </div>
            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-accent mt-1 shrink-0" strokeWidth={1.5} />
              <p className="font-body text-muted-foreground leading-relaxed max-w-3xl">
                La naturaleza de la propuesta requiere un acompañamiento del grupo por parte de personas
                con formación y experiencia en educación alternativa, trabajo en grupos, psicología y
                psicoterapia. El tipo de trabajo requiere cercanía, por lo que recomendamos la presencia
                de un mínimo de 1 facilitador por cada 20 personas.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">Testimonios</span>
              <div className="h-px w-12 bg-accent" />
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="p-6 border border-border rounded-sm bg-card">
                  <Quote className="w-6 h-6 text-accent/40 mb-4" strokeWidth={1} />
                  <p className="font-body text-sm text-muted-foreground leading-relaxed italic mb-4">
                    "{t.text}"
                  </p>
                  <p className="font-body text-xs text-accent font-medium">
                    {t.author ? `${t.author} · ` : ""}{t.date}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-4">
              ¿Querés traer <span className="italic text-accent">DesAprender</span> a tu ciudad?
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-xl mx-auto">
              Si sos organizador/a, escuela o colectivo y querés coordinar una edición
              de DesAprender en tu comunidad, escribinos.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
            >
              Contactar
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Desaprender;
