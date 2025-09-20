'use client';

import React, { useState } from 'react';
import { ChevronDown, } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Logo from '@/components/logo';

const Navbar: React.FC = () => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const router = useRouter();

  const handleHomeClick = () => {
    router.push('/');
  };

  const handleSignUpClick = () => {
    router.push('/signup');
  };

  const handleLoginClick = () => {
    router.push('/signin');
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[1440px] h-[116px] lg:w-full">
      <nav className="flex justify-between items-center px-16 py-8 gap-[429px] w-full h-full bg-yellow-50">
        
        {/* Logo */}
        <div className="flex-none w-[264px] h-[50px] flex items-center">
          <div className="text-center">
            <Logo/>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex-none flex items-center gap-18 w-[488px] h-[52px]">
          
          {/* Home */}
          <button 
            onClick={handleHomeClick}
            className="font-medium text-base leading-6 text-gray-900 hover:text-yellow-600 transition-colors"
          >
            Home
          </button>

          {/* Services with Dropdown */}
          <div className="relative flex items-center gap-2 h-[52px]">
            <button 
              onClick={toggleServicesDropdown}
              className="flex items-center justify-center gap-2 w-[68px] h-[52px]"
            >
                
              <span className="font-medium text-base leading-6 text-gray-900 hover:text-yellow-600 transition-colors">
                Services
              </span>
              <div><ChevronDown
                className={`w-6 h-6 text-gray-900 transition-transform ${
                  isServicesDropdownOpen ? 'rotate-180' : ''
                }`} 
              /></div>
            </button>
            
            {/* Dropdown Menu (if you want to add dropdown functionality) */}
            {isServicesDropdownOpen && (
             <div className="absolute top-full left-0 mt-2 w-[291px] bg-[#FFFAE6] rounded-lg shadow-lg border border-gray-300 z-50">
  <div className="flex flex-col">
    <a
      href="#"
      className="flex flex-row items-center px-8 py-3 w-[291px] h-[52px] min-h-[52px] bg-[#FFFAE6] border-b border-[#AEAEAE] rounded-t-[12px] font-poppins font-medium text-[16px] leading-6 text-center text-[#212121] hover:bg-yellow-50 hover:text-yellow-600"
    >
      Moving Services
    </a>
    <a
      href="#"
      className="flex flex-row items-center px-8 py-3 w-[291px] h-[52px] min-h-[52px] bg-[#FFFAE6] border-b border-[#AEAEAE] font-poppins font-medium text-[16px] leading-6 text-center text-[#212121] hover:bg-yellow-50 hover:text-yellow-600"
    >
      Furniture & Home Appliance
    </a>
    <a
      href="#"
      className="flex flex-row items-center px-8 py-3 w-[291px] h-[52px] min-h-[52px] bg-[#FFFAE6] rounded-b-[12px] font-poppins font-medium text-[16px] leading-6 text-center text-[#212121] hover:bg-yellow-50 hover:text-yellow-600"
    >
      Storage Solutions
    </a>
  </div>
            </div>

            )}
          </div>

          {/* Right Side - SignUp and Login */}
          <div className="flex items-center gap-8 w-[196px] h-[52px]">
            
            {/* SignUp */}
            <button 
              onClick={handleSignUpClick}
              className="font-medium text-base leading-6 text-gray-900 hover:text-yellow-600 transition-colors"
            >
              SignUp
            </button>

            {/* Login Button */}
            <button 
              onClick={handleLoginClick}
              className="flex justify-center items-center px-8 py-5 gap-2 w-[107px] h-[52px] bg-yellow-400 hover:bg-yellow-500 rounded-xl transition-colors"
            >
              <span className="font-medium text-base leading-6 text-gray-900">Login</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;