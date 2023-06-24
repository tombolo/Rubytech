import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { RefreshIcon, ToolsIcon, WrenchIcon, SwitchHorizontalIcon, CogIcon, ClipboardCheckIcon } from '@heroicons/react/solid';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function ServicesPage() {

useEffect(() => {
    AOS.init(); // Initialize AOS
}, []);
  return (
    <div>
        <Header />

        <div className="md:mt-36 mt-32 lg:flex lg:flex-row lg:items-center lg:justify-evenly">


            <div className="px-6  bg-gray-200 shadow-md m-4 rounded-md lg:w-1/2">
                <div className="flex flex-row justify-between">
                    <h1 className="text-sm py-2 font-bold text-yellow-700 lg:text-xl">Cleaning In Place</h1>
                    <RefreshIcon className="h-8 w-8 lg:h-10 lg:w-10 text-blue-500 m-2" />
                </div>
                <p className="text-xs font-semibold">We offer CIP Services for RO Membranes.</p>
                <p className="list-item text-xs py-1">Cleaning In Place (CIP) is a method used to clean equipment and systems without disassembling them. It is commonly used in industries such as food and beverage, pharmaceuticals, and water treatment.</p>
                <p className="list-item text-xs mb-2">CIP is particularly important for RO (Reverse Osmosis) membrane systems. RO membranes are susceptible to fouling, scaling, and biological growth, which can negatively impact their performance and lifespan.</p>
            </div>

            <div className="px-6  bg-gray-200 shadow-md m-4 rounded-md lg:w-1/2">
                <div className="flex flex-row justify-between">
                    <h1 className="text-xs py-2 font-bold text-yellow-700 lg:text-xl">Replacement</h1>
                    <SwitchHorizontalIcon className="h-8 w-8 lg:h-10 lg:w-10 text-red-500 m-2" />
                </div>
                
                <p className="text-xs font-semibold">Membrane, Media, Cartridges Replacement.</p>
                <p className="list-item text-xs py-1">Pump Repair: We specialize in pump repair services, ensuring that your malfunctioning pumps are restored to optimal functionality. Trust our expertise to diagnose and fix pump issues efficiently, minimizing downtime and maximizing performance.</p>
                <p className="list-item text-xs mb-2">Cartridge Replacement: Our services include cartridge replacement for various systems and equipment. Whether it's for water filters, air purifiers, or other devices utilizing cartridges, we provide seamless replacement solutions to ensure continued efficiency and effectiveness.</p>
            </div>

            
        </div>

         

 <div className="md:mt-1 mt-6 lg:flex lg:flex-row lg:items-center lg:justify-evenly">


<div className="px-6  bg-gray-200 shadow-md m-4 rounded-md lg:w-1/2">
    <div className="flex flex-row justify-between">
        <h1 className="text-sm py-2 font-bold text-yellow-700 lg:text-xl">Pump Repair</h1>
        <CogIcon className="h-8 w-8 lg:h-10 lg:w-10 text-green-600 m-2" />
        
    </div>
    <p className="text-xs font-semibold">We can get your pump repaired, Cartridges Replacement..</p>
    <p className="list-item text-xs py-1">Pump Repair: Our expert technicians specialize in pump repair services, ensuring that your malfunctioning pump is quickly diagnosed, repaired, and restored to optimal functionality. Trust us to handle any pump-related issues with precision and efficiency.</p>
    <p className="list-item text-xs mb-2">Cartridge Replacement: As part of our comprehensive pump repair services, we offer cartridge replacement for pumps. By replacing worn-out or damaged cartridges, we can improve the performance and longevity of your pump, saving you from costly replacements and maximizing its efficiency.</p>
    
</div>

<div className="px-6  bg-gray-200 shadow-md m-4 rounded-md lg:w-1/2">
    <div className="flex flex-row justify-between">
        <h1 className="text-sm py-2 font-bold text-yellow-700 lg:text-xl">AMC</h1>
        <ClipboardCheckIcon className="h-8 w-8 lg:h-10 lg:w-10 text-pink-500 m-2" />
    </div>
    <p className="text-xs font-semibold">We take up Annual Maintenance Contracts.</p>
    <p className="list-item text-xs py-1">Reliable Maintenance: With our Annual Maintenance Contracts (AMC), you can rely on us to provide regular and proactive maintenance services for your equipment or systems. We ensure that your assets are well-maintained, minimizing downtime and maximizing their lifespan.</p>
    <p className="list-item text-xs mb-2">Peace of Mind: By opting for an AMC, you gain peace of mind knowing that your equipment or systems are in the hands of professionals. Our team of experts will handle all maintenance tasks, including inspections, repairs, and replacements.</p>
    
</div>


</div>








        <Footer />
      
    </div>
  );
}

export default ServicesPage;
