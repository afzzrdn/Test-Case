import React from 'react'

const Opportunity = () => {
  return (
    <div className="relative py-[10rem] flex flex-col gap-5 px-auto items-center bg-white">
        <h1 className='text-[4rem] md:text-3xl w-[690px] text-center lexend text-[#3366ff]'>"One Step Closer to More Effective and Connected Communication!"</h1>
        <div className='flex md:flex-row flex-col gap-10'>
            <img src="img5.svg" alt="Image 3"/>
            <div className='w-[638px] pt-[30px]'>
                <div className='flex gap-5 md:flex-row flex-col'>
                    <p className='bg-[#3366ff] py-2 px-7 rounded-xl text-white text-[2rem] text-center md:text-sm'>Bisnis dan Pemasaran</p>
                    <p className='bg-[#fff] py-2 px-7 rounded-xl text-[#3366ff] font-bold md:font-normal text-[2rem] text-center md:text-sm md:border border-[#3366ff]'>Komersial dan Penjualan</p>
                    <p className='bg-[#fff] py-2 px-7 rounded-xl text-[#3366ff] font-bold md:font-normal text-[2rem] text-center md:text-sm md:border border-[#3366ff]'>Organisasi Sosial</p>
                </div>
                <p className='my-10 md:my-0 md:pt-7 text-3xl font-medium md:font-normal md:text-sm'>Bidang ini dapat memanfaatkan fitur Broadcast untuk mengirim promosi, pengumuman, dan informasi produk kepada pelanggan dalam jumlah besar secara efisien. Selain itu, fitur Campaign dapat membantu merencanakan dan menyampaikan pesan iklan dengan waktu yang tepat kepada target audiens yang sesuai.</p>
            </div>
        </div>
    </div>
  )
}

export default Opportunity