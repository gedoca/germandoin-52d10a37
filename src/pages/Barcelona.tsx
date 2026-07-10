import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Clock, Tag, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import heroImg from "@/assets/desaprender-grupo-1.jpg";
import ivImg from "@/assets/retiro-grupo-circulo.jpg";
import germanPortrait from "@/assets/german-portrait.jpg";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSc2ps_LMxdNSFZjxhIzIopaaRDSoHViPKV4E8FshO9U2Qmrvg/viewform?usp=publish-editor";

const PAY_URL =
  "https://www.paypal.com/ncp/payment/JWGDYNXDTK94W";

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

const CTAButton = ({ label = "Inscribirme" }: { label?: string }) => (
  <a
    href={FORM_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-body font-medium text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity"
  >
    {label}
    <ArrowRight className="w-4 h-4" />
  </a>
);

const PayButton = ({ label = "Pagar" }: { label?: string }) => (
  <a
    href={PAY_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-body font-medium text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity"
  >
    {label}
    <ArrowRight className="w-4 h-4" />
  </a>
);

const eventDetails = [
  { icon: Calendar, label: "Fecha", value: "Miércoles 22 de julio · 18:30hs" },
  { icon: Clock, label: "Duración", value: "3 horas" },
  { icon: MapPin, label: "Lugar", value: "Institut Integratiu · Carrer València 661, 08027 Barcelona" },
  { icon: Tag, label: "Aporte", value: "20€" },
];

const Barcelona = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 px-6 sm:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-accent mb-6">
              Barcelona · Julio 2026
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground tracking-tight">
              El Camino <span className="italic text-accent">del Vínculo</span>
            </h1>
            <p className="mt-5 font-display text-xl sm:text-2xl italic text-muted-foreground">
              Laboratorio vivencial de Inteligencia Vincular
            </p>
            <p className="mt-6 font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
              Facilita <span className="text-foreground font-medium">Germán Doin</span> — Counsellor en
              Gestalt-Transpersonal, Director de <em>La Educación Prohibida</em>.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Portada image */}
      <section className="px-6 sm:px-12 lg:px-16 pb-16">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="aspect-[16/9] overflow-hidden rounded-sm">
              <img
                src={heroImg}
                alt="Trabajo grupal en un laboratorio vivencial de Inteligencia Vincular"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Ficha del evento */}
      <section className="px-6 sm:px-12 lg:px-16 pb-16">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="border border-border rounded-sm bg-muted/30 p-6 sm:p-10">
              <ul className="space-y-5">
                {eventDetails.map((d) => (
                  <li key={d.label} className="flex items-start gap-4">
                    <d.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                        {d.label}
                      </p>
                      <p className="font-body text-base sm:text-lg text-foreground mt-0.5">
                        {d.value}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-border flex justify-center sm:justify-start">
                <CTAButton /> <PayButton />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ¿Qué es la Inteligencia Vincular? */}
      <section className="px-6 sm:px-12 lg:px-16 pb-20">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <FadeIn>
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={ivImg}
                alt="Círculo grupal en un encuentro vivencial"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-accent mb-4">
                Marco conceptual
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-foreground leading-snug mb-6">
                ¿Qué es la <span className="italic text-accent">Inteligencia Vincular</span>?
              </h2>
              <div className="space-y-5 font-body text-base leading-[1.8] text-foreground/85">
                <p>
                  La Inteligencia Vincular es un campo de investigación transdisciplinario que
                  explora cómo los vínculos participan activamente en la construcción de la
                  experiencia humana. Surge del diálogo entre distintas corrientes y disciplinas
                  —como la psicología, la psicoterapia, la Gestalt, la biología, la teoría de
                  sistemas, la psicología transpersonal, la astrología psicológica y otras
                  perspectivas sobre la conciencia y la complejidad— para comprender aquello que
                  sucede entre las personas. En lugar de explicar la experiencia desde un único
                  marco teórico, busca integrar saberes que permitan observar el vínculo como un
                  fenómeno vivo, dinámico y generador de información.
                </p>
                <p>
                  Este enfoque rompe con el paradigma individualista que entiende a las personas
                  como entidades separadas que luego se relacionan. Propone, en cambio, que somos
                  seres constituidos en relación y que gran parte de la información necesaria para
                  nuestro desarrollo no se encuentra únicamente en la introspección, sino en la
                  calidad de los encuentros que somos capaces de sostener. La Inteligencia Vincular
                  desplaza el foco desde el control, la adaptación o la resolución de conflictos
                  hacia el aprendizaje que emerge cuando dos o más personas pueden encontrarse con
                  autenticidad, sostener la diferencia y permitir que el vínculo revele aspectos de
                  sí mismos que, en soledad, permanecerían invisibles.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Texto descriptivo */}
      <section className="px-6 sm:px-12 lg:px-16 pb-20">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-2xl sm:text-3xl text-foreground leading-snug mb-10">
              Un laboratorio para explorar cómo nos descubrimos en los vínculos
            </h2>

            <div className="space-y-7 font-body text-base sm:text-[17px] leading-[1.8] text-foreground/85">
              <p>
                Vivimos un momento histórico en el que el desarrollo personal ha puesto el foco en
                conocernos a nosotros mismos. Aprendemos a identificar emociones, comprender nuestra
                historia, reconocer patrones y nombrar nuestras heridas. Todo eso es valioso.
              </p>
              <p>Pero existe una pregunta que pocas veces nos hacemos:</p>

              <blockquote className="my-10 border-l-2 border-accent pl-6 sm:pl-8 py-2">
                <p className="font-display italic text-2xl sm:text-3xl leading-snug text-foreground">
                  ¿Alcanza con conocerse a uno mismo para construir vínculos auténticos?
                </p>
              </blockquote>

              <p>Desde la Inteligencia Vincular creemos que no.</p>
              <p>
                Podemos tener una enorme claridad sobre quiénes creemos ser y, aun así, seguir
                repitiendo las mismas formas de controlar, adaptarnos, defendernos o alejarnos cuando
                aparece un otro real.
              </p>
              <p>
                Porque hay aspectos de nosotros que solo existen en el encuentro. Solo frente a otra
                persona aparecen nuestras maneras de acercarnos, de poner límites, de sostener la
                diferencia, de pedir, de confiar, de protegernos o de ejercer control.
              </p>
              <p>
                En ese sentido, el autoconocimiento no es el destino del camino, sino apenas su punto
                de partida. El siguiente paso consiste en abrirnos a descubrir quiénes somos mientras
                nos vinculamos.
              </p>
              <p>
                La Inteligencia Vincular propone justamente ese movimiento: pasar del conocimiento
                sobre uno mismo a la experiencia de encontrarse con otros desde una presencia más
                consciente, adulta y disponible.
              </p>
              <p>
                Este taller es una invitación a investigar ese territorio. No para aprender técnicas
                de comunicación ni para alcanzar relaciones ideales, sino para desarrollar una mayor
                capacidad de percibir lo que sucede en el espacio compartido y comprender cómo los
                vínculos nos revelan aspectos de nosotros que no pueden conocerse en soledad.
              </p>
              <p>
                A través de experiencias vivenciales, ejercicios de observación y espacios de
                reflexión exploraremos cómo habitamos la diferencia, el conflicto, la incertidumbre y
                la cercanía, entendiendo que el vínculo no es un lugar donde aplicar lo que sabemos
                sobre nosotros mismos, sino el espacio donde seguimos descubriéndonos.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Sobre el facilitador */}
      <section className="px-6 sm:px-12 lg:px-16 pb-20">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-accent mb-4 text-center">
              Quién facilita
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground text-center mb-12">
              Sobre el <span className="italic text-accent">facilitador</span>
            </h2>
            <div className="grid sm:grid-cols-[220px_1fr] gap-8 sm:gap-12 items-start">
              <div className="aspect-square overflow-hidden rounded-sm mx-auto sm:mx-0 w-full max-w-[220px]">
                <img
                  src={germanPortrait}
                  alt="Retrato de Germán Doin"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="font-body text-base leading-[1.8] text-foreground/85 space-y-4">
                <h3 className="font-display text-2xl text-foreground">Germán Doin</h3>
                <p>
                  Profesional argentino, padre de dos hijos, técnico en Comunicación Social y
                  Producción Audiovisual. Desde 2009 investiga y difunde modelos educativos
                  alternativos, trabajo que lo llevó a dirigir y producir <em>La Educación
                  Prohibida</em> (2012), uno de los documentales educativos más vistos en habla
                  hispana.
                </p>
                <p>
                  Especializado en psicoterapia gestalt-transpersonal a través del Programa SAT y
                  Aramí, con formación en Eneagrama desde la perspectiva de Claudio Naranjo. Su
                  trabajo integra comunicación, educación y terapia en una visión que busca
                  transformar los vínculos humanos desde la conciencia.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-6 sm:px-12 lg:px-16 pb-24">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h3 className="font-display text-2xl sm:text-3xl text-foreground mb-4">
              Te espero en Barcelona
            </h3>
            <p className="font-body text-muted-foreground mb-8">
              Miércoles 22 de julio · 18:30hs · Institut Integratiu
            </p>
            <CTAButton />             <PayButton />
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Barcelona;
