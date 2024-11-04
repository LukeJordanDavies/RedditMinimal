import React from 'react'
import Post from './post'

const Card = ({ data }) => {
  return (
  <>
    {data.map((post, index) => (
      (post.data.post_hint === "image" || post.data.is_video || post.data.is_self) && 
        <Post key={index} post={post} />
      )
    )}
  </>
  )
}

export default Card

