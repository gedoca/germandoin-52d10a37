const SiteFooter = () => {
  return (
    <footer className="py-12 px-6 sm:px-12 lg:px-16 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-display text-lg sm:text-xl italic text-muted-foreground text-balance">
          "Transformar la educación, el vínculo y la conciencia es una tarea colectiva."
        </p>
        <p className="font-body text-xs text-muted-foreground/60 mt-6">
          © {new Date().getFullYear()} Germán Doin Campos. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
