import React from 'react'
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  GlobeAltIcon,
  UsersIcon,
  HeartIcon,
} from '@heroicons/react/solid'
function MFooter() {
  return (
    <div
      className="flex  items-center justify-center   space-x-10 sm:hidden md:hidden xl:hidden 2xl:hidden
     sticky bottom-0 z-50    bg-white p-2 "
    >
      <div className="flex-grow-0items-center justify-items-center">
        <SearchIcon className=" h-10 pl-2.5 cursor-pointer" />
        <h1 className="text-xs">becom host</h1>
      </div>
      <div className="flex-grow-0items-center justify-items-center">
        <HeartIcon className=" h-10 pl cursor-pointer stroke-black text-transparent " />
        <h1 className="text-xs">favories</h1>
      </div>
      <div className="flex-grow-0items-center justify-items-center">
        <UserCircleIcon className=" h-10 pl-2.5 cursor-pointer" />
        <h1 className="text-xs">connection</h1>
      </div>
    </div>
  )
}

export default MFooter
