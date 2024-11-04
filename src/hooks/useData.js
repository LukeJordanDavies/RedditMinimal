import React, { useEffect, useState } from 'react';

const UseData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [subreddit, setSubreddit] = useState('popular');

  useEffect(() => {
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data.data.children);
      })
      .catch(error => {
        setError(error);
      });
  }, [subreddit]); 
  
  return { 
    data: data,
    setSubreddit: setSubreddit,
    error: error,
    setError: setError
  };
};

export default UseData;
