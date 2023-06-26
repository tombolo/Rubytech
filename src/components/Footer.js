import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white z-50">
      <div>
        <div className="container mx-auto py-4 px-6 flex flex-col justify-between text-center lg:flex lg:flex-row">
          <div className="text-center md:text-left border-b-2 border-blue-900 lg:border-b-0">
            <h3 className="text-sm font-bold my-2">Rubytech Company</h3>
            <p className="text-gray-400 text-sm">Buruburu, Nairobi</p>
            <p className="text-gray-400 text-sm">Phone: 123-456-7890</p>
            <p className="text-gray-400 text-sm">Email: info@example.com</p>
          </div>

          <div className="text-center md:text-left border-b-2 border-blue-900 lg:border-b-0">
            <h3 className="text-sm font-bold my-2">MY ACCOUNT</h3>
            <p className="text-gray-400 text-sm">Login / Register</p>
            <p className="text-gray-400 text-sm">My Orders</p>
            <p className="text-gray-400 text-sm">Wishlist</p>
            <p className="text-gray-400 text-sm">Wishlist</p>
          </div>

          <div className="text-center md:text-left border-b-2 border-blue-900 lg:border-b-0">
            <h3 className="text-sm font-bold my-2">SUPPORT</h3>
            <p className="text-gray-400 text-sm">General Support</p>
            <p className="text-gray-400 text-sm">Terms & Conditions</p>
          </div>

          <div className="flex text-center justify-center mt-4 md:mt-0">
            <a
              href="#"
              className="mx-2 hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={25} className="text-blue-600" />
            </a>
            <a
              href="#"
              className="mx-2 hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={25} className="text-blue-400" />
            </a>
            <a
              href="#"
              className="mx-2 hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={25} className="text-pink-600" />
            </a>
          </div>
        </div>

        <div className="text-center mt-4 p-6">
          <p className="text-gray-300 text-sm">&copy; 2023 Rubytech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
