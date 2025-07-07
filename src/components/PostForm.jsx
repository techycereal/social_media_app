// components/PostForm.jsx
import React, { useState } from 'react';

const API_URL = 'https://API.mockapi.io/api/v1/posts';

function PostForm() {
  const [content, setContent] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    
  };

  return (
    <form
      className="bg-white rounded-xl shadow-lg p-6 max-w-xl mx-auto mb-8"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Create a Post</h2>
      <input
        type="text"
        className="w-full border border-gray-300 rounded-lg px-5 py-3 mb-4 text-lg placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        aria-label="Username"
      />
      <textarea
        className="w-full border border-gray-300 rounded-lg px-5 py-4 mb-6 text-lg placeholder-gray-400 resize-none focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={4}
        aria-label="Post content"
      />
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white font-semibold rounded-lg py-3 shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-400 transition"
      >
        Post
      </button>
    </form>
  );
}

export default PostForm;
