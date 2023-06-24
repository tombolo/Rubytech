import { AdjustmentsIcon, ScaleIcon, FilterIcon, GlobeAltIcon, CogIcon, BeakerIcon } from '@heroicons/react/solid';




        

function Categories() {



  return (
    <div className="lg:mt-2 -mt-2 z-50 lg:flex flex-row items-center justify-evenly">
                    <div data-aos="fade-right"
                        data-aos-duration="2000"
                        data-aos-once="false"
                        data-aos-delay="100"
                        data-aos-easing="ease-in-out" className="flex flex-row justify-evenly mx-1 mt-5 lg:mt-0 items-center">
                        <div className="flex flex-col items-center bg-white rounded-md p-2 lg:mx-4">
                        <AdjustmentsIcon className="h-8 w-8 lg:h-12 lg:w-12 text-blue-500" />
                        <p className="text-xs lg:text-sm">Filtration Systems</p>
                        </div>
                        <div className="flex flex-col items-center bg-white rounded-md p-2 lg:mx-4">
                        <ScaleIcon className="h-8 w-8 lg:h-12 lg:w-12 text-red-500" />
                        <p className="text-xs lg:text-sm">Water Softeners</p>
                        </div>
                        <div className="flex flex-col items-center bg-white rounded-md p-2 lg:mx-4">
                        <FilterIcon className="h-8 w-8 lg:h-12 lg:w-12 text-green-500" />
                        <p className="text-xs lg:text-sm">Reverse Osmosis</p>
                        </div>
                    </div>

                    <div data-aos="fade-left"
                         data-aos-duration="2000"
                         data-aos-once="false"
                         data-aos-delay="100"
                         data-aos-easing="ease-in-out" className="flex flex-row justify-evenly mx-1 mt-5 lg:mt-0 items-center">
                        <div className="flex flex-col items-center bg-white rounded-md p-2 lg:mx-4">
                                <GlobeAltIcon className="h-8 w-8 lg:h-12 lg:w-12 text-yellow-500" />
                                <p className="text-xs lg:text-sm">UV Sterilizers</p>
                        </div>
                        <div className="flex flex-col items-center bg-white rounded-md p-2 lg:mx-4">
                                <CogIcon className="h-8 w-8 lg:h-12 lg:w-12 text-purple-500" />
                                <p className="text-xs lg:text-sm">Treatment Plants</p>
                        </div>
                        <div className="flex flex-col items-center bg-white rounded-md p-2 lg:mx-4">
                                <BeakerIcon className="h-8 w-8 lg:h-12 lg:w-12 text-pink-500" />
                                <p className="text-xs lg:text-sm">Chemical Dosing</p>
                        </div>
                    </div>
    </div>
  );
}

export default Categories;
