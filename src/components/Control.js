import { TruckIcon, CurrencyDollarIcon, ClockIcon } from '@heroicons/react/solid';

const Control = () => {
  return (
    <div className="flex flex-row justify-between lg:justify-evenly items-center bg-gray-100 p-4 rounded-lg mx-6 flex-grow">
      <div data-aos="fade-right"
           data-aos-duration="2000" 
           className="flex flex-col items-center">
        <TruckIcon className="h-6 w-6 md:h-12 md:w-12 text-blue-500" />
        <p className="text-xs mt-1 md:text-sm text-blue-900 font-semibold">Free Delivery</p>
      </div>

      <div data-aos="fade-up"
           data-aos-duration="2000"
           className="flex flex-col items-center">
        <CurrencyDollarIcon className="h-6 w-6 md:h-12 md:w-12 text-green-500" />
        <p className="text-xs mt-1 md:text-sm text-blue-900 font-semibold">Affordable Products</p>
      </div>

      <div data-aos="fade-left"
           data-aos-duration="2000"
           className="flex flex-col items-center">
        <ClockIcon className="h-6 w-6 md:h-12 md:w-12 text-purple-500" />
        <p className="text-xs mt-1 md:text-sm text-blue-900 font-semibold">Online Support</p>
      </div>
    </div>
  );
};

export default Control;
