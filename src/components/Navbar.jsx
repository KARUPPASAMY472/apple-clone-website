import logo from "../assets/applelogo.png";

function Navbar() {
  
  return (
      <div className="sticky top-0 z-50 w-full">
          <div className="flex gap-3 items-center p-2 bg-gray-800 text-center text-white">
              <p className="text-sm">Education Store Home</p>  |  <p>Exit</p>

          </div>
      <div className="bg-gray-900  md:justify-between lg:justify-center md:gap:4 lg:gap-10 flex justify-between p-1 items-center">
              <img src={logo} alt="Apple Logo" className="w-10 cursor-pointer" />
        <div className="hidden md:flex ">
          <ul className="flex justify-center gap-1 md:gap-2 items-center text-gray-400">
            <li className="cursor-pointer">Store</li>
            <li className="cursor-pointer">Mac</li>
            <li className="cursor-pointer">iPad</li>
            <li className="cursor-pointer">iPhone</li>
            <li className="cursor-pointer">Watch</li>
            <li className="cursor-pointer">AirPots</li>
            <li className="cursor-pointer">TV & Home</li>
            <li className="cursor-pointer"> Entertainment</li>
            <li className="cursor-pointer">Accessories</li>
            <li className="cursor-pointer">Support</li>
            
          </ul>
        </div>      
        <div className="flex justify-center items-center text-gray-400 gap-10 md:gap-2 xl:gap-10">
                  <i class="fa-solid fa-magnifying-glass  cursor-pointer"></i>
                  <i class="fa-solid fa-bag-shopping cursor-pointer"></i>
                  <i class="fa-solid fa-bars cursor-pointer md:hidden"></i>
          </div>
          </div>

          
          
    </div>
  );
}

export default Navbar;
