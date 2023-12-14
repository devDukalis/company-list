import { defineConfig } from "vite";
import { resolve } from "path";

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { checker as typeChecker } from "vite-plugin-checker";

export const aliases = {
  "@": resolve(__dirname, "./src"),
  "@assets": resolve(__dirname, "./src/assets"),
  "@components": resolve(__dirname, "./src/components"),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), typeChecker({ typescript: true })],
  resolve: {
    alias: aliases,
  },
});
