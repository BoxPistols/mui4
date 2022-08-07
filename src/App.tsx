import React, { useState, useEffect, ReactNode } from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import design from './util/design'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     // padding: theme.spacing(2),
//     textAlign: 'center',
//   },
// }))

interface Props {
  children: ReactNode
}

// console.log(design())

export const App: React.FC<Props> = ({ children }) => {
  // const classes = useStyles()

  // const [posts, setPosts] = useState([])
  // useEffect(() => {
  //   fetch(design(), { method: 'GET' })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPosts(data)
  //       console.log(data)
  //     })
  // }, [])

  return <>{children}</>
}
