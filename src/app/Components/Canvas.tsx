import React from 'react'

const Canvas = () => {
    return (
        <div className='hidden md:flex h-full w-full'>
            <div className='absolute bg-gradient-to-tl from-[#fff] via-transparent to-transparent w-[1000px] h-[1000px] top-[-500px] left-[100px] rotate-[-45deg] rounded-[140px]'></div>
            <div className='absolute bg-gradient-to-tl from-[#fff] via-transparent to-transparent w-[1000px] h-[1000px] top-[-500px] left-[-350px] rotate-[-45deg] rounded-[140px]'></div>
            <div className='absolute bg-gradient-to-tl from-[#fff] via-transparent to-transparent w-[1000px] h-[1000px] top-[-500px] left-[-850px] rotate-[-45deg] rounded-[140px] shadow-lg'></div>
           
        </div>
    )
}

export default Canvas