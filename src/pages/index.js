import { MyShop } from "../components/MyShop";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import ProgressBar from "../components/ProgressBar";
import Services from "../components/Services";
import { getSession } from "next-auth/react";


export default function Home() {


  
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

        <div className="mb-4">
          {/* Progress Bar */}
          <ProgressBar />

          <Services />

          {/* Product Feed */}
          <ProductFeed products={MyShop} />

          
        </div>

       
        


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

{/*<div className="z-50">

           <div className="absolute bottom-0 left-0 right-0 bg-transparent text-white text-center p-8 z-50">
              <Typist
                className="text-4xl opacity-100"
                startDelay={1000}
                avgTypingDelay={50}
                onTypingDone={handleTypingDone} >
                <span className="text-white mt-36">Welcome to Rubytech, where</span>
                <br />
                <span className="text-blue-500">great things happen.</span>
              </Typist>
            </div>
</div>*/}