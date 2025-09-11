import logo from "../assets/applelogo.png";
import ultrawatc from "../assets/ultrawatc.png"

function Ultrawatch()
{
    return (
        <div>
            <div className="flex flex-col justify-center items-center py-6 bg-black text-white">
            <div className="flex flex-col max-w-lg justify-center items-center">
                <div className="flex justify-center items-center">
                        <img src={logo} alt="Apple Logo" className="w-10 cursor-pointer" />
                        <h2 className="text-3xl md:text-5xl"><span className="font-bold">WATCH </span><span>ULTRA 3</span></h2>
                    </div>
                    
                
                <p className="text-center my-4 text-gray-500 text-xl">
                        Multi-day battery life,9 the largest, brightest display on an Apple Watch, advanced metrics, 5G10 and dual-frequency GPS — it’s the ultimate sports and adventure watch.
                    </p>

                    <p className="text-center my-4 text-gray-500 text-xl">Available from 19 Sep</p>
                    <div className="flex justify-center items-center gap-4 text-white">
                        <button className="bg-transparent font-bold border border-white p-4 px-8 rounded-full">Learn more</button>
                        <button className="bg-transparent font-bold border border-white p-4 px-8 rounded-full">Pro-order</button>
                </div>
                </div>
                <img src={ultrawatc} alt="" className="p-6 my-6" />
            </div>
        </div>
    )
}

export default Ultrawatch