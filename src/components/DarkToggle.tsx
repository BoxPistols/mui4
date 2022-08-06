import React, { FC, useState, ReactNode } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import * as colors from '@material-ui/core/colors'
import CssBaseline from '@material-ui/core/CssBaseline'

interface Props {
  children: ReactNode
}

export const DarkToggle: FC<Props> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'on' ? true : false
  )

  const handleDarkModeOn = () => {
    localStorage.setItem('darkMode', 'on')
    setDarkMode(true)
  }

  const handleDarkModeOff = () => {
    localStorage.setItem('darkMode', 'off')
    setDarkMode(false)
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: colors.blue[800],
      },
      type: darkMode ? 'dark' : 'light',
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {darkMode ? (
        <IconButton color='inherit' onClick={handleDarkModeOff}>
          <Brightness7Icon />
        </IconButton>
      ) : (
        <IconButton color='inherit' onClick={handleDarkModeOn}>
          <Brightness4Icon />
        </IconButton>
      )}
      {children}
    </ThemeProvider>
  )
}
