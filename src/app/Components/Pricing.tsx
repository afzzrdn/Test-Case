"use client"
import React, { useState } from 'react'

const Pricing = () => {
        const [plan, setPlan] = useState<'monthly' | 'yearly'>('monthly');;

        const prices = {
            monthly: {
                starter: 'Rp. 100.000',
                basic: 'Rp. 200.000',
                premium: 'Rp. 300.000',
                pro: 'Rp. 400.000',
            },
            yearly: {
                starter: 'Gratis',
                basic: 'Rp. 65.000',
                premium: 'Rp. 76.000',
                pro: 'Rp. 86.000',
            },
        };
        const subPrices = {
            monthly: {
                starter: 'Rp. 1.000.000 /tahun',
                basic: 'Rp. 2.000.000 /tahun',
                premium: 'Rp. 3.000.000 /tahun',
                pro: 'Rp. 4.000.000 /tahun',
              },
              yearly: {
                starter: '-',
                basic: 'Rp. 650.000 /tahun',
                premium: 'Rp. 800.000 /tahun',
                pro: 'Rp. 900.000 /tahun',
              },
        }

    return (
        <div className='bg-white py-10 w-full h-full flex flex-col items-center '>
            <h1 className='lexend text-[3rem] font-medium  md:text-3xl text-center'>Our Pricing</h1>
            <h1 className='md:hidden flex text-[4rem] lexend'>Subscription</h1>
            <div className='my-5 md:my-5 pt-5 flex flex-row  py-3 px-5 items-center bg-white rounded-3xl gap-5 font-medium shadow-md'>
            <button
            className={`px-4 py-2 text-[2rem] md:text-sm rounded-full font-semibold ${
                plan === 'monthly' ? 'bg-[#3366ff] text-white ' : 'bg-white text-black'
            }`}
            onClick={() => setPlan('monthly')}
            >
                Monthly
            </button>
            <button
            className={`px-4 py-2 text-[2rem] md:text-sm rounded-full font-semibold ${
                plan === 'yearly' ? 'bg-[#3366ff] text-white' : 'bg-white text-black'
            }`}
            onClick={() => setPlan('yearly')}
            >
                Yearly
            </button>
            </div>
            <p className='my-5 p-3 text-sm bg-[#3366ff11] font-bold text-[#3366ff] rounded-2xl hidden md:flex'>Hemat hingga 25% dengan paket tahunan</p>
            <div className='flex md:flex-row flex-col py-[2rem] gap-16 items-center mb-16 md:mb-0'>
                <div className='w-[600px] h-[1000px] md:my-0 my-[50px] mx-10 md:mx-0 md:w-[230px] md:h-[550px] p-10 md:p-5'>
                    <h1 className='lexend text-[4rem] md:text-2xl py-2'>Starter</h1>
                    <p className='text-[2rem] font-medium md:font-normal md:text-xs'>Mulai perjalanan Anda dengan paket Starter selama 14 hari. Nikmati pesan otomatis, siaran pesan, dan manajemen kontak yang efisien. Dapatkan integrasi yang membantu dan sinkronisasi kontak WhatsApp.</p>
                    <p className='pt-5 text-3xl md:text-sm'><span className='lexend text-[3rem] md:text-xl py-2 mr-2'>{prices[plan].starter}</span>/bulan</p>
                    <p className='text-[#777C88] text-3xl md:text-sm'>{subPrices[plan].starter}</p>
                    <button className='w-full bg-[#3366ff] py-3 my-5 text-white rounded-md text-3xl md:text-sm'>Start Now</button>
                    <img src="img6.svg" alt="" className='w-[400px] md:w-[200px]'/>
                </div>
                <div className='w-[600px] h-[1200px] md:my-0 my-[50px] mx-10 md:mx-0 md:w-[230px] md:h-[550px] p-10 md:p-5 bg-white shadow-2xl'>
                    <h1 className='lexend text-[4rem] md:text-2xl py-2'>Basic</h1>
                    <p className='text-[2rem] font-medium md:font-normal md:text-xs'>Dapatkan akses selama 1 bulan dengan paket Basic. Manfaatkan fitur pesan otomatis, siaran pesan, dan manajemen kontak yang ditingkatkan. Rasakan kenyamanan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.</p>
                    <p className='pt-5 text-3xl md:text-sm'><span className='lexend text-[3rem] md:text-xl py-2 mr-2'>{prices[plan].basic}</span>/bulan</p>
                    <p className='text-[#777C88] text-3xl md:text-sm'>{subPrices[plan].basic}</p>
                    <button className='w-full bg-[#FFB020] py-3 my-5 text-white rounded-md text-3xl md:text-sm'>Get Started</button>
                    <img src="img6.svg" alt="" className='w-[400px] md:w-[200px]'/>
                </div>
                <div className='w-[600px] h-[1000px] md:my-0 my-[50px] mx-10 md:mx-0 md:w-[230px] md:h-[550px] p-10 md:p-5'>
                    <h1 className='lexend text-[4rem] md:text-2xl py-2'>Premium</h1>
                    <p className='text-[2rem] font-medium md:font-normal md:text-xs'>Perpanjang pengalaman Anda dengan paket Premium selama 1 bulan. Nikmati manfaat pesan otomatis, siaran pesan, dan manajemen kontak tanpa batasan. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.</p>
                    <p className='pt-5 text-3xl md:text-sm'><span className='lexend text-[3rem] md:text-xl py-2 mr-2'>{prices[plan].premium}</span>/bulan</p>
                    <p className='text-[#777C88] text-3xl md:text-sm'>{subPrices[plan].premium}</p>
                    <button className='w-full bg-[#3366ff] py-3 my-5 text-white rounded-md text-3xl md:text-sm'>Get Started</button>
                    <img src="img6.svg" alt="" className='w-[400px] md:w-[200px]'/>
                </div>
                <div className='w-[600px] h-[1000px] md:my-0 my-[50px] mx-10 md:mx-0 md:w-[230px] md:h-[550px] p-10 md:p-5'>
                    <h1 className='lexend text-[4rem] md:text-2xl py-2'>Pro</h1>
                    <p className='text-[2rem] font-medium md:font-normal md:text-xs'>Jelajahi seluruh fitur dengan paket Pro selama 1 bulan. Dapatkan keuntungan dari pesan otomatis, siaran pesan, serta manajemen kontak yang tidak terbatas. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.</p>
                    <p className='pt-5 text-3xl md:text-sm'><span className='lexend text-[3rem] md:text-xl py-2 mr-2'>{prices[plan].pro}</span>/bulan</p>
                    <p className='text-[#777C88] text-3xl md:text-sm'>{subPrices[plan].pro}</p>
                    <button className='w-full bg-[#3366ff] py-3 my-5 text-white rounded-md text-3xl md:text-sm'>Get Started</button>
                    <img src="img6.svg" alt="" className='w-[400px] md:w-[200px]'/>
                </div>
            </div>
        </div>
    )
}

export default Pricing