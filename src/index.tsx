import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { Menu } from './layout/Menu'
import './index.scss'
// import theme from './theme'
// import { DarkToggle } from './components/DarkToggle'
// import { Container } from '@material-ui/core'

ReactDOM.render(
  <>
    {/* <DarkToggle title='Dark toggle' /> */}
    {/* <Container maxWidth='lg' className=''> */}
    <App>
      <Menu />
    </App>
  </>,
  document.getElementById('root')
)
