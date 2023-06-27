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
    <div className="relative lg:mt-28">
      <div className="absolute w-full h-auto" />
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div className="mt-20 bg-white">
          <div className="h-[110px] lg:h-[300px] lg:-mt-14">
            <Image src={Kioko5} loading="lazy" className="w-full h-full object-cover" alt="Banner" />
          </div>
        </div>

        <div className="mt-12 lg:mt-0">
          <div className="h-[110px] lg:h-[300px]">
            <Image src={Newbanner5} loading="lazy" className="w-full h-full object-cover" alt="Banner" />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;


