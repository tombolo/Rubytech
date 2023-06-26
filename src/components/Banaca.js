import Baca1 from '../components/Myimages/baca.jpg';
import Baca2 from '../components/Myimages/baca.jpeg';
import Image from 'next/image';

function Banaca() {
  return (
    <div className="md:relative flex md:flex-row md:justify-evenly mx-6 flex-col mt-5">

        <div className="bg-white md:w-1/2 h-56 m-2 p-3 rounded-md flex flex-row justify-between opacity-100 hover:opacity-70 shadow-md">
            <div className="p-5 mt-6">
                <h1>NEW ARRIVALS</h1>
                <h1 className="text-xl font-bold py-2"> ECO 200 GPD RO Systems</h1>
                <button className="bg-blue-900 text-white rounded-full p-2 text-sm mt-6">shop Now</button>
            </div>

            <div style={{ width: '170px', height: '170px' }}>
              <Image src={Baca2} className="w-full h-full" />
            </div>


        </div>

        <div className="bg-white md:w-1/2 m-2 p-3 rounded-md flex flex-row justify-between opacity-100 hover:opacity-70 shadow-md">

           <div style={{ width: '170px', height: '170px' }}>
              <Image src={Baca1} className="w-full h-full" />
            </div>
            <div className="p-2 mt-6">
                <h1>HOT SALES</h1>
                <h1 className="text-xl font-bold py-2">Domestic Ro Systems</h1>
                <button className="bg-black hover:bg-gray-300 hover:text-blue-900 text-white rounded-full p-2 text-sm mt-6">shop Now</button>
            </div>

        </div>


    </div>
  );
}

export default Banaca;
