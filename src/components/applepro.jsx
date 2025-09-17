
import airimages from '../assets/airimages.png'

function Applepro({headt,headtcs,parat1,parat2,buttont1,buttont2,images})
{
    return (
        <div>
            <div className='flex flex-col p-10 justify-center items-center bg-gradient-to-t from-white via-white to-slate-200'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className={`text-5xl font-bold ${headtcs}`}>{headt}</h1>
                    <p className='py-2 md:w-[500px] text-center text-lg font-bold bg-gradient-to-r from-gray-500 to-gray-400 bg-clip-text text-transparent '>{parat1}</p>
                    <p className='py-2 w-[350px] text-center text-gray-500 '>{parat2}</p>
                    <div className='py-6 flex justify-center items-center gap-4'>
                    <button className='border border-black px-8 py-4 rounded-full hover:bg-black hover:text-white'>{buttont1}</button>
                    <button className='border border-black px-8 py-4 rounded-full hover:bg-black hover:text-white'>{buttont2}</button>
                    </div>
                </div>
                <div className='w-[75%] lg:h-[800px]'>
                <img src={images} alt="" className=' my-6 w-full h-full ' />
                </div>
            </div>
        </div>
    )

}
export default Applepro