import React from 'react'
import Image from 'next/image'
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  GlobeAltIcon,
  UsersIcon,
} from '@heroicons/react/solid'

function header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-2 px-5 md:px-10">
      {/* left */}
      <div className="  relative flex items-center h-7  cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/*middle */}
      <div className="flex item-center md:border-2 rounded-full py-0.5 md:shadow-sm ">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="start your search"
        />
        <SearchIcon
          className="hidden md:inline-flex h-7
         bg-red-400 text-white rounded-full p-1.5 cursor-pointer  md:mx-2"
        />
      </div>

      {/* right */}
      <div className="flex items-center space-x-4  justify-end text-gray-500">
        <p className=" hidden md:inline  cursor-pointer">Becom a Host</p>
        <GlobeAltIcon className=" h-6   cursor-pointer" />
        <div className="flex items-center spasce-x-4 border-2 rounded-full">
          <MenuIcon className=" h-6   cursor-pointer" />
          <UserCircleIcon className=" h-6   cursor-pointer" />
        </div>
      </div>
    </header>
  )
}
export default header
