import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Banner4 from './Myimages/banner4.jpg';
import Kioko from './Myimages/kioko.jpg';


function Banner() {

  const handleTypingDone = () => {
    // Code to reset the typing animation
    // You can modify this function to suit your specific requirements
  };
  return (
    <div className="relative mt-24">
      <div className="absolute w-full z-10 h-auto" />
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={10000}
      >
        <div className="relative w-full h-500">
        <Image
        src={Banner4} loading="lazy" className="w-screen h-auto" alt="Banner" />

        </div>



        <div>
        <Image
        src={Kioko} loading="lazy" className="w-full h-auto" alt="Banner" />
        </div>

        {/*}
        <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
  </div>*/}
      </Carousel>
    </div>
  );
}

export default Banner;
