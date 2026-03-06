import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom"; // Cambia BrowserRouter por HashRouterimport Layout from "./components/Layout";
import Index from "./pages/Index";
import Guadalajara from "./pages/Guadalajara";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HashRouter>
    <Routes>
      {/* Importante: Si tus links son "#guadalajara", el HashRouter 
         debería detectarlos automáticamente si la ruta es "/guadalajara".
      */}
      <Route path="/" element={<Index />} />
      <Route path="/guadalajara" element={<Guadalajara />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>
);

export default App;
