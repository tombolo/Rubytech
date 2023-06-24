import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner4 from './Myimages/banner4.jpg';
import Kioko from './Myimages/kioko.jpg';
import Kioko5 from './Myimages/kioko5.jpg';

function Banner() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative lg:mt-8 mt-24">
      <div className="absolute w-full h-auto" />
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <Image src={Kioko5} loading="lazy" className="w-full h-auto" alt="Banner" />
          
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;

