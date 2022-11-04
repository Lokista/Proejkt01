import React from 'react'
import Image from 'next/image'
import picture from '/public/images/shoe.jpg'
import Link from 'next/link'
import { LoginIcon, LogoutIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import Menu from './Menu'
import MenuObject from './MenuObject'
import { useState } from "react"
import { ContextMenu , activeMenu } from '../Context'
import { useAuth } from '../Context/AuthContext'
import { useRouter } from 'next/router'
import { useSelector } from "react-redux"
import { selectItems } from "../../Redux/BasketSlice"

function Header() {
    const { user , logout} = useAuth()
    const router = useRouter()
    const items = useSelector(selectItems)

    const [isClicked , setIsClicked] = useState(false)

  return (
    <header className= ' '>
      <div className="bg-elementC flex sticky top-0 z-70 text-red-500 p-2 justify-items-center items-center py-2">
        <div className='flex space-x-3 items-center mr-5 basis-1/7'>
            <Image 
            className="rounded-full cursor-pointer hover:opacity-10 hover:bg-transparent scale-90 sm:scale-100"
            src={picture}
            alt="xd"
            width={50}
            height={50}
            layout="fixed"
            />
              <Link href="/">
                   <a className="hidden sm:flex  link2 ">
                       SHOEP
                   </a>
              </Link> 
        </div>

        <div className='flex rounded-l-md items-center h-10 rounded-r-md cursor-pointer md:flex-auto flex-grow-0  '>
            <input  placeholder="In development" className=' rounded-l-md p-2 h-full flex-shrink focus:outline-none text-black flex-grow' type="text" />
            <SearchIcon className='transition-color duration-700 h-10 p-2 bg-red-500 text-white hover:bg-gray-500 hover:scale-105 rounded-r-md'/>

        </div>

        <div className='hidden lg:flex sm:space-x-3 lg:scale-75 xl:scale-100 lg:space-x-3 xl:space-x-12 flex-auto  xl:pl-28'>
         <Link href="/">
                   <a className=" link2 ">
                       Home</a>
                   
                   </Link> 
                   <Link href="/Shop">
                   <a className=" link2 ">
                       Shop</a>
                   
                   </Link> 
                   <Link href="/Gallery">
                   <a className=" link2 ">
                   Gallery</a>
                   
                   </Link> 
                   <Link href="/Contact">
                   <a className=" link2 ">
                       Contact</a>
                   </Link> 
        </div>

        <div className=' hidden md:flex items-center text-white scale-75 lg:flex-none flex-auto '>

{/* function to add login needed here masta */}
            { user ?
            ( 
        <div className='flex'>

              <Link href="/Checkout" passHref>
                <div className='relative flex w-20'>
                <ShoppingCartIcon className=' h-15 w-14 transistion-color duration-700 cursor-pointer'>
                </ShoppingCartIcon>
                 <div className='absolute text-gray-100 left-12 font-bold text-xl w-4 text-center
                  bg-red-700 rounded-full '> { items.length} </div>
                  </div>
              </Link>


           <div onClick={() => {
              logout() 
              router.push('/Login')
            }}
            className="hidden lg:flex group bg-red-500 p-2 hover:scale-105 rounded-xl">
            <LogoutIcon className='h-15 w-6  transistion-color duration-700 cursor-pointer '>
            </LogoutIcon>
                 <p className='hidden lg:flex transistion-color duration-700 cursor-pointer scale-100 '>Logout</p>
           </div>
        </div>
            )

            :
                 (<>

                 <Link href="/Login" passHref >
                   <div className="hidden lg:flex group bg-gray-500 p-2 hover:scale-105 rounded-l-xl  ">
            <LoginIcon className='h-15 w-6  transistion-color duration-700 cursor-pointer '>
            </LoginIcon>
                 <p className='hidden lg:flex transistion-color duration-700 cursor-pointer scale-100 '>Login</p>
                 </div>
                 </Link>


                 <Link href="/SignUp" passHref>
                 <div className=" hidden lg:flex group  bg-red-500 p-2 hover:scale-105 rounded-r-xl " >
            <LogoutIcon className='h-15 w-6 transistion-color duration-700 cursor-pointer'>
            </LogoutIcon >
                 <p className='hidden text-white lg:flex transistion-color duration-700 cursor-pointer scale-100'>Sign up</p>
                 </div>
                 </Link>
                 </>
                 )
                 }
                 
                 
        </div>
        {console.log(isClicked)}
        <ContextMenu.Provider value={{isClicked , setIsClicked}} >

        <Menu>
        </Menu>

        </ContextMenu.Provider>

        </div>

        {isClicked && <MenuObject>
        </MenuObject>}

        </header>
  )
}

export default Header