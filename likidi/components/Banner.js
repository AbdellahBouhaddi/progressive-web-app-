import React from 'react'
import Image from 'next/image'

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] xl:h-[500px] 2xl:h-[600px] ">
      {/* l'image de la bannier' */}
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        {/* le text qui safiche */}
        <p className="text-sm sm:text-lg">on va modiffier cette bannier </p>
        {/* le boutton clickable  */}
        <button
          className="text-sm md:text-lg font-bold
         text-purple-500 shadow-md 
         bg-white px-5 py-2 border-2 rounded-full hover:shadow-xl active:scale-90 transition duration-150"
        >
          a'm flexible
        </button>
      </div>
    </div>
  )
}

export default Banner
