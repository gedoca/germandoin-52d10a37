import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Mic,
  Users,
  Compass,
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Tag,
  UsersRound,
  Sparkles,
} from "lucide-react";
import Layout from "@/components/Layout";
import germanPortrait from "@/assets/german-portrait.jpg";
import retiroGrupoCampo from "@/assets/guadalajara-hero.jpg";
import logoAlas from "@/assets/logo-alas.png";

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

const WHATSAPP_GDL =
  "https://api.whatsapp.com/send?phone=5218119972756&text=Hola%21+Me+interesa+conocer+m%C3%A1s+sobre+las+actividade+de+German+Doin+en+Monterrey.";
const GOOGLE_FORM_CONFERENCIA =
  "";

const activities = [
  {
    icon: Mic,
    type: "Conferencia Taller",
    title: "Pedagogía del Vínculo",
    date: "Jueves 21 de Mayo",
    time: "3.15 a 6.30pm",
    location: "Akadem - Río Suchiate 722, Lomas del Valle, San Pedro Garza García",
    featured: false,
    highlights: [
      "Qué es la Pedagogía del Vínculo y orígenes del concepto",
      "Por qué la inteligencia vincular es clave en la educación",
      "Cómo los vínculos condicionan el aprendizaje",
      "Educar desde la presencia y la autenticidad",
      ⁠⁠"Beneficios concretos y maneras de desarrollarlo",
    ],
    description: null,
    showDesaprenderLink: false,
    registrationLink: GOOGLE_FORM_CONFERENCIA,
  },
  {
    icon: Compass,
    type: "Taller Vivencial",
    title: "DesAprender",
    date: "23 y 24 de Mayo",
    time: "9am a 6pm",
    location:
      "Lugar a confirmar",
    featured: true,
    highlights: [],
    description:
      "Una experiencia de dos días para deconstruir la historia pedagógica personal. Un espacio seguro para soltar certezas, reconectar con la vocación y redescubrir el arte de acompañar.",
    showDesaprenderLink: true,
    registrationLink: WHATSAPP_GDL,
  },
];

const pricing = [
  {
    event: "Conferencia Taller",
    general: "$1,100",
    earlyBird: "$1,000",
  },
  {
    event: "Taller DesAprender",
    general: "$4,600",
    earlyBird: "$4,300",
  },
];

