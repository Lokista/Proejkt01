import React from "react";
import Link from "next/link";
import { LoginIcon, LogoutIcon } from "@heroicons/react/outline";

function Links() {
  return (
    <div className="flex">
      <div className="hidden lg:flex sm:space-x-3 lg:scale-75 xl:scale-100 lg:space-x-3 xl:space-x-12 flex-auto  xl:pl-28">
        <Link href="/">
          <a className=" hover:text-gray-100 space-x-1 tracking-widest transistion-color duration-700 ">
            Home
          </a>
        </Link>
        <Link href="/">
          <a className=" hover:text-gray-100 space-x-1 tracking-widest transistion-color duration-700 ">
            Shop
          </a>
        </Link>
        <Link href="/">
          <a className=" hover:text-gray-100 space-x-1 tracking-widest transistion-color duration-700 ">
            Gallery
          </a>
        </Link>
        <Link href="/">
          <a className=" hover:text-gray-100 space-x-1 tracking-widest transistion-color duration-700 ">
            Contact
          </a>
        </Link>
      </div>

      <div className=" hidden md:flex items-center text-white scale-75 lg:flex-none flex-auto ">
        <div className=" group flex bg-gray-500 p-2 hover:scale-105 rounded-l-xl  ">
          <LoginIcon className="h-15 w-6  transistion-color duration-700 cursor-pointer "></LoginIcon>
          <p className="hidden lg:flex transistion-color duration-700 cursor-pointer scale-100 ">
            Login
          </p>
        </div>

        <div className=" group flex bg-red-500 p-2 hover:scale-105 rounded-r-xl ">
          <LogoutIcon className="h-15 w-6 transistion-color duration-700 cursor-pointer"></LogoutIcon>
          <p className="hidden text-white lg:flex transistion-color duration-700 cursor-pointer scale-100">
            Sign In
          </p>
        </div>
      </div>
    </div>
  );
}

export default Links;
