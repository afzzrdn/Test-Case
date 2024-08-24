"use client";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const Signin = () => {
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const res = await signIn("credentials", {
        redirect: false,
        username: formData.get("username"),
        password: formData.get("password"),
        callbackUrl: "/dashboard",
      });

      if (!res?.error) {
        router.push("/dashboard");
      } else {
        console.log(res.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='py-8 mx-10 md:mx-0 md:pl-[8rem] bg-white md:bg-[#ECF2FA] h-full w-full'>
      <img src="./Logo.svg" alt="Logo"className='w-[200px]'/>
      <div className='flex justify-center gap-16 items-center flex-row my-[8rem]'>
        <div className='hidden md:flex flex-col w-[465px] gap-2 mx-10'>
          <img src="img1.svg" alt="Illustration" className='w-[600px]'/>
          <h2 className='lexend'>Elevate Your Messaging Efficiency with Our Innovative Admin Tools</h2>
          <p className='text-xs font-medium'>Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis dengan fitur sinkronasi Google Contact. Dapatkan kendali penuh pesan dengan manajemen konten yang praktis.</p>
        </div>  
        <div className='w-[460px] h-[540px] bg-white md:shadow-md mx-5 rounded-lg flex flex-col items-center'>
          <h1 className='lexend text-2xl mt-10'>Welcome Back</h1>
          <p className='text-sm font-md'>We're so excited to see you again!</p>
          <form onSubmit={handleLogin} className='mx-8'>
            <input type="text" name="username" placeholder='Username' className='w-[400px] mt-10 p-4 text-sm rounded-lg border-[#B0B4C5] border'/>
            <input type="password" name="password" placeholder='Password' className='w-[400px] mt-4 p-4 text-sm rounded-lg border-[#B0B4C5] border'/>
            <p className='mt-4 text-sm text-[#3366ff] font-medium'>Lupa Password?</p>
            <button type="submit" className='w-[400px] mt-4 p-4 text-sm rounded-lg bg-[#3366ff] text-white'>Sign In</button>
          </form>
          <p className='mt-5 text-sm font-medium'>Butuh buat akun? <a href="/sign-up" className='text-[#3366ff]'>Daftar disini</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
