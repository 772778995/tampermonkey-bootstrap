import { defineConfig } from 'windicss/helpers'
import {
  windFlexPlugin,
  windLineClampPlugin,
  windElectronPlugin
} from 'can-can-need-bug'

import packageJSON from './package.json'

export default defineConfig({
  preflight: false,
  important: `#${packageJSON.name}`,
  plugins: [windFlexPlugin, windLineClampPlugin, windElectronPlugin],
  attributify: { prefix: '_' }
})
