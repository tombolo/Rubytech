import Product from './Product';
import Link from 'next/link';

function ProductFeed({ products }) {
  return (
    <div className="">
      <h3 className="font-bold text-2xl text-center">Our Products</h3>
      <div className="mx-auto flex overflow-x-auto bg-gray-100 mr-3">
        {products.slice(1, 17).map((product, index) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <a onClick={() => {
              if (product.id) {
                console.log(`Processing product ID: ${product.id}`);
              } else {
                console.error('Product ID is missing');
              }
            }}>
              {product.id ? (
                <div className={`m-2 ${index === 3 ? '' : ''}`} >
                  <Product {...product} />
                </div>
              ) : (
                <div></div>
              )}
            </a>
          </Link>
        ))}

        
      </div>
    </div>
  );
}

export default ProductFeed;
