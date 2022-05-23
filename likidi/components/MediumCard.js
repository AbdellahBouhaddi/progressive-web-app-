import React from 'react'
import Image from 'next/image'

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer  hover:scale-105 transform transtion duration-300 ease-out">
      <div className="relative  h-40 w-44 md:h-80 md:w-80">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-2xl text-black mt-5 ">{title}</h3>
    </div>
  )
}

export default MediumCard
