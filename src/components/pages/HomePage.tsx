import React, { useState, useEffect, ReactNode } from 'react'
import design from '../../util/design'
import GenericTemplate from '../templates/GenericTemplate'
import { makeStyles } from '@material-ui/core/styles'

console.log(design())
console.log(design().color)

const useStyles = makeStyles((theme) => ({
  root: {
    // color: '#fb5599',
    color: design().color,
  },
}))

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(design(), { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
        console.log(JSON.parse(data.color))
        console.log(data.color)
      })
  }, [])

  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        <GenericTemplate title='トップページ'>
          <h2>トップページ内容</h2>
          col
          {design().color}
          <ul>
            {posts.map((post) => (
              <li key={post.index}>color: {JSON.parse(post.color)}</li>
            ))}
          </ul>
          <ul>
            {posts.map((post) => (
              <li key={post.index}>{post.color}XXXX</li>
            ))}
          </ul>
        </GenericTemplate>
      </div>
    </>
  )
}

export default HomePage
