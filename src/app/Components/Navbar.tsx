"use client"
import { signIn } from 'next-auth/react'
import React, { useState } from 'react'

const Navbar = () => {
  const [isNavMenuVisible, setNavMenuVisible] = useState(false);

  const toggleNavMenu = () => {
    setNavMenuVisible(!isNavMenuVisible);
  };
  return (
    <div className='h-full w-full md:flex justify-between md:justify-center md:py-[20px] bg-[#ECF2FA]'>
        <div className="bg-[#fff] w-full md:w-[700px] h-full md:h-[61px] py-3 px-14 md:py-[10px] md:px-[10px] gap-[52px] rounded-[8px] flex flex-col md:flex-row relative md:items-center justify-between md:justify-around">
            <div className='flex flex-row justify-between p-5'>
              <img src="Logo.svg" alt="" className='w-[350px] md:w-[150px]'/>
              <button onClick={toggleNavMenu}>
                <img src="menu.svg" alt="" className='md:hidden p-4 w-[85px]'/>
              </button>   
            </div>
                
            <div className={`navmenu flex flex-col md:flex-row items-center gap-10 md:gap-5 mb-5 md:mb-0 ${isNavMenuVisible ? '' : 'hidden'} md:flex`}>
              <div className=" md:text-[#3366FF] flex flex-row gap-3 items-center">
                  <p className="md:font-normal font-bold text-[2rem] md:text-[14px]">Features</p>
                  <img src="caret-down.svg" alt="" className='w-[20px] md:w-[10px]'/>
              </div>
              <p className="text-[2rem] font-bold md:font-normal md:text-[14px]">Pricing</p>
              <p className="text-[2rem] font-bold md:font-normal md:text-[14px]">Demo</p>
              <p className="text-[2rem] font-bold md:font-normal md:text-[14px]">Blog</p>
              <button 
              className="md:font-normal font-bold text-[2rem] px-[10rem] md:text-[14px] bg-[#3366FF] text-white gap-[10px] rounded-lg md:rounded-[5px] md:px-[20px] py-[10px]"
              onClick={() => signIn()}
              >Sign In</button>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar