import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Typist from 'react-typist';
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

            <div className="absolute bottom-28 left-0 right-0 bg-transparent text-white text-center p-8 z-50 sm:mt-74">
              <Typist
                className="text-4xl opacity-100"
                startDelay={3000}
                avgTypingDelay={50}
                onTypingDone={handleTypingDone} >
                <span className="text-white">Welcome to Rubytech, where</span>
                <br />
                <span className="text-blue-500">great things happen.</span>
              </Typist>
            </div>
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
