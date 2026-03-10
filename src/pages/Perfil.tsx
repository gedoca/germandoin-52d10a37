import Layout from "@/components/Layout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  ArrowRight,
  BookOpen,
  Users,
  Sparkles,
  HeartHandshake,
  Globe,
  MessageSquare,
} from "lucide-react";
import InstagramReelsSection from "@/components/InstagramReelsSection";
import germanPortrait from "@/assets/german-portrait.jpg";
import germanFacilitando from "@/assets/german-facilitando-noche.jpg";
import germanSpeaking from "@/assets/german-speaking.jpg";

const timelineEvents = [
  { year: "2009", text: "Comienza la investigación de modelos educativos alternativos en América Latina" },
  { year: "2012", text: "Dirige y produce La Educación Prohibida, documental visto por millones de personas" },
  { year: "2013", text: "Funda Reevo – Red de Educación Alternativa, plataforma colaborativa internacional" },
  { year: "2015", text: "Diseña la Semana de las Educaciones Alternativas en Bogotá" },
  { year: "2019", text: "Funda Proyecto C – laboratorio de transformación educativa (2019–2023)" },
  { year: "2022", text: "Especialización en psicoterapia gestalt-transpersonal (Programa SAT & Aramí)" },
  { year: "2025", text: "Inicia Travesía Vincular junto a Cintia Alegre" },
  { year: "2026", text: "Mentor en ARKA – Escuela de Formación Transpersonal de Colombia" },
  { year: "2026", text: "Crea El Año del Salto – programa de transformación personal" },
];

const projects = [
  {
    icon: Sparkles,
    title: "ARKA",
    role: "Mentor desde 2025",
    description:
      "Escuela de Formación Transpersonal de Colombia. Un espacio de formación profunda que integra psicoterapia, autoconocimiento y espiritualidad.",
    url: "https://www.escuelaarka.com",
    urlLabel: "Visitar ARKA",
  },
  {
    icon: ArrowRight,
    title: "El Año del Salto",
    role: "Creador",
    description:
      "Un programa de transformación personal que invita a dar el salto hacia una vida más auténtica y alineada con el propósito.",
    url: "https://www.elaniodelsalto.com",
    urlLabel: "Visitar El Año del Salto",
  },
  {
    icon: HeartHandshake,
    title: "Travesía Vincular",
    role: "Co-creador con Cintia Alegre",
    description:
      "Proyecto que explora los vínculos humanos como territorio de transformación. Retiros, escritura y prácticas para relaciones más genuinas.",
    internalLink: "/travesia-vincular",
    urlLabel: "Ver Travesía Vincular",
  },
  {
    icon: Globe,
    title: "Reevo",
    role: "Fundador (2013)",
    description:
      "Red de Educación Alternativa. Plataforma colaborativa que conectó experiencias educativas transformadoras en toda Iberoamérica.",
    url: "https://reevo.org",
    urlLabel: "Visitar Reevo",
  },
  {
    icon: BookOpen,
    title: "Cursos DesAprender Online",
    role: "Creador",
    description:
      "La experiencia formativa de DesAprender en formato online, accesible desde cualquier lugar del mundo.",
    internalLink: "/cursos",
    urlLabel: "Ver cursos",
  },
];

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

const Perfil = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pb-24 px-6 sm:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-16 items-start">
              <div>
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
                    Perfil y trayectoria
                  </span>
                </div>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-8">
                  Una trayectoria de <span className="italic text-accent">búsqueda y servicio</span>
                </h1>
                <div className="font-body text-muted-foreground leading-relaxed space-y-4 text-base lg:text-lg">
                  <p>
                    Germán Doin Campos es un profesional argentino de 38 años, padre de dos hijos, técnico en
                    Comunicación Social y Producción Audiovisual.
                    <strong className="text-foreground">Germán Doin Campos</strong> es un profesional argentino de 37
                    años, padre de dos hijos, técnico en Comunicación Social y Producción Audiovisual.
                  </p>
                  <p>
                    Desde 2009 investiga y difunde modelos educativos alternativos, trabajo que lo llevó a dirigir y
                    producir <em>La Educación Prohibida</em> (2012), uno de los documentales educativos más vistos en
                    habla hispana.
                  </p>
                  <p>
                    Especializado en psicoterapia gestalt-transpersonal a través del Programa SAT y Aramí, con formación
                    en Eneagrama desde la perspectiva de Claudio Naranjo. Su trabajo integra comunicación, educación y
                    terapia en una visión que busca transformar los vínculos humanos desde la conciencia.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Galería de trabajo */}
      <section className="py-12 px-6 sm:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[16/9] overflow-hidden rounded-sm">
                <img
                  src={germanFacilitando}
                  alt="Germán facilitando un retiro"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[16/9] overflow-hidden rounded-sm">
                <img
                  src={germanSpeaking}
                  alt="Germán hablando en un evento"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* La Educación Prohibida – Documental destacado */}
      <section className="py-16 lg:py-24 px-6 sm:px-12 lg:px-16 bg-card">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                Obra audiovisual principal
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-3">
              La Educación <span className="italic text-accent">Prohibida</span>
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-2xl">
              Documental que cuestiona la escuela moderna y explora modelos educativos alternativos. Más de 28 millones
              de vistas en YouTube. Dirigido y producido por Germán Doin (2012).
            </p>
            <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-muted shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/-1Y9OqSJKCc"
                title="La Educación Prohibida – Documental"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Proyectos destacados */}
      <section className="py-16 lg:py-24 px-6 sm:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                Proyectos y colaboraciones
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-12">
              Proyectos <span className="italic text-accent">destacados</span>
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <FadeIn key={i} delay={0.08 * i}>
                <div className="bg-background border border-border rounded-sm p-6 hover:border-accent/40 transition-colors h-full flex flex-col">
                  <project.icon className="w-6 h-6 text-accent mb-4" strokeWidth={1.5} />
                  <h3 className="font-display text-xl text-foreground mb-1">{project.title}</h3>
                  <p className="font-body text-xs tracking-widest uppercase text-accent mb-3">{project.role}</p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-body text-sm text-primary hover:text-accent transition-colors"
                    >
                      {project.urlLabel} <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : project.internalLink ? (
                    <Link
                      to={project.internalLink}
                      className="inline-flex items-center gap-2 font-body text-sm text-primary hover:text-accent transition-colors"
                    >
                      {project.urlLabel} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : null}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 px-6 sm:px-12 lg:px-16 bg-card">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">Recorrido</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-12">
              Línea de <span className="italic text-accent">tiempo</span>
            </h2>
          </FadeIn>
          <div className="relative pl-8 border-l-2 border-accent/30 space-y-8">
            {timelineEvents.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative"
              >
                <div className="absolute -left-[calc(1rem+5px)] top-1.5 w-2.5 h-2.5 rounded-full bg-accent" />
                <span className="font-display text-sm text-accent">{event.year}</span>
                <p className="font-body text-sm text-muted-foreground mt-0.5">{event.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sesiones Individuales */}
      <section className="py-16 lg:py-24 px-6 sm:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="relative border border-accent/40 rounded-sm bg-card overflow-hidden">
              <div className="h-2 bg-accent" />
              <div className="p-8 lg:p-10 text-center">
                <Users className="w-8 h-8 text-accent mx-auto mb-4" strokeWidth={1.5} />
                <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-3">
                  Sesiones <span className="italic text-accent">Individuales</span>
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
                  Ofrezco acompañamiento en procesos de terapia individual, tanto en modalidad virtual como presencial.
                  Un espacio seguro para explorar tu mundo interno, tus vínculos y tu camino de transformación personal.
                </p>
                <a
                  href="https://wa.me/5491162720879"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Consultar por sesiones
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Instagram Reels */}
      <div class="sk-ww-instagram-reels" data-embed-id="25661050"></div>
      <script src="https://widgets.sociablekit.com/instagram-reels/widget.js" defer></script>

      {/* Film card for La Educación Prohibida in projects removed — now featured as full embed above */}
    </Layout>
  );
};

export default Perfil;
