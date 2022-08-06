import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import { DarkToggle } from './components/DarkToggle'
import { Menu } from './layout/Menu'
import './index.scss'
import { Container } from '@material-ui/core'
// import GenericTemplate from './components/templates/GenericTemplate'

ReactDOM.render(
  <>
    <div className=''>
      <App>
        <Menu />
        <DarkToggle>Dark/Light Toggle</DarkToggle>
        {/* <h1>Hello World!</h1> */}
        {/* <Container maxWidth='lg' className=''> */}
        {/* <ThemeProvider theme={theme}></ThemeProvider> */}
        {/* </Container> */}
      </App>
    </div>
  </>,
  document.getElementById('root')
)
