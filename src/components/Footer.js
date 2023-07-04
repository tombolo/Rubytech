import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white z-50">

      <div className="bg-gray-200 flex lg:flex-row lg:items-center lg:justify-between flex-col">



            

            <div className="py-2 lg:mx-12 flex lg:flex-row flex-col items-center">

              <div className="flex flex-row">
                  <div className="mx-4">
                    <FaEnvelope size={40} className="icon text-blue-900" />
                  </div>
                  <div>
                    <h1 className="text-sm font-semibold text-black">JOIN OUR NEWSLETTER</h1>
                    <p className="text-xs text-black">Get The Lates Deals, Updates $ More</p>
                  </div>
                </div>

              <div className="flex items-center justify-center lg:p-2  py-5 lg:mx-5">
                <form className="border-none hover:border-none flex">
                  <input className="bg-gray-400 p-1 focus:outline-none"
                  type="text"
                  placeholder="Enter your Email"  />
                  <button type="submit" className="h-9 px-3 bg-blue-900 text-xs font-semibold">Join Now</button>
                </form>
              </div>

            </div>


            <div className="flex lg:py-10 md:mt-0 lg:mx-12 py-2 justify-center -mt-5">
      <div className="icon-wrapper px-2">
        <a
          href="#"
          className="icon-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon-circle bg-blue-700 rounded-full">
            <FaFacebook size={25} className="icon p-1" />
          </div>
        </a>
      </div>
      <div className="icon-wrapper px-2">
        <a
          href="#"
          className="icon-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon-circle bg-blue-400 rounded-full">
            <FaTwitter size={25} className="icon p-1" />
          </div>
        </a>
      </div>
      <div className="icon-wrapper px-2">
        <a
          href="#"
          className="icon-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon-circle bg-gradient-to-r from-pink-600 to-purple-600 border-white rounded-full">
            <FaInstagram size={25} className="icon p-1" />
          </div>
        </a>
      </div>
      <div className="icon-wrapper px-2">
        <a
          href="#"
          className="icon-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon-circle bg-blue-700 rounded-full">
            <FaLinkedin size={25} className="icon p-1" />
          </div>
        </a>
      </div>
    </div>

      </div>


      <div>
        <div className="container py-4 px-4 flex flex-col justify-between text-center lg:flex lg:flex-row">
          <div className="text-center md:text-left border-b-2 border-blue-900 lg:border-b-0">
            <h3 className="text-xs font-bold my-2">Rubytech Company</h3>
            <p className="text-gray-400 text-xs">Buruburu, Nairobi</p>
            <p className="text-gray-400 text-xs my-2">Phone: +254720171501</p>
            <p className="text-gray-400 text-xs">Email: sales@rubytech.co.ke</p>
          </div>

          <div className="text-center md:text-left border-b-2 border-blue-900 lg:border-b-0 hidden lg:block">
            <h3 className="text-xs font-bold my-2">MY ACCOUNT</h3>
            <p className="text-gray-400 text-xs">Login / Register</p>
            <p className="text-gray-400 text-xs my-2">My Orders</p>
            <p className="text-gray-400 text-xs">Wishlist</p>
            <p className="text-gray-400 text-xs my-2">Contact</p>
            <p className="text-gray-400 text-xs">Return Policy</p>
          </div>

          <div className="text-center md:text-left border-b-2 border-blue-900 lg:border-b-0">
            <h3 className="text-xs font-bold my-2">Our Services</h3>
            <p className="text-gray-400 text-xs">Shipping $ Returns</p>
            <p className="text-gray-400 text-xs my-2">Affiliates</p>
            <p className="text-gray-400 text-xs">Advanced Search</p>
            <p className="text-gray-400 text-xs my-2">Terms $ Conditions</p>
            <p className="text-gray-400 text-xs">Advanced Search</p>
          </div>

          <div className="text-center md:text-left border-b-2 border-blue-900 lg:border-b-0">
            <h3 className="text-xs font-bold my-2">SUPPORT</h3>
            <p className="text-gray-400 text-xs my-2">General Support</p>
            <p className="text-gray-400 text-xs">Terms & Conditions</p>
          </div>

          




        </div>

        <div className="text-center mt-2 p-3">
          <p className="text-gray-300 text-sm">&copy; 2023 Rubytech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
