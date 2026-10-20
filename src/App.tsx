import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Perfil from "./pages/Perfil";
import Retiros from "./pages/Retiros";
import Agenda from "./pages/Agenda";
import Contacto from "./pages/Contacto";
import Desaprender from "./pages/Desaprender";
import ViajeSanador from "./pages/ViajeSanador";
import VinculosAutenticos from "./pages/VinculosAutenticos";
import Cursos from "./pages/Cursos";
import TravesiaVincular from "./pages/TravesiaVincular";
import SesionesTerapia from "./pages/SesionesTerapia";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/retiros" element={<Retiros />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/desaprender" element={<Desaprender />} />
        <Route path="/viaje-sanador" element={<ViajeSanador />} />
        <Route path="/vinculos-autenticos" element={<VinculosAutenticos />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/travesia-vincular" element={<TravesiaVincular />} />
        <Route path="/sesiones-terapia" element={<SesionesTerapia />} />
        {/* Eventos ya realizados: páginas archivadas en src/archive, redirigen a la agenda */}
        <Route path="/barcelona" element={<Navigate to="/agenda" replace />} />
        <Route path="/guadalajara" element={<Navigate to="/agenda" replace />} />
        <Route path="/estado-de-mexico" element={<Navigate to="/agenda" replace />} />
        <Route path="/panama" element={<Navigate to="/agenda" replace />} />
        <Route path="/san-miguel-de-allende" element={<Navigate to="/agenda" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </QueryClientProvider>
);

export default App;
