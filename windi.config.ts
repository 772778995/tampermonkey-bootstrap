import { defineConfig } from 'windicss/helpers'
import {
  windFlexPlugin,
  windLineClampPlugin,
  windElectronPlugin,
  windElementProPreset
} from 'can-can-need-bug'

import packageJSON from './package.json'

export default defineConfig({
  preflight: false,
  important: `#${packageJSON.name}`,
  plugins: [windFlexPlugin, windLineClampPlugin, windElectronPlugin],
  presets: [windElementProPreset],
  attributify: { prefix: '_' }
})
