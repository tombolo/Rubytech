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
          <h2
            data-aos="fade-in"
            data-aos-duration="3000"
            className="absolute lg:top-1/2 lg:ml-10 ml-3 transform -translate-x-1/2 -translate-y-1/2 lg:text-4xl text-lg top-1/4 font-bold text-blue-900"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            Welcome
          </h2>

          <h2
            data-aos="fade-in"
            data-aos-duration="3000"
            className="absolute lg:ml-28 lg:top-60 ml-10 transform -translate-x-1/2 -translate-y-1/2 lg:text-4xl text-lg top-1/2 font-bold text-blue-900"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            to
          </h2>

          <h2
            data-aos="fade-in"
            data-aos-duration="3000"
            className="absolute lg:ml-44 ml-16 transform -translate-x-1/2 -translate-y-1/2 lg:text-4xl text-lg lg:top-72 top-3/4 mb-4 font-bold text-blue-900"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            Rubytech
          </h2>
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;

