import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import germanPortrait from "@/assets/german-portrait.jpg";
import retreatLandscape from "@/assets/retiro-paisaje-verde.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image side */}
      <div className="absolute inset-0 lg:relative lg:w-1/2 lg:min-h-screen">
        <img
          src={germanPortrait}
          alt="Germán Doin Campos - Comunicador, educador y terapeuta"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-foreground/80 lg:from-transparent lg:via-transparent lg:to-foreground/30" />
      </div>

      {/* Text side */}
      <div className="relative z-10 w-full lg:w-1/2 px-6 sm:px-12 lg:px-16 xl:px-24 py-24 lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-0.5 bg-accent mb-8"
          />
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-primary-foreground lg:text-foreground tracking-tight">
            Germán Doin
            <br />
            <span className="text-accent italic">Campos</span>
          </h1>
          <p className="mt-4 font-display text-lg sm:text-xl italic text-primary-foreground/80 lg:text-muted-foreground">
            Comunicación. Educación. Transformación Vincular.
          </p>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-primary-foreground/70 lg:text-muted-foreground font-body">
            Acompaño procesos de transformación personal, educativa y vincular
            desde hace más de 15 años en América Latina.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/panama"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground font-body font-medium text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity"
            >
              Panamá
            </Link>
            <Link
              to="/guadalajara"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-accent text-accent lg:text-accent-foreground lg:border-accent font-body font-medium text-sm tracking-wide rounded-sm hover:bg-accent/10 transition-colors"
            >
              Guadalajara
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating landscape preview */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="hidden lg:block absolute bottom-8 right-8 w-64 h-40 rounded-sm overflow-hidden shadow-2xl border border-border/30"
      >
        <img
          src={retreatLandscape}
          alt="Paisaje de retiro"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
        <span className="absolute bottom-3 left-4 font-body text-xs text-primary-foreground/90 tracking-wide">
          Próximos retiros →
        </span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
