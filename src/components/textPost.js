import React from 'react'

const TextPost = ( {post} ) => {
  return (
    <p className='text-post'>{post.data.selftext}</p>
  )
}

export default TextPost
