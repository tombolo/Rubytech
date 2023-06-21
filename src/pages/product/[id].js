import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { MyShop } from '../../components/MyShop';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FixedFooter from '../../components/FixedFooter';
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState({});
  console.log(id);

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING,
  );

  useEffect(() => {
    const loadedProd = MyShop.find((prod) => {
      console.log('prod.id:', prod.id);
      console.log('id:', id);
      return prod.id === Number(id);
    });
    setProduct(loadedProd);
    console.log('loadedProd,,,,:', loadedProd);
  }, [id]);

  


  if (!id || !product || Object.keys(product).length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Header />
    <div className="relative m-6 bg-white z-20 p-3 rounded-lg shadow-lg transition xl:mt-10 mt-28">
      <p className="italic absolute top-2 right-2 text-gray-400">{product.category}</p>

      <div className="relative overflow-hidden top-7 flex items-center justify-center border-2 rounded-md ">
      <Image src={product.image} height={300} width={320} objectfit="contain" />
      </div>
      <h1 className="my-12 font-bold text-blue-900">{product.title}</h1>
      
      <p className="text-xs my-1 transition duration-300 rounded-md -mt-10">{product.description}</p>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <p>KSH{product.price}</p>
      
    </div>

    <div className="relative m-6 bg-white border-t-2 border-yellow-900 p-2 rounded shadow-lg transition">
  <div className="flex flex-row justify-between items-center">
    <p className="text-xs font-bold">Shipping to</p>
    <select className="text-xs bg-transparent border-none focus:outline-none">
      <option value="Nairobi, Umoja">Nairobi, Umoja</option>
      <option value="Mombasa">Mombasa</option>
      <option value="Kisumu">Kisumu</option>
      {/* Add more options for different parts of the country */}
    </select>
  </div>

  <div className="relative m-2 border-b-2 border-yellow-900">
    <h1 className="text-xs font-bold text-blue-900 py-2">Fullfilled By Rubytech</h1>
    <p className="text-xs">The product Ships from Rubytech local warehouse. Get it between date... to date...</p>
    <p className="text-xs font-semibold text-blue-900 py-2">Free shipping for amount over KSH 20,000</p>
  </div>


  <div className="relative m-2 border-b-2 border-yellow-900">
    <h1 className="text-xs font-semibold text-blue-900 py-2">Return policy</h1>
    <p className="text-xs py-2">Easy Return, Quick Refund</p>
  </div>


  <div className="relative m-2 border-b-2 border-yellow-900">
    <h1 className="text-xs font-semibold text-blue-900 py-2">Shopping Security</h1>

    <div className="flex justify-between items-center px-2 mb-2">
      <div className="flex-col text-xs">
          <p className="list-item">Safe Payments</p>
          <p className="list-item">Secure Privacy</p>
      </div>

      <div className="flex flex-col text-xs">
          <p className="list-item">Secure Logistics</p>
          <p className="list-item">Purchase Protection</p>
      </div>

    </div>

  </div>





</div>





    <Footer />
    <FixedFooter />
    </div>
  );
};

export default Product;
