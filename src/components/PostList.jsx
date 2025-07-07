// components/PostList.jsx
import React, { useEffect, useState } from 'react';
import PostItem from './PostItem';

const API_URL = 'https://API.mockapi.io/api/v1/posts';

function PostList() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    
  };

  const deletePost = async (id) => {
    
  };


  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
}

export default PostList;
