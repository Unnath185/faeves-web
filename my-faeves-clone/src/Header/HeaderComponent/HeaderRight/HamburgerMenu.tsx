"use client"
import React, { useState } from 'react';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="text-gray-500 hover:text-gray-900 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          xmlns="burgerdown.svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50  mt-20 border-t-black-500 bg-gray-800 bg-opacity-50">
          <div className=" p-6 h-2/3 flex flex-row justify-evenly border-t border-black  bg-white ">

            <div className="mb-4 flex-column">
              <h2 className="text-2xl pb-1.5 font-bold  mb-2">ABOUT FAEVES</h2>
              <p className="text-2sm pb-3">Newsroom</p>
              <p className="text-2sm pb-3">Careers</p>
              <p className="text-2sm pb-3">Affiliates</p>
              <p className="text-2sm pb-3">Gift Cards</p>
              <p className="text-2sm pb-3">Checkout On Instagram</p>
            </div>
 
            <div className="mb-4 flex-column">
              <h2 className="text-2xl font-bold pb-1.5 mb-2">AMBASSADORS</h2> 
              <p className="text-2sm pb-3">The Beauty Entrepreneurs</p>
              <p className="text-2sm pb-3">The Influencers</p>
              <p className="text-2sm pb-3">The Artists</p>
              <p className="text-2sm pb-3">Wish To Join Us</p>
            </div>

            <div className="mb-4 flex-column">
              <h2 className="text-2xl font-bold pb-1.5 mb-2">DAILY FAEVES</h2>
              <p className="text-2sm pb-3">ARTICLES</p>
              <p className="text-2sm pb-3">REVIEWS</p>
              <p className="text-2sm pb-3">The Artists</p>
              <p className="text-2sm pb-3">TUTORIALS</p>
            </div>

            <div className="mb-4 flex-column">
              <h2 className="text-2xl pb-1.5 font-bold mb-2">MY Faeves</h2>
              <p className="text-2sm pb-3">Order Status</p>
              <p className="text-2sm pb-3">Beauty Insider</p>
              <p className="text-2sm pb-3">Community profile</p>
              <p className="text-2sm pb-3">Purchase History</p>
              <p className="text-2sm pb-3">Account Settings</p>
              <p className="text-2sm pb-3">Beauty Advisor</p>
              <p className="text-2sm pb-3">Recommendations</p>
              <p className="text-2sm pb-3">Beauty Offers</p>
            </div>
            
            <div className="mb-4 flex-column">
              <h2 className="text-2xl pb-1.5 font-bold mb-2">HELP</h2>
              <p className="text-2sm pb-3">Customer Service</p>
              <p className="text-2sm pb-3">Returns & Exchanges</p>
              <p className="text-2sm pb-3">Buy Online</p>
              <p className="text-2sm pb-3">Shipping</p>
              <p className="text-2sm pb-3">Billing</p>
              <p className="text-2sm pb-3">International Shipments</p>
              <p className="text-2sm pb-3">Beauty Services FAQ</p>
            </div>
            
            <div className="mb-4 flex-column">
              <h2 className="text-2xl font-bold pb-1.5 mb-2">QUICK LINKS</h2>
              <p className="text-2sm pb-3">OFFER ZONE</p>
              <p className="text-2sm pb-3">NEW LAUNCHES</p>
              <p className="text-2sm pb-3">Categories</p>
              <p className="text-2sm pb-3">Brands</p>
              <p className="text-2sm pb-3">SITEMAP</p>
            </div>

          </div>
        </div>

      )}
    </div>
   );
}


export default HamburgerMenu ;
