
import { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [machinesSold, setMachinesSold] = useState(100);
  const [message, setMessage] = useState("We sell 500+ machines each and every month");

  useEffect(() => {
    const interval = setInterval(() => {
      setMachinesSold((prevMachinesSold) => {
        let newMachinesSold = prevMachinesSold + 10;
        if (newMachinesSold > 500) {
          newMachinesSold = 100; // Reset count to 100 after reaching 500
          setMessage("We have over 500+ satisfied customers each month");
          setTimeout(() => {
            setMessage("We sell 500+ machines each and every month");
          }, 3000); // Delay the message change for 3 seconds
        }
        return newMachinesSold;
      });
    }, 100); // Set interval duration to 100 milliseconds

    return () => clearInterval(interval);
  }, []);

  const calculateColor = (index) => {
    const percentage = (machinesSold - 100) / (500 - 100);
    const hue = Math.floor((index * 60 + percentage * 60) % 360); // Generate different colors based on index
    return `hsl(${hue}, 100%, 50%)`; // Use non-translucent color
  };

  return (
    <div className="-mt-7 z-40 py-6 sm:-mb-36 relative flex items-center justify-center bg-gray-200">
      <div className="flex space-x-8 sm:space-x-36">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="w-12 md:w-20 lg:w-20 relative"
            // Apply translucent overlay to the enclosing div
          >
            <div className="relative w-full h-32">
              <div
                className="absolute top-0 left-0 w-full h-full rounded-full"
                style={{
                  background: calculateColor(index),
                  transform: `rotate(${((machinesSold - 100) / 4) * 3.6}deg)`,
                }}
              ></div>
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-lg font-bold">
                +{machinesSold}
              </span>
            </div>
          </div>
        ))}

        <div className="absolute sm:text-xl font-bold text-xs pr-14 text-blue-900 ">
          <span className="lg:-mx-20">
            {message}
          </span>
        </div>



      </div>
    </div>
  );
};

export default ProgressBar;