const Guadalajara = () => {
  return (
    <Layout>
      <main>
        {/* Hero with background image */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={retiroGrupoCampo}
              alt="Encuentro grupal en Monterrey"
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
                    Monterrey · Mayo 2026
                  </span>
                </div>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-primary-foreground mb-6">
                Encuentros para
                <br />
                <span className="text-accent italic">Desaprender Juntos</span>
                <br />
                con Germán Doin
              </h1>
              <p className="font-display text-xl sm:text-2xl italic text-primary-foreground/70 mb-8">
                "La educación cambia cuando cambiamos nosotros"
              </p>
              <p className="font-body text-base sm:text-lg text-primary-foreground/60 max-w-2xl mx-auto leading-relaxed">
                Desde la creación de <em>La Educación Prohibida</em>, Germán ha
                recorrido un camino profundo de investigación, formación y
                acompañamiento. Estos encuentros son una invitación a explorar
                la educación desde la presencia, el vínculo y la transformación
                personal. Organiza <b>Micelia OSA</b>.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#propuestas"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("propuestas")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-accent-foreground font-body font-medium text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity"
                >
                  Ver las propuestas
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#precios"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("precios")
                      ?.scrollIntoView({ behavior: "smooth" });
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

        {/* Propuestas */}
        <section
          id="propuestas"
          className="py-24 lg:py-32 px-6 sm:px-12 lg:px-16 bg-background"
        >
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-accent" />
                <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                  Propuestas en Monterrey
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                Dos actividades, un mismo{" "}
                <span className="italic text-accent">sentido</span>
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mb-6">
                Cada actividad ofrece una puerta de entrada distinta a la
                transformación educativa y vincular.
              </p>
              <p className="font-body text-sm text-muted-foreground/80 italic max-w-2xl mb-16">
                Toda la agenda de actividades en Monterrey es organizada y coordinada por Micelio OSA.
              </p>
            </FadeIn>

            <div className="grid lg:grid-cols-3 gap-8">
              {activities.map((activity, i) => (
                <FadeIn key={i} delay={0.1 * i}>
                  <div
                    className={`relative flex flex-col h-full rounded-sm border overflow-hidden transition-colors ${
                      activity.featured
                        ? "border-accent bg-card shadow-lg ring-1 ring-accent/20"
                        : "border-border bg-card hover:border-accent/40"
                    }`}
                  >
                    <div
                      className={`h-2 ${
                        activity.featured ? "bg-accent" : "bg-accent/40"
                      }`}
                    />

                    {activity.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="font-body text-[10px] tracking-widest uppercase bg-accent text-accent-foreground px-3 py-1 rounded-full">
                          Evento principal
                        </span>
                      </div>
                    )}

                    <div className="p-8 lg:p-10 flex flex-col flex-1">
                      <activity.icon
                        className="w-7 h-7 text-accent mb-4"
                        strokeWidth={1.5}
                      />
                      <span className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">
                        {activity.type}
                      </span>
                      <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                        {activity.title}
                      </h3>

                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2 text-muted-foreground font-body text-sm">
                          <Calendar className="w-4 h-4 text-accent shrink-0" />
                          {activity.date}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground font-body text-sm">
                          <Clock className="w-4 h-4 text-accent shrink-0" />
                          {activity.time}
                        </div>
                        <div className="flex items-start gap-2 text-muted-foreground font-body text-sm">
                          <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{activity.location}</span>
                        </div>
                      </div>

                      {activity.highlights.length > 0 && (
                        <ul className="space-y-2 mb-6">
                          {activity.highlights.map((h, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 font-body text-sm text-muted-foreground"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}

                      {activity.description && (
                        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                          {activity.description}
                        </p>
                      )}

                      {activity.showDesaprenderLink && (
                        <div className="mb-6">
                          <Link
                            to="/desaprender"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-body text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
                          >
                            Conocer más sobre el Retiro
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      )}

                      <div className="mt-auto pt-4">
                        <a
                          href={activity.registrationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center justify-center w-full gap-2 px-6 py-3 font-body text-sm font-medium rounded-sm transition-colors ${
                            activity.featured
                              ? "bg-primary text-primary-foreground hover:opacity-90"
                              : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          }`}
                        >
                          Inscribirse
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
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
                  Precios y promociones
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-12">
                Inversión por{" "}
                <span className="italic text-accent">evento</span>
              </h2>
            </FadeIn>

            {/* Pricing table */}
            <FadeIn delay={0.1}>
              <div className="overflow-x-auto mb-10">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-4 px-4 font-body text-xs tracking-widest uppercase text-muted-foreground">
                        Evento
                      </th>
                      <th className="py-4 px-4 font-body text-xs tracking-widest uppercase text-muted-foreground">
                        Público General
                      </th>
                      <th className="py-4 px-4 font-body text-xs tracking-widest uppercase text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Tag className="w-3.5 h-3.5 text-accent" />
                          Early Bird (antes 30 Marzo)
                        </span>
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
                        <td className="py-4 px-4 font-body text-base font-semibold text-accent">
                          {row.earlyBird}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>

            {/* Special combo + group discounts */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <FadeIn delay={0.2}>
                <div className="rounded-sm border border-accent bg-card p-8 text-center shadow-md ring-1 ring-accent/20">
                  <Sparkles className="w-6 h-6 text-accent mx-auto mb-3" />
                  <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
                    Valor especial
                  </p>
                  <p className="font-display text-3xl font-bold text-foreground mb-1">
                    $6,500
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    por los 3 eventos
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="rounded-sm border border-border bg-card p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <UsersRound className="w-5 h-5 text-accent" />
                    <p className="font-body text-xs tracking-widest uppercase text-muted-foreground">
                      Descuentos por grupos
                    </p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 font-body text-sm text-foreground">
                      <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      Grupos de 5 personas:{" "}
                      <span className="font-semibold text-accent">
                        15% de descuento
                      </span>
                    </li>
                    <li className="flex items-center gap-3 font-body text-sm text-foreground">
                      <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      Grupos de 10 personas:{" "}
                      <span className="font-semibold text-accent">
                        20% de descuento
                      </span>
                    </li>
                                        <li className="flex items-center gap-3 font-body text-sm text-foreground">
                      <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      Miembros de la Comunidad de ALAS:{" "}
                      <span className="font-semibold text-accent">
                        Consultar por descuento especial
                      </span>
                    </li>

                  </ul>
                </div>
              </FadeIn>
            </div>

            {/* Inscribirse CTA */}
            <FadeIn delay={0.4}>
              <div className="text-center">
                <a
                  href={WHATSAPP_GDL}
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

        {/* Comunidad ALAS */}
        <section className="py-24 lg:py-32 px-6 sm:px-12 lg:px-16 bg-background">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="grid md:grid-cols-[280px_1fr] gap-12 items-center">
                <div className="relative flex items-center justify-center">
                  <img
                    src={logoAlas}
                    alt="Comunidad ALAS - Aprendizaje en Libertad"
                    className="w-full max-w-[260px] object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-px w-12 bg-accent" />
                    <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                      Organiza
                    </span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-6">
                    Comunidad{" "}
                    <span className="italic text-accent">MICELIO</span>
                    <span className="block font-body text-base font-normal text-muted-foreground mt-2">
                      OSA
                    </span>
                  </h2>
                  <div className="font-body text-muted-foreground leading-relaxed space-y-4">
                    <p>
                      Micelio Organismo Social de Aprendizaje (OSA) es una comunidad viva de personas adultas que desean, de forma personal individual y colectiva, mejorar su forma de acompañar a lxs niñas, niños y adolescentes que aman, de manera disfrutable y ligera. 
                    </p>
                  </div>
                  <div className="mt-8">
                    <a
                      href="https://www.micelioosa.red/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-body text-sm text-accent hover:text-foreground transition-colors"
                    >
                      Conocer más sobre Micelio
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Contact CTA */}
        <section
          id="contacto"
          className="py-24 lg:py-32 px-6 sm:px-12 lg:px-16 bg-primary text-center"
        >
          <FadeIn>
            <div className="max-w-2xl mx-auto">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-primary-foreground mb-4">
                ¿Quieres participar?
              </h2>
              <p className="font-body text-primary-foreground/70 mb-8">
                Escríbenos para más información sobre cualquiera de las
                actividades o para reservar tu lugar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={WHATSAPP_GDL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-accent-foreground font-body font-medium text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity"
                >
                  Contactar por WhatsApp
                </a>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>
    </Layout>
  );
};

export default Guadalajara;
