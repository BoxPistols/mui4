import React, { useState, useEffect, ReactNode } from 'react'
import getApi from '../../util/getApi'

import GenericTemplate from '../templates/GenericTemplate'

console.log(getApi())

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(getApi(), { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
        console.log(JSON.parse(data))
        console.log(data)
      })
  }, [])

  return (
    <>
      {/* <div className='flex f-center'> */}
      <GenericTemplate title='トップページ'>
        <h2>トップページ内容</h2>
        col
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
      {/* <CmpMuiBase /> */}
      {/* </div> */}
    </>
  )
}

export default HomePage
