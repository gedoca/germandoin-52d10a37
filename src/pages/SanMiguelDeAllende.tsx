import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Compass,
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Tag,
  Sparkles,
  Eye,
  Heart,
  Lightbulb,
  BookOpen,
  Quote,
  Users,
} from "lucide-react";
import Layout from "@/components/Layout";
import germanPortrait from "@/assets/german-portrait.jpg";
import desaprenderHero from "@/assets/desaprender-hero.jpg";
import desaprenderGrupo1 from "@/assets/desaprender-grupo-1.jpg";
import desaprenderGrupo2 from "@/assets/desaprender-grupo-2.jpg";
import desaprenderDinamica from "@/assets/desaprender-dinamica.jpg";
import desaprenderExtra1 from "@/assets/desaprender-extra-1.jpg";
import desaprenderExtra2 from "@/assets/desaprender-extra-2.jpg";
import desaprenderExtra3 from "@/assets/desaprender-extra-3.jpg";

const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const WHATSAPP_URL = "https://wa.me/5215530404218";

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
  },
  {
    text: "DesAprender fue una experiencia que cambió mi manera de entender el acompañamiento. Profundo, humano, transformador.",
    author: "Carlos R.",
  },
  {
    text: "Germán tiene una capacidad única para abrir espacios donde lo profundo se vuelve accesible. Su trabajo me transformó como educadora y como persona.",
    author: "María L.",
  },
];

