// App.jsx
import React from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 py-10">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-indigo-300 drop-shadow-md">
        The Power of 4
      </h1>
        <PostForm />
        <PostList />
    </div>
  );
}

export default App;
