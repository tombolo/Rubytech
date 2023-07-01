import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import { MyShop } from '../components/MyShop';
import Image from "next/image";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const imgRef = useRef({});

  useEffect(() => {
    const loadedProd = MyShop.find((prod) => {
      return prod.id === Number(id);
    });
    setProduct(loadedProd);
    setLoading(false); // Set loading to false after product data is loaded
  }, [id]);

  return (
    <div className="mt-36 relative flex flex-col m-5 bg-white z-20 p-6 rounded-lg shadow-lg transition duration-300 hover:bg-gray-300 transform hover:scale-95 xl:mt-10">
      <p className="">{product.category}</p>
      <Image src={product.image} height={200} width={200} objectFit="contain" />
      <h1>{product.title}</h1>
      <p>{product.rating}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
      {/* Additional product details */}
    </div>
  );
};

export default ProductPage;
