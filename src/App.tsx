import React, { useState, useEffect, ReactNode } from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import getApi from './util/getApi'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     // padding: theme.spacing(2),
//     textAlign: 'center',
//   },
// }))

interface Props {
  children: ReactNode
}

// console.log(getApi())

export const App: React.FC<Props> = ({ children }) => {
  // const classes = useStyles()

  // const [posts, setPosts] = useState([])
  // useEffect(() => {
  //   fetch(getApi(), { method: 'GET' })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPosts(data)
  //       console.log(data)
  //     })
  // }, [])

  return <>{children}</>
}
