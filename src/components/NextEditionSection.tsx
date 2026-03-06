import { Link } from "react-router-dom";
import { MapPin, Clock, MessageSquare, ArrowRight } from "lucide-react";
import { getNextEventsForSlug, WHATSAPP_URL, type AgendaEvent } from "@/data/agenda";

interface NextEditionProps {
  slug: AgendaEvent["slug"];
  title?: string;
}

const NextEditionSection = ({ slug, title }: NextEditionProps) => {
  const events = getNextEventsForSlug(slug);

  if (events.length === 0) {
    return (
      <div className="p-10 border border-border rounded-sm bg-card text-center">
        <h3 className="font-display text-2xl text-foreground mb-3">Próximas fechas por confirmar</h3>
        <p className="font-body text-sm text-muted-foreground mb-6">
          Escribinos para recibir información cuando se confirmen nuevas ediciones.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          Más información
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {title && (
        <h3 className="font-display text-2xl text-foreground mb-6 text-center">{title}</h3>
      )}
      {events.map((event, i) => (
        <div
          key={i}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 border border-border rounded-sm bg-card hover:border-accent/40 transition-colors"
        >
          <div>
            <span className="font-body text-xs tracking-widest uppercase text-accent font-medium">
              {event.type}
            </span>
            <div className="flex flex-wrap items-center gap-4 mt-1 font-body text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-accent" /> {event.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-accent" /> {event.dateDetail}
              </span>
            </div>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground font-body text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            Más información
          </a>
        </div>
      ))}
      <div className="text-center pt-2">
        <Link
          to="/agenda"
          className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Ver agenda completa <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};

export default NextEditionSection;
