import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux/slice/posts/postThunk';
import PostCard from '../postCard/PostCard';

const SidebarCenter= () => {
  const dispatch = useDispatch();
  
  const { posts, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading posts...</p>;
  }

  return(  
    <div className="sideCenter">
        <div className="posts-container">
          {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
    </div>
    )
}
    export default SidebarCenter;