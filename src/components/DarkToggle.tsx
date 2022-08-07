import React, { FC, useState, ReactNode } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import * as colors from '@material-ui/core/colors'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'

type Props = {
  children?: ReactNode
  title?: string
}

// Styles
const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: '14px',
  },
  toggleArea: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: '#666',
    width: '100%',
    '&.MuiIconButton-root': {
      borderRadius: '0%',
    },
  },
}))

export const DarkToggle: FC<Props> = ({ children, title }) => {
  const classes = useStyles()

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
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? colors.green[800] : colors.orange[300],
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {darkMode ? (
        <>
          <div className={classes.toggleArea}>
            <IconButton color='inherit' onClick={handleDarkModeOff}>
              <Brightness7Icon />
            </IconButton>
            <div className={classes.root}>{title}</div>
          </div>
        </>
      ) : (
        <>
          <div className={classes.toggleArea}>
            <IconButton color='inherit' onClick={handleDarkModeOn}>
              <Brightness4Icon />
            </IconButton>
            <div className={classes.root}>{title}</div>
          </div>
        </>
      )}
      {children}
    </ThemeProvider>
  )
}
