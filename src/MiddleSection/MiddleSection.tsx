import React from 'react'
import LandingImage from './LandingImage'
import { Carousel } from './Carousel'

const MiddleSection = () => {
  return (
    <div className="flex flex-col">
        <LandingImage/>
        <Carousel/>
    </div>
  )
}

export default MiddleSection
