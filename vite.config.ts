import path from "path";
import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/vite_csr_space/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
