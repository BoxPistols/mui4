import React, { Children } from 'react'
import {
  Container,
  Box,
  Typography,
  Button,
  ButtonProps,
  ButtonGroup,
} from '@material-ui/core'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import FavoriteIcon from '@material-ui/icons/Favorite'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}))

type Props = React.ButtonHTMLAttributes<ButtonProps>

export const CompMuiBase: React.FC<Props> = () => {
  const classes = useStyles()

  return (
    <Container maxWidth='lg' className={classes.root}>
      <Typography variant='h1' component='h1'>
        <FavoriteIcon color='secondary' />
        Material UIも準備完了
        <FavoriteIcon color='secondary' />
      </Typography>
      <Box m={4}>
        <Typography variant='body1'>ここにコンテンツが入ります。</Typography>
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
