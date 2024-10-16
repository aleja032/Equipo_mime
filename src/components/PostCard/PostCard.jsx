import React from 'react';
import BarInteraction from '../BarInteraction/BarInteraction';
import cat from '../../assets/images/cat.webp';
import './PostCard.css';

const PostCard = ({ post }) => {
  return (
    <div className="postcard">
      <div className="postcard-header">
        <img
          src={cat}
          className="postcard-avatar"
          alt="User avatar"
        />
        <div>
          <strong>Thomas Taylor</strong>
          <p className="postcard-location">📍Narnia</p>
        </div>
      </div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <BarInteraction postId={post.id} />
    </div>
  );
};

export default PostCard;
