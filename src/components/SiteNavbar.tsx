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

const secondaryLinks = [
  { label: "Guadalajara", to: "/guadalajara" },
  { label: "Cursos", to: "/cursos" },
  { label: "Travesía Vincular", to: "/travesia-vincular" },
];

const SiteNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [retreatsOpen, setRetreatsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setRetreatsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setRetreatsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isRetreatActive = retreatLinks.some((l) => location.pathname === l.to) || location.pathname === "/retiros";

  const linkClass = (to: string) =>
    `font-body text-sm transition-colors ${
      location.pathname === to
        ? "text-foreground font-medium"
        : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
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
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setRetreatsOpen(!retreatsOpen)}
              className={`inline-flex items-center gap-1 font-body text-sm transition-colors ${
                isRetreatActive
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
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

          {secondaryLinks.map((link) => (
            <Link key={link.to} to={link.to} className={linkClass(link.to)}>
              {link.label}
            </Link>
          ))}
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
              className={`inline-flex items-center gap-1 w-full font-body text-sm transition-colors ${
                isRetreatActive
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
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
