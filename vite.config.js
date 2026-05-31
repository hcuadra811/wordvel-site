import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],

  // Make linked @wordvel/* packages + their peer deps resolve reliably during dev
  // (exact same pattern as bruno_cortina)
  resolve: {
    dedupe: ['react', 'react-dom'],
    alias: {
      "@wordvel/react": resolve(__dirname, "../wordvel-react"),
      "@wordvel/typescript": resolve(__dirname, "../wordvel-typescript"),
    },
  },

  optimizeDeps: {
    include: [
      "@wordvel/react",
      "@wordvel/typescript",
      "react",
      "react-dom",
    ],
    // Force re-optimization when linked packages change
    force: true,
  },

  // Help Vite treat the linked workspace packages as part of the app
  ssr: {
    noExternal: ['@wordvel/react', '@wordvel/typescript'],
  },

  build: {
    assetsDir: "assets",
    rollupOptions: {
      output: {
        // Keep main CSS name stable for the wordvel:sync tool (matches old behavior)
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/app.css';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
