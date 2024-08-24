import React from 'react'

const Campaign = () => {
  return (
    <div id='campaign' className="relative py-[10rem] flex md:flex-row flex-col-reverse gap-5 md:pl-[200px] items-center bg-white">
        <div className='w-[50%] md:w-[367px]'>
            <h1 className='text-[4rem] md:text-[1.8rem] font-bold pb-5 lexend mb-10 md:mb-0'>
                Right Time, Effective Messages
            </h1>
            <p className='text-4xl font-medium md:font-bold md:text-sm'> Fowardin memungkinkan Anda untuk merencanakan pengiriman iklan yang tepat sasaran. Manfaatkan fitur Campaign kami untuk mengoptimalkan pesan iklan Anda sehingga hasilnya lebih akurat dan sukses. Dengan Fowardin, setiap pesan iklan memiliki dampak yang lebih besar.
            </p>
        </div>
        <div className=''>
            <img src="img3.svg" alt="Image 3"  className='w-[1000px] md:w-[500px]'/>
        </div>
    </div>
  )
}

export default Campaign