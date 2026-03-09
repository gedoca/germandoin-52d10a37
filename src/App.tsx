import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Perfil from "./pages/Perfil";
import Retiros from "./pages/Retiros";
import Agenda from "./pages/Agenda";
import Contacto from "./pages/Contacto";
import Guadalajara from "./pages/Guadalajara";
import Panama from "./pages/Panama";
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
        <Route path="/guadalajara" element={<Guadalajara />} />
        <Route path="/panama" element={<Panama />} />
        <Route path="/desaprender" element={<Desaprender />} />
        <Route path="/viaje-sanador" element={<ViajeSanador />} />
        <Route path="/vinculos-autenticos" element={<VinculosAutenticos />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/travesia-vincular" element={<TravesiaVincular />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </QueryClientProvider>
);

export default App;
