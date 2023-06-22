import React from 'react';
import Product from './Product';
import Kioko2 from "./Myimages/kioko2.jpg";
import Kioko3 from "./Myimages/kioko3.jpg";
import Kioko4 from "./Myimages/kioko4.jpg";
import Image from "next/image";

function ProductFeed({ products }) {
  const firstRowProducts = products.slice(1, 17);
  const secondRowProducts = products.slice(18, 26);

  return (
    <div className="flex flex-wrap">
      <div className="mx-auto flex overflow-x-auto bg-gray-100 mr-3">
        {/* First Row */}
        {firstRowProducts.map((product, index) => (
          <div className="m-2" key={product.id}>
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

      <div className="mx-auto flex overflow-x-auto bg-gray-100 mr-3">
        {/* Second Row */}
        {secondRowProducts.map((product, index) => (
          <div className="m-2" key={product.id}>
            <Product {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductFeed;

