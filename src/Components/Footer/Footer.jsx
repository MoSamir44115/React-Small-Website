import React from 'react'



export default function Footer () {
  return (
    <>
      <div className='overflow-hidden bg-[#2C3E50]'>
        <div className='my-10 sm:my-0 sm:mt-5 sm:h-80 text-white text-center items-center py-10  gap-y-12 flex flex-col flex-nowrap mx-auto sm:flex-row '>
          <div className='location w-4/6'>
            <h3 className='font-bold text-[28px] leading-[34px]'>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark,MO 65243</p>
          </div>
          <div className='around w-4/6'>
            <h3 className='font-bold text-[28px] leading-[34px]'>AROUND THE WEB</h3>
            <div className='mt-3 mx-auto  icons gap-x-2 sm:gap-x-4 sm:gap-y-2 flex w-2/4 flex-nowrap sm:flex-wrap  justify-center'>
              <i className='border  w-10 h-10 rounded-full fa-brands fa  justify-center items-center fa-facebook'></i>
              <i className='border  w-10 h-10 rounded-full fa-brands fa  justify-center items-center fa-twitter'></i>
              <i className='border  w-10 h-10 rounded-full fa-brands fa  justify-center items-center fa-linkedin-in'></i>
              <i className='border w-10 h-10 rounded-full flex items-center justify-center fa-solid fa-globe '></i>
            </div>
          </div>
          <div className='freelancer w-4/6'>
            <h3 className='font-bold text-[28px] leading-[34px]'>ABOUT FREELANCER</h3>
            <p className='mt-4'>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      <div className='text-center items-center justify-center flex text-white h-16 lowerfooter bg-[#192530]'>
        <p>Copyright © Mohamed Samir 2024</p>
      </div>
    </>
  )
}
