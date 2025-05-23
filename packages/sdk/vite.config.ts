import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      name: "SDK",
      fileName: "sdk",
    },
    // rollupOptions: {
    //   // externalize deps that shouldn't be bundled into the library
    //   external: ["react", "react-dom"],
    // },
  },
});
