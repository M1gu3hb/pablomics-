import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: 'assets-v2',
    target: 'es2022',
  },
})
