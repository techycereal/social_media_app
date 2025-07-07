// components/PostItem.jsx
import React, { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const API_URL = 'https://API.mockapi.io/api/v1/posts';

function PostItem({ post, onDelete, onUpdate }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState(post.content);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdate = async () => {
    
  };

  return (
    <div className='flex justify-center'>

    
    <div
  className={`bg-white rounded-xl p-6 shadow-md transition-shadow w-1/2 ${
    isModalOpen ? '' : 'hover:shadow-xl'
  }`}
>
    <div>
    <div className="flex justify-between mb-3 ">
        <div className='items-center'>
        <span className="font-oswald font-semibold bg-indigo-100 items-center text-indigo-800 text-sm font-semibold px-3 py-1 rounded-full tracking-wide">
          @{post.username}
        </span>
        </div>
    <div className="flex gap-3">
    <div>
    <button
          className="rounded-lg hover:shadow-md transition"
          onClick={openModal}
          aria-label="Edit post"
        >
          <CiEdit size={40}/>
        </button>
    </div>
        <button
          className="rounded-lg hover:shadow-md transition"
          onClick={() => onDelete(post.id)}
          aria-label="Delete post"
        >
          <MdDelete size={40} style={{color: "#D11A2A"}}/>
        </button>
      </div>
      
      </div>
      
    </div>

      <p className="font-poppins font-semibold text-gray-800 text-lg mb-4 whitespace-pre-wrap">{content}</p>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Edit Post</h2>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-4 resize-none focus:outline-none focus:ring-4 focus:ring-indigo-300 transition mb-6 text-gray-800 text-lg"
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              aria-label="Edit post content"
            />
            <div className="flex justify-end gap-4">
              <button
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                onClick={handleUpdate}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default PostItem;
