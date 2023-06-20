import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { useRouter } from 'next/router';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  
  const dispatch = useDispatch();
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING,
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


  const handleWhatsAppClick = () => {
    // Replace the '1234567890' with your actual WhatsApp number
    const phoneNumber = "1234567890";
    const message = `Hello, I'm interested in the product "${title}".`;

    // Generate the WhatsApp URL
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp in a new window or tab
    window.open(whatsappURL, "_blank");
  };

  return (
    <div
  className="relative flex flex-col m-5 bg-white z-20 p-6 rounded-lg shadow-lg transition duration-300 hover:bg-gray-300 transform hover:scale-95 xl:mt-10"
  onClick={() => handleProductClick(id)}
>
      <p className="absolute top-2 right-2 text-gray-400">{category}</p>

      <div className="relative overflow-hidden top-5 flex items-center justify-center border-2  rounded-md h-300 w-300 transition duration-500 transform hover:scale-105">
        <img
          src={image.src}
          style={{ height: "200px", width: "100%" }}
          alt={title}
          className="rounded-md"
        />
      </div>

      <h4 className="my-7 font-bold">{title}</h4>

      <div className="flex -mt-5">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs line-clamp-3 my-1 transition duration-300 rounded-md">
        {description}
      </p>

      <div className="mb-3">{price}</div>

      {hasPrime && (
        <div className="flex items-center space-x-2">
          <img
            src="https://links.papareact.com/f90"
            alt=""
            width={12}
            height={12}
            objectFit="contain"
          />
          <p className="text-xs text-gray-500">Free Next-day Delivery</p>
        </div>
      )}

      <div className="flex gap-12 justify-center">

      <button
          onClick={handleWhatsAppClick}
          className="flex-grow-0 flex-shrink-0 w-auto sm:w-auto bg-green-500 text-white py-1.5 px-2 rounded-md hover:bg-green-600 transition duration-200 m-1"
        >
          WhatsApp
        </button>
        <button
          onClick={addItemToBasket}
          className="flex-grow-0 flex-shrink-0 w-auto sm:w-auto bg-blue-900 text-white py-1.5 px-2 rounded-md hover:bg-blue-600 transition duration-200 m-1"
        >
          Add to Basket
        </button>
      </div>
    </div>
  );
}

export default Product;
