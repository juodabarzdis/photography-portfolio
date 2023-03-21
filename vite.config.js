import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // below - config for auto import scss variables
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/sass/variables.scss";`,
      },
    },
  },
});
