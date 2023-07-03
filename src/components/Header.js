import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { signIn, signOut } from "next-auth/react";
import { selectItems } from "../slices/basketSlice";
import rubytech1 from './Myimages/rubytech1.png';
import Image from "next/image";
import { MyShop } from './MyShop';
import Product from './Product';

function Header({products}) {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Adjust the breakpoint as needed
    };

    // Call handleResize on initial render
    handleResize();

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen((prevValue) => !prevValue);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    
    // Perform the search logic here based on the searchQuery state
    // For example, you can filter the products based on the searchQuery
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    // Pass the filtered products to the search results page
    router.push({
      pathname: "/search",
      query: { query: searchQuery },
      state: { products: filteredProducts },
    });
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white">
      <header>
        {/*top nav*/}
        <div className="flex items-center p-1 py-2">
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <Image
              onClick={() => router.push("/")}
              src={rubytech1}
              width={200}
              height={70}
              objectFit="contain"
              className="cursor-pointer"
            />
          </div>

          {/*search*/}
          <form className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500" onSubmit={handleSearch}>
            <input
              className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 bg-gray-200"
              type="text"
              value={searchQuery}
              onChange={handleSearchInputChange}
              placeholder="Search for products"
            />
            <button type="submit" className="h-12 p-4">
              <SearchIcon className="h-6" />
            </button>
          </form>

          {/*right*/}
          <div className="text-blue-900 flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
            <div onClick={!session ? signIn: undefined} className="cursor-pointer link">
              <p className="hover:underline">
                {session ? `Hello, ${session.user.name}` : "Sign In"}
              </p>
              <p className="font-extrabold md:text-sm">Account & Lists</p>
            </div>

            <div onClick={() => router.push("/order")} className="cursor-pointer link">
              <p>Returns</p>
              <p className="font-extrabold md:text-sm">& Orders</p>
            </div>

            <div onClick={() => router.push("/checkout")} className="relative cursor-pointer link flex items-center">
              <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                {items.length}
              </span>
              <ShoppingCartIcon className="h-10" />
              <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
            </div>
          </div>
        </div>

        {/*bottom nav*/}
        {isSmallScreen && isMenuOpen && (
          <div className="flex flex-col text-center text-white text-sm bg-blue-500 transition-all duration-5000">
            <p className="link border-b border-white p-2" onClick={() => router.push("/")}>
              Home
            </p>
            <p className="link border-b border-white p-2" onClick={() => router.push("/Shop")}>
              Shops
            </p>
            <p className="link border-b border-white p-2" onClick={() => router.push("/Blogpage")}>
              Blog
            </p>
            <p className="link border-b border-white p-2" onClick={() => router.push("/Contact")}>
              Contact Us
            </p>
            <p className="link border-b border-white p-2" onClick={signOut}>
              Logout
            </p>
          </div>
        )}

        <div className={`flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm transition-all duration-2000 ${isMenuOpen ? "menu-open" : ""}`}>
          <p className="link flex items-center" onClick={handleMenuClick}>
            <MenuIcon className="h-6 mr-1" />
            All
          </p>
          {isSmallScreen && !isMenuOpen && (
            <>
              <p className="link hidden" onClick={() => router.push("/")}>
                Home
              </p>
              <p className="link hidden" onClick={() => router.push("/Shop")}>
                Shops
              </p>
              <p className="link hidden" onClick={() => router.push("/Blogpage")}>
                Blog
              </p>
              <p className="link hidden" onClick={() => router.push("/Contact")}>
                Contact Us
              </p>
              <p className="link hidden" onClick={signOut}>
                Logout
              </p>
            </>
          )}
          <p className="link hidden lg:inline-flex" onClick={() => router.push("/")}>Home</p>
          <p className="link hidden lg:inline-flex" onClick={() => router.push("/Shop")}>Shops</p>
          <p className="link hidden lg:inline-flex" onClick={() => router.push("/Blogpage")}>Blog</p>
          <p className="link hidden lg:inline-flex" onClick={() => router.push("/Contact")}>Contact Us</p>
          <div onClick={signOut} className="cursor-pointer link">
              <p className="link hidden lg:inline-flex">
                Logout
              </p>
          </div>
          <p className="text-sm text-yellow-600">
            Up to 20% Discount For Resellers
          </p>
        </div>
      </header>
    </div>
  );
}

export default Header;

