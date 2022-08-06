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
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}))

type Props = React.ButtonHTMLAttributes<ButtonProps>

export const CmpMuiBase: React.FC<Props> = () => {
  const classes = useStyles()

  return (
    <Container maxWidth='lg' className={classes.root}>
      <Typography variant='h1' component='h1'>
        <FavoriteIcon color='secondary' />
        Material UIも準備完了
        <FavoriteIcon color='secondary' />
      </Typography>
      <Box m={4}>
        <Typography variant='body1' color='primary'>
          ここにコンテンツが入ります。
        </Typography>
      </Box>
      <ButtonGroup color='primary' aria-label='outlined button group'>
        <Button variant='contained' color='primary'>
          Primary
        </Button>
        <Button variant='contained' color='secondary'>
          Secondary
        </Button>
      </ButtonGroup>
    </Container>
  )
}
