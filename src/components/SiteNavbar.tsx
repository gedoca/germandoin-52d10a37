import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const mainLinks = [
  { label: "Inicio", to: "/" },
  { label: "Perfil", to: "/perfil" },
  { label: "Agenda", to: "/agenda" },
];

const retreatLinks = [
  { label: "Viaje Sanador", to: "/viaje-sanador" },
  { label: "DesAprender", to: "/desaprender" },
  { label: "Vínculos Auténticos", to: "/vinculos-autenticos" },
];

const destinoLinks = [
  { label: "Panamá", to: "/panama" },
  { label: "Guadalajara", to: "/guadalajara" },
];

const virtualLinks = [
  { label: "Cursos de Educación", to: "/cursos" },
  { label: "Travesía Vincular", to: "/travesia-vincular" },
  { label: "Sesiones de Terapia", to: "/sesiones-terapia" },
];

const SiteNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [retreatsOpen, setRetreatsOpen] = useState(false);
  const [destinosOpen, setDestinosOpen] = useState(false);
  const [virtualOpen, setVirtualOpen] = useState(false);
  const location = useLocation();
  const retreatRef = useRef<HTMLDivElement>(null);
  const destinoRef = useRef<HTMLDivElement>(null);
  const virtualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setRetreatsOpen(false);
    setDestinosOpen(false);
    setVirtualOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (retreatRef.current && !retreatRef.current.contains(e.target as Node)) {
        setRetreatsOpen(false);
      }
      if (destinoRef.current && !destinoRef.current.contains(e.target as Node)) {
        setDestinosOpen(false);
      }
      if (virtualRef.current && !virtualRef.current.contains(e.target as Node)) {
        setVirtualOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isRetreatActive = retreatLinks.some((l) => location.pathname === l.to) || location.pathname === "/retiros";
  const isDestinoActive = destinoLinks.some((l) => location.pathname === l.to);
  const isVirtualActive = virtualLinks.some((l) => location.pathname === l.to);

  const linkClass = (to: string) =>
    `font-body text-sm transition-colors ${
      location.pathname === to
        ? "text-foreground font-medium"
        : "text-muted-foreground hover:text-foreground"
    }`;

  const dropdownBtnClass = (active: boolean) =>
    `inline-flex items-center gap-1 font-body text-sm transition-colors ${
      active ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 flex items-center justify-between h-16">
        <Link to="/" className="font-display text-xl text-foreground tracking-tight">
          Germán Doin
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {mainLinks.map((link) => (
            <Link key={link.to} to={link.to} className={linkClass(link.to)}>
              {link.label}
            </Link>
          ))}

          {/* Retiros dropdown */}
          <div className="relative" ref={retreatRef}>
            <button
              onClick={() => { setRetreatsOpen(!retreatsOpen); setDestinosOpen(false); }}
              className={dropdownBtnClass(isRetreatActive)}
            >
              Retiros
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${retreatsOpen ? "rotate-180" : ""}`} />
            </button>
            {retreatsOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-background border border-border rounded-sm shadow-lg py-2">
                <Link
                  to="/retiros"
                  className="block px-4 py-2 font-body text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors font-medium"
                >
                  Ver todos
                </Link>
                <div className="h-px bg-border my-1" />
                {retreatLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block px-4 py-2 font-body text-sm transition-colors ${
                      location.pathname === link.to
                        ? "text-foreground font-medium bg-muted/30"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Destinos dropdown */}
          <div className="relative" ref={destinoRef}>
            <button
              onClick={() => { setDestinosOpen(!destinosOpen); setRetreatsOpen(false); }}
              className={dropdownBtnClass(isDestinoActive)}
            >
              Destinos
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${destinosOpen ? "rotate-180" : ""}`} />
            </button>
            {destinosOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-background border border-border rounded-sm shadow-lg py-2">
                {destinoLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block px-4 py-2 font-body text-sm transition-colors ${
                      location.pathname === link.to
                        ? "text-foreground font-medium bg-muted/30"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Propuestas Virtuales dropdown */}
          <div className="relative" ref={virtualRef}>
            <button
              onClick={() => { setVirtualOpen(!virtualOpen); setRetreatsOpen(false); setDestinosOpen(false); }}
              className={dropdownBtnClass(isVirtualActive)}
            >
              Propuestas Virtuales
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${virtualOpen ? "rotate-180" : ""}`} />
            </button>
            {virtualOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-background border border-border rounded-sm shadow-lg py-2">
                {virtualLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block px-4 py-2 font-body text-sm transition-colors ${
                      location.pathname === link.to
                        ? "text-foreground font-medium bg-muted/30"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-6 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          {mainLinks.map((link) => (
            <Link key={link.to} to={link.to} className={`block py-2 ${linkClass(link.to)}`}>
              {link.label}
            </Link>
          ))}

          {/* Retiros section */}
          <div className="py-2">
            <button
              onClick={() => setRetreatsOpen(!retreatsOpen)}
              className={`${dropdownBtnClass(isRetreatActive)} w-full`}
            >
              Retiros
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${retreatsOpen ? "rotate-180" : ""}`} />
            </button>
            {retreatsOpen && (
              <div className="pl-4 mt-1 space-y-1 border-l border-accent/30">
                <Link to="/retiros" className={`block py-1.5 ${linkClass("/retiros")}`}>
                  Ver todos
                </Link>
                {retreatLinks.map((link) => (
                  <Link key={link.to} to={link.to} className={`block py-1.5 ${linkClass(link.to)}`}>
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Destinos section */}
          <div className="py-2">
            <button
              onClick={() => setDestinosOpen(!destinosOpen)}
              className={`${dropdownBtnClass(isDestinoActive)} w-full`}
            >
              Destinos
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${destinosOpen ? "rotate-180" : ""}`} />
            </button>
            {destinosOpen && (
              <div className="pl-4 mt-1 space-y-1 border-l border-accent/30">
                {destinoLinks.map((link) => (
                  <Link key={link.to} to={link.to} className={`block py-1.5 ${linkClass(link.to)}`}>
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {secondaryLinks.map((link) => (
            <Link key={link.to} to={link.to} className={`block py-2 ${linkClass(link.to)}`}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default SiteNavbar;
