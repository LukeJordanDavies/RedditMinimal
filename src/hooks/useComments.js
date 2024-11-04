import React, { useState, useEffect } from 'react'

const UseComments = () => {
    const [commentData, setCommentData] = useState([]);
    const [error, setError] = useState();
    const [permalink, setPermalink] = useState('');
    const [commentName, setCommentName] = useState('');

    const permalinkFunc = (link) => {
      setPermalink(link);
    }

    const clearCommentData = () => {
      setCommentData([]);
      setPermalink('');
      setCommentName('');
    }
    
    useEffect(() => {
      if (permalink) {
        fetch(`https://www.reddit.com${permalink}.json`)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setCommentData(data[1].data.children);
            setCommentName(data[1].data.children[0].data.parent_id);
        })
        .catch(error => {
            setError(error);
        });
      }  
    }, [permalink]); 
  
      return { 
        commentData: commentData,
        linkFunc: permalinkFunc,
        clearCommentData: clearCommentData,
        commentName: commentName
      }
}

export default UseComments
