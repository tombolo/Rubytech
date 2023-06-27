import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductFeed from "../components/ProductFeed";
import { MyShop } from '../components/MyShop';
import Banner2 from '../components/Myimages/banner2.jpg';
import Image from 'next/image';


function Shop() {
  return (
    <div className="mt-36">

        <Header />

        <div className="relative w-1000 h-500 -mt-20">
            <div className="absolute"></div>
            <Image src={Banner2} className="w-full h-full inset-0 bg-black opacity-30" alt="Banner" />
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="lg:text-4xl text-sm shadow-lg font-bold">SHOP</h1>
            </div>
        </div>


        <div className="md:-mt-64 -mt-20">

        <ProductFeed products={MyShop} />

        </div>

        <Footer />
      
    </div>
  )
}

export default Shop
