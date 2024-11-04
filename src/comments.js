import React, { useState } from 'react'
import UseComments from './hooks/useComments'
import { LiaCommentSolid } from "react-icons/lia";
import CommentsContainer from './commentsContainer';
                    
const Comments = ({ permalink, postName }) => {
  const functions = UseComments();
  const [showComments, setShowComments] = useState(false);

  const buttonHandler = () => {
    functions.linkFunc(permalink)
  }

  const toggleComments = () => {
    setShowComments(!showComments)
  }

  return (
    <div>
      {(showComments && postName == functions.commentName) && 
          <CommentsContainer commentsData={functions.commentData} 
          clearCommentData={functions.clearCommentData} 
          toggleComments={toggleComments}/>}
      <div className='comment-button-container'> 

        {/* Button to fetch and show comments */}
        {!showComments && <button className='comment-button' onClick={() => (buttonHandler(), toggleComments())}> <LiaCommentSolid /> </button>}
      </div>
    </div>
  )
}

export default Comments
