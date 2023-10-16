"use client"

import React from 'react'
import Image from 'next/image'

const HeaderMiddle = () => {
  return (
     <div className="container w-1/3 flex space-x-4 justify-center ">
        <a href="
        ">
        <Image
          src="https://faeves-fr.vercel.app/images/faeves_logo.svg"
          alt="Image Link"
          width={160}
          height={60}
        />
        </a>
      </div>
   
  )
}

export default HeaderMiddle


