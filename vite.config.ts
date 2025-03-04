import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react'; // Asegúrate de importar el plugin de React si lo estás usando

export default defineConfig({
  plugins: [
    react(), // Plugin de React (opcional, solo si usas React)
    tailwindcss(), // Plugin de Tailwind CSS
  ],
});