import Product from './Product';
import Link from 'next/link';

function ProductFeed({ products }) {
  return (
    <div>
      <h3 className="font-bold text-3xl text-center">Our Products</h3>
      <div className="custom-margin-top grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
        {products.slice(0, 4).map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <a onClick={() => {
              if (product.id) {
                console.log(`Processing product ID: ${product.id}`);
              } else {
                console.error('Product ID is missing');
              }
            }}>
              {product.id ? (
                <Product {...product} />
              ) : (
                <div>Product ID is missing</div>
              )}
            </a>
          </Link>
        ))}

        <img
          className="md:col-span-full"
          src="https://links.papareact.com/dyz"
          alt=""
        />

        <div className="md:col-span-2">
          {products.slice(4, 5).map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <a onClick={() => {
                if (product.id) {
                  console.log(`Processing product ID: ${product.id}`);
                } else {
                  console.error('Product ID is missing');
                }
              }}>
                {product.id ? (
                  <Product {...product} />
                ) : (
                  <div>Product ID is missing</div>
                )}
              </a>
            </Link>
          ))}
        </div>

        {products.slice(5, products.length).map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <a onClick={() => {
              if (product.id) {
                console.log(`Processing product ID: ${product.id}`);
              } else {
                console.error('Product ID is missing');
              }
            }}>
              {product.id ? (
                <Product {...product} />
              ) : (
                <div>Product ID is missing</div>
              )}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductFeed;
