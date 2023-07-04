import Baca1 from '../components/Myimages/baca.jpg';
import Baca2 from '../components/Myimages/final15.jpg';
import Image from 'next/image';
import Link from 'next/link';


function Banaca() {
  return (
    <div className="md:relative flex md:flex-row md:justify-evenly flex-col mt-5">

      {/*BANACA 1 */}

        <div className="bg-white md:w-1/2 p-3 m-1 rounded-md flex flex-row items-center justify-between opacity-100 hover:opacity-70 shadow-md">
            <div className="p-2">
                <h1>NEW ARRIVALS</h1>
                <h1 className="text-xl font-bold py-2 mb-6">Paddle Float Switch</h1>
                <Link href="/product/19">
                  <a className="bg-blue-900 text-white rounded-full p-2 text-sm mt-6">
                    Shop Now
                  </a>
                </Link>
            </div>

            <div style={{ width: '150px', height: '170px' }}>
              <Image src={Baca2} className="w-full h-full" />
            </div>
          </div>


         {/*BANACA 2 */}

        <div className="bg-white md:w-1/2 p-3 m-1 rounded-md flex flex-row items-center justify-between opacity-100 hover:opacity-70 shadow-md">

           <div style={{ width: '170px', height: '170px' }}>
              <Image src={Baca1} className="w-full h-full" />
            </div>
            <div className="flex flex-col p-2 justify-end items-end">
                <h1>HOT SALES</h1>
                <p className="text-xl font-bold py-2">Domestic Systems</p>
                <Link href="/product/13">
                  <a className="bg-blue-900 text-white rounded-full p-2 text-sm mt-6">
                    Shop Now
                  </a>
                </Link>
            </div>

        </div>


    </div>
  );
}

export default Banaca;
