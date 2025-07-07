// components/PostList.jsx
import React, { useEffect, useState } from 'react';
import PostItem from './PostItem';

const API_URL = 'https://API.mockapi.io/api/v1/posts';

function PostList() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setPosts(data);
  };

  const deletePost = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onDelete={deletePost}
          onUpdate={fetchPosts}
        />
      ))}
    </div>
  );
}

export default PostList;
