import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Clock, Tag, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSc2ps_LMxdNSFZjxhIzIopaaRDSoHViPKV4E8FshO9U2Qmrvg/viewform?usp=publish-editor";

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
                <CTAButton />
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
            <CTAButton />
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Barcelona;