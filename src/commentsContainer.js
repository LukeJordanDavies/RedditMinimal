import React from 'react'
import CommentPost from './commentPost';

const CommentsContainer = ({ commentsData, toggleComments, clearCommentData }) => {
  return (
    <>
      <div className='comment-post'>
        {commentsData.map((comment, index) => <CommentPost key={index} comment={comment} />)}
      </div>
      
      <div className='comment-button-container'>
        <button className='comment-button' onClick={() => (toggleComments(), clearCommentData())}>Hide Comments</button>
      </div>
    </>
  )
}

export default CommentsContainer
