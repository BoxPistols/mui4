import React, { ReactNode } from 'react'
import { makeStyles } from '@material-ui/core/styles'

// import {
//   Container,
//   Box,
//   Typography,
//   Button,
//   ButtonProps,
//   ButtonGroup,
// } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: theme.spacing(2),
    textAlign: 'center',
  },
}))

interface Props {
  children: ReactNode
}

export const App: React.FC<Props> = ({ children }) => {
  const classes = useStyles()
  return (
    <>
      {/* <Container maxWidth='lg' className={classes.root}> */}
      {children}
      {/* </Container> */}
    </>
  )
}
