import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-4 px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold">Rubytech Company</h3>
          <p className="text-gray-400">Buruburu, Nairobi</p>
          <p className="text-gray-400">Phone: 123-456-7890</p>
          <p className="text-gray-400">Email: info@example.com</p>
        </div>
        <div className="flex mt-4 md:mt-0">
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

