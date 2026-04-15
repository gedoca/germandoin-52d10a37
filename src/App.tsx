import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Perfil from "./pages/Perfil";
import Retiros from "./pages/Retiros";
import Agenda from "./pages/Agenda";
import Contacto from "./pages/Contacto";
import Guadalajara from "./pages/Guadalajara";
import Monterrey from "./pages/Monterrey";
import EstadoDeMexico from "./pages/EstadoDeMexico";
import Desaprender from "./pages/Desaprender";
import ViajeSanador from "./pages/ViajeSanador";
import VinculosAutenticos from "./pages/VinculosAutenticos";
import Cursos from "./pages/Cursos";
import TravesiaVincular from "./pages/TravesiaVincular";
import SesionesTerapia from "./pages/SesionesTerapia";
import SanMiguelDeAllende from "./pages/SanMiguelDeAllende";
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
        <Route path="/guadalajara" element={<Guadalajara />} />
        <Route path="/monterrey" element={<Monterrey />} />
        <Route path="/estado-de-mexico" element={<EstadoDeMexico />} />
        <Route path="/desaprender" element={<Desaprender />} />
        <Route path="/viaje-sanador" element={<ViajeSanador />} />
        <Route path="/vinculos-autenticos" element={<VinculosAutenticos />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/travesia-vincular" element={<TravesiaVincular />} />
        <Route path="/sesiones-terapia" element={<SesionesTerapia />} />
        <Route path="/san-miguel-de-allende" element={<SanMiguelDeAllende />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </QueryClientProvider>
);

export default App;
