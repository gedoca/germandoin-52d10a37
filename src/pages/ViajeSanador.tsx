import Layout from "@/components/Layout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Compass, ArrowLeft, Quote, MessageCircle, Flower2, Brain, Sunrise, Moon, MessageSquare } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5491162720879";

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

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Sesiones de Preparación",
    description: "Antes del retiro realizamos al menos 1 sesión individual de preparación para conocernos, conversar sobre la propuesta e indagar en tu intención, experiencia previa y cultivo de tus recursos de cara al viaje.",
  },
  {
    icon: Brain,
    number: "02",
    title: "Trabajo Terapéutico Grupal",
    description: "Trabajaremos con encuadre terapéutico en la búsqueda de la intención a partir de nuestras historias personales, cultivando la presencia, ensayando la toma de conciencia y promoviendo un encuentro responsable y transformador.",
  },
  {
    icon: Flower2,
    number: "03",
    title: "Exploración Psicocorporal",
    description: "Desde el movimiento expresivo y dinámicas de trabajo corporal, ensayamos el encuentro con lo auténtico dándole espacio al cuerpo para que se manifieste, inspirados en décadas de maestros del trabajo corporal.",
  },
  {
    icon: Moon,
    number: "04",
    title: "Estados Ampliados de Consciencia",
    description: "Exploración guiada de estados ampliados de consciencia en un espacio preparado con música seleccionada, buscando conectar con nuestra esencia en un contexto grupal de ritual transformador. Siempre sosteniendo el encuadre terapéutico de cuidado.",
  },
  {
    icon: Sunrise,
    number: "05",
    title: "Desayuno de Integración",
    description: "Compartimos un desayuno donde recuperamos la esencia de la experiencia. A partir de dinámicas de movimiento, realizamos una integración somática que tiende puentes entre el viaje sanador y la vida cotidiana.",
  },
];

const testimonials = [
  {
    text: "La intervención y acompañamiento de ustedes fue fundamental para la experiencia, me hicieron sentir todo el tiempo acompañada, guiada, contenida y segura. El saber que estaban ahí cuidándonos me daba una paz increíble.",
  },
  {
    text: "Creo que fue posible gracias al amor, el cuidado, la experiencia, el tacto y la profesionalidad que supieron brindar. El respeto por el proceso, por el individuo, realmente hace la diferencia. Impecable manejo de tiempos grupales.",
  },
];

const ViajeSanador = () => {
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
              <Compass className="w-6 h-6 text-accent" strokeWidth={1.5} />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                Retiro vivencial
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-2">
              Viaje <span className="italic text-accent">Sanador</span>
            </h1>
            <p className="font-display text-lg sm:text-xl text-muted-foreground mb-8">
              Retiro de autoconocimiento y estados ampliados de consciencia
            </p>
            <p className="font-body text-base lg:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Un retiro vivencial donde nos sumergimos en una experiencia de trabajo personal profundo.
              En un contexto grupal de buscadores de conciencia y bienestar, proponemos actividades
              de introspección inspiradas en la gestalt, el mindfulness y el movimiento psicocorporal,
              con la intención de profundizar en quiénes somos y potenciar la oportunidad de
              autoconocimiento y sanación.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Propuesta */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">Propuesta</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  El Viaje Sanador está inspirado en el libro del mismo nombre del psicoterapeuta chileno
                  Claudio Naranjo, y en su propuesta de que los estados ampliados de consciencia podrían
                  ser la puerta para que los procesos terapéuticos se potencien.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Tomamos el hilo conductor del viaje del héroe, el encuentro con los propios demonios y sombras,
                  el descenso a las oscuridades de la historia personal, pero también el registro de recursos
                  luminosos, de herramientas de nuestra biografía y la conexión con la vida para lograr la
                  integración.
                </p>
              </div>
              <div className="bg-card border border-border rounded-sm p-8">
                <Quote className="w-8 h-8 text-accent/30 mb-4" strokeWidth={1} />
                <p className="font-display text-lg italic text-foreground leading-relaxed mb-4">
                  "Cuando cada parte del hombre recuerda lo que realmente quiere, la enfermedad se convierte
                  en salud, y lo que una vez fue una parodia de la vida se convierte en una cualidad que
                  antes había sido una mera sombra."
                </p>
                <p className="font-body text-sm text-accent font-medium">
                  Claudio Naranjo · <span className="text-muted-foreground italic">"El Viaje Sanador"</span>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Metodología */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16 bg-card">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">Metodología</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-12">
              El camino del <span className="italic text-accent">viaje</span>
            </h2>
          </FadeIn>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={0.08 * i}>
                <div className="flex gap-6 p-6 border border-border rounded-sm bg-background hover:border-accent/40 transition-colors">
                  <div className="shrink-0 flex flex-col items-center">
                    <span className="font-body text-xs text-accent font-semibold mb-2">{step.number}</span>
                    <step.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-foreground mb-2">{step.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Facilitación */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">Facilitación</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-border rounded-sm bg-card">
                <h3 className="font-display text-2xl text-foreground mb-3">Germán Doin</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Educador, comunicador y acompañante en procesos de autoconocimiento. Cofundador y mentor
                  en Arka – Escuela de Formación Transpersonal. Con más de 15 años de experiencia coordinando
                  grupos en el ámbito educativo, artístico y psicoterapéutico. Formado en Gestalt y
                  psicoterapias integrativas.
                </p>
              </div>
              <div className="p-8 border border-border rounded-sm bg-card">
                <h3 className="font-display text-2xl text-foreground mb-3">
                  <a href="https://www.allegramusica.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    Cintia Alegre
                  </a>
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Música, cantautora y terapeuta vocal. Formada en Psicología Social y especializada en
                  exploración de la voz como herramienta de autoconocimiento y transformación. Ha acompañado
                  grupos por más de 10 años en espacios de música, canto y procesos expresivos.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16 bg-card">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">Testimonios</span>
              <div className="h-px w-12 bg-accent" />
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="p-8 border border-border rounded-sm bg-background">
                  <Quote className="w-6 h-6 text-accent/40 mb-4" strokeWidth={1} />
                  <p className="font-body text-sm text-muted-foreground leading-relaxed italic mb-4">
                    "{t.text}"
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Próxima edición + CTA */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">Próxima edición</span>
              <div className="h-px w-12 bg-accent" />
            </div>
            <div className="p-10 border border-border rounded-sm bg-card mb-8">
              <h2 className="font-display text-2xl text-foreground mb-3">
                Consultá fechas y lugares disponibles
              </h2>
              <p className="font-body text-sm text-muted-foreground mb-4">
                Consultá la agenda para ver las próximas ediciones o escribinos directamente por WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/agenda"
                  className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary font-body text-sm font-medium rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Ver agenda
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Más información
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default ViajeSanador;
