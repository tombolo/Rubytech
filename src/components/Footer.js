import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-4 px-6 flex flex-col justify-between text-center">
        <div className="text-center md:text-left border-b-2 border-blue-900">
          <h3 className="text-sm font-bold my-2">Rubytech Company</h3>
          <p className="text-gray-400">Buruburu, Nairobi</p>
          <p className="text-gray-400">Phone: 123-456-7890</p>
          <p className="text-gray-400">Email: info@example.com</p>
          
        </div>
    
        <div className="text-center md:text-left border-b-2 border-blue-900">
          <h3 className="text-sm font-bold my-2">MY ACCOUNT</h3>
          <p className="text-gray-400">Login / Register</p>
          <p className="text-gray-400">My Orders</p>
          <p className="text-gray-400">Wishlist</p>
        </div>

        <div className="text-center md:text-left border-b-2 border-blue-900">
          <h3 className="text-sm font-bold my-2">SUPPORT</h3>
          <p className="text-gray-400">General Support</p>
          <p className="text-gray-400">Terms & Conditions</p>
        </div>


        <div className="flex text-center mt-4 md:mt-0">
          <a
            href="#"
            className="mx-2 hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="#"
            className="mx-2 hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="#"
            className="mx-2 hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

