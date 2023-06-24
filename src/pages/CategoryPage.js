import { useEffect } from 'react';
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AdjustmentsIcon, ScaleIcon, FilterIcon, GlobeAltIcon, CogIcon, BeakerIcon } from '@heroicons/react/solid';
import AOS from 'aos';
import 'aos/dist/aos.css';

function CategoryPage() {

useEffect(() => {
    AOS.init(); // Initialize AOS
}, []);
  return (
    <div>

    <Header />

    <div className="container mx-auto py-8 mt-16 lg:mt-32">
      
      <div
         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:flex lg:flex-row lg:items-center lg:justify-between">
        {/* Example category item */}
        <div 
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="false"
        data-aos-delay="300"
        data-aos-anchor-placement="center-bottom"
        data-aos-easing="ease-in-out"
        className="bg-white p-4 rounded shadow flex flex-col items-center">
          <AdjustmentsIcon className="h-8 w-8 lg:h-12 lg:w-12 text-blue-500" />
          <h2 className="text-sm font-bold mb-2">Filtration Systems</h2>
          <p className="text-xs">Filtration systems in water treatment are essential processes that remove impurities and particles from water to make it safe for consumption or other uses.
           These systems typically consist of various types of filters, such as activated carbon, sand, or multimedia filters. Water passes through these filters, trapping and removing contaminants 
           such as sediments, organic matter, chemicals, and microorganisms. The filtered water then undergoes disinfection or additional treatment steps to ensure its quality meets the desired standards. 
           
         </p>
        </div>

        {/* Example category item */}
        <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="false"
        data-aos-delay="300"
        data-aos-anchor-placement="center-bottom"
        data-aos-easing="ease-in-out" className="bg-white p-4 rounded shadow flex flex-col items-center">
          <ScaleIcon className="h-8 w-8 lg:h-12 lg:w-12 text-red-500" />
          <h2 className="text-sm font-bold mb-2">Water Softeners</h2>
          <p className="text-xs">Water softeners are devices used in water treatment to remove minerals like calcium and magnesium ions,
           which cause water hardness. They work through a process called ion exchange, where resin beads in the softener trap the hard minerals and replace them with sodium or potassium ions. 
           This results in softened water that has several benefits, including reduced scale buildup in pipes and appliances, improved lathering of soaps and detergents, and softer-feeling skin and hair.</p>
        </div>

        {/* Example category item */}
        <div data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="false"
        data-aos-delay="300"
        data-aos-anchor-placement="center-bottom"
        data-aos-easing="ease-in-out" className="bg-white p-4 rounded shadow flex flex-col items-center">
          <FilterIcon className="h-8 w-8 lg:h-12 lg:w-12 text-green-500" />
          <h2 className="text-sm font-bold mb-2">Reverse Osmosis</h2>
          <p className="text-xs">Reverse osmosis (RO) is a water treatment process that involves the removal of impurities from water by applying pressure to force it 
          through a semi-permeable membrane. The membrane allows water molecules to pass through while blocking larger particles, ions, and contaminants, effectively producing purified water. 
          Reverse osmosis is commonly used in various applications, including drinking water purification, desalination of seawater, and industrial water treatment, providing a reliable method for obtaining clean and high-quality water.</p>
        </div>
      </div>



      <div data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="false"
        data-aos-delay="100"
        data-aos-anchor-placement="center-bottom"
        data-aos-easing="ease-in-out" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:flex lg:flex-row lg:items-center lg:justify-between mt-9">
        {/* Example category item */}
        <div className="bg-white p-4 rounded shadow flex flex-col items-center">
        <GlobeAltIcon className="h-8 w-8 lg:h-12 lg:w-12 text-yellow-500" />
          <h2 className="text-sm font-bold mb-2">UV Sterilizers</h2>
          <p className="text-xs">UV sterilizers in water treatment utilize ultraviolet (UV) light to eliminate or deactivate harmful microorganisms, 
          including bacteria, viruses, and parasites present in water. These devices typically consist of a UV lamp that emits UV-C light, which has a 
          germicidal effect. When water flows through the sterilizer, the microorganisms in the water are exposed to the UV-C light, disrupting their DNA 
          and rendering them unable to reproduce and cause infection or illness.</p>
        </div>

        {/* Example category item */}
        <div data-aos="fade-up"
        data-aos-duration="800"
        data-aos-once="false"
        data-aos-delay="100"
        data-aos-anchor-placement="center-bottom"
        data-aos-easing="ease-in-out" className="bg-white p-4 rounded shadow flex flex-col items-center">
        <CogIcon className="h-8 w-8 lg:h-12 lg:w-12 text-purple-500" />
          <h2 className="text-sm font-bold mb-2">Treatment Plants</h2>
          <p className="text-xs">Treatment plants in water treatment are facilities designed to purify and clean water from various sources, 
          such as rivers, lakes, or groundwater, to make it safe for human consumption and other uses. These plants employ a combination of physical, chemical, 
          and biological processes to remove impurities and contaminants from the water. The treatment process typically involves steps such as screening to remove large debris, 
          sedimentation to settle out suspended particles, filtration to remove finer particles, disinfection to kill harmful microorganisms.</p>
        </div>

        {/* Example category item */}
        <div data-aos="fade-up"
        data-aos-duration="800"
        data-aos-once="false"
        data-aos-delay="100"
        data-aos-anchor-placement="center-bottom"
        data-aos-easing="ease-in-out" className="bg-white p-4 rounded shadow flex flex-col items-center">
        <BeakerIcon className="h-8 w-8 lg:h-12 lg:w-12 text-pink-500" />
          <h2 className="text-sm font-bold mb-2">Chemical Dosing</h2>
          <p className="text-xs">Chemical dosing in water treatment refers to the process of adding specific chemicals to water in order to remove impurities, 
          improve water quality, and ensure its safety for various purposes. The dosing of chemicals such as coagulants, flocculants, disinfectants, pH adjusters, 
          and corrosion inhibitors helps to address different water treatment objectives. Coagulants aid in the removal of suspended particles by causing them to clump together, 
          while flocculants enhance the formation of larger particles for easier removal.
</p>
        </div>
      </div>


    </div>


    <Footer />


    </div>
  );
}

export default CategoryPage;