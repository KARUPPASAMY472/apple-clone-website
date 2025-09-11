import iphone16 from '../assets/iphone3.png'
import lap from '../assets/lap-1.png'
import lapipad from '../assets/ipad-2.png'
import airpot from '../assets/airpoispro.png'
import brandback from '../assets/brand-back.jpeg'
function Colleciphone()
{
    return (
        <div>

            
            <div className='py-10 text-center flex flex-col justify-center items-center p-2 my-4 bg-slate-100'>

                <div className='p-4 '>
                    <h1 className='text-6xl font-bold'>iPhone</h1>
                    <h3 className='text-2xl'>Meet the iPhone 16 family</h3>
                    <div className='py-4 flex justify-center gap-3'>
                        <button className='bg-blue-700  md:text-xl px-6 py-2 rounded-full text-white hover:bg-blue-600'>Learn more</button>
                        <button className='bg-white md:text-xl px-6 py-2 rounded-full text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white'>Shop iPhone</button>
                    </div>
                    <div>
                    <h2 class="text-2xl font-bold"><span class="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Built for </span>
                        <span class="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Apple Intelligence.</span> </h2>
                </div>
                </div>
                
                <div className='w-full px-10 flex justify-center items-center'>
                    <img src={iphone16} alt="" className='w-fit' />
                </div>
            </div>

            
            <div className=' my-6  h-full'>
                <div className='flex flex-col gap-10 justify-center items-center'>
                    <div className='relative w-60 bg-blue-500 text-white p-4 rounded-3xl'>
                        <h1 className='text-4xl font-bold '>Buy Mac or iPad for college</h1> 
                        <img src={lap} alt="" className='w-32 absolute z-0 -top-7 -right-16' />
                        <img src={lapipad} alt="" className='w-28 absolute z-0 -bottom-1 -right-16' />
                    </div>
                    <div className='text-xl font-bold bg-blue-500 text-white p-2 rounded-3xl'>
                        <p>with education savings</p>
                    </div>
                    <div className='relative w-60 bg-blue-500 text-white p-4 rounded-3xl'>
                        <h1 className='text-4xl font-bold '>Choose AirPods or an eligible accessory
                        </h1>
                        <img src={airpot} alt="" className='w-20 absolute z-0 -bottom-1 -left-16' />
                    </div>
                    <div className='text-center '>
                        <button className='my-4 px-6 p-2 text-blue-600 hover:bg-blue-400 hover:text-white rounded-full border border-blue-600'>Shop</button>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Colleciphone