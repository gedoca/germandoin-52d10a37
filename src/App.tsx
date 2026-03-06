import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Perfil from "./pages/Perfil";
import Retiros from "./pages/Retiros";
import Agenda from "./pages/Agenda";
import Contacto from "./pages/Contacto";
import Guadalajara from "./pages/Guadalajara";
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </QueryClientProvider>
);

export default App;
