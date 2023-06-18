import MyShop from './MyShop';
import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;


function Product({ id, title, price, description, category, image }) {
    const dispatch = useDispatch();
    const [product, setProduct] = useState({});
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING,
    );



    const [hasPrime] = useState(
        Math.random() < 0.5,
        );
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

  return (
    <div className="relative flex flex-col m-3 bg-white z-20 p-6 rounded-lg shadow-lg transition duration-300 hover:bg-gray-300 transform hover:scale-95 xl:mt-40">
  <p className="absolute top-2 right-2 italic text-gray-400">{category}</p>

  <div className="relative overflow-hidden top-5 flex items-center justify-center border-2 border-yellow-800 rounded-md h-300 w-300 transition duration-500 transform hover:scale-105">
    <img
      src={image.src}
      style={{ height: "200px", width: "100%" }}
      alt={title}
      className="rounded-md border-2"
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

  <p className="text-xs my-2 line-clamp-2 bg-blue-50 px-3 hover:bg-blue-200 transition duration-300 rounded-md">
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

  <button
    onClick={addItemToBasket}
    className="mx-auto bg-blue-900 text-white py-1.5 px-14 rounded-md hover:bg-blue-600 transition duration-200 top-3 m-2"
  >
    Add to Basket
  </button>
</div>

  );
}

export default Product;