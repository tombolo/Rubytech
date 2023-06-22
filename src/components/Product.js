import { useEffect, useState, useRef } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { useRouter } from 'next/router';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };
    dispatch(addToBasket(product));
  };

  const router = useRouter();

  const handleProductClick = () => {
    if (typeof window !== 'undefined') {
      // Check if the code is running on the client-side
      router.push(`/product/${id}`);
    }
  };


  const imageRef = useRef();
  const titleRef = useRef();

  const handleImageClick = (e) => {
    e.stopPropagation();
    handleProductClick();
  };

  const handleTitleClick = (e) => {
    e.stopPropagation();
    handleProductClick();
  };


  {/*const handleWhatsAppClick = () => {
    // Replace the '1234567890' with your actual WhatsApp number
    const phoneNumber = "1234567890";
    const message = `Hello, I'm interested in the product "${title}".`;

    // Generate the WhatsApp URL
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp in a new window or tab
    window.open(whatsappURL, "_blank");
  };*/}

  return (
    <div className="w-full bg-white z-20 rounded shadow-lg m-4">
      <div className="overflow-hidden transition duration-500 transform hover:scale-105 m-1 h-24 bg-gray-500 rounded-md">
        <img
          src={image.src}
          alt={title}
          className="rounded-md h-24 w-full"
          ref={imageRef}
          onClick={handleImageClick}
        />
      </div>
      <div>
        <h4
          className="my-2 mx-2 font-semibold text-xs"
          onClick={handleTitleClick}
          ref={titleRef}
        >
          {title}
        </h4>
      </div>

      <div className="flex mx-1 -mt-1">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-3 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs line-clamp-1 mx-1 transition duration-300 rounded-md">
        {description}
      </p>

      <div className="text-xs mx-1">KSH{price}</div>

      <div className="flex justify-center -mt-3">
        <button
          onClick={addItemToBasket}
          className="flex-grow-0 flex-shrink-0 w-auto sm:w-auto bg-blue-900 text-white  rounded-md hover:bg-blue-600 transition duration-200 m-5 text-xs px-2 py-1"
        >
          Add to Basket
        </button>
      </div>
    </div>
  );
}

export default Product;
