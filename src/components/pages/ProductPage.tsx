import React from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import GenericTemplate from '../templates/GenericTemplate'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import theme from '../../theme'

const createData = (
  name: string,
  category: string,
  weight: number,
  price: number
) => {
  return { name, category, weight, price }
}

const rows = [
  createData('チョコレート', 'お菓子', 100, 120),
  createData('ケーキ', 'お菓子', 400, 480),
  createData('りんご', 'フルーツ', 500, 360),
  createData('バナナ', 'フルーツ', 200, 300),
  createData('みかん', 'フルーツ', 250, 180),
]

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  table: {
    minWidth: 650,
    // FIXME! Change Color
    type: 'dark'
      ? {
          background: '#333',
        }
      : { background: '#fff' },
  },
}))

// const themeX = createTheme({
//   palette: {
//     type: 'dark',
//     background: {
//       paper: '#000000',
//     },
//   },
// })

const ProductPage: React.FC = () => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <GenericTemplate title='商品ページ'>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>商品名</TableCell>
                <TableCell align='right'>カテゴリー</TableCell>
                <TableCell align='right'>重量(g)</TableCell>
                <TableCell align='right'>価格(円)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell align='right'>{row.category}</TableCell>
                  <TableCell align='right'>{row.weight}</TableCell>
                  <TableCell align='right'>{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </GenericTemplate>
    </ThemeProvider>
  )
}

export default ProductPage
