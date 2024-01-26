import './utils/tampermonkey'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.tsx'
import 'virtual:windi.css'
import $ from 'jquery'
import packageJSON from '../package.json'
import 'dayjs'
import { win } from './utils/tampermonkey'

export const rootElTag = `${packageJSON.name}`

if (win.self === win.top) {
  const [root] = $(`<${rootElTag}></${rootElTag}>`).addClass(rootElTag)

  $('html').append(root)

  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
