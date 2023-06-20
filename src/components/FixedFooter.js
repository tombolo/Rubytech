import React, { useState } from "react";
import { HeartIcon, ChatIcon } from "@heroicons/react/solid";

const Footer = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-300 text-white text-center py-2 rounded z-50 border-t-2 border-yellow-700">
      <div className="flex items-center justify-start ml-6">
        <button
          className={`mr-2 focus:outline-none ${
            isLiked ? "text-red-500" : "text-white"
          }`}
          onClick={handleLikeClick}
        >
          <HeartIcon className="w-12 h-12" />
        </button>
        <button className="mr-2 focus:outline-none text-blue-500">
          <ChatIcon className="w-12 h-12" />
        </button>
        <button className="w-48 h-12 flex items-center justify-center bg-white text-gray-800 border-blue-900 border-2 rounded-full ml-7">
          <span className="w-1/2 bg-blue-900 text-white py-4 text-xs rounded-full">
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
