"use client"
import React, { useState } from 'react'

const Section2Images = () => {
    const[src,setSrc]=useState("/1.png")
    console.log("src",src);
  return (
    <div className='h-[50%] w-[40%] flex flex-col gap-3'>
        <img src={`${src}`} className='w-[100%] h-[100%] object-cover'  /> 
        <div className='flex gap-4 items-center justify-center'>
        <img src='/1.png' className='w-[100px] h-[100px] hover:border-2 hover:border-yellow-600'  onMouseEnter={()=>setSrc("/1.png")}/> 
        <img src='/2.png' className='w-[100px] h-[100px] hover:border-2 hover:border-yellow-600'  onMouseEnter={()=>setSrc("/2.png")}/> 
        <img src='/3.png' className='w-[100px] h-[100px] hover:border-2 hover:border-yellow-600'  onMouseEnter={()=>setSrc("/3.png")}/> 
        <img src='/4.png' className='w-[100px] h-[100px] hover:border-2 hover:border-yellow-600'  onMouseEnter={()=>setSrc("/4.png")}/> 
        </div>
      
    </div>
  )
}

export default Section2Images
