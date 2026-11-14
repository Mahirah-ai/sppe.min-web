import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// `npm run build`          → standard multi-file build in dist/
// `npm run build:single`   → one self-contained HTML (Cowork / quick sharing; speech model downloaded on demand)
// `npm run build:artifact` → multi-file build with relative paths; run scripts/prepare-models.mjs to bundle Whisper
export default defineConfig(({ mode }) => ({
  base: './',
  plugins: [react(), ...(mode === 'single' ? [viteSingleFile()] : [])],
  resolve: {
    // Use the CPU (WASM) build of ONNX Runtime: smaller and works in sandboxed pages.
    alias: [{ find: /^onnxruntime-web$/, replacement: 'onnxruntime-web/wasm' }],
  },
  worker: { format: 'es' },
  build: mode === 'single' ? { outDir: 'dist-single' } : mode === 'artifact' ? { outDir: 'dist-artifact', chunkSizeWarningLimit: 4000 } : {},
}))
