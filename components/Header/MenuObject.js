import React from 'react'
import Link from 'next/link'
import { LoginIcon, LogoutIcon } from '@heroicons/react/outline'

function MenuObject({ isKlicked }) {
    


  return (
    <div className='flex flex-col z-90 text-red-500 items-center absolute  w-full bg-gray-900 bg-opacity-90 lg:hidden z-50'>
                 <Link href="/Home">
                   <a className=" link2 active:bg-gray-800 transition-colors duration-100 p-2 w-full flex justify-center">
                       Home</a>
                   
                   </Link> 
                   <Link href="/">
                   <a className=" link2  active:bg-gray-800 transition-colors duration-100 p-2 w-full flex justify-center">
                       Shop</a>
                   
                   </Link> 
                   <Link href="/">
                   <a className=" link2 active:bg-gray-800 transition-colors duration-100 p-2 w-full flex justify-center">
                   Gallery</a>
                   
                   </Link> 
                   <Link href="/">
                   <a className=" link2 active:bg-gray-800 transition-colors duration-100 p-2 w-full flex justify-center">
                       Contact</a>
                   </Link> 

                  {/* function to add login needed here masta */}
                   <div className=" group bg-gray-500 p-2  rounded-l-xl w-full flex justify-center bg-opacity-50">
            <LoginIcon className='h-15 w-6  transistion-color duration-700 cursor-pointer '>
            </LoginIcon>
                 <p className=' transistion-color duration-700 cursor-pointer scale-100 '>Login</p>
                 </div>

                 <div className=" group  bg-red-500 p-2  rounded-r-xl w-full flex justify-center bg-opacity-50" >
            <LogoutIcon className='text-white h-15 w-6 transistion-color duration-700 cursor-pointer'>
            </LogoutIcon >
                 <p className='text-white transistion-color duration-700 cursor-pointer scale-100'>Sign In</p>
                 </div>
                   
    </div>
  )
}

export default MenuObject