
function Postcard({sty,imgs,imgsty,headpara,headlogo,head1,para1,para2,parac,but1,but2,textc,bgc})
{
    return (
        <div>
            <div className={` ${bgc} min-w-full h-fit md:w-[360px] md:h-[500px] text-center py-10   flex flex-col justify-center items-center`}>
                <div className="text-center">
                    <div className='flex justify-center items-center'>
                        <img src={headlogo} alt="" className={`w-10 ${sty}`} />
                        <div>
                            <h1 className={`text-3xl font-bold ${textc}`}>{ head1 }</h1>
                            <p className='text-sm'>{ headpara }</p>
                            </div>
                    </div>
                    <div className="text-center justify-items-center w-72">
                    <p className={`text-lg ${parac}`}>{ para1 }</p>
                    <p className={`text-lg ${parac}`}>{para2}</p>
                    </div>
                    </div>
                <div className='py-4 flex justify-center gap-3'>
                    <button className='bg-blue-700 text-sm px-4 py-2 rounded-full text-white hover:bg-blue-600'>{ but1 }</button>
                    <button className={`bg-white text-sm px-4 py-2 rounded-full text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white ${sty}`}>{ but2 }</button>
                </div>
                                
                                <img src={imgs} alt="" className={` h-60 py-2
                                max-w-xs drop-shadow-2xl rounded-xl ${imgsty}`} />
                                <div>
                                    <h2 class="text-lg font-bold"><span class="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Built for </span>
                                    <span class="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Apple Intelligence.</span> </h2>
                                </div>
                            </div>
        </div>
    )
}

export default Postcard