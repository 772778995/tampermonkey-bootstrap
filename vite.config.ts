import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import WindiCSS from 'vite-plugin-windicss'
import UnpluginAutoImport from './vite-plugin/unplugin-auto-import'
import monkey from './vite-plugin/monkey'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [WindiCSS(), react(), UnpluginAutoImport(), monkey()]
})
