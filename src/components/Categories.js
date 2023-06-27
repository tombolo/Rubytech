import React from 'react';
import { AdjustmentsIcon, ScaleIcon, FilterIcon, GlobeAltIcon, CogIcon, BeakerIcon } from '@heroicons/react/solid';
import Link from 'next/link';

function Categories() {
  return (
    <div className="lg:mt-4 -mt-2 z-70 lg:flex flex-row items-center justify-evenly mx-6">
      <div className="flex flex-row justify-evenly mx-1 mt-5 lg:mt-0 items-center">
        <Link href="/CategoryPage">
          <a className="flex flex-col items-center rounded-md p-2 lg:mx-4">
            <AdjustmentsIcon className="h-8 w-8 lg:h-12 lg:w-12 text-blue-500" />
            <p className="text-xs lg:text-sm font-semibold">Filtration</p>
          </a>
        </Link>
        <Link href="/CategoryPage">
          <a className="flex flex-col items-center rounded-md p-2 lg:mx-4">
            <ScaleIcon className="h-8 w-8 lg:h-12 lg:w-12 text-red-500" />
            <p className="text-xs lg:text-sm font-semibold">Softeners</p>
          </a>
        </Link>
        <Link href="/CategoryPage">
          <a className="flex flex-col items-center rounded-md p-2 lg:mx-4">
            <FilterIcon className="h-8 w-8 lg:h-12 lg:w-12 text-green-500" />
            <p className="text-xs lg:text-sm font-semibold">Osmosis</p>
          </a>
        </Link>
      </div>

      <div className="flex flex-row justify-evenly mx-1 mt-5 lg:mt-0 items-center">
        <Link href="/CategoryPage">
          <a className="flex flex-col items-center rounded-md p-2 lg:mx-4">
            <GlobeAltIcon className="h-8 w-8 lg:h-12 lg:w-12 text-yellow-500" />
            <p className="text-xs lg:text-sm font-semibold">Sterilizers</p>
          </a>
        </Link>
        <Link href="/CategoryPage">
          <a className="flex flex-col items-center rounded-md p-2 lg:mx-4">
            <CogIcon className="h-8 w-8 lg:h-12 lg:w-12 text-purple-500" />
            <p className="text-xs lg:text-sm font-semibold">Treatment</p>
          </a>
        </Link>
        <Link href="/CategoryPage">
          <a className="flex flex-col items-center rounded-md p-2 lg:mx-4">
            <BeakerIcon className="h-8 w-8 lg:h-12 lg:w-12 text-pink-500" />
            <p className="text-xs lg:text-sm font-semibold">Dosing</p>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Categories;
