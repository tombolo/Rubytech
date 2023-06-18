import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Banner4 from './Myimages/banner4.jpg';
import Banner5 from './Myimages/banner5.jpg';


function Banner() {

  const handleTypingDone = () => {
    // Code to reset the typing animation
    // You can modify this function to suit your specific requirements
  };
  return (
    <div className="relative mt-28">
      <div className="absolute w-full z-10" />
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={10000}
      >
        <div className="relative">
        <Image
        src={Banner4} loading="lazy" className="w-screen h-auto" alt="Banner" />

        </div>



        <div>
        <Image
        src={Banner5} loading="lazy" className="w-screen h-auto" alt="Banner" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
