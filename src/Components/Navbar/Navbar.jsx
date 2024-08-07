import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Contact from '../Contact/Contact'
import Portofolio from '../Portofolio/Portofolio'
import About from '../About/About'


export default function Navbar () {

  let [toggle , settoggle] = useState(false)

  function thetoggler(){
    
    settoggle(!toggle)
  }

  return (
    <>
      <div className='fixed z-20 top-0 start-0 end-0 px-4 md:px-0 flex py-8 bg-[#2C3E50]'>
        <div className='items-center md:flex container mx-auto w-[83rem] justify-between'>
          <NavLink to={''}className=' leading-[48px] font-bold text-white  text-[32px]'>
            START FRAMEWORK
          </NavLink>
          <div>
            <div  className=' border p-2 rounded-md fa-2x absolute top-10 end-5 block md:hidden'>
              <i onClick={thetoggler} className='text-white cursor-pointer fa-solid fa-bars'></i>
            </div>
            <ul className={`${toggle?'block' : 'hidden '} mt-3  leading-[24px] font-bold text-white gap-6 text-[16px] md:flex`}>
              <li>
                <NavLink to={'/About'} className={({isActive})=>isActive? ' bg-[#1ABC9C] block rounded-lg w-[4.5rem] text-center py-2 ':'block rounded-lg w-[4.5rem] text-center py-2 '}>ABOUT</NavLink>
              </li>
              <li>
                <NavLink to={'/Portofolio'} className={({isActive})=>isActive? ' bg-[#1ABC9C] block rounded-lg w-[7.5rem] text-center py-2 ':'block rounded-lg w-[7.5rem] text-center py-2'}>PORTOFOLIO</NavLink>
              </li>
              <li>
                <NavLink to={'/Contact'} className={({isActive})=>isActive? ' bg-[#1ABC9C] block rounded-lg w-[5.5rem] text-center py-2 ':'block rounded-lg w-[5.5rem] text-center py-2'}>CONTACT</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
