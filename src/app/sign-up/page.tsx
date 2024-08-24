"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Signup = () => {
  const { push } = useRouter();
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [passwordValidations, setPasswordValidations] = useState({
    minLength: false,
    hasLowercase: false,
    hasUppercase: false,
    hasNumber: false,
    hasSpecialChar: false,
});

const validatePassword = (password: string): string => {
  const minLength = password.length >= 8;
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  setPasswordValidations({
    minLength,
    hasLowercase,
    hasUppercase,
    hasNumber,
    hasSpecialChar,
  });

  let errorMessage = '';
  if (!minLength) errorMessage += 'Password must be at least 8 characters long. ';
  if (!hasLowercase) errorMessage += 'Password must contain at least one lowercase letter. ';
  if (!hasUppercase) errorMessage += 'Password must contain at least one uppercase letter. ';
  if (!hasNumber) errorMessage += 'Password must contain at least one number. ';
  if (!hasSpecialChar) errorMessage += 'Password must contain at least one special character. ';

  return errorMessage.trim();
};


const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
  setPassword(value);
  const error = validatePassword(value);
  setPasswordError(error);
};

  const isPasswordValid = Object.values(passwordValidations).every(Boolean);
  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        email: e.target.email.value,
        username: e.target.username.value,
        phone: e.target.phone.value,
        password: e.target.password.value,
      }),
    });
    if (res.status === 200) {
      e.target.reset();
      setIsLoading(false);
      push('/sign-in');
    } else {
      setError("Email Already Exists");
      setIsLoading(false);
    }
  };
  return (
    <div className='py-8 mx-10 md:mx-0 md:pl-[8rem] bg-white md:bg-[#ECF2FA] h-full w-full'>
      <img src="./Logo.svg" alt="Logo"className='w-[200px]'/>
      <div className='flex justify-center gap-16 items-center flex-row my-[8rem]'>
        <div className='hidden md:flex flex-col w-[465px] gap-2 mx-10'>
          <img src="img1.svg" alt="Illustration" className='w-[600px]' />
          <h2 className='lexend'>Elevate Your Messaging Efficiency with Our Innovative Admin Tools</h2>
          <p className='text-xs font-medium'>
            Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami. 
            Tingkatkan komunikasi Anda dan pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi 
            lebih praktis dengan fitur sinkronasi Google Contact. Dapatkan kendali penuh pesan dengan manajemen 
            konten yang praktis.
          </p>
        </div>  
        <div className='w-[460px] h-[740px] bg-white md:shadow-md mx-5 rounded-lg flex flex-col items-center'>
          <h1 className='lexend text-2xl mt-10'>Welcome to Fowardin</h1>
          <p className='text-sm font-md text-center'>
            Revolutionize your communication <br /> journey with Fowardin today
          </p>
          <form className='mx-8 mt-3' onSubmit={(e) => handleSubmit(e)}>
            <input 
              type="text" 
              name='email'
              placeholder='Email' 
              required
              className='w-[400px] my-2 p-4 text-sm rounded-lg border-[#B0B4C5] border' 
            />
            <input 
              type="text" 
              name='username'
              placeholder='Username' 
              required
              className='w-[400px] my-2 p-4 text-sm rounded-lg border-[#B0B4C5] border' 
            />
            <div className='flex flex-row gap-2'>
              <select className='w-[110px] font-bold my-2  px-5 text-sm rounded-lg border-[#B0B4C5] border appearance-none'>
                <option value="ID">(ID) +62</option>
              </select>               
              <input 
                type="text" 
                name='phone'
                placeholder='Whatsapp Phone Number' 
                required
                className='w-[280px] my-2 p-4 text-sm rounded-lg border-[#B0B4C5] border' 
              />
            </div>
            <input 
              type="password" 
              name='password'
              placeholder='Password'
              value={password}
              onChange={handlePasswordChange}
              required
              className='w-[400px] my-2 p-4 text-sm rounded-lg border-[#B0B4C5] border' 
            />
             <div className="text-sm mb-6 p-4">
                    <p className="mb-2">Password harus memenuhi syarat berikut:</p>
                    <p className={`mb-2 ${passwordValidations.minLength ? 'text-green-500' : 'text-red-500'}`}>
                        Paling tidak 8 karakter
                    </p>
                    <ul className="list-disc ml-4">
                        <li className={passwordValidations.hasLowercase ? 'text-green-500' : 'text-red-500'}>
                            Huruf kecil (a-z)
                        </li>
                        <li className={passwordValidations.hasUppercase ? 'text-green-500' : 'text-red-500'}>
                            Huruf besar (A-Z)
                        </li>
                        <li className={passwordValidations.hasNumber ? 'text-green-500' : 'text-red-500'}>
                            Angka
                        </li>
                        <li className={passwordValidations.hasSpecialChar ? 'text-green-500' : 'text-red-500'}>
                            Karakter Spesial (@$!%*?&)
                        </li>
                    </ul>
                </div>
            <button disabled={isLoading || !isPasswordValid} type='submit' value='submit' className='w-[400px] mt-4 p-4 text-sm rounded-lg bg-[#3366ff] text-white'>
              {isLoading ? 'Loading...' : 'Sign Up'}
            </button>
          </form>
         
          <p className='mt-5 text-sm font-medium'>
            Sudah punya akun? <a href="/sign-in" className='text-[#3366ff]'>Masuk di sini</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Signup;