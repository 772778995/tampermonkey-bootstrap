import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import WindiCSS from 'vite-plugin-windicss'
import UnpluginAutoImport from './vite-plugin/unplugin-auto-import'
import monkey from './vite-plugin/monkey'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': resolve(__dirname, './'),
      '@': resolve(__dirname, './src')
    }
  },
  plugins: [WindiCSS(), react(), UnpluginAutoImport(), monkey()]
})
