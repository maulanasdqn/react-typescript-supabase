import { defineConfig } from "vite";
import { presetUno } from "unocss";
import Unocss from "unocss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    Unocss({
      presets: [presetUno()],
    }),
  ],
});
