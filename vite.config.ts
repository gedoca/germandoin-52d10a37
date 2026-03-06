import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // 1. Esto le dice a GitHub Pages que el sitio está en la carpeta /germandoin/
  base: '/', 
  
  server: {
    host: "::",
    port: 8080,
    // 2. Esto evita el error de "Host blocked" que tuviste en Replit
    allowedHosts: true, 
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
