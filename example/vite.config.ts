import { defineConfig } from 'vite'
import VuePlugin from '@vitejs/plugin-vue'
import ScriptSetupOptionsPlugin from 'vite-plugin-vue-3-script-setup-options/dist/index'
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ScriptSetupOptionsPlugin(VuePlugin()),
    Inspect()
  ],
})
