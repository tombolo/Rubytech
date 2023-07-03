import Header from "../components/Header";
import Footer from "../components/Footer";
import Blog1 from '../components/Myimages/blog1.jpg';
import Blog2 from '../components/Myimages/blog2.jpg';
import Blog3 from '../components/Myimages/blog3.jpg';
import Blog4 from '../components/Myimages/blog4.jpg';
import Blog5 from '../components/Myimages/blog5.jpg';
import Blog6 from '../components/Myimages/blog6.jpg';
import Banner2 from '../components/Myimages/banner2.jpg';
import Image from 'next/image';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectItems, selectTotal, setBasket } from "../slices/basketSlice";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router';

function Blogpage() {


const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();
  const router = useRouter();


useEffect(() => {
  const storedBasketItems = localStorage.getItem("basketItems");
  const storedBasket = storedBasketItems ? JSON.parse(storedBasketItems) : [];
  dispatch(setBasket(storedBasket));
}, [dispatch]);

useEffect(() => {
  localStorage.setItem("basketItems", JSON.stringify(items));
}, [items]);


  return (
    <div>
        <Header />


        <div className="relative group w-1000 h-500 mt-16">
            <Image src={Banner2} className="w-full h-full inset-0 opacity-70" alt="Banner" />
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="lg:text-4xl text-2xl mt-16 shadow-lg font-bold">BLOGS</h1>
            </div>
            <div className="absolute inset-0 transition-opacity duration-300"></div>
        </div>

        

        <div className="-mt-20 md:-mt-60 flex md:flex-row flex-col items-center justify-evenly">

                    <div className="border-2 border-gray-100 m-3 w-80 bg-white z-30">

                        <div className="relative group">
                        <Image src={Blog1} className="w-full h-full" alt="Banner" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                        </div>

                            <div className="mb-3 m-2">
                            <h1 className="text-sm font-bold m-2">What is activated carbon charcoal, and how does it work?</h1>
                            <p className="text-xs line-clamp-4 m-2">Most filtration systems to purify water contain at least one stage of activated carbon filtration. 
                                Surely you must have heard of activated carbon filters, but in this article, we will provide the details 
                                of the importance of carbon charcoal in making water free of impurities. Activated carbon filters are 
                                standard water purification systems in homes, and buildings and it is used to filter pollutants such as 
                                chlorine, organic solvents, herbicides, pesticides, and water radon. Many people believe that these filters 
                                make water healthier and more natural. Filters are often used by people who are health conscious and who want to prevent 
                                granulated particles or unpleasant odors and flavors from the water. You should know that activated carbon filters do not remove bacteria, 
                                viruses or fungi, or fungal spores from water.</p>
                            </div>
                    </div>




                    <div className="border-2 border-gray-100 m-3 w-80 bg-white z-30">

                        <div className="relative group">
                        <Image src={Blog2} className="w-full h-full" alt="Banner" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                        </div>

                            <div className="mb-3 m-2">
                            <h1 className="text-sm font-bold m-2">5 Harmful Effects of High Levels of Iron in Water</h1>
                            <p className="text-xs line-clamp-4 m-2">While a low level of iron isnt harmful in and of itself, iron in drinking water is classified as a secondary contaminant according to the EPA. 
                            This is because iron often carries with it bacteria that feed off the iron to survive. These tiny organisms can be harmful when digested. In addition, if your iron levels are too high, 
                            serious health effects can develop, including iron overload. Iron overload is caused by a mutation in the gene that digests iron; this mutation affects around one million people in the United States.
                            Iron overload can lead to hemochromatosis, which can lead to liver, heart, and pancreatic damage, as well as diabetes. Early symptoms include fatigue, weight loss, and joint pain. 
                            Excessive iron is never recommended for digestion; it can lead to stomach problems, nausea, vomiting, and other issues.</p>
                            </div>
                    </div>


                    <div className="border-2 border-gray-100 m-3 w-80 bg-white z-30">

                        <div className="relative group">
                        <Image src={Blog3} className="w-full h-full" alt="Banner" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                        </div>

                            <div className="mb-3 m-2">
                            <h1 className="text-sm font-bold m-2">What Is A Water Softener?</h1>
                            <p className="text-xs line-clamp-4 m-2">Water Softener removes hardness-causing calcium and magnesium minerals from your water through a process called ion exchange. 
                            A water softener addresses one of the most prevalent and devastating water problems: hard water. Hard water wreaks havoc on the modern home. Scale builds up in your pipes, 
                            clogging them and decreasing water pressure. Scale dramatically shortens the lifespan of appliances like dishwashers, coffee makers, and ice machines. Hard water destroys hot water appliances. 
                            The higher the temperature of the water, the more calcium and magnesium will solidify and harden into solid deposits inside your hot water heater.
                            Without a water softener, laundry demands extra detergent to prevent it from looking dingy. Dishes will come out of your dishwasher streaked and stained. 
                            Filmy scum builds up on your shower curtains and your soap and shampoo will not lather. Bathing in hard water leaves your skin itchy and dry and your hair lifeless and sticky. 
                            The sheer amount of time, energy, and money required to clean up the detrimental side effects of hard water are dizzying. A water softener is a solution to the scourge of water hardness.</p>
                            </div>
                    </div>


                </div>

                 {/*second row */}

                <div className=" mt-2 flex md:flex-row flex-col items-center justify-evenly">


              

                    <div className="border-2 border-gray-100 m-3 w-80">

                        <div className="relative group">
                        <Image src={Blog4} className="w-full h-full" alt="Banner" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                        </div>

                            <div className="mb-3 m-2">
                            <h1 className="text-sm font-bold m-2">Sand Filter</h1>
                            <p className="text-xs line-clamp-4 m-2">Sand Filter Puritech filtration equipment features an excellent design with high-quality components to offer high performance. 
                            Puritech systems are designed for the longest life span with minimum energy consumption. Experience greater savings with lower maintenance and operation costs when you install Puritech filtration equipment.</p>
                            </div>
                    </div>


                    <div className="border-2 border-gray-100 m-3 w-80">

                        <div className="relative group">
                        <Image src={Blog5} className="w-full h-full" alt="Banner" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                        </div>

                            <div className="mb-3 m-2">
                            <h1 className="text-sm font-bold m-2">THE UV WATER PURIFICATION SOLUTION</h1>
                            <p className="text-xs line-clamp-4 m-2">Concerns about the quality of drinking water are not unfounded, as municipal water suppliers face various challenges in ensuring the safety 
                            of public water sources. Despite their best efforts, contaminants can find their way into aquifers and springs, and even after undergoing treatment, aging infrastructure can introduce 
                            further contamination. In South Africa, for instance, there are over 60,000 chemicals in use, but only 91 contaminants are regulated under the Safe Drinking Water Act. This means that many 
                            potential pollutants may not be effectively monitored or controlled. To maintain the quality of tap water in the country over the next decade, an estimated R4,154 billion is projected to be necessary.</p>
                            </div>
                    </div>

                    <div className="border-2 border-gray-100 m-3 w-80">

                        <div className="relative group">
                        <Image src={Blog6} className="w-full h-full" alt="Banner" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                        </div>

                            <div className="mb-3 m-2">
                            <h1 className="text-sm font-bold m-2">Importance Of Drinking Water</h1>
                            <p className="text-xs line-clamp-4 m-2">Water is vital for maintaining good health and plays a crucial role in the proper functioning of the human body. 
                            With our bodies consisting of approximately 60% water, it is essential to replenish our fluid levels regularly. While the commonly recommended guideline of 
                            drinking eight 8-ounce glasses of water per day (the 8x8 rule) lacks robust scientific evidence, the importance of staying hydrated cannot be overstated.</p>
                            </div>
                    </div>

        </div>


        <Footer />
      
    </div>
  );
}

export default Blogpage
