"use client"
import React from 'react'
import SearchBar from './SearchBar'
// import Login from './Login'
import HamburgerMenu from './HamburgerMenu'

const HeaderRight = () => {
  return (
  <div className="relative flex flex-row flex-start mt-4 mr-4">
      <SearchBar/>
      {/* <Login/> */}
      <HamburgerMenu/>
    </div>
  )
}

export default HeaderRight