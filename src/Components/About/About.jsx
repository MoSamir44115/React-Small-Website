import React, { useState } from 'react'

export default function About () {




  return (
    <div className='overflow-hidden bg-[#1ABC9C] '>
      <div className='text-white  container w-96 md:w-1/2   my-96 justify-center items-center mx-auto flex  flex-col'>
        <h1 className=' text-[30px] md:text-[35px] lg:text-[40px] font-bold leading-[35px]'>ABOUT COMPONENT</h1>
        <div className='flex mt-3'>
          <hr className=' border-t-4 my-auto  w-20 me-5' />
          <p>
            <i className='text-white fa-solid fa-star'></i>
          </p>
          <hr className=' border-t-4 my-auto  w-20 ms-5' />
        </div>
        <div className='paragraphs mt-5   sm:w-[22rem]  md:w-[40rem]  lg:w-[56rem]  xl:w-[74rem]   flex flex-col md:flex-row'>
          <p className='mb-5  me-10'>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className=''>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </div>
  )
}
