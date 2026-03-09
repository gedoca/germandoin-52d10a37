import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5491162720879";

const footerLinks = [
  { label: "Perfil", to: "/perfil" },
  { label: "Retiros", to: "/retiros" },
  { label: "Agenda", to: "/agenda" },
  { label: "Contacto", to: "/contacto" },
];

const SiteFooter = () => {
  return (
    <footer className="py-16 px-6 sm:px-12 lg:px-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <Link to="/" className="font-display text-xl text-foreground">
              Germán Doin
            </Link>
            <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed max-w-xs">
              Comunicación, educación y transformación vincular.
            </p>
          </div>
          <div>
            <h4 className="font-body text-sm font-semibold text-foreground mb-4">Navegación</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-body text-sm font-semibold text-foreground mb-4">Contacto</h4>
            <div className="space-y-3 font-body text-sm text-muted-foreground">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-accent" />
                +54 911 6272 0879
              </a>
              <a
                href="https://instagram.com/germandoin"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-foreground transition-colors"
              >
                @germandoin
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8">
          <p className="font-display text-base italic text-muted-foreground text-center text-balance">
            "Transformar la educación, el vínculo y la conciencia es una tarea colectiva."
          </p>
          <p className="font-body text-xs text-muted-foreground/60 mt-4 text-center">
            © {new Date().getFullYear()} Germán Doin Campos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
