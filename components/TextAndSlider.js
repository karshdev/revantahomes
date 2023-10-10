import React from 'react'

const TextAndSlider = () => {
  return (
    <div className='flex gap-20 justify-center items-center '>
     <div class="w-[598px] h-48 flex-col justify-start items-start gap-7 inline-flex">
<div class="w-[598px] text-neutral-800 text-[56px] font-normal font-['Tenor Sans'] leading-[62px]">Our Home Defines Us</div>
<div class="w-[540px] text-neutral-800 text-[22px] font-normal font-['Manrope'] leading-[34px]">RevaaSnta Homes is a project by Rishabhdeo Builders & Developers. They build homes with timeless designs. Thet build homes which are beyond your dreams.</div>
</div>
      <div className='flex gap-10'>
        <img src='/rectangle.png' className="w-[90px] h-[90px]  rotate-180 border-2 border-yellow-600"/>
        <img src='/rectangle.png' className="w-[90px] h-[90px]  rotate-180 border-2 border-yellow-600"/>
        <img src='/rectangle.png' className="w-[90px] h-[90px]  rotate-180 border-2 border-yellow-600"/>
      </div>
    </div>
  )
}

export default TextAndSlider
