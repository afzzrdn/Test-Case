import React from 'react'

const Sidebar = () => {
  return (
    <div className='h-[205px] w-[120px] fixed hidden md:flex gap-3 top-[250px] mx-[30px] items-center z-10'>
        <div className='h-[200px] w-[2px] bg-[#00000028]'></div>
        <div>
            <p className=' font-semibold text-[#000000] text-sm pb-1'>Get Started</p>
            <p className=' font-semibold text-[#00000060] text-sm pb-1'>Broadcast</p>
            <p className=' font-semibold text-[#00000060] text-sm pb-1'>Campaign</p>
            <p className=' font-semibold text-[#00000060] text-sm pb-1'>Auto Reply</p>
            <p className=' font-semibold text-[#00000060] text-sm pb-1'>Opportunity</p>
            <p className=' font-semibold text-[#00000060] text-sm pb-1'>Pricing</p>
            <p className=' font-semibold text-[#00000060] text-sm pb-1'>FAQ</p>
            <p className=' font-semibold text-[#00000060] text-sm pb-1'>Contact Us</p>
        </div>
    </div>
  )
}

export default Sidebar