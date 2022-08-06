import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import { DarkToggle } from './components/DarkToggle'
import { Menu } from './layout/Menu'
import './index.scss'

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <Menu />
      <div className='flex f-center'>
        <h1>Hello World!</h1>
        <App>
          <DarkToggle>Dark/Light Toggle</DarkToggle>
        </App>
      </div>
    </ThemeProvider>
  </>,
  document.getElementById('root')
)
