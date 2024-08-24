'use client';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import Sidebar from './sub/Sidebar';
import Analitik from './sub/Analitik';


const Dashboard = () => {
  const { data: session, status }: { data: any, status: string}= useSession();
  const router = useRouter();
  useEffect(() => {
    console.log(session);
    if (status === 'unauthenticated') {
      router.push('/sign-in');
    }
  }, [router, status, session]);
  return (
    <div className='h-full w-full bg-white'>
      <Sidebar />
      <div className='ml-[16rem] mt-5 h-full w-[1080px] bg-[#f3f5f8] rounded-lg p-5'>
        <div className='flex flex-row items-center justify-end gap-3'>
          <img src="bell.svg" alt=""className='bg-white p-2 rounded-full'/>
          <button onClick={() => signOut()}>
            <img src="signout.svg" alt="" className='w-[32px] bg-white p-2 rounded-full'/>
          </button>
          <div className='flex flex-row items-center justify-between bg-[#fff] rounded-full w-[150px] gap-5 pl-10'>
            <p className='text-sm font-medium overflow-hidden'>{session?.user?.username}</p>
            <img src="user.svg" alt=""  className='bg-[#3366ff] p-2 rounded-full'/>
          </div>
          <img src="gear.svg" alt="" className='bg-white rounded-full p-2'/>
        </div>

        <div className='flex flex-row justify-between mt-5'>
          <h1 className='lexend text-xl'>Selamat siang, {session?.user?.username}</h1>
          <div className='flex flex-row gap-3'>
            <div className='flex flex-col text-xs items-end'>
              <p className='text-[#B0B4C5]'>Tanggal hari ini</p>
              <p className='text-[#777C88]'>Selasa, 29 Agustus 2023</p>
            </div>
            <img src="calendar.svg" alt="" />
          </div>
        </div>

        <div className='w-full flex flex-row gap-2 h-[200px] mt-5'>
          <div className='w-[700px] bg-white rounded-md p-5'>
            <div className='flex flex-row'>
              <p className='text-xs w-[50px]'>Paket saat ini</p>
              <div className='ml-5 flex flex-row items-center gap-2'>
                <h1 className='lexend text-xl'>Starter </h1>
                <p className='text-xs bg-black px-2 text-white rounded-full'>Free</p>
              </div>
              <div className='flex flex-col text-xs items-end ml-[18rem]'>
                <p className='text-[#B0B4C5]'>Aktif sampai dengan</p>
                <p className=' font-bold'>Selasa, 29 Agustus 2023</p>
              </div>
            </div>
            <div className='flex flex-row mt-10'>
              <p className='text-xs w-[50px]'>Devices</p>
              <div className='ml-6 flex flex-col items-start gap-1'>
                <div className='bg-[#E6E8F0] w-[240px] rounded-full h-[10px]'>
                  <div className='bg-[#D14343] w-[200px] rounded-full h-[10px]'></div>
                </div>
                <p className='text-[10px] text-[#777C88]'>8 dari 10 device yang tersedia</p>
              </div>
              <div className='flex flex-col text-xs items-end ml-[5rem] pr-3 text-end'>
                <p className='font-bold'>Upgrade paket untuk meningkatkan batasan fitur yang ada</p>
              </div>
            </div>
            <div className='flex flex-row mt-3'>
              <p className='text-xs w-[50px]'>Contacts</p>
              <div className='ml-5 flex flex-col items-start gap-1'>
                <div className='bg-[#E6E8F0] w-[240px] rounded-full h-[10px]'>
                  <div className='bg-[#4FBEAB] w-[50px] rounded-full h-[10px]'></div>
                </div>
                <p className='text-[10px] text-[#777C88]'>5 dari 100 kontak yang tersedia</p>
              </div>
              <div className='flex flex-col border border-[#3366ff] items-end ml-[8rem] px-10 py-1 text-[#3366ff] rounded-lg text-end'>
                <p className='font-medium'>Upgrade Paket</p>
              </div>
            </div>
            <p className='text-xs text-center text-[#B0B4C5]'>Tampilkan kapasitas fitur lainnya</p>
          </div>

          <div className='w-[360px] bg-white rounded-md p-3'>
            <h1 className='font-medium text-sm'>Pesan Terakhir</h1>
            <div className='flex flex-col gap-1'>
              <div className='flex flex-row bg-[#F3F5F8] gap-3 p-2 rounded-lg items-center'>
                <img src="user.svg" alt="" className='bg-[#3366ff] p-2 rounded-full'/>
                <div className='flex flex-col'>
                  <p className='text-xs font-bold'>Anda</p>
                  <p className='text-[10px]'>Hai apa kabarmu hari ini? Semoga...</p>
                </div>
                <p className='text-xs bg-[#3366ff] text-white rounded-lg px-2 py-1 ml-4'>Terkirim</p>
              </div>
              <div className='flex flex-row bg-[#F3F5F8] gap-3 p-2 rounded-lg items-center'>
                <img src="user.svg" alt="" className='bg-[#3366ff] p-2 rounded-full'/>
                <div className='flex flex-col'>
                  <p className='text-xs font-bold'>Anda</p>
                  <p className='text-[10px]'>Hai apa kabarmu hari ini? Semoga...</p>
                </div>
                <p className='text-xs bg-[#3366ff] text-white rounded-lg px-2 py-1 ml-4'>Terkirim</p>
              </div>
              <div className='flex flex-row bg-[#F3F5F8] gap-3 p-2 rounded-lg items-center'>
                <img src="user.svg" alt="" className='bg-[#3366ff] p-2 rounded-full'/>
                <div className='flex flex-col'>
                  <p className='text-xs font-bold'>Ihsanul Afkar</p>
                  <p className='text-[10px]'>Hai apa kabarmu hari ini? Semoga...</p>
                </div>
                <p className='text-xs bg-[#3366ff] text-white rounded-lg px-2 py-1 ml-4'>Terkirim</p>
              </div>
            </div>
          </div>
        </div>
      
        <Analitik />
      </div>
    </div>
  )
}

export default Dashboard