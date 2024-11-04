import React from 'react'
import ReactPlayer from 'react-player'

const VideoPost = ( {post} ) => {

  return (
    <>
      <div>
        <p>{post.data.selftext}</p>
      </div>
      <div className='video-player-container'>
        <ReactPlayer controls height={`${post.data.media.reddit_video.height}`} width={`${post.data.media.reddit_video.width}`} url={post.data.media.reddit_video.hls_url} className='video-player'/>
      </div>
    </>
  )
}

export default VideoPost
