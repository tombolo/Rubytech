
import React, { useEffect, useState } from 'react';



function Services() {
  const services = [
    {
      title: 'Cleaning In Place',
      description: 'We offer CIP Services for RO Membranes.',
    },
    {
      title: 'Replacement',
      description: 'Membrane, Media, Cartridges Replacement.',
    },
    {
      title: 'Pump Repair',
      description: 'We can get your pump repaired, Cartridges Replacement..',
    },
    {
      title: 'AMC',
      description: 'We take up Annual Maintenance Contracts.',
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  

  return (
    <div className="lg:mt-48 shadow-md m-7 bg-gray-300 text-center rounded-sm"
   
      >

      <h2 className="text-3xl font-bold p-2">Our Services</h2>
      <div className="flex flex-wrap justify-center my-2">
        {services.map((service, index) => (
          <div
            key={index}
            className={`w-full md:w-1/2 lg:w-1/4 mb-3 p-2 ${
              isVisible ? 'opacity-0' : 'opacity-1'
            } transform transition-opacity duration-1000`}
            style={{
              animationDelay: `${index * 200}ms`,
              animationFillMode: 'forwards',
              animationName: isVisible ? 'fadeIn' : '',
            }}


            

          >
            <div className="bg-white rounded-lg shadow p-3">
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Services;
