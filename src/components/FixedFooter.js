import React, { useState } from "react";
import { HeartIcon, ChatIcon } from "@heroicons/react/solid";

const Footer = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-50 text-white text-center z-50 border-t-2 border-white">
      <div className="flex items-center justify-start ml-6">
        <button
          className={`mr-2 focus:outline-none ${
            isLiked ? "text-red-500" : "text-gray-400"
          }`}
          onClick={handleLikeClick}
        >
          
        </button>
        <button className="mr-2 focus:outline-none text-blue-900">
          <ChatIcon className="w-8 h-8 mt-2" />
          <span className="text-xs">Chat</span>
        </button>
        <button className="w-48 h-10 flex items-center justify-center bg-white text-gray-800 border-blue-900 border-2 rounded-full ml-7">
          <span className="w-1/2 bg-blue-900 text-white py-3 text-xs rounded-full">
            Add to Cart
          </span>
          <span className="w-1/2 bg-white text-blue-900 text-xs rounded-full">
            WhatsApp
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
