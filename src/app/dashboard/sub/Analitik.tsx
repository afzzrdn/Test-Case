import React from 'react'
import MessageStatisticsChart from './MessageChart'
import HourlyLineChart from './HourChart'
import InteractionChart from './InteractionChart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Analitik = () => {
  return (
    <div className='bg-white dark:bg-[#1F1F21] rounded-lg w-full my-3 p-3 h-full'>
        <p className='lexend text-xl'>Analitik</p>
        <div className='p-3 flex flex-row gap-3'>
            <div className='border border-[#B0B4C5] rounded-md p-5 w-[350px] h-[200px]'>
                <p className='font-bold'>Ringkasan hari ini</p>
                <div className='flex flex-row mt-3 rounded-md gap-3'>
                    <div className='bg-[#F3F5F8] dark:bg-black rounded-md py-2 px-3 flex flex-row w-[60%] justify-between'>
                        <div className='flex flex-col'>
                            <p className='text-[12px]'>Device</p>
                            <p className='font-bold text-sm'>RMX3263</p>
                        </div>
                        <FontAwesomeIcon icon={['fas', 'chevron-down']} className='mt-3'/>
                    </div>
                    <div className='bg-[#F3F5F8] dark:bg-black rounded-md py-2 px-3 flex flex-row w-[35%] justify-between'>
                        <div className='flex flex-col'>
                            <p className='text-[12px]'>Aktif Sejak</p>
                            <p className='font-bold text-sm'>29.8.2023</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row mt-5 p-2 gap-5'>
                    <div className='flex flex-col'>
                        <p className='text-[12px]'>Pesan Keluar</p>
                        <p className='font-bold text-sm'>24</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-[12px]'>Pesan Masuk</p>
                        <p className='font-bold text-sm'>7</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-[12px]'>Pesan Gagal</p>
                        <p className='font-bold text-sm'>0</p>
                    </div>
                </div>
            </div>
            <div className='border border-[#B0B4C5] rounded-md p-5 w-[650px] h-[200px]'>
                <p className='font-bold'>Total Statistik Pesan</p>
                <div className='flex flex-row'>
                    <div className='flex flex-col'>
                        <div className='flex flex-row mt-5 p-2 gap-5 mr-[12rem]'>
                            <div className='flex flex-col'>
                                <p className='text-[12px]'>Total Pesan Keluar</p>
                                <p className='font-bold text-sm'>45</p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-[12px]'>Total Pesan Gagal</p>
                                <p className='font-bold text-sm'>8</p>
                            </div>                  
                        </div>
                        <div className='flex flex-col p-2'>
                            <p className='text-[12px]'>Total Pesan Masuk</p>
                            <p className='font-bold text-sm'>23</p>
                        </div>
                    </div>
                    <MessageStatisticsChart />
                </div>     
                
            </div>
           
        </div>
        <div className='mx-3 my-3 p-10 border border-[#B0B4C5] rounded-lg'>
            <div className='  py-2 px-3 flex flex-row mb-10 gap-5'>
                <div className='flex flex-col rounded-md bg-[#F3F5F8] dark:bg-black p-3'>
                    <p className='text-[12px]'>Hari ini</p>
                    <p className='font-bold text-sm'>24</p>
                </div>
                <div className='flex flex-col rounded-md bg-[#F3F5F8] dark:bg-black p-3'>
                    <p className='text-[12px]'>Rata-rata harian</p>
                    <p className='font-bold text-sm'>7</p>
                </div>
                <div className='flex flex-col rounded-md bg-[#F3F5F8] dark:bg-black p-3'>
                    <p className='text-[12px]'>Bulan ini</p>
                    <p className='font-bold text-sm'>23</p>
                </div>
                <div className='flex flex-col rounded-md bg-[#F3F5F8] dark:bg-black p-3'>
                    <p className='text-[12px]'>Rata-rata waktu</p>
                    <p className='font-bold text-sm'>00:02:42</p>
                </div>
            </div>
            <p className='font-bold mb-3'>Grafik Chart perjam</p>
            <HourlyLineChart />
            <p className='font-bold mb-3 mt-10'>Trend Interaksi Pesan</p>
            <InteractionChart />
        </div>
    </div>
  )
}

export default Analitik