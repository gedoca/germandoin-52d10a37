import Layout from "@/components/Layout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, MapPin, Clock, MessageSquare, Quote, Users, Heart, Brain, Flower2, Music } from "lucide-react";
import { WHATSAPP_URL } from "@/data/agenda";
import NextEditionSection from "@/components/NextEditionSection";
import viajeHero from "@/assets/viaje-sanador-panama.jpg";

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

const phases = [
  {
    number: "1",
    title: "Sesiones de Preparación",
    description: "Antes del retiro realizamos al menos una sesión individual para conocernos, conversar sobre la propuesta e indagar en tu intención, experiencia previa y recursos de cara al viaje.",
  },
  {
    number: "2",
    title: "Trabajo Terapéutico Grupal",
    description: "Trabajamos con encuadre terapéutico en la búsqueda de la intención a partir de nuestras historias personales, cultivando la presencia y promoviendo que el encuentro sea desde un lugar responsable y transformador.",
  },
  {
    number: "3",
    title: "Exploración Psicocorporal",
    description: "Desde el movimiento expresivo y dinámicas de trabajo corporal, ensayamos el encuentro con lo auténtico dándole espacio al cuerpo para que se manifieste, conectando de forma más transparente con nuestra esencia.",
  },
  {
    number: "4",
    title: "Estados Ampliados de Consciencia",
    description: "Realizamos la exploración en un espacio preparado y con música especialmente seleccionada, buscando conectar con nuestra esencia en un contexto grupal de ritual con un impacto transformador, sosteniendo siempre el encuadre terapéutico de cuidado.",
  },
  {
    number: "5",
    title: "Desayuno de Integración",
    description: "El último día compartimos un desayuno donde recuperamos la esencia de la experiencia. A partir de dinámicas de movimiento, realizamos una integración somática que nos permite tender puentes entre el viaje y la vida cotidiana.",
  },
];

const facilitators = [
  {
    name: "Germán Doin",
    role: "Facilitador principal",
    bio: "Educador, comunicador y acompañante en procesos de autoconocimiento. Cofundador y mentor en Arka – Escuela de Formación Transpersonal. Con más de 15 años de experiencia coordinando grupos. Formado en Gestalt y psicoterapias integrativas.",
  },
  {
    name: "Cintia Alegre",
    role: "Co-facilitadora",
    bio: "Música, cantautora y terapeuta vocal. Formada en Psicología Social y especializada en exploración de la voz como herramienta de autoconocimiento y transformación. Su presencia aporta sensibilidad, contención y apertura creativa al proceso grupal.",
  },
];

const EstadoDeMexico = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={viajeHero} alt="Retiro Viaje Sanador en Estado de México" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/65" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 lg:px-16 py-32 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-primary-foreground/20">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="font-body text-sm text-primary-foreground/80 tracking-wide">Estado de México · Junio 2025</span>
              </div>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-primary-foreground mb-6">
              Viaje <span className="text-accent italic">Sanador</span>
            </h1>
            <p className="font-body text-base sm:text-lg text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed mb-4">
              Un retiro vivencial de autoconocimiento donde nos sumergimos en una experiencia de trabajo personal profundo, en un contexto grupal de buscadores de conciencia y bienestar.
            </p>
            <p className="font-body text-sm text-primary-foreground/50 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" /> 26 al 28 de Junio de 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Propuesta */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">Propuesta</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-6">
              Un encuentro con la <span className="italic text-accent">sabiduría interior</span>
            </h2>
            <div className="font-body text-muted-foreground leading-relaxed space-y-4">
              <p>
                El Viaje Sanador está inspirado en el libro del mismo nombre del psicoterapeuta chileno Claudio Naranjo, y en su propuesta de que los estados ampliados de consciencia podrían ser la puerta para que los procesos terapéuticos se potencien.
              </p>
              <p>
                Tomamos el hilo conductor del viaje del héroe: el encuentro con los propios demonios y sombras, el descenso a las oscuridades de la historia personal, pero también el registro de recursos luminosos y herramientas de nuestra biografía, y eventualmente la conexión con la vida para lograr la integración.
              </p>
              <p>
                Te propondremos actividades y ejercicios de introspección inspirados en la gestalt, el mindfulness y el movimiento psicocorporal con la intención de profundizar en quiénes somos y potenciar la oportunidad de autoconocimiento y sanación.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Fases del proceso */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16 bg-card">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">El proceso</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-12">
              Cinco fases del <span className="italic text-accent">viaje</span>
            </h2>
          </FadeIn>
          <div className="space-y-6">
            {phases.map((phase, i) => (
              <FadeIn key={i} delay={0.08 * i}>
                <div className="flex gap-6 p-6 border border-border rounded-sm bg-background hover:border-accent/40 transition-colors">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="font-display text-lg text-accent font-semibold">{phase.number}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-foreground mb-2">{phase.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Facilitadores */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">Facilitación</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-12">
              Quiénes <span className="italic text-accent">acompañan</span>
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {facilitators.map((f, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="p-6 border border-border rounded-sm bg-card hover:border-accent/40 transition-colors h-full">
                  <h3 className="font-display text-xl text-foreground mb-1">{f.name}</h3>
                  <p className="font-body text-xs tracking-widest uppercase text-accent mb-3">{f.role}</p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <Quote className="w-10 h-10 text-accent/30 mx-auto mb-6" strokeWidth={1} />
            <p className="font-display text-xl sm:text-2xl italic text-foreground leading-relaxed text-balance mb-4">
              "La intervención y acompañamiento de ustedes fue fundamental para la experiencia, me hicieron sentir todo el tiempo acompañada, guiada, contenida y segura. El saber que estaban ahí cuidándonos me daba una paz increíble."
            </p>
            <p className="font-body text-sm text-muted-foreground">Participante del Viaje Sanador</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-12 pt-12 border-t border-border">
              <Quote className="w-10 h-10 text-accent/30 mx-auto mb-6" strokeWidth={1} />
              <p className="font-display text-xl sm:text-2xl italic text-foreground leading-relaxed text-balance mb-4">
                "Creo que fue posible gracias al amor, el cuidado, la experiencia, el tacto y la profesionalidad que supieron brindar. El respeto por el proceso, por el individuo, realmente hace la diferencia."
              </p>
              <p className="font-body text-sm text-muted-foreground">Participante del Viaje Sanador</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Naranjo Quote */}
      <section className="py-16 px-6 sm:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="font-display text-lg sm:text-xl italic text-foreground/80 leading-relaxed text-balance mb-4">
              "Cuando cada parte del hombre recuerda lo que realmente quiere, la enfermedad se convierte en salud, y lo que una vez fue una parodia de la vida se convierte en una cualidad que antes había sido una mera sombra."
            </p>
            <p className="font-body text-sm text-accent font-medium">Claudio Naranjo — "El Viaje Sanador"</p>
          </FadeIn>
        </div>
      </section>

      {/* Próxima edición */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16 bg-card">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">Inscripción</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-4">
              Próximas <span className="italic text-accent">ediciones</span>
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-2xl">
              La inscripción requiere al menos 1 mes de anticipación para garantizar la realización de la sesión individual previa.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <NextEditionSection slug="estado-de-mexico" />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-4">
              ¿Querés ser parte del <span className="italic text-accent">viaje</span>?
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-xl mx-auto">
              Escribinos para consultar disponibilidad, resolver dudas y reservar tu lugar.
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
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default EstadoDeMexico;
