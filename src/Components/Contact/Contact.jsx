import React from 'react'

export default function Contact () {
  return (
    <div className='container mx-auto'>
      <div className='text-[#2C3E50]  container w-[25rem] md:w-full mt-36 justify-center items-center mx-auto flex  flex-col'>
        <h1 className=' text-[30px] md:text-[35px] lg:text-[40px] font-bold leading-[35px]'>
          CONTACT SECTION
        </h1>
        <div className=' text-[#2C3E50] flex mt-3'>
          <hr className=' border-[#2C3E50] border-t-4 my-auto  w-20 me-5' />
          <p>
            <i className=' fa-solid fa-star'></i>
          </p>
          <hr className='border-[#2C3E50] border-t-4 my-auto  w-20 ms-5' />
        </div>

        <div className=' mt-20 mb-96 container max-w-[64rem] mx-auto leading-[24px] text-[16px] text-[#212529]'>
          <div className='mb-8'>
            <div className='relative  w-full mb-5 group'>
              <input
                type='text'
                name='floating_name'
                id='floating_name'
                className='block py-2.5 px-0 w-full  bg-transparent  border-b-2 border-gray-100 appearance-none focus:outline-none  peer'
                placeholder=''
              />
              <label
                htmlFor='floating_name'
                className='peer-focus-visible:text-[#1ABC9C] absolute  duration-300 transform -translate-y-6  top-3 -z-10 origin-[0]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 '              >
                userName
              </label>
            </div>
          </div>
          <div className='mb-8'>
            <div className='relative  w-full mb-5 group'>
              <input
                type='text'
                name='floating_age'
                id='floating_age'
                className='block py-2.5 px-0 w-full  bg-transparent  border-b-2 border-gray-100 appearance-none focus:outline-none  peer'
                placeholder=''
              />
              <label
                htmlFor='floating_age'
                className='peer-focus-visible:text-[#1ABC9C] absolute  duration-300 transform -translate-y-6  top-3 -z-10 origin-[0]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 '
              >
                userAge
              </label>
            </div>
          </div>
          <div className='mb-8'>
            <div className='relative  w-full mb-5 group'>
              <input
                type='email'
                name='floating_email'
                id='floating_email'
                className='block py-2.5 px-0 w-full  bg-transparent  border-b-2 border-gray-100 appearance-none focus:outline-none  peer'
                placeholder=''
              />
              <label
                htmlFor='floating_email'
                className='peer-focus-visible:text-[#1ABC9C] absolute  duration-300 transform -translate-y-6  top-3 -z-10 origin-[0]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 '              >
                userEmail
              </label>
            </div>
          </div>
          <div className='mb-8'>
            <div className='relative  w-full mb-5 group'>
              <input
                type='text'
                name='floating_password'
                id='floating_password'
                className='block py-2.5 px-0 w-full  bg-transparent  border-b-2 border-gray-100 appearance-none focus:outline-none  peer'
                placeholder=''
              />
              <label
                htmlFor='floating_password'
                className='peer-focus-visible:text-[#1ABC9C] absolute  duration-300 transform -translate-y-6  top-3 -z-10 origin-[0]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 '              >
                userPassword
              </label>
            </div>
          </div>
          <button
            type='submit'
            className='text-white bg-[#1ABC9C]   font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center'
          >
            send Messege
          </button>
        </div>
      </div>
    </div>
  )
}
