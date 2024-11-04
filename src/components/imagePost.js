import React from 'react'

const ImagePost = ( {post} ) => {
  return (
    <div className='img-container'>
        <img className='post_img' src={post.data.url} />
    </div>
  )
}

export default ImagePost

