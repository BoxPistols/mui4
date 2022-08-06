import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import { DarkToggle } from './components/DarkToggle'
import { Menu } from './layout/Menu'
import './index.scss'
import { Container } from '@material-ui/core'

ReactDOM.render(
  <>
    <Container maxWidth='lg' className=''>
      <DarkToggle>Dark/Light Toggle</DarkToggle>
      <ThemeProvider theme={theme}>
        <Menu />
        <div className='flex f-center'>
          <App>
            <h1>Hello World!</h1>
          </App>
        </div>
      </ThemeProvider>
    </Container>
  </>,
  document.getElementById('root')
)
