
import eventapple from "../assets/heroimage.png"

function Appleevent()
{
    return (
        <div>
            <div className="p-2 py-4 bg-gray-800 text-center text-white">
              <p className="text-sm">Get up to 6 months of No Cost EMI◊ plus up to ₹10000 instant cashback‡ on selected products with eligible cards.</p>

            </div>
            
            <div className="  flex-col bg-black flex justify-center items-center ">
                <div className="flex justify-center items-center">
                    <img src={eventapple} alt="" className="w-2/3" />
                    </div>
                    <div className="relative bottom-16 md:bottom-32 flex gap-2 flex-col items-center">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Apple Event</h1>
                        <h2 className="text-white text-2xl">Watch today at 10:30 PM IST</h2>
                        <button className="bg-white py-2 px-4 rounded-full">Add to Calender</button>
                    </div>
                    
                </div>
        </div>
    )
}

export default Appleevent