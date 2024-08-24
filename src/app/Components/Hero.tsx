import React from 'react'

const Hero = () => {
  return (
    <div className="relative pt-10 flex flex-col-reverse md:flex-row gap-5 md:gap-10 md:pl-[200px]">
        <div className='md:w-[367px] p-16 md:p-0'>
            <h1 className='text-[4rem] md:text-[1.8rem] font-bold pb-5 lexend'>
                Elevate Your <br /> 
                Messaging Efficiency <br /> 
                with Our Innovative <br />
                Admin Tools
            </h1>
            <p className='text-4xl md:text-sm font-medium my-10 md:my-0'> Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis dengan fitur sinkronasi Google Concact. Dapatkan kendali penuh pesan dengan manajemen konten yang praktis.
            </p>
            <div className='bg-black text-white mt-5 px-10 py-5 md:px-5 md:py-3 rounded-lg md:w-[220px] w-[50%]'>
                <p className='text-4xl md:text-sm'>Daftar Sekarang</p>
            </div>
        </div>
        <img src="img1.svg" alt="Image 1" className='w-[1000px] md:w-[500px]'/>
    </div>
  )
}

export default Hero