"use client"
import React from 'react'
import HeaderLeft from './HeaderLeft/HeaderLeft';
import HeaderMiddle from './HeaderMiddle/HeaderMiddle';
import HeaderRight from './HeaderRight/HeaderRight';


const HeaderComponent = () => {
  return (
    <>
      <header className=" w-screen bg-white my-[1rem] mx-[50px]">
      <div className="container flex flex-row justify-between items-center">
        <HeaderLeft/>
        <HeaderMiddle/>
        <HeaderRight/>
      </div>
      </header>
    </>
  )
}

export default HeaderComponent