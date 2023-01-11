import React from 'react'
import {HiOutlineBars3} from 'react-icons/hi2'
import logo from '../assets/logo.svg'


export const Navbar = () => {
    let navItem = ['FALCON9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACELIGHT', 'RIDESHARE', 'STARSHILED', 'STARLINK']
  
    return (
      <div className='z-50 flex justify-around items-center bg-black text-white h-[70px] sticky top-0'>
        <div>
            <img className='w-[178px] '  src={logo} alt="" />
        </div>
  
        <div className='lg:flex hidden'>
          {navItem.map((sec) => (
            <button key={sec} className='m-[10px] text-[13px] font-bold'>
              {sec}</button>
          ))}
        </div>
  
        <div className='flex'>
          <p className='m-[10px] lg:flex hidden'>SHOP</p>
          <p className='m-[13px]'> <HiOutlineBars3 /> </p>
        </div>
      </div>
    
    )

          }
