"use client"
import React from 'react'
import SearchBar from './SearchBar'
import Login from './Login'
import HamburgerMenu from './HamburgerMenu'

const HeaderRight = () => {
  return (
  <div className="w-1/3 flex flex-row flex-start ">
    <div className="w-full flex">
      <SearchBar/>
      <Login/>
      <HamburgerMenu/>
    </div>
  </div>
  )
}

export default HeaderRight