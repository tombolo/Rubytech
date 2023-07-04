import React from 'react';
import { FaHeadset, FaCreditCard, FaUndo, FaTags } from 'react-icons/fa';

function Services() {
  return (
    <div className="lg:mt-2 flex md:flex-row overflow-hidden flex-col bg-gray-200 mt-5 rounded-md shadow-md">

      <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row p-3">
            <FaHeadset className="h-10 w-10 p-1 text-blue-700" />
            <div className="px-2">
              <h1 className="font-bold text-sm">Support</h1>
              <p className="lg:text-sm text-xs hidden md:block">We offer quality support Mon - Fri</p>
            </div>
          </div>

          <div className="flex flex-row p-3">
            <FaCreditCard className="h-10 w-10 p-1 text-blue-700 text-xs" />
            <div className="px-2">
              <h1 className="font-bold text-sm">Payments</h1>
              <p className="lg:text-sm text-xs hidden md:block">Delivered, When you receive.</p>
            </div>
          </div>
      </div>

      <div className="flex flex-row justify-between items-center">

          <div className="flex flex-row p-3">
            <FaUndo className="h-10 w-10 p-1 text-blue-700" />
            <div className="px-2">
              <h1 className="font-bold text-sm">Returns</h1>
              <p className="lg:text-sm text-xs hidden md:block">Retail, A product return process.</p>
            </div>
          </div>

          <div className="flex flex-row p-3">
            <FaTags className="h-10 w-10 p-1 text-blue-700" />
            <div className="px-2">
              <h1 className="font-bold text-sm">Discounts</h1>
              <p className="lg:text-sm text-xs hidden md:block">We offer discounts on Bulk orders.</p>
            </div>
          </div>

      </div>
    </div>
  );
}

export default Services;
