import React from 'react'
import { FcReddit } from "react-icons/fc";
import Search from './search';

const Navbar = ({ setSubreddit, error, setError }) => {
  return (
    <div className='navbar'>
      <div className='title-container'>
        <FcReddit className='reddit-icon'/>
        <h1 className='title'>Reddit Minimal</h1>
      </div>
      
      <div className='searchbar-container'>
        <Search setSubreddit={setSubreddit} error={error} setError={setError}/>
      </div>
    </div>
  )
}

export default Navbar
