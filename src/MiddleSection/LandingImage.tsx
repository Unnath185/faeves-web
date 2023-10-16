"use client"

import React from 'react';
import Image from 'next/image';

const LandingImage = () => {
  return (
    <div className="ml-12 mr-14">
        <div className="relative h-[30rem]">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Image
                src="/landingImg.jpg"
                alt="landing Image description"
                layout="fill"
                objectFit="cover"
                />
            </div>
            <div className="absolute inset-0 flex flex-col items-center bg-black bg-opacity-30 justify-center text-white">
                <h1 className="text-7xl font-bold pr-[16rem]">ULTIMATE SELF</h1>
                <h1 className="text-7xl font-bold pb-6 pl-[17rem]">CARE ROUTINE</h1>
                <p className="text-[20px] font-normal">Brands that constantly researches & develops for better ingredients and best effects</p>
            </div>
        </div>
        <div className="flex flex-row justify-center mt-6">
            <h2 className="text-[20px] font-bold mr-[12px] cursor-pointer">NEW</h2>
            <span className="mr-[12px] text-2xl text-gray-400"> | </span>
            <h2 className="text-[20px] font-bold mr-[12px] text-gray-400 cursor-pointer hover:text-black">BESTSELLERS</h2>
            <span className="mr-[12px] text-2xl text-gray-400"> | </span>
            <h2 className="text-[20px] font-bold mr-[12px] text-gray-400 cursor-pointer hover:text-black">CLEAN BEAUTY</h2>
        </div>
    </div>
  );
};

export default LandingImage;


