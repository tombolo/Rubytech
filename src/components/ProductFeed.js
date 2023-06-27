import React from 'react';
import Product from './Product';
import Kioko2 from "./Myimages/kioko2.jpg";
import Kioko3 from "./Myimages/kioko3.jpg";
import Kioko4 from "./Myimages/kioko4.jpg";
import Image from "next/image";
import { FaHeadset, FaCreditCard, FaUndo, FaTags } from 'react-icons/fa';


function ProductFeed({ products }) {
  const firstRowProducts = products.slice(4, 11);
  const secondRowProducts = products.slice(12, 19);
  const thirdRowProducts = products.slice(19, 26);

  return (
    <div className="flex flex-wrap">
      <div className="mx-auto flex justify-between overflow-x-auto bg-gray-100 mr-2">
        {/* First Row */}
        {firstRowProducts.map((product, index) => (
          <div className="m-1" key={product.id}>
            <Product {...product} />
          </div>
        ))}
      </div>

      <div className="flex flex-row items-center">
        <div className="m-2 w-full">
          <Image
            src={Kioko2}
            height={100}
            width={400}
          />
        </div>

        <div className="hidden md:block m-2 w-full -ml-2">
          <Image
            src={Kioko3}
            height={100}
            width={400}
          />
        </div>

        <div className="hidden md:block m-2 w-full -ml-2">
          <Image
            src={Kioko4}
            height={100}
            width={400}
          />
        </div>
      </div>

      <div className="mx-auto flex justify-between overflow-x-auto bg-gray-100 mr-2">
        {/* Second Row */}
        {secondRowProducts.map((product, index) => (
          <div className="m-1" key={product.id}>
            <Product {...product} />
          </div>
        ))}
      </div>









      <div className="lg:mt-2 mx-6 flex md:flex-row overflow-hidden flex-col bg-gray-200 mt-5 rounded-md shadow-md w-full">

      <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row p-3">
            <FaHeadset className="h-10 w-10 p-1 text-blue-900" />
            <div className="px-2">
              <h1 className="font-bold text-sm">Support</h1>
              <p className="lg:text-sm text-xs hidden md:block">We offer quality support Mon - Fri</p>
            </div>
          </div>

          <div className="flex flex-row p-3">
            <FaCreditCard className="h-10 w-10 p-1 text-blue-900 text-xs" />
            <div className="px-2">
              <h1 className="font-bold text-sm">Payments</h1>
              <p className="lg:text-sm text-xs hidden md:block">Delivered, When you receive.</p>
            </div>
          </div>
      </div>

      <div className="flex flex-row justify-between items-center">

          <div className="flex flex-row p-3">
            <FaUndo className="h-10 w-10 p-1 text-blue-900" />
            <div className="px-2">
              <h1 className="font-bold text-sm">Returns</h1>
              <p className="lg:text-sm text-xs hidden md:block">Retail, A product return process.</p>
            </div>
          </div>

          <div className="flex flex-row p-3">
            <FaTags className="h-10 w-10 p-1 text-blue-900" />
            <div className="px-2">
              <h1 className="font-bold text-sm">Discounts</h1>
              <p className="lg:text-sm text-xs hidden md:block">We offer discounts on Bulk orders.</p>
            </div>
          </div>

      </div>
    </div>



    <div className="mx-auto flex justify-between overflow-x-auto bg-gray-100 mr-2">
        {/* Second Row */}
        {thirdRowProducts.map((product, index) => (
          <div className="m-1" key={product.id}>
            <Product {...product} />
          </div>
        ))}
      </div>





    </div>
  );
}

export default ProductFeed;


