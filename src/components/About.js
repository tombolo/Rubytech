import { LocationMarkerIcon, PhoneIcon, MailIcon } from '@heroicons/react/solid';


function About() {
  return (
    <div className="flex flex-col mx-0 bg-white rounded-md">

        <div className="m-2 border-b-2 border-yellow-900">
            <h1 className="text-sm font-bold text-blue-900 p-1">About Us</h1>
            <p className="text-xs p-1">Rubytech Limited is a dealer of Cooking/Salad Oil ATMs, Milk ATMs, Water Purifiers, Food Grade Pumps, Automatic Bell Systems, Programmable Logic Controller, and Water Stations based in Buruburu Kenya.</p>
        </div>

        <div className="m-2 border-b-2 border-yellow-900">
            <h1 className="text-xs font-bold text-blue-900 p-1">Quick Links</h1>
            <p className="text-xs p-1">Home</p>
            <p className="text-xs p-1">Our Services</p>
            <p className="text-xs p-1">Electronics</p>
            <p className="text-xs p-1">Buy Again</p>
        </div>

        <div className="m-2 border-b-2 border-yellow-900">
            <h1 className="text-sm font-bold text-blue-900 p-1">Our Location & Contact Details</h1>
            <div className="flex flex-row p-1">
                <LocationMarkerIcon className="h-6 w-6 text-red-500" />
                <p className="text-sm mx-2">Visit us Today in Buruburu near Outering</p>
            </div>

            <div className="flex flex-row p-1">
                <PhoneIcon className="h-6 w-6 text-yellow-500" /> 
                <p className="text-sm mx-2">Phone: +254757351475</p>
            </div>

            <div className="flex flex-row p-1">
                <MailIcon className="h-6 w-6 text-indigo-500" />
                <p className="text-sm mx-2">ndanumumo93@gmail.com</p>
            </div>
        </div>

        <div className="m-2 border-b-2 border-yellow-900">
        <h1 className="text-sm font-bold text-blue-900 p-1">Business Hours</h1>

                    <div className="flex flex-row items-center justify-between p-1">

                        <div>
                            <p className="text-xs p-1 font-bold">Monday - Friday</p>
                            <p className="text-xs p-1">7:00 AM to 6:00 PM</p>
                        </div>
                        <div>
                            <p className="text-xs p-1 font-bold">Saturday - Sunday</p>
                            <p className="text-xs p-1">8:00 AM to 4:00 PM</p>
                        </div>

                    </div>

        </div>

    </div>
  )
}

export default About