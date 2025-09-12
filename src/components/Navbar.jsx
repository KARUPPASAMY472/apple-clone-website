import { useState } from "react";
import logo from "../assets/applelogo.png";


function Navbar() {
  const navlink = ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPots", "TV & Home", "Entertainment", "Accessories", "Support"]
  const [isSideopen, setSideOpen] = useState(false);

  function Opensidebar()
  {
    setSideOpen(true);
  }
  function Closesidebar()
  {
    setSideOpen(false);

  }
  
  return (
    <div className=" sticky top-0 z-50 w-full">
      <div className=" sticky top-0 z-50 w-full">
          <div className="flex gap-3 items-center p-2 bg-gray-800 text-center text-white">
              <p className="text-sm">Education Store Home</p>  |  <p>Exit</p>

          </div>
      <div className="bg-gray-900  md:justify-between lg:justify-center md:gap:4 lg:gap-10 flex justify-between p-1 items-center">
              <img src={logo} alt="Apple Logo" className="w-10 cursor-pointer" />
        <nav className="hidden md:flex ">
          <ul className="flex justify-center gap-1 md:gap-2 items-center text-gray-400">
            {navlink.map((linnk, index) => (
              <li key={index} className="cursor-pointer">{ linnk }</li>
            ))}
            
          </ul>
        </nav>

        <div className="flex justify-center items-center text-gray-400 gap-10 md:gap-2 xl:gap-10">
                  <i class="fa-solid fa-magnifying-glass  cursor-pointer"></i>
                  <i class="fa-solid fa-bag-shopping cursor-pointer"></i>
                  <i class="fa-solid fa-bars cursor-pointer md:hidden" onClick={Opensidebar}></i>
          </div>
          </div>

          
      </div> 

      {/* Side Navbar */}
        {isSideopen && 
        (
        <nav className="transition duration-500 ease-in-out bg-black top-0 z-50 text-white fixed h-full w-full p-10 ">
          <div><i class="fa-solid fa-xmark float-end text-2xl cursor-pointer" onClick={Closesidebar}></i></div>
          <ul className="flex flex-col justify-center place-items-start gap-6">
            {navlink.map((linnk, index) => (
              <li key={index} className="hover:underline inline-block text-3xl font-bold cursor-pointer">{ linnk }</li>
            ))}
          </ul>
        </nav>
       )}

    </div>
  );
}

export default Navbar;
