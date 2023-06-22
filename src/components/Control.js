import { TruckIcon, CurrencyDollarIcon, ClockIcon } from '@heroicons/react/solid';

const Control = () => {
  return (
    <div className="flex flex-row justify-between lg:justify-evenly items-center bg-gray-100 p-4 rounded-lg mx-6 flex-grow">
      <div className="flex flex-col items-center">
        <TruckIcon className="h-6 w-6 md:h-12 md:w-12 text-blue-500" />
        <p className="text-xs mt-1 md:text-sm">Free Delivery</p>
      </div>

      <div className="flex flex-col items-center">
        <CurrencyDollarIcon className="h-6 w-6 md:h-12 md:w-12 text-green-500" />
        <p className="text-xs mt-1 md:text-sm">Affordable Products</p>
      </div>

      <div className="flex flex-col items-center">
        <ClockIcon className="h-6 w-6 md:h-12 md:w-12 text-purple-500" />
        <p className="text-xs mt-1 md:text-sm">Online Support</p>
      </div>
    </div>
  );
};

export default Control;
