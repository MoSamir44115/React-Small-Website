import React from 'react'
import mainimg from '../../assets/avataaars.svg'

export default function Home () {
  return (
    <div className='bg-[#1ABC9C] '>
      <div className='container flex-col mx-auto h-screen justify-center flex items-center'>
        <div className='mainimg '>
          <img
            className='w-64'
            src={mainimg}
            alt='the-main-site-image-avatar'
          />
        </div>
        <p className='before: pt-10 leading-[48px] font-bold text-white  text-[32px]'>
          START FRAMEWORK
        </p>
        <div className='flex mt-3'>
          <hr className=' border-t-4 my-auto  w-20 me-5'/>
          <p><i className="text-white fa-solid fa-star"></i></p>
          <hr className=' border-t-4 my-auto  w-20 ms-5'/>
          </div>
          <div className='mt-2 text-white'>
            <p>Graphic Arts - Web Desginer - illustrator</p>
          </div>
      </div>
    </div>
  )
}
