import React from 'react'

const Section3 = () => {
    return (
        <div
            className=" bg-no-repeat justify-center gap-20 mix-blend-multiply  bg-[#50645C] "
            style={{ backgroundImage: 'url("element3.png")', backgroundPosition: 'center' }}
        >
            <h3 className="p-10 text-center text-white text-[40px] font-normal font-['Tenor Sans'] ">Explore Homes</h3>
            <div className='flex gap-10 items-center justify-center'>
                <div className="w-60 h-[50px] px-[10px] py-2 bg-stone-300 border-2 border-black border-opacity-20 justify-center items-center gap-2 inline-flex">
                    <button className="text-gray-700 text-xl font-bold font-['Manrope'] leading-[14px]">ORCHID</button>
                </div>
                <div className="w-60 h-[50px] px-[10px] py-2 bg-white border justify-center items-center gap-2 inline-flex">
                    <button className="text-gray-600 text-xl font-bold font-['Manrope'] leading-[14px]">TULIP</button>
                </div>
                <div className="w-60 h-[50px] px-[10px] py-2 bg-white border justify-center items-center gap-2 inline-flex">
                    <button className="text-gray-600 text-xl font-bold font-['Manrope'] leading-[14px]">IRIS</button>
                </div>
            </div>
            <div className='flex gap-10 p-8 items-center justify-center'>
                <img className="w-[648px] h-[447px]" src="/rectangle.png" />
                <img className="w-[207px] h-[448px]" src="/668.png" />
                <img className="w-[207px] h-[448px]" src="/672.png" />

            </div>
            <div className='flex  items-center justify-center'>
                <div className="w-[366px] h-[210px] flex-col justify-start items-start gap-6 inline-flex">
                    <div className="text-white text-[44px] font-normal font-['Tenor Sans'] leading-[46px]">ORCHID</div>
                    <div className="w-[366px]"><span className="text-white text-2xl font-normal font-['Manrope'] leading-[35px]">25x50 PLOT AREA (WEST)<br /></span><span className="text-white text-2xl font-bold font-['Manrope'] leading-[35px]">1250 sqft<br />Super Builtup Area <br />2,097 Sqft</span></div>
                </div>
                <div className='flex gap-10'>
                    <img className="w-[275.83px] h-[223.33px]"  src='/673.png' />
                    <img className="w-[275.83px] h-[223.33px]"  src='/669.png' />
                   
                </div>

            </div>
        </div>
    )
}

export default Section3
