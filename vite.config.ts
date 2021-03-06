import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  assetsInclude: ["**/*.gltf", "**/*.glb", "**/*.env", "**/*.mp4"],
  server: {
    open: true,
    host: true,
  },
});
