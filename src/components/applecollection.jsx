
import iphone16 from '../assets/iphone16.png'
import logapple from '../assets/applelogo.png'
import maclap from '../assets/maclap.jpg'
import ipad from '../assets/ipadair.jpeg'
import airpot from '../assets/airpoispro.png'
import applewatch from '../assets/applewatch.png'
import macbookair from '../assets//macbook.png'
function Macapple()
{

    return (
        
        <div>

            <div className='p-2 flex justify-center items-center gap-2 flex-wrap  md:grid md:grid-cols-2 md:p-4 md:gap-3'>

                <div className=' min-w-full h-fit md:w-60 text-center py-10  bg-gradient-to-tr from-white to-blue-50 flex flex-col justify-center items-center'>
                    <div>
                    <h1 className='text-3xl font-bold'>MacBook Air</h1>
                    <p className=' text-lg'>Sky blue colour.</p>
                        <p className=' text-lg'>Sky high performance with M4.</p>
                        </div>
                    <div className='py-4 flex justify-center gap-3'>
                        <button className='bg-blue-700 text-sm px-4 py-2 rounded-full text-white hover:bg-blue-600'>Learn more</button>
                        <button className='bg-white text-sm px-4 py-2 rounded-full text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white'>Buy</button>
                    </div>
                    
                    <img src={iphone16} alt="" className='w-60 h-60 py-2
                    max-w-xs drop-shadow-2xl rounded-xl' />
                    <div>
                        <h2 class="text-lg font-bold"><span class="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Built for </span>
                        <span class="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Apple Intelligence.</span> </h2>
                    </div>
                </div>
 
                <div className='min-w-full h-fit md:w-60 bg-black text-center border text-white py-10 border-blue-600 flex flex-col justify-center items-center'>
                    <div>
                    <h1 className='text-3xl font-bold'>Mac</h1>
                    <p className=' text-lg'>Unbelivably thin.Incredibly powerful.</p>
                        </div>
                    <div className='py-4 flex justify-center gap-3'>
                        <button className='bg-blue-700 text-sm px-4 py-2 rounded-full text-white hover:bg-blue-600'>Learn more</button>
                        <button className='bg-white text-sm px-4 py-2 rounded-full text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white'>Buy</button>
                    </div>
                    <img src={maclap} alt="" className='w-96 h-60 py-2' />
                    <div className='h-3'>
                        <h2 class="text-lg font-bold"><span class="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Built for </span>
                        <span class="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Apple Intelligence.</span> </h2>
                    </div>
                </div>

                
                <div className=' min-w-full h-fit text-center py-10 flex flex-col justify-center items-center'>
                    <div>
                        <h1 className='text-3xl font-bold'>iPad
                        <span className='bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent'>air</span></h1>
                    <p className=' text-lg'>Now supercharged by the M3 chip.</p>
                        </div>
                    <div className='py-4 flex justify-center gap-3'>
                        <button className='bg-blue-700 text-sm px-4 py-2 rounded-full text-white hover:bg-blue-600'>Learn more</button>
                        <button className='bg-white text-sm px-4 py-2 rounded-full text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white'>Buy</button>
                    </div>
                    <img src={ipad} alt="" className=' h-60 py-2' />
                    <div>
                        <h2 class="text-lg font-bold"><span class="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Built for </span>
                        <span class="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Apple Intelligence.</span> </h2>
                    </div>
                </div>
 
                <div className=' min-w-full h-fit bg-gray-100 text-center text-black py-10 flex flex-col justify-center items-center'>
                    <div>
                        <div className='flex justify-center items-center'>
                            <img src={logapple} alt="" className='w-10' />
                            <div>
                                <h1 className='text-2xl font-bold'>WATCH</h1>
                                <p className='text-sm'>SERIES10</p>
                                </div>
                        </div>
                    
                    <p className=' text-lg'>Thinstant classic.</p>
                        </div>
                    <div className='py-4 flex justify-center gap-3'>
                        <button className='bg-blue-700 text-sm px-4 py-2 rounded-full text-white hover:bg-blue-600'>Learn more</button>
                        <button className='bg-white text-sm px-4 py-2 rounded-full text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white'>Buy</button>
                    </div>
                    <img src={applewatch} alt="" className='w-52 h-60 py-2' />
                    <div className='h-3'>
                        <h2 class="text-lg font-bold"><span class="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Built for </span>
                        <span class="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Apple Intelligence.</span> </h2>
                    </div>
                </div>

                
                <div className=' min-w-full h-fit text-center  py-10 flex flex-col justify-center items-center'>
                    <div>
                    <h1 className='text-3xl font-bold'>MacBook Air</h1>
                    <p className=' text-lg'>Sky blue colour.</p>
                        <p className=' text-lg'>Sky high performance with M4.</p>
                        </div>
                    <div className='py-4 flex justify-center gap-3'>
                        <button className='bg-blue-700 text-sm px-4 py-2 rounded-full text-white hover:bg-blue-600'>Learn more</button>
                        <button className='bg-white text-sm px-4 py-2 rounded-full text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white'>Buy</button>
                    </div>
                        <img src={macbookair} alt="" className=' h-60 py-2' />
                    
                    <div>
                        <h2 class="text-lg font-bold"><span class="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Built for </span>
                        <span class="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Apple Intelligence.</span> </h2>
                    </div>
                </div>
 
                
                <div className=' min-w-full h-fit bg-slate-100 text-center text-black py-10 flex flex-col justify-center items-center'>
                    <div>
                        <div className='flex justify-center items-center'>
                            <img src={logapple} alt="" className='w-10' />
                            
                                <h1 className='text-2xl font-bold'>Trade In</h1>
                        </div>
                    
                    <p className=' text-lg'>Upgrade and save.it's that easy.</p>
                        </div>
                    <div className='py-4 flex justify-center gap-3'>
                        <button className='bg-white text-sm px-4 py-2 rounded-full text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white'>Get your estimate</button>
                    </div>
                    <img src={airpot} alt="" className='w-52 h-60 py-2' />
                    <div className='h-3'>
                        <h2 class="text-lg font-bold"><span class="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Built for </span>
                        <span class="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Apple Intelligence.</span> </h2>
                    </div>
                </div>

            </div>
        </div>
    )


}
export default Macapple