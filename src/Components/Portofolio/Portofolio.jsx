import React, { useRef, useState } from 'react'
import houseimg from '../../assets/poert1.png'
import cakeimg from '../../assets/port2.png'
import circusimg from '../../assets/port3.png'
import plusicon from '../../assets/icons8-plus-90_w.png'

export default function Portofolio () {

let [intoggle , setToggle] = useState(false)
let [outtoggle , setOuttoggle] = useState(false)

function outtoggler(){
  setOuttoggle(!outtoggle)
}

function toggler (e){
  setToggle(!intoggle)

 
  console.log( e.currentTarget)

}

  return (
    <div  className='container mx-auto mb-10'>
      <div className='text-[#2C3E50]  container w-[25rem] md:w-full mt-36 justify-center items-center mx-auto flex  flex-col'>
        <h1 className=' text-[30px] md:text-[35px] lg:text-[40px] font-bold leading-[35px]'>
          PORTOFOLIO COMPONENT
        </h1>
        <div className=' text-[#2C3E50] flex mt-3'>
          <hr className=' border-[#2C3E50] border-t-4 my-auto  w-20 me-5' />
          <p>
            <i className=' fa-solid fa-star'></i>
          </p>
          <hr className='border-[#2C3E50] border-t-4 my-auto  w-20 ms-5' />
        </div>
        
        <div
          className={`${intoggle? 'flex' : ''}  ${outtoggle? 'hidden' :''}  flex justify-center   modal-overlay-img z-50  absolute start-0 top-0 bottom-0 end-0`}
        >
          <div onClick={outtoggler}  className="dropback   absolute  start-0 top-0 bottom-0 end-0 bg-opacity-45 bg-blue-600"></div>
          <div className='mt-56 fixed w-4/12'>
            <img className='w-full ' src={houseimg} alt='image' />
          </div>
        </div>
        <div className='imgs max-sm:w-[31rem] max-md:w-[35rem] flex flex-wrap  justify-center'>
          <div  onClick={toggler} className='theimage mx-5   md:w-5/12 min-[1016px]:w-[26.3%] '>
            <div className='img relative'>
              <img
                className='peer w-full my-5  rounded-md'
                src={houseimg}
                alt='hovering-house-image'
              />
              <div className='group flex justify-center items-center overlayimage cursor-pointer duration-500 hover:bg-emerald-400 hover:bg-opacity-90   absolute top-0 left-0 bottom-0 right-0 '>
                <img
                  src={plusicon}
                  className=' text-white size-14 hidden   group-hover:block '
                ></img>
              </div>
            </div>
          </div>
          <div  onClick={toggler} className='theimage mx-5   md:w-5/12 min-[1016px]:w-[26.3%] '>
            <div className='img relative'>
              <img
                className='peer w-full my-5  rounded-md'
                src={cakeimg}
                alt='hovering-house-image'
              />
              <div className='group flex justify-center items-center overlayimage cursor-pointer duration-500 hover:bg-emerald-400 hover:bg-opacity-90   absolute top-0 left-0 bottom-0 right-0 '>
                <img
                  src={plusicon}
                  className=' text-white size-14 hidden   group-hover:block '
                ></img>
              </div>
            </div>
          </div>
          <div  onClick={toggler} className='theimage mx-5   md:w-5/12 min-[1016px]:w-[26.3%] '>
            <div className='img relative'>
              <img
                className='peer w-full my-5  rounded-md'
                src={circusimg}
                alt='hovering-house-image'
              />
              <div className='group flex justify-center items-center overlayimage cursor-pointer duration-500 hover:bg-emerald-400 hover:bg-opacity-90   absolute top-0 left-0 bottom-0 right-0 '>
                <img
                  src={plusicon}
                  className=' text-white size-14 hidden   group-hover:block '
                ></img>
              </div>
            </div>
          </div>
          <div  onClick={toggler} className='theimage mx-5   md:w-5/12 min-[1016px]:w-[26.3%] '>
            <div className='img relative'>
              <img
                className='peer w-full my-5  rounded-md'
                src={houseimg}
                alt='hovering-house-image'
              />
              <div className='group flex justify-center items-center overlayimage cursor-pointer duration-500 hover:bg-emerald-400 hover:bg-opacity-90   absolute top-0 left-0 bottom-0 right-0 '>
                <img
                  src={plusicon}
                  className=' text-white size-14 hidden   group-hover:block '
                ></img>
              </div>
            </div>
          </div>
          <div  onClick={toggler} className='theimage mx-5   md:w-5/12 min-[1016px]:w-[26.3%] '>
            <div className='img relative'>
              <img
                className='peer w-full my-5  rounded-md'
                src={cakeimg}
                alt='hovering-house-image'
              />
              <div className='group flex justify-center items-center overlayimage cursor-pointer duration-500 hover:bg-emerald-400 hover:bg-opacity-90   absolute top-0 left-0 bottom-0 right-0 '>
                <img
                  src={plusicon}
                  className=' text-white size-14 hidden   group-hover:block '
                ></img>
              </div>
            </div>
          </div>
          <div  onClick={toggler} className='theimage mx-5   md:w-5/12 min-[1016px]:w-[26.3%] '>
            <div className='img relative'>
              <img
                className='peer w-full my-5  rounded-md'
                src={circusimg}
                alt='hovering-house-image'
              />
              <div className='group flex justify-center items-center overlayimage cursor-pointer duration-500 hover:bg-emerald-400 hover:bg-opacity-90   absolute top-0 left-0 bottom-0 right-0 '>
                <img
                  src={plusicon}
                  className=' text-white size-14 hidden   group-hover:block '
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
