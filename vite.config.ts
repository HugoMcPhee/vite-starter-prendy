import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), VitePWA({ registerType: "autoUpdate", manifest: { display: "fullscreen" } })],
  assetsInclude: ["**/*.gltf", "**/*.glb", "**/*.env", "**/*.mp4"],
  optimizeDeps: { force: true },
  server: {
    // open: true,
    host: true,
  },
});
