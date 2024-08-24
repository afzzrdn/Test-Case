import React from 'react'
import Canvas from './Canvas'

const Footer = () => {
  return (
    <div className='bg-[#3366ff] py-[8rem] h-full w-full'>
      
        <div id='faq' className='flex flex-col items-center'>
            <h2 className='text-white lexend text-[3rem] md:text-xl py-20'>Frequently Asked Questions</h2>
            <div className='flex flex-row gap-5'>
                <div className='w-[700px] h-[80px] md:w-[512px] md:h-[37px] bg-white rounded-md'></div>
                <img src="search.svg" alt="" className='w-[50px] md:w-[25px]'/>
            </div>
            <div className='w-[770px] md:w-[548px] md:h-[130px] bg-white rounded-md mt-10 p-3'>
              <div className='flex flex-row justify-between'>
                <h3 className='font-bold text-[2rem] md:text-[18px]'>Apa itu Forwardin?</h3>
                <button className='font-bold bg-[#3366ff] px-5 md:px-3 py-1 text-white'>-</button>
              </div>
                <p className='text-xl md:text-xs font-medium mt-2'>Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur canggih seperti auto-reply, fitur broadcast, manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak Google.</p>
            </div>
            <div className='w-[770px] md:w-[548px] md:h-[57px] h-[90px] bg-white rounded-md mt-3 p-3'>
              <div className='flex flex-row justify-between'>
              <h3 className='font-bold text-[2rem] md:text-[18px]'>Apa Forwardin cocok untuk saya?</h3>
                <button className='font-bold bg-[#3366ff] px-5 md:px-3 py-1 text-white'>-</button>
              </div>
            </div>
            <div className='w-[770px] md:w-[548px] md:h-[57px] h-[90px] bg-white rounded-md mt-3 p-3'>
              <div className='flex flex-row justify-between'>
              <h3 className='font-bold text-[1.8rem] md:text-[18px]'>Apakah Forwardin perlu di-install ke komputer?</h3>
                <button className='font-bold bg-[#3366ff] px-5 md:px-3 py-1 text-white'>-</button>
              </div>
            </div>
            
        </div>
        <div id='contact' className='flex flex-col md:flex-row md:justify-around py-[200px] h-full w-full'>
          <div className='text-white p-[6rem]'>
            <img src="Logo2.svg" alt="" className='w-[300px] md:w-[200px]'/>
            <p className=' text-2xl md:text-xs py-10 w-full md:w-[300px]'>Fowardin is your ultimate communication management solution. We empower businesses of all sizes with efficient message forwarding, streamlined contact management, and powerful campaign scheduling. Our mission is to simplify your communication processes, helping you engage with your audience effectively and effortlessly. Join us in transforming your communication game today!</p>
            <div className='text-white w-full md:w-[250px] py-5'>
              <h2 className='font-bold md:text-xl text-4xl'>Contact Us</h2> 
              <p className='text-2xl md:text-xs py-10 '>Join our mailing list to receive updates, exclusive content, and early access to upcoming events. By signing up, you become an integral part of our community, spreading the message of compassion and making a difference.</p>
              <p className='text-2xl md:text-xs'>Email: info@fowarin <br /> Phone: +1 (123) 456-7890</p>
          </div>
          </div>
          
          <div className='text-white p-[6rem]'> 
            <h2 className='font-bold md:text-xl text-4xl '>Lets Talk</h2>
            <p className='text-2xl md:text-xs py-10'>Facebook <br /> Instagram  <br /> Twitter</p>
          </div>
        </div>
        <img src="Logo2.svg" alt="" className='mx-auto md:mx-[45vw] w-[300px] md:w-[200px]'/>
    </div>
  )
}

export default Footer