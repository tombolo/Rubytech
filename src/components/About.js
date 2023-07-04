import { LocationMarkerIcon, PhoneIcon, MailIcon } from '@heroicons/react/solid';
import Banner2 from '../components/Myimages/banner2.jpg';
import Image from 'next/image';
import Blog3 from '../components/Myimages/blog3.jpg';


function About() {
  return (

    <div className="flex flex-col lg:mx-6 mx-2 rounded-md mt-4 lg:flex-row lg:items-center lg:justify-evenly bg-white flex-grow">

        <div  
           className=" m-2 border-gray-200 lg:w-1/4 lg:justify-center lg:border-b-0">
            <h1 className="flex lg:justify-center text-sm font-bold text-blue-900 p-1">About Us</h1>
            <p className=" flex lg:justify-center text-xs p-1 lg:items-center">Rubytech Limited is a dealer of Cooking/Salad Oil ATMs, Milk ATMs, Water Purifiers, Food Grade Pumps, Automatic Bell Systems, Programmable Logic Controller, and Water Stations based in Buruburu Kenya.</p>
        </div>

        <div className="m-2 lg:w-1/4 lg:border-b-0 md:hidden">
        <div className="relative group rounded-md">
            <Image src={Blog3} className="w-full h-full rounded-md" alt="Banner" />
            <div className="absolute inset-0 rounded-md">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-120 rounded-md"></div>
            </div>
        </div>
        </div>



        <div className="m-2 border-b-2 border-gray-200 lg:w-1/4 lg:border-b-0 -mt-7 z-50 md:mt-0">
            <h1 className=" font-bold text-blue-900 p-1 flex lg:justify-center">Our Location & Contact Details</h1>
            <div className=" flex lg:justify-center flex-row p-1">
                <div className="bg-blue-300 rounded-full">
                   <LocationMarkerIcon className="h-6 w-6 text-red-500 p-1" />
                </div>
                <p className="text-xs mx-2">Visit us Today in Buruburu near Outering</p>
            </div>

            <div className="flex flex-row p-1 lg:justify-center">
                <div className="bg-blue-300 rounded-full">
                    <PhoneIcon className="h-6 w-6 text-yellow-700 p-1" />
                </div> 
                <p className="text-xs mx-2">Phone: +254720171501</p>
            </div>

            <div className="flex lg:justify-center flex-row p-1">
                <div className="bg-blue-300 rounded-full">
                    <MailIcon className="h-6 w-6 text-indigo-700 p-1" />
                </div>
                <p className="text-xs mx-2">sales@rubytech.co.ke</p>
            </div>
        </div>

        <div className="m-2 border-b-2 border-gray-200 lg:w-1/4 lg:border-b-0">
        <h1 className="font-bold text-blue-900 p-1 flex lg:justify-center">Business Hours</h1>

                    <div className="flex flex-row items-center justify-between p-1 lg:flex-col lg:justify-center">

                        <div>
                            <p className="text-xs p-1 font-bold">Monday - Friday</p>
                            <p className="text-xs p-1">7:00 AM to 6:00 PM</p>
                        </div>
                        <div>
                            <p className="text-xs p-1 font-bold">Saturday - Sunday</p>
                            <p className="text-xs p-1">8:00 AM to 4:00 PM</p>
                        </div>

                    </div>

        </div>

    </div>
  )
}

export default About