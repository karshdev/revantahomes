"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Navigation =  () => {
  const { data: session } = useSession();
 
  
  return (
    <div className='position relative flex p-4  items-center justify-between' >
      <div className='flex justify-center items-center gap-20 md:gap-15 '>
     <div>
      <img src='/LOGO.png' className='w-[80px] h-[72px] sm:w-[98px] sm:h-[92px]'/>
     </div>
<div className=' hidden sm:flex sm:gap-14 sm:visible  '>
  <Link href="/" className="text-gray-600 text-base font-[400px] font-['Manrope'] leading-[14px] ">Home</Link>
  <Link  href="/" className="text-gray-600 text-base font-[400px] font-['Manrope'] leading-[14px] ">About Us</Link>
  {session?.user?.role==="admin" && <a  href="/admin/leads" className="text-gray-600 text-base font-[400px] font-['Manrope'] leading-[14px]">Leads</a>}
  </div>  
  </div>
  <div className='flex gap-10 '>

    <div className="w-[max-content] h-10 px-[15px] py-[13px] bg-gray-600 border border-white justify-center items-center gap-[10px] inline-flex">

      <img src='download.svg' />
      
     <a
          className="text-white text-sm font-[400px] font-['Manrope'] leading-[14px]"
          href="/brochure.pdf"
          download
       >
    Download Brochure
       </a>
       </div>
       <div className='w-[119px] h-10 px-1 py-[9px] justify-start items-center gap-[13px] inline-flex'>
        <img src='/language.svg' />
        <button className='flex gap-3 items-center justify-center'>
          <span className="text-gray-600 text-base font-[400px] font-['Manrope'] leading-[14px] cursor-pointer">English</span>
          <img src='/down.svg' />
        </button>
       </div>
  </div>

    </div>
  )
}

export default Navigation
