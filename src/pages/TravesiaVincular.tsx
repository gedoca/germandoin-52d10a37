import Layout from "@/components/Layout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { HeartHandshake, ExternalLink, Quote, ArrowRight, Users, Compass, Mic } from "lucide-react";

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

const pillars = [
  {
    icon: Users,
    title: "Inteligencia Vincular",
    description: "La capacidad de percibir, comprender y transformar lo que sucede entre nosotros. Exploramos los vínculos como campo de aprendizaje y crecimiento.",
  },
  {
    icon: Compass,
    title: "Autoconocimiento Transpersonal",
    description: "Integración de psicoterapia gestáltica, trabajo corporal y estados ampliados de conciencia para una comprensión profunda del ser.",
  },
  {
    icon: Mic,
    title: "Voz y Expresión",
    description: "La voz como herramienta de autoconocimiento y transformación. Exploración sonora, canto y expresión creativa como vías de conexión auténtica.",
  },
];

const TravesiaVincular = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pb-28 px-6 sm:px-12 lg:px-16 bg-gradient-to-b from-card to-background">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <HeartHandshake className="w-6 h-6 text-accent" strokeWidth={1.5} />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                Proyecto conjunto
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
              Travesía <span className="italic text-accent">Vincular</span>
            </h1>
            <p className="font-body text-base lg:text-lg text-muted-foreground max-w-3xl leading-relaxed mb-8">
              Un proyecto coordinado por Germán Doin y{" "}
              <a href="https://www.allegramusica.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Cintia Alegre</a>{" "}
              que explora los vínculos humanos
              como territorio de transformación. Retiros, escritura, conversaciones y prácticas para
              habitar relaciones más libres, genuinas y creativas.
            </p>
            <a
              href="https://travesiavincular.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
            >
              Leer en Substack
              <ExternalLink className="w-4 h-4" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Quiénes somos */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                Quiénes somos
              </span>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="p-8 border border-border rounded-sm bg-card hover:border-accent/40 transition-colors">
                <div className="w-20 h-20 rounded-full bg-muted mb-6 flex items-center justify-center">
                  <span className="font-display text-2xl text-muted-foreground">GD</span>
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">Germán Doin</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Educador, comunicador y acompañante en procesos de autoconocimiento. Cofundador y
                  mentor en Arka – Escuela de Formación Transpersonal. Con más de 15 años de experiencia
                  coordinando grupos en el ámbito educativo, artístico y psicoterapéutico. Formado en
                  Gestalt y psicoterapias integrativas.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-8 border border-border rounded-sm bg-card hover:border-accent/40 transition-colors">
                <div className="w-20 h-20 rounded-full bg-muted mb-6 flex items-center justify-center">
                  <span className="font-display text-2xl text-muted-foreground">CA</span>
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">
                  <a href="https://www.allegramusica.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Cintia Alegre</a>
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Música, cantautora y terapeuta vocal. Formada en Psicología Social y especializada
                  en exploración de la voz como herramienta de autoconocimiento y transformación.
                  Ha acompañado grupos por más de 10 años en espacios de música, canto y procesos
                  expresivos.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16 bg-card">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                Nuestros pilares
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-12">
              Tres ejes de <span className="italic text-accent">exploración</span>
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="p-6 border border-border rounded-sm bg-background hover:border-accent/40 transition-colors h-full">
                  <p.icon className="w-7 h-7 text-accent mb-5" strokeWidth={1.5} />
                  <h3 className="font-display text-xl text-foreground mb-3">{p.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <Quote className="w-10 h-10 text-accent/30 mx-auto mb-6" strokeWidth={1} />
            <p className="font-display text-xl sm:text-2xl lg:text-3xl italic text-foreground leading-relaxed text-balance mb-6">
              "El vínculo es un espacio que no se puede controlar. Vincularse implica dejar amorosamente
              e inteligentemente de ser sujeto u objeto, abrirse por completo a la información
              transformadora que fluye."
            </p>
            <p className="font-body text-sm text-accent font-medium">Eugenio Carutti</p>
          </FadeIn>
        </div>
      </section>

      {/* Substack CTA */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-4">
              Leé nuestras <span className="italic text-accent">reflexiones</span>
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-xl mx-auto">
              En nuestro Substack compartimos escritos, reflexiones y conversaciones sobre
              vínculos, autoconocimiento y transformación.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://travesiavincular.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
              >
                Ir a Substack
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                to="/vinculos-autenticos"
                className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary font-body text-sm font-medium rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Ver retiro Vínculos Auténticos
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default TravesiaVincular;
