"use client"
import React from 'react'
import HeaderLeft from './HeaderLeft/HeaderLeft';
import HeaderMiddle from './HeaderMiddle/HeaderMiddle';
import HeaderRight from './HeaderRight/HeaderRight';


const HeaderComponent = () => {
  return (
    <>
      <header className="fixed w-screen bg-white my-[2rem] mx-[8rem]">
      <div className="container  flex justify-between items-center">
        <HeaderLeft/>
        <HeaderMiddle/>
        <HeaderRight/>
      </div>
      </header>
    </>
  )
}

export default HeaderComponent