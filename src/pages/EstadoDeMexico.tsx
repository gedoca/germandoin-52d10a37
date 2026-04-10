import Layout from "@/components/Layout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, MapPin, Clock, MessageSquare, Quote, Users, Heart, Brain, Flower2, Music, Home, UtensilsCrossed, AlertCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/data/agenda";
import NextEditionSection from "@/components/NextEditionSection";
import avandaro1 from "@/assets/avandaro-1.png";
import avandaro2 from "@/assets/avandaro-2.png";
import avandaro3 from "@/assets/avandaro-3.png";
import avandaro4 from "@/assets/avandaro-4.png";
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

const pricing = [
  {
    event: "Haste 15/05",
    general: "u$d 650",
    earlyBird: "$625",
  },
  {
    event: "Hasta 12/06",
    general: "u$d 700",
    earlyBird: "$2,000",
  },
  {
    event: "Hasta 26/06",
    general: "u$d 800",
    earlyBird: "$4,500",
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
                <span className="font-body text-sm text-primary-foreground/80 tracking-wide">Avándaro · Estado de México · Junio 2026</span>
              </div>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-primary-foreground mb-6">
              Viaje <span className="text-accent italic">Sanador</span>
            </h1>
            <p className="font-body text-base sm:text-lg text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed mb-4">
              Un retiro vivencial de autoconocimiento donde nos sumergimos en una experiencia de trabajo personal profundo, en un contexto grupal de buscadores de conciencia y bienestar.
            </p>
            <p className="font-body text-sm text-primary-foreground/50 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" /> 26 al 28 de Junio de 2026
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

      {/* El Lugar */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">El lugar</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-6">
              Avándaro, <span className="italic text-accent">Estado de México</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Nos hospedaremos en una casa soñada en Avándaro, Estado de México. La experiencia incluye pernocte en habitaciones compartidas por 2 noches y 4 comidas (Cena viernes, desayuno y cena sábado, desayuno y almuerzo domingo). Se requiere ayuno de sólidos y café el día sábado previo a la experiencia.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[avandaro1, avandaro2, avandaro3, avandaro4].map((img, i) => (
                <div key={i} className="overflow-hidden rounded-sm">
                  <img
                    src={img}
                    alt={`Casa en Avándaro - Vista ${i + 1}`}
                    className="w-full h-56 sm:h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 p-4 border border-border rounded-sm bg-background">
                <Home className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-display text-sm font-medium text-foreground">2 noches de pernocte</p>
                  <p className="font-body text-xs text-muted-foreground">Habitaciones compartidas</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 border border-border rounded-sm bg-background">
                <UtensilsCrossed className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-display text-sm font-medium text-foreground">4 comidas incluidas</p>
                  <p className="font-body text-xs text-muted-foreground">Cena, desayuno, cena, brunch</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 border border-border rounded-sm bg-background">
                <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-display text-sm font-medium text-foreground">Ayuno el sábado</p>
                  <p className="font-body text-xs text-muted-foreground">Sin sólidos ni café</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

        {/* Precios */}
        <section id="precios" className="py-24 lg:py-32 px-6 sm:px-12 lg:px-16 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-accent" />
                <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                  Precios y promociones
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-12">
                Inversión del{" "}
                <span className="italic text-accent">viaje</span>
              </h2>
            </FadeIn>

            {/* Pricing table */}
            <FadeIn delay={0.1}>
              <div className="overflow-x-auto mb-10">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-4 px-4 font-body text-xs tracking-widest uppercase text-muted-foreground">
                        Reservando
                      </th>
                      <th className="py-4 px-4 font-body text-xs tracking-widest uppercase text-muted-foreground">
                        Valor
                      </th>
                  
                    </tr>
                  </thead>
                  <tbody>
                    {pricing.map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-border/50 hover:bg-muted/50 transition-colors"
                      >
                        <td className="py-4 px-4 font-display text-base font-semibold text-foreground">
                          {row.event}
                        </td>
                        <td className="py-4 px-4 font-body text-base text-muted-foreground">
                          {row.general}
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>


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
              Quiero saber más
            </a>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default EstadoDeMexico;
