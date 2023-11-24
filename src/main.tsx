import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.tsx'
import 'virtual:windi.css'
import $ from 'jquery'
import packageJSON from '../package.json'
import './wired-components'

export const rootElTag = `${packageJSON.name}`

const [root] = $(`<${rootElTag}></${rootElTag}>`).attr('id', rootElTag)

$.ready.then(() => $('html').append(root))

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)