const SanMiguelDeAllende = () => {
  return (
    <Layout>
      <main>
        {/* Hero */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={desaprenderHero}
              alt="Retiro DesAprender en San Miguel de Allende"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/70" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 lg:px-16 py-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-8">
                <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-primary-foreground/20">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="font-body text-sm text-primary-foreground/80 tracking-wide">
                    San Miguel de Allende · Junio 2026
                  </span>
                </div>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-primary-foreground mb-6">
                Retiro Vivencial
                <br />
                <span className="text-accent italic">DesAprender</span>
                <br />
                con Germán Doin
              </h1>
              <p className="font-display text-xl sm:text-2xl italic text-primary-foreground/70 mb-8">
                "Las 7 cualidades del acompañamiento del otro"
              </p>
              <p className="font-body text-base sm:text-lg text-primary-foreground/60 max-w-2xl mx-auto leading-relaxed">
                Una experiencia de formación grupal vivencial de 3 días y 2 noches
                que aborda los desafíos del acompañamiento de infancias desde una
                perspectiva integral a través del cuerpo, las emociones y las ideas.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#propuesta"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("propuesta")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-accent-foreground font-body font-medium text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity"
                >
                  Ver la propuesta
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#precios"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("precios")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-primary-foreground/40 text-primary-foreground font-body font-medium text-sm tracking-wide rounded-sm hover:bg-primary-foreground/10 transition-colors"
                >
                  Inversión
                  <Tag className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Propuesta */}
        <section id="propuesta" className="py-24 lg:py-32 px-6 sm:px-12 lg:px-16 bg-background">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-accent" />
                <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                  Propuesta
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                Retiro Vivencial{" "}
                <span className="italic text-accent">DesAprender</span>
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mb-16">
                3 días y 2 noches de inmersión total para deconstruir la historia
                pedagógica personal, reconectar con la vocación y redescubrir el
                arte de acompañar.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="relative flex flex-col rounded-sm border border-accent bg-card shadow-lg ring-1 ring-accent/20 overflow-hidden max-w-2xl">
                <div className="h-2 bg-accent" />
                <div className="absolute top-4 right-4">
                  <span className="font-body text-[10px] tracking-widest uppercase bg-accent text-accent-foreground px-3 py-1 rounded-full">
                    Evento principal
                  </span>
                </div>
                <div className="p-8 lg:p-10 flex flex-col flex-1">
                  <Sparkles className="w-7 h-7 text-accent mb-4" strokeWidth={1.5} />
                  <span className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">
                    Retiro Vivencial
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                    DesAprender
                  </h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground font-body text-sm">
                      <Calendar className="w-4 h-4 text-accent shrink-0" />
                      12 al 14 de Junio, 2026
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground font-body text-sm">
                      <Clock className="w-4 h-4 text-accent shrink-0" />
                      3 días · 2 noches
                    </div>
                    <div className="flex items-start gap-2 text-muted-foreground font-body text-sm">
                      <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>San Miguel de Allende, México</span>
                    </div>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                    Una experiencia de formación grupal vivencial que aborda los desafíos
                    del acompañamiento de infancias desde una perspectiva integral. Mayor
                    involucramiento de los participantes y mayor impacto psicoemocional de
                    las dinámicas vivenciales. Incluye alojamiento y alimentación.
                  </p>
                  <Link
                    to="/desaprender"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-body text-sm font-medium rounded-sm hover:opacity-90 transition-opacity mb-6"
                  >
                    Conocer más sobre DesAprender
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <div className="mt-auto pt-4">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 bg-primary text-primary-foreground font-body text-sm font-medium rounded-sm hover:opacity-90 transition-colors"
                    >
                      Inscribirse por WhatsApp
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Galería */}
        <section className="py-12 px-6 sm:px-12 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div className="aspect-[4/3] overflow-hidden rounded-sm col-span-2">
                  <img src={desaprenderGrupo1} alt="Grupo DesAprender" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-sm">
                  <img src={desaprenderDinamica} alt="Dinámica vivencial" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-sm">
                  <img src={desaprenderExtra1} alt="DesAprender experiencia" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-sm">
                  <img src={desaprenderExtra2} alt="DesAprender grupo" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-sm">
                  <img src={desaprenderExtra3} alt="DesAprender actividad" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
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
                    En el Retiro Vivencial DesAprender exploramos 7 cualidades relacionales y psicoemocionales
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
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    Diferentes ejercicios traídos de las educaciones alternativas, la psicología social,
                    la psicoterapia gestáltica y la danza movimiento terapia nos acompañan en el
                    descubrimiento de estas cualidades.
                  </p>
                  <div className="aspect-[16/10] overflow-hidden rounded-sm">
                    <img src={desaprenderGrupo2} alt="Participantes DesAprender" className="w-full h-full object-cover" />
                  </div>
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
                    {t.author && (
                      <p className="font-body text-xs text-accent font-medium">{t.author}</p>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Precios */}
        <section id="precios" className="py-24 lg:py-32 px-6 sm:px-12 lg:px-16 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-accent" />
                <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                  Inversión
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-12">
                Precio del{" "}
                <span className="italic text-accent">retiro</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="overflow-x-auto mb-10">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-4 px-4 font-body text-xs tracking-widest uppercase text-muted-foreground">
                        Evento
                      </th>
                      <th className="py-4 px-4 font-body text-xs tracking-widest uppercase text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Tag className="w-3.5 h-3.5 text-accent" />
                          Early Bird Prepago (hasta 15 de Mayo)
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                      <td className="py-4 px-4 font-display text-base font-semibold text-foreground">
                        Retiro DesAprender
                      </td>
                      <td className="py-4 px-4 font-body text-base font-semibold text-accent">
                        $7,500
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="font-body text-sm text-muted-foreground/80 italic text-center mb-8">
                El retiro incluye alojamiento (2 noches) y alimentación completa.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="text-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-accent-foreground font-body font-medium text-base tracking-wide rounded-sm hover:opacity-90 transition-opacity"
                >
                  Inscribirse por WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Sobre Germán */}
        <section className="py-24 lg:py-32 px-6 sm:px-12 lg:px-16 bg-card">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="grid md:grid-cols-[280px_1fr] gap-12 items-center">
                <div className="relative">
                  <img
                    src={germanPortrait}
                    alt="Germán Doin Campos"
                    className="w-full aspect-[3/4] object-cover object-top rounded-sm"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-px w-12 bg-accent" />
                    <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                      Sobre Germán Doin
                    </span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-6">
                    Comunicador, educador y{" "}
                    <span className="italic text-accent">terapeuta</span>
                  </h2>
                  <div className="font-body text-muted-foreground leading-relaxed space-y-4">
                    <p>
                      Germán Doin Campos es un profesional argentino dedicado a
                      la investigación de modelos educativos alternativos desde
                      2009. Director del documental{" "}
                      <em>La Educación Prohibida</em> (2012), uno de los más
                      vistos en habla hispana.
                    </p>
                    <p>
                      Especializado en psicoterapia gestalt-transpersonal,
                      integra comunicación, educación y terapia en una visión que
                      busca transformar los vínculos humanos desde la conciencia.
                    </p>
                  </div>
                  <div className="mt-8">
                    <Link
                      to="/perfil"
                      className="inline-flex items-center gap-2 font-body text-sm text-accent hover:text-foreground transition-colors"
                    >
                      Conocer más sobre su trabajo
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 lg:py-32 px-6 sm:px-12 lg:px-16 bg-primary text-center">
          <FadeIn>
            <div className="max-w-2xl mx-auto">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-primary-foreground mb-4">
                ¿Quieres participar?
              </h2>
              <p className="font-body text-primary-foreground/70 mb-8">
                Escríbenos para más información sobre el retiro o para reservar tu lugar.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-accent-foreground font-body font-medium text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </FadeIn>
        </section>
      </main>
    </Layout>
  );
};

export default SanMiguelDeAllende;
