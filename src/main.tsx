import 'preact/debug'
import { render } from 'preact'
import './scss/main.scss'
import { App } from './app.tsx'

render(<App />, document.getElementById('app')!)
