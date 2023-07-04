import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
function CheckoutProduct({
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime,
}) {
    const dispatch = useDispatch();

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

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }));
    };

  

  return (
    <div className="grid grid-cols-5 lg:grid-cols-5 flex-grow items-center border-b-2 border-yellow-700 lg:mt-26 lg:border-t-2 lg:border-gray-200">
      <div className="lg:block flex">
        <Image src={image} height={110} width={110} objectFit="contain" className="rounded-md" />
      </div>

      {/*Middle*/}

      <div className="col-span-3 mx-5">
        <p className="text-xs font-bold">{title}</p>

        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <h6 className="text-sm font-semibold">KSH{price}  </h6>

        {hasPrime && (
            <div className="flex items-center space-x-2">
                <img
                  loading="lazy"
                  className="w-12"
                  src=""
                  alt=""
                  />
                  <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                  </div>
                
        )}
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-self-end">
      
      <button className="bg-blue-900 rounded-md flex-shrink-0 w-auto sm:w-auto py-1.5 px-2 hover:bg-blue-600 transition duration-200 m-1 text-white text-xs" onClick={removeItemFromBasket}>Remove from Basket</button>
      </div>



    </div>
  );
  
}

export default CheckoutProduct;
