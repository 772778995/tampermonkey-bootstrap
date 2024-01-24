import './utils/tampermonkey'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.tsx'
import 'virtual:windi.css'
import $ from 'jquery'
import pkg from '../package.json'
import 'dayjs'

const [root] = $(`<${pkg.name}></${pkg.name}>`).addClass(pkg.name)

$('html').append(root)

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
