import Layout from "@/components/Layout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { HeartHandshake, ArrowLeft, Quote, Clock, Users, Sparkles, Eye, Activity, Waves } from "lucide-react";

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

const principles = [
  { title: "Aquí y Ahora", desc: "Trabajar con lo que emerge en el presente, explorando emociones, pensamientos y sensaciones en tiempo real." },
  { title: "Integración Cuerpo-Mente", desc: "Prácticas somáticas, movimiento y voz para ampliar la conciencia y habilitar nuevos aprendizajes." },
  { title: "Autenticidad y Responsabilidad", desc: "Cada participante es protagonista de su proceso, llamado a compartir lo que vive y siente." },
  { title: "El Grupo como Espejo", desc: "Reconocer en las resonancias y proyecciones grupales aspectos inconscientes que buscan ser integrados." },
];

const methodology = [
  {
    icon: Users,
    number: "01",
    title: "Sesiones de Preparación",
    description: "4 encuentros grupales en Bogotá para conocernos, despertar resonancias y construir la confianza necesaria. Nos familiarizamos con la metodología de indagación vincular y afinamos la escucha hacia lo que sucede entre nosotros.",
  },
  {
    icon: Eye,
    number: "02",
    title: "Autoconocimiento vivencial",
    description: "Identificación y expresión de patrones vinculares que repetimos. A través de dinámicas gestálticas, ejercicios grupales e interpersonales, abrimos la posibilidad de mirarnos en el espejo del otro con autenticidad y presencia.",
  },
  {
    icon: Activity,
    number: "03",
    title: "Trabajo corporal y somático",
    description: "Prácticas inspiradas en la bioenergética, la expresión corporal y el contact improvisation. Exploramos contacto, movimiento y respiración como puertas hacia la conciencia, soltando rigideces y reconectando con la vitalidad.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Exploración de estados ampliados",
    description: "Dinámica interactiva y vincular de exploración profunda donde el grupo se convierte en espejo vivo. Transitamos estados ampliados de conciencia que permiten reconocer defensas y límites al vincularnos.",
  },
  {
    icon: Waves,
    number: "05",
    title: "Integración circular",
    description: "Cerramos con un desayuno integrador y un círculo de cierre donde cada participante comparte lo comprendido y sentido. Un espacio de reflexión y escucha mutua para asentar lo vivido en el cuerpo y la conciencia.",
  },
];

const pricing = [
  { label: "Pago anticipado (diciembre)", value: "$1.300.000 COP" },
  { label: "Plan en 3 pagos (dic–ene–feb)", value: "3 × $550.000 COP" },
  { label: "Plan en 2 pagos (ene–feb)", value: "2 × $900.000 COP" },
  { label: "Pago único (febrero)", value: "$2.000.000 COP" },
];

const VinculosAutenticos = () => {
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
              <HeartHandshake className="w-6 h-6 text-accent" strokeWidth={1.5} />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                Retiro vivencial
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-2">
              Vínculos <span className="italic text-accent">Auténticos</span>
            </h1>
            <p className="font-display text-lg sm:text-xl text-muted-foreground mb-4">
              Inteligencia vincular aplicada
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-8 font-body text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-accent" /> 3 días · 2 noches
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-accent" /> Grupo reducido (6-8 personas)
              </span>
            </div>
            <p className="font-body text-base lg:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Una propuesta de exploración personal y colectiva para quienes buscan ir más allá del
              autoconocimiento individual y entrar en la experiencia transformadora del encuentro humano.
              Co-facilitado por Germán Doin y Cintia Alegre.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ¿Por qué? */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                ¿Por qué un retiro sobre vínculos?
              </span>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  En nuestra vida cotidiana solemos sostener vínculos atravesados por la expectativa,
                  la inercia o la repetición de patrones. Este retiro propone crear un laboratorio vivencial
                  donde podamos reconocer esas dinámicas, desarmarlas y abrirnos a nuevas formas de encuentro.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Trabajamos desde la perspectiva de la Inteligencia Vincular: la capacidad de percibir,
                  comprender y transformar lo que sucede entre nosotros. Creemos que el vínculo es maestro
                  y espejo, un campo vivo que revela tanto nuestras heridas como nuestras potencialidades.
                </p>
              </div>
              <div className="bg-card border border-border rounded-sm p-8">
                <Quote className="w-8 h-8 text-accent/30 mb-4" strokeWidth={1} />
                <p className="font-display text-lg italic text-foreground leading-relaxed mb-4">
                  "El vínculo es un espacio que no se puede controlar. Vincularse implica dejar amorosamente
                  e inteligentemente de ser sujeto u objeto, abrirse por completo a la información
                  transformadora que fluye."
                </p>
                <p className="font-body text-sm text-accent font-medium">Eugenio Carutti</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Principios */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16 bg-card">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                Principios del retiro
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-12">
              Fundamentos del <span className="italic text-accent">encuentro</span>
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <FadeIn key={i} delay={0.08 * i}>
                <div className="p-6 border border-border rounded-sm bg-background hover:border-accent/40 transition-colors">
                  <h3 className="font-display text-lg text-foreground mb-2">{p.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">Metodología</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-12">
              El proceso <span className="italic text-accent">vivencial</span>
            </h2>
          </FadeIn>
          <div className="space-y-6">
            {methodology.map((step, i) => (
              <FadeIn key={i} delay={0.08 * i}>
                <div className="flex gap-6 p-6 border border-border rounded-sm bg-card hover:border-accent/40 transition-colors">
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
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16 bg-card">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">Facilitación</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-border rounded-sm bg-background">
                <h3 className="font-display text-2xl text-foreground mb-3">Germán Doin</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Educador, comunicador y acompañante en procesos de autoconocimiento. Cofundador y mentor
                  en Arka – Escuela de Formación Transpersonal. Con más de 15 años de experiencia coordinando
                  grupos. Formado en Gestalt y psicoterapias integrativas.
                </p>
              </div>
              <div className="p-8 border border-border rounded-sm bg-background">
                <h3 className="font-display text-2xl text-foreground mb-3">Cintia Alegre</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Música, cantautora y terapeuta vocal. Formada en Psicología Social y especializada en
                  exploración de la voz como herramienta de autoconocimiento y transformación. Ha acompañado
                  grupos por más de 10 años.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Condiciones + Inversión */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">Inversión</span>
            </div>
          </FadeIn>
          <div className="grid lg:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="p-8 border border-border rounded-sm bg-card h-full">
                <h3 className="font-display text-2xl text-foreground mb-6">Condiciones</h3>
                <ul className="font-body text-sm text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">·</span> Grupo reducido: 6 a 8 participantes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">·</span> 4 encuentros presenciales preparatorios en Bogotá
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">·</span> Retiro de 3 días y 2 noches en entorno natural
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">·</span> Se requiere no encontrarse bajo tratamiento con psicofármacos
                  </li>
                </ul>
                <h4 className="font-display text-lg text-foreground mt-6 mb-3">Qué incluye</h4>
                <ul className="font-body text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">·</span> Retiro vivencial (3 días / 2 noches)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">·</span> Alojamiento en habitaciones compartidas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">·</span> Alimentación completa (elaboración colectiva)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">·</span> 2 encuentros grupales previos de 2 horas en Bogotá
                  </li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-8 border border-accent/40 rounded-sm bg-card h-full">
                <h3 className="font-display text-2xl text-foreground mb-6">Valores</h3>
                <div className="space-y-4">
                  {pricing.map((p, i) => (
                    <div key={i} className="flex justify-between items-center pb-3 border-b border-border last:border-0">
                      <span className="font-body text-sm text-muted-foreground">{p.label}</span>
                      <span className="font-display text-lg text-foreground">{p.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    to="/contacto"
                    className="inline-flex items-center justify-center w-full gap-2 px-8 py-3 bg-primary text-primary-foreground font-body text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
                  >
                    Reservar mi lugar
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VinculosAutenticos;
