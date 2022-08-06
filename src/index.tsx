import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import { DarkToggle } from './components/DarkToggle'
import './index.scss'

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <DarkToggle>Dark/Light Toggle</DarkToggle>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root')
)
