import { TruckIcon, CurrencyDollarIcon, ClockIcon } from '@heroicons/react/solid';

const Control = () => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mx-6">
      <div className="flex flex-col items-center">
        <TruckIcon className="h-6 w-6 text-blue-500" />
        <p className="text-xs mt-1">Free Delivery</p>
      </div>

      <div className="flex flex-col items-center">
        <CurrencyDollarIcon className="h-6 w-6 text-green-500" />
        <p className="text-xs mt-1">Affordable Products</p>
      </div>

      <div className="flex flex-col items-center">
        <ClockIcon className="h-6 w-6 text-purple-500" />
        <p className="text-xs mt-1">Online Support</p>
      </div>
    </div>
  );
};

export default Control;
