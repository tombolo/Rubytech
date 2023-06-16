import Header from "../components/Header";
import { getSession, useSession } from "next-auth/react";
import moment from "moment";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import db from "../../firebase";
import Order from "../components/Order";

function Orders({ orders }) {
  const { data: session } = useSession();

  console.log(orders);

  return (
    <div>
      <Header />

      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-blue-900">Your Orders</h1>

        {session ? (
          <h2>{orders.length} Orders</h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}

        <div className="mt-5 space-y-4">
            {orders?.map(
                ({ id, amount, items, timestamp, images }
                ) => (
                <Order
                key={id}
                id={id}
                amount={amount}
                items={items}
                timestamp={timestamp}
                images={images}
                 />
            )
            )}
        </div>
      </main>
    </div>
  );
}

export default Orders;

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  const session = await getSession(context);
  if (!session) {
    return {
      props: {},
    };
  }

  const ordersCollectionRef = collection(
    db,
    "users",
    session.user.email,
    "orders"
  );

  const ordersQuery = query(ordersCollectionRef, orderBy("timestamp", "desc"));
  const stripeOrders = await getDocs(ordersQuery);

  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => {
      const orderData = order.data();
      const items = (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data;

      return {
        id: order.id,
        amount: orderData.amount,
        images: orderData.images,
        timestamp: moment(orderData.timestamp.toDate()).unix(),
        items,
      };
    })
  );

  return {
    props: {
      orders,
    },
  };
}
