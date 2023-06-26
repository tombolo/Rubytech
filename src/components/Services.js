import React from 'react';
import { FaHeadset, FaCreditCard, FaUndo, FaTags } from 'react-icons/fa';

function Services() {
  return (
    <div className="lg:mt-10 mx-8 flex md:flex-row overflow-hidden flex-col bg-gray-200 mt-5">

      <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row p-7">
            <FaHeadset className="h-10 w-10 p-1 text-blue-700" />
            <div className="px-2">
              <h1 className="font-bold  lg:text-sm text-xs">Support</h1>
              <p className="lg:text-sm text-xs">We offer quality support Mon - Fri</p>
            </div>
          </div>

          <div className="flex flex-row p-3">
            <FaCreditCard className="h-10 w-10 p-1 text-blue-700 text-xs" />
            <div className="px-2">
              <h1 className="font-bold lg:text-sm text-xs">Payments</h1>
              <p className="lg:text-sm text-xs">Delivered, When you receive.</p>
            </div>
          </div>
      </div>

      <div className="flex flex-row justify-between items-center">

          <div className="flex flex-row p-3">
            <FaUndo className="h-10 w-10 p-1 text-blue-700" />
            <div className="px-2">
              <h1 className="font-bold lg:text-sm text-xs">Returns</h1>
              <p className="lg:text-sm text-xs">Retail, A product return process.</p>
            </div>
          </div>

          <div className="flex flex-row p-3">
            <FaTags className="h-10 w-10 p-1 text-blue-700" />
            <div className="px-2">
              <h1 className="font-bold lg:text-sm text-xs">Discounts</h1>
              <p className="lg:text-sm text-xs">We offer discounts on Bulk orders.</p>
            </div>
          </div>

      </div>
    </div>
  );
}

export default Services;
