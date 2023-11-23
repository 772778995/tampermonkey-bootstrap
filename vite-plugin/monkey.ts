import monkey from 'vite-plugin-monkey'
import packageInfo from '../package.json'

export default () =>
  monkey({
    entry: 'src/main.tsx',
    userscript: {
      ...packageInfo,
      icon: 'https://img.wuhaochao.top/funny.png',
      namespace: 'npm/vite-plugin-monkey',
      match: ['http://127.0.0.1:54088/abc/editor.html*']
    }
  })
