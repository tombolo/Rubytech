import { useEffect, useState, useRef } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket, setBasket } from "../slices/basketSlice";
import { useRouter } from 'next/router';
import { HeartIcon } from "@heroicons/react/outline";
import { FaExchangeAlt } from "react-icons/fa";


const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();
  const basket = useSelector(state => state.basket.items);
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);
  const [isInBasket, setIsInBasket] = useState(false);

  useEffect(() => {
    const itemInBasket = basket.find(item => item.id === id);
    setIsInBasket(!!itemInBasket);
  }, [basket, id]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedBasketItems = localStorage.getItem("basketItems");
      const storedBasket = storedBasketItems ? JSON.parse(storedBasketItems) : [];
      dispatch(setBasket(storedBasket));
    }
  }, [dispatch]);

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
    setIsInBasket(true);
    if (typeof window !== 'undefined') {
      const storedBasketItems = localStorage.getItem("basketItems");
      const storedBasket = storedBasketItems ? JSON.parse(storedBasketItems) : [];
      const updatedBasket = [...storedBasket, product];
      localStorage.setItem("basketItems", JSON.stringify(updatedBasket));
    }
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
    setIsInBasket(false);
    if (typeof window !== 'undefined') {
      const storedBasketItems = localStorage.getItem("basketItems");
      const storedBasket = storedBasketItems ? JSON.parse(storedBasketItems) : [];
      const updatedBasket = storedBasket.filter(item => item.id !== id);
      localStorage.setItem("basketItems", JSON.stringify(updatedBasket));
    }
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

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative w-full bg-white z-20 rounded shadow-lg m-4 transition duration-700 transform hover:scale-105"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}>

      
        <div className="absolute flex flex-col items-end justify-end top-8 right-4 transform -translate-y-1/2
        transition-opacity">


         <div className="rounded-full bg-gray-200 my-1">
          <HeartIcon className="h-5 w-5 p-1" />
          </div>
          <div className="rounded-full bg-gray-100">
          <FaExchangeAlt className="h-5 w-5 p-1" />
          </div>
        </div>
        
    


      {isHovered && (
        
        <div className="absolute flex-row top-20 z-50 bg-gray-400 w-full items-center py-3 bg-opacity-25">
          <div>
            <h1 className="text-sm flex flex-row justify-center w-full">Quick view</h1>
          </div>
      </div>
      )}


      <div className="overflow-hidden transition duration-700 transform hover:scale-110 m-2 p-2 rounded-md aspect-w-1 aspect-h-1" style={{ width: '120px', height: '120px' }}>
        <img
          src={image.src}
          alt={title}
          className="rounded-md h-full w-full object-cover border-none"
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
          onClick={isInBasket ? removeItemFromBasket : addItemToBasket}
          className={`flex-grow-0 flex-shrink-0 w-auto sm:w-auto rounded-md transition duration-200 m-5 text-xs px-1 py-1 ${
            isInBasket ? 'bg-gray-600 text-white hover:bg-gray-400' : 'bg-blue-900 text-white hover:bg-blue-600'
          }`}
        >
          {isInBasket ? 'Remove from Basket' : 'Add to Basket'}
        </button>
      </div>

      
    </div>
  );
}

export default Product;
