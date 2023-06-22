import { useEffect, useState, useRef } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

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
    Cookies.set('basket', JSON.stringify(basket)); // Save basket data to cookies
  }, [basket]);

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
  };

  

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
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
