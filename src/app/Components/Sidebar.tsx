import React from 'react'

const Sidebar = () => {
  return (
    <div className='h-[205px] w-[120px] fixed hidden md:flex gap-3 top-[250px] mx-[30px] items-center z-10'>
        <div className='h-[200px] w-[2px] bg-[#00000028]'></div>
        <div className='flex flex-col'>
            <a href='#hero' className=' font-semibold text-[#000000] text-sm pb-1'>Get Started</a>
            <a href='#broadcast' className=' font-semibold text-[#00000060] text-sm pb-1'>Broadcast</a>
            <a href='#campaign' className=' font-semibold text-[#00000060] text-sm pb-1'>Campaign</a>
            <a href='#autoreply' className=' font-semibold text-[#00000060] text-sm pb-1'>Auto Reply</a>
            <a href='#opportunity' className=' font-semibold text-[#00000060] text-sm pb-1'>Opportunity</a>
            <a href='#pricing' className=' font-semibold text-[#00000060] text-sm pb-1'>Pricing</a>
            <a href='#faq' className=' font-semibold text-[#00000060] text-sm pb-1'>FAQ</a>
            <a href='#contact' className=' font-semibold text-[#00000060] text-sm pb-1'>Contact Us</a>
        </div>
    </div>
  )
}

export default Sidebar