import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <div className='flex p-4 justify-between items-center' >
      <div className='flex gap-20 items-center justify-center ml-[100px] '>
     <div>
      <img src='/LOGO.png' className='w-[98px] h-[92px]'/>
     </div>
     
<div className='flex gap-14 '>
  <Link href="/" className="text-gray-600 text-base font-[400px] font-['Manrope'] leading-[14px]">Home</Link>
  <Link  href="/" className="text-gray-600 text-base font-[400px] font-['Manrope'] leading-[14px]">About US</Link>
  </div>  
  </div>
  <div className='flex gap-10 mr-[100px] '>
    <div className="w-[190px] h-10 px-[15px] py-[13px] bg-gray-600 border border-white justify-center items-center gap-[10px] inline-flex">
      <img src='download.svg' />
     <a
          className="text-white text-sm font-[400px]font-['Manrope'] leading-[14px] "
          href="/brochure.pdf"
          download
       >
        Download Brochure
       </a>
       </div>
       <div className='w-[119px] h-10 px-1 py-[9px] justify-start items-center gap-[13px] inline-flex'>
        <img src='/language.svg' />
        <div className='flex gap-3 items-center justify-center'>
          <span className="text-gray-600 text-base font-[400px] font-['Manrope'] leading-[14px] cursor-pointer">English</span>
          <img src='/down.svg' />
        </div>
       </div>
  </div>

    </div>
  )
}

export default Navigation
