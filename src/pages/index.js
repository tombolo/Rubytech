import { MyShop } from "../components/MyShop";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import { getSession } from "next-auth/react";


export default function Home() {

  console.log("MyShop array:", MyShop);

  
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head> 

      {/*Header*/}

      <Header />


      <main className="max-w-screen-2xl mx-auto">
        {/*Banner*/}
        <Banner />

        <ProductFeed products={MyShop} />
        


      </main>

    </div>
  );
}


export async function getServerSideProps(context) {
  const session = await getSession(context);
  

  return { 
    props: {
      session,
  },
};
}

