import { cn } from "@/lib/utils";

export const AVISO_TEXTO =
  "Germán Doin es counsellor gestalt-transpersonal. No es psicólogo ni médico. Sus sesiones, grupos y retiros son espacios de acompañamiento y autoconocimiento: no realizan diagnósticos ni reemplazan un tratamiento psicológico, psiquiátrico o médico. Si estás atravesando una crisis o estás en tratamiento, consultá con tu profesional de salud antes de participar.";

export const AVISO_CORTO =
  "No soy psicólogo ni médico. Este espacio no reemplaza un tratamiento psicológico o psiquiátrico.";

interface AvisoProps {
  className?: string;
}

/** Aviso legal discreto. Usar en sesiones, contacto y debajo de los precios de cada retiro. */
const Aviso = ({ className }: AvisoProps) => (
  <aside
    role="note"
    aria-label="Aviso"
    className={cn(
      "max-w-2xl mx-auto border-l-2 border-accent/40 bg-muted/30 rounded-sm px-4 py-3 text-left",
      className,
    )}
  >
    <p className="font-body text-xs leading-relaxed text-muted-foreground">{AVISO_TEXTO}</p>
  </aside>
);

export default Aviso;
