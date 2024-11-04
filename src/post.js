import React from 'react'
import Comments from './comments'
import TextPost from './components/textPost';
import ImagePost from './components/imagePost';
import VideoPost from './components/videoPost';
import Votes from './votes';

const Post = ({ post }) => {

  const renderContent = () => {
    if (post.data.is_self) {
      return <TextPost post={post}/>;
    } else if (post.data.post_hint === "image") {
      return <ImagePost post={post}/>;
    } else if (post.data.is_video) {
      return <VideoPost post={post}/>;
    } 
  };
  
  return (
    <div className='post-container'>
      <div className='post-header-container'>
        <Votes upVotes={post.data.ups}/>
        <h2 className='post-title'>{post.data.title}</h2>
      </div>

      {renderContent()}

      <h3 className='post-subreddit'>{post.data.subreddit}</h3>

      <hr/>

      <Comments permalink={post.data.permalink} postName={post.data.name} />
    </div>
  )
}

export default Post
// className='post-line'