"use client"
import React from 'react';


function HeaderLeft() {

  return (
    <div className="container w-1/3 flex flex-start justify-between  cursor-pointer">
      {/* Section 1 */}
      <div className="flex space-x-4">
        <p className="text-black text-sm-mn-med">SHOP</p>
        <p className="text-black text-sm-mn-med">STORY</p>
        <p className="text-black text-sm-mn-med">AMBASSADORS</p>
        <p className="text-black text-sm-mn-med">DAILY FAEVES</p>
      </div>
    </div>
  );
}


export default HeaderLeft;
