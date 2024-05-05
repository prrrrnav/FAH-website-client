import React from 'react'
import { useState } from 'react';
import menu from '../../Assets/icons8-menu.svg'
import menuCross from '../../Assets/icons8-cross-48.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuDisplay, setMenuDisplay] = useState('hidden')
  const [sliding, setSliding] = useState('translate-x-0')

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setMenuDisplay(isOpen ? 'hidden' : 'absolute');
    setSliding(isOpen ? 'translate-x-full' : 'translate-x-0');

  };
  return (
    <>
      {/* This screen is on laptop  */}
      <div className=' md:absolute w-full z-30'>
        <div className='hidden md:flex p-5 w-auto justify-between items-center bg-transparent'>
          <h1 className='font-bold text-xl '>FAH <span className='text-orange-500 font-bold'>HOSPITAL</span></h1>
          {/* Hide sub divs on tablet view */}
          <div className='hidden md:flex gap-7'>
            <a href='#' className='text-slate-800 text-sm font-medium hover:text-white'>Speciality</a>
            <a href='#' className='text-slate-800 text-sm font-medium hover:text-white'>Health Library</a>
            <a href='#' className='text-slate-800 text-sm font-medium hover:text-white'>Services</a>
            <a href='#' className='text-slate-800 text-sm font-medium hover:text-white'>Career</a>
            <a href='#' className='text-slate-800 text-sm font-medium hover:text-white'>About Us</a>
          </div>
          <button className='block text-md bg-lime-600 text-white py-2 px-3 rounded-3xl hover:bg-lime-900'>Contact us</button>
        </div>
      </div>

      {/* on tablets and mobile */}
      {/* logo and menu icon */}
      <div className='absolute w-full z-30'>
        <div className='md:hidden flex flex-row justify-between m-5'>
          <h1 className='font-bold text-xl'>FAH <span className='text-orange-500 font-bold'>HOSPITAL</span></h1>
          <img onClick={toggleMenu} className='md:hidden z-50 w-6 h-6' src={menu}></img>
        </div>
      </div>

      {/* sideScreen */}
      <div className={`${menuDisplay} w-1/2  md:hidden bg-lime-900 h-screen z-40 left-1/2 ${sliding} transition-transform duration-300 ease-in-out`}>
        <div className='flex flex-col mt-3  bg-transparent'>
          <div className='flex flex-row items-center justify-between'>
            <a href='#' className='text-white text-sm font-medium hover:text-slate-800 p-3'>Speciality</a>
            <img onClick={toggleMenu} className='md:hidden z-50 w-6 h-6 mr-5' src={menuCross}></img>
          </div>
          <a href='#' className='text-white text-sm font-medium hover:text-slate-800 p-3'>Health Library</a>
          <a href='#' className='text-white text-sm font-medium hover:text-slate-800 p-3'>Services</a>
          <a href='#' className='text-white text-sm font-medium hover:text-slate-800 p-3'>Career</a>
          <a href='#' className='text-white text-sm font-medium hover:text-slate-800 p-3'>About Us</a>
        </div>
      </div>

    </>
  )
}

export default Navbar
