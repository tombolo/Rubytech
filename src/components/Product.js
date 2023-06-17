import Image from "next/image";
import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;


function Product({ id, title, price, description, category, image }) {
    const dispatch = useDispatch();
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
    <div className="relative flex flex-col m-3 bg-white z-30 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">

<p className="absolute top-2 right-2 italic text-gray-400">{category}</p>
   

    <div className="relative overflow-hidden top-5  flex items-center justify-center">

        
        <Image
            src={image}
            height={200}
            width={320}
            objectFit="cover"
            className="transition duration-200 transform hover:scale-110 rounded-lg w-auto"
        />
    </div>

    <h4 className="my-7 font-bold">{title}</h4>

    <div className="flex">
        {Array(rating)
            .fill()
            .map((_, i) => (
                <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
    </div>

    <p className="text-xs my-2 line-clamp-2 font-semibold">{description}</p>

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

    <button onClick={addItemToBasket} className="mx-auto bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 top-3 m-2">Add to Basket</button>
</div>

  );
}

export default Product;
