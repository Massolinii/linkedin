import React from "react";
import { useSelector } from "react-redux";
import PostCard from './PostCard';

export const PostHome = () => {
    const posts = useSelector((state) => state.post.posts);

    const renderPosts = () => {
        const last10Posts = posts.slice(-10).reverse();
        return last10Posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ));
      };
    
      return (
        <div className="post-home">
          <h2>Ultimi 10 post</h2>
          <div className="card-container">
            {renderPosts()}
          </div>
        </div>
      );
  };