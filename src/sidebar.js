import React from 'react'

const Sidebar = ({ setSubreddit, error, setError }) => {
  const subreddits = ['popular', 'gaming', 'pics', 'funny', 'ask', 'pcmasterrace', 'todayilearned', 'wholesomememes', 'nostupidquestions',];

  const handleClick = (subreddit) => {
    
    if (error) {
      setError('');
    };

    setSubreddit(subreddit);
  }

  return (
    <div className='sidebar'>
      <h1 className='sidebar-title'>Subreddits</h1>
      
      {subreddits.map((title, index) => <button key={index} className='subreddit-button' onClick={() => handleClick(title)}>{`r/${title}`}</button>)}
    </div>
  )
}

export default Sidebar
