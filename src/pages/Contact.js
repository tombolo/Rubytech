import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { selectItems, selectTotal, setBasket } from "../slices/basketSlice";

import Header from '../components/Header';
import Footer from '../components/Footer';

function Contact() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.basket.items);
  const total = useSelector((state) => state.basket.total);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const storedBasketItems = localStorage.getItem('basketItems');
    const storedBasket = storedBasketItems ? JSON.parse(storedBasketItems) : [];
    dispatch(setBasket(storedBasket));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('basketItems', JSON.stringify(items));
  }, [items]);

  return (
    <div>
      <Header />
      <div className="bg-gray-100 py-12 mt-16 md:mt-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Map Location */}
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-sm md:text-xl font-bold mb-2 flex justify-center text-blue-900">Our Location</h2>
              <div className="flex items-start mb-4">
                <div className="mr-4">
                  <FaMapMarkerAlt className="text-yellow-700 h-7 w-7" />
                </div>
                <div>
                  <p className="text-xs font-semibold">Mumias South rd Outering</p>
                  <p className="text-xs font-semibold">Nairobi, Buruburu Junction</p>
                </div>
              </div>
              {/* Embed your map here */}
              <div className="rounded h-64 bg-gray-200">
                {/* Replace the iframe below with your map embed code */}
                <iframe
                  title="Google Map"
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d10871.508148791654!2d36.8821386274293!3d-1.2740938691272508!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1688397449758!5m2!1sen!2ske"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded shadow-md p-4 -mt-5 md:mt-0">
              <h2 className="md:text-xl text-sm flex justify-center text-blue-900 font-bold mb-2">Contact Information</h2>
              <div className="flex items-start mb-2">
                <div className="mr-4">
                  <FaEnvelope className="text-yellow-700 h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm">Email: sales@rubytech.co.ke</p>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <div className="mr-4">
                  <FaPhoneAlt className="text-yellow-700 h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm">Phone:0720364557 | 07201715011</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-bold">Business Hours:</p>
                <p className="text-sm">Mon - Fri: 9:00 AM - 5:00 PM</p>
                <p className="text-sm">Sat: 9:AM - 2PM</p>
                <p className="text-sm">Sunday - Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-4 bg-white rounded shadow-md p-6">
            <h2 className="md:text-xl text-sm flex justify-center text-blue-900 font-bold mb-4">Send us a Message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
