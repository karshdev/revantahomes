"use client"
import React, { useState } from 'react'

const TextAndSlider = () => {
  const[slideIndex,setslideindex]=useState("/bg1.png")
  return (
    <div className='flex flex-col gap-5'>
    <div className='flex gap-20 justify-center items-center '>
     <div className="w-[598px] h-48 flex-col justify-start items-start gap-7 inline-flex">
<div className="w-[598px] text-neutral-800 text-[56px] font-normal font-['Tenor Sans'] leading-[62px]">Our Home Defines Us</div>
<div className="w-[540px] text-neutral-800 text-[22px] font-normal font-['Manrope'] leading-[34px]">RevaaSnta Homes is a project by Rishabhdeo Builders & Developers. They build homes with timeless designs. Thet build homes which are beyond your dreams.</div>
</div>
      <div className='flex gap-10'>
        <img src='/rect1.png' className="w-[90px] h-[90px]  hover:scale-[1.1] border-2 border-yellow-600 transition-all" onMouseEnter={()=>  setslideindex("/bg1.png")}/>
        <img src='/rect2.png' className="w-[90px] h-[90px]   hover:scale-[1.1] border-2 border-yellow-600 transition-all" onMouseEnter={()=>  setslideindex("/bg2.png")}/>
        <img src='/rect3.png' className="w-[90px] h-[90px]   hover:scale-[1.1] border-2 border-yellow-600 transition-all" onMouseEnter={()=>  setslideindex("/bg3.png")}/>
      </div>
    </div>
    <img src={`${slideIndex}`}  className='w-[1500px] h-[450px] transition-all'/>
    </div>
  )

  }
export default TextAndSlider
