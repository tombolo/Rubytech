import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import AOS from 'aos';
import Kioko5 from './Myimages/kioko5.jpg';
import Newbanner5 from './Myimages/newbanner3.jpg';

function Banner() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative lg:mt-36">
      <div className="absolute w-full h-auto" />
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div className="mt-20">
          <div className="h-[110px]">
            <Image src={Kioko5} loading="lazy" className="w-full h-full object-cover" alt="Banner" />
          </div>
        </div>

        <div className="mt-8">
          <div className="h-[110px]">
            <Image src={Newbanner5} loading="lazy" className="w-full h-full object-cover" alt="Banner" />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;


