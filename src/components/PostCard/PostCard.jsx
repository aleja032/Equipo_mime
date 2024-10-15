import React from 'react';
import './PostCard.css';

const PostCard = ({ post }) => {
  
  return (
    <div className="postcard">
      <div className="postcard-header">
        <img
          className="postcard-avatar"
          alt="User avatar"
        />
        <div>
          <strong>Thomas Taylor</strong>
          <p className="postcard-location">📍</p>
        </div>
      </div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      
    </div>
  );
};

export default PostCard;
