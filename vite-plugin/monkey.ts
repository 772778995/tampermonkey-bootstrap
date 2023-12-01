import monkey, { cdn } from 'vite-plugin-monkey'
import packageInfo from '../package.json'

export default async () =>
  monkey({
    entry: 'src/main.tsx',
    userscript: {
      ...packageInfo,
      name: packageInfo.description,
      icon: 'https://dev.midiplusedu.com/assets/music_score_editor/images/logo.svg',
      namespace: 'npm/vite-plugin-monkey',
      match: ['*://*/*editor.html*', '*://*/*music_score_editor*']
    },
    build: {
      externalGlobals: {
        react: cdn.bootcdn('React', 'umd/react.production.min.js'),
        'react-dom/client': cdn.bootcdn('ReactDOM', 'umd/react-dom.production.min.js'),
        jquery: cdn.bootcdn('jQuery', 'jquery.min.js'),
        lodash: cdn.bootcdn('_', 'lodash.min.js'),
        dayjs: cdn.bootcdn('dayjs', 'dayjs.min.js'),
        antd: cdn.bootcdn('antd', 'antd.min.js'),
        'can-can-word-bug': cdn.unpkg('canCanWordBug', 'dist/can-can-word-bug.cjs.production.min.js')
      }
    }
  })
