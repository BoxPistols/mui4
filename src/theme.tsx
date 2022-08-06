import { createTheme } from '@material-ui/core/styles'

// サイトのベースとなる独自のテーマを作成する
const theme = createTheme({
  overrides: {
    MuiButton: {
      root: {
        fontSize: '14px',
        lineHeight: 1.5,
        padding: '12px',
      },
      containedPrimary: {
        // backgroundColor: "#ff9999",
        color: '#f9f9f9',
      },
    },
  },

  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#fffafa',
    },
  },
  typography: {
    fontFamily: ['sans-serif'].join(','),
    fontSize: 14,

    h1: {
      fontSize: '1.75rem',
    },
    h2: {
      fontSize: '1.5rem',
    },
    h3: {
      fontSize: '1.25rem',
    },
    h4: {
      fontSize: '1.125rem',
    },
    h5: {
      fontSize: '1rem',
    },
    h6: {
      fontSize: '1rem',
    },
    button: {
      fontWeight: 600,
    },
  },
})

export default theme
