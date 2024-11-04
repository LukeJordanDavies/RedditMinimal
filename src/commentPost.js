import React from 'react'

const CommentPost = ({ comment }) => {
  return (
    <>
      <div className='comment-container'>
        <div className='comment-header'>
          <h3 className='comment-author'>{comment.data.author}</h3>
        </div>

        <p className='comment-body'>{comment.data.body}</p>

        <hr className='comment-line'/>
      </div>
    </>
  )
}

export default CommentPost
