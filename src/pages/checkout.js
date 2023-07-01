import { useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSelector, useDispatch } from "react-redux";
import { selectItems, selectTotal, setBasket } from "../slices/basketSlice";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useRouter } from 'next/router';
const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const storedBasketItems = localStorage.getItem("basketItems");
    const storedBasket = storedBasketItems ? JSON.parse(storedBasketItems) : [];
    dispatch(setBasket(storedBasket));
  }, [dispatch]);

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    const checkoutSession = await axios.post('api/create-checkout-session', {
      items: items,
      email: session.user.email,
    });

    const result = await stripe.redirectToCheckout({
        sessionId: checkoutSession.data.id
    })

    if (result.error) alert(result.error.message);
  };

  useEffect(() => {
    localStorage.setItem("basketItems", JSON.stringify(items));
  }, [items]);

  return (
    <div className="bg-gray-100 -mt-9 md:mt-0">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto mt-32 lg:-mt-26 z-10">
        {/*Left*/}
        <div className="flex-grow shadow-sm items-center">
        <div className="border-b-2 border-yellow-900 flex items-center mx-3">
            <h1 className="flex text-md md:text-xl font-bold py-2">
              {items.length === 0
                ? "Your Rubytech Basket is empty."
                : "Shopping Basket"}
            </h1>
            </div>
         

          <div className="flex flex-col p-2 space-y-5 bg-white items-center">
          

            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/*Right*/}
        <div className="flex flex-col bg-white p-10 shadow-md z-10">
          {items.length > 0 && (
            <>
            <div className="lg:mr-64">
            <div className="lg:flex lg:fixed">
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):
                <span className="font-bold">KSH{total}</span>
              </h2>
            </div>


             <div className="lg:flex lg:mt-2 lg:fixed lg:p-6 z-10">
              <button
                role="link"
                onClick={createCheckoutSession}
                disabled={!session}
                className={`bg-blue-900 rounded-md flex-shrink-0 w-auto sm:w-auto py-1.5 px-2 hover:bg-blue-600 transition duration-200 m-1 text-white mt-2 z-10 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
              </div>

              </div>


            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Checkout;
