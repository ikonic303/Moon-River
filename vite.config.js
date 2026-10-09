import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  ssgOptions: {
    // Plain (deferred) module script, not 'async': async let the app boot before the inline
    // build-hash and router hydration data at the end of <body> existed, which broke hydration.
    script: 'sync',
    formatting: 'none',
  },
})
