import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FavoriteIcon from '@material-ui/icons/Favorite'
import {
  Container,
  Box,
  Typography,
  Button,
  ButtonProps,
  ButtonGroup,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: theme.spacing(2),
    textAlign: 'center',
  },
}))

type Props = React.ButtonHTMLAttributes<ButtonProps>

export const CmpMuiBase: React.FC<Props> = () => {
  const classes = useStyles()

  return (
    <>
      <Box m={4} className='flex f-center'>
        <Typography variant='h1' component='h1'>
          Material UIも準備完了
          <FavoriteIcon color='secondary' />
        </Typography>
        <Typography variant='body1' color='primary'>
          ここにコンテンツが入ります。
        </Typography>
        <ButtonGroup color='primary' aria-label='outlined button group'>
          <Button variant='contained' color='primary'>
            Primary
          </Button>
          <Button variant='contained' color='secondary'>
            Secondary
          </Button>
        </ButtonGroup>
      </Box>
    </>
  )
}
