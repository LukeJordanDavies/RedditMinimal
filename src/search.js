import React, { useState } from 'react'

const Search = ({ setSubreddit, error, setError }) => {
  const [searchTerm, setSearchTerm] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (error) {
      setError('');
    };

    setSubreddit(searchTerm);
    
    setSearchTerm('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
          <input 
            className='searchbar'
            type="text" 
            name="subreddit-name" 
            placeholder=' Search Subreddits...'
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
      </form>
    </>
  )
}

export default Search
