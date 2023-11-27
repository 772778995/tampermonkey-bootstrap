import monkey, { cdn } from 'vite-plugin-monkey'
import packageInfo from '../package.json'

export default async () =>
  monkey({
    entry: 'src/main.tsx',
    userscript: {
      ...packageInfo,
      icon: 'https://img.wuhaochao.top/funny.png',
      namespace: 'npm/vite-plugin-monkey',
      match: ['http://127.0.0.1:54088/abc/editor.html*']
    },
    build: {
      externalGlobals: {
        react: cdn.bootcdn('React', 'umd/react.production.min.js'),
        'react-dom/client': cdn.bootcdn(
          'ReactDOM',
          'umd/react-dom.production.min.js'
        ),
        jquery: cdn.bootcdn('jQuery', 'jquery.min.js'),
        lodash: cdn.bootcdn('_', 'lodash.min.js')
      }
    }
  })
