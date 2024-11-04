import React, { useState } from 'react'
import { TiArrowUpOutline, TiArrowDownOutline, TiArrowUpThick, TiArrowDownThick } from "react-icons/ti";


const Votes = ({ upVotes }) => {
  const [upVoteClicked, setUpVoteClicked] = useState(false);
  const [downVoteClicked, setDownVoteClicked] = useState(false);

  const toggleUpVote = () => {
    
    downVoteClicked && setDownVoteClicked(false);
    setUpVoteClicked(!upVoteClicked);
  }

  const toggleDownVote = () => {
    
    upVoteClicked && setUpVoteClicked(false);
    setDownVoteClicked(!downVoteClicked);
  }

  return (
    <div className='votes-container'>

      <button className='arrow-button' onClick={() => toggleUpVote()}>
        {upVoteClicked ? <TiArrowUpThick className='up-arrow-thick' /> : <TiArrowUpOutline />}
      </button>

      <div className='upVotes-container'>
        <h2>{upVotes}</h2>
      </div>

      <button className='arrow-button' onClick={() => toggleDownVote()}>
        {downVoteClicked ? <TiArrowDownThick className='down-arrow-thick' /> : <TiArrowDownOutline />}
      </button>

    </div>
  )
}

export default Votes
