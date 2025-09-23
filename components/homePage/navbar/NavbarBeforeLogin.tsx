'use client';

import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Logo from '@/components/logo';
import { HugeiconsIcon } from '@hugeicons/react'
import { Download02Icon, Home03Icon, PlusSignCircleIcon, ProfileIcon } from '@hugeicons/core-free-icons';

const Navbar: React.FC = () => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleHomeClick = () => router.push('/');
  const handleSignUpClick = () => router.push('/signup');
  const handleLoginClick = () => router.push('/signin');
  const toggleServicesDropdown = () =>
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="p-0 m-0 md:absolute top-10 md:left-1/2 md:transform md:-translate-x-1/2  md:h-[116px] w-full">
      <nav className="flex justify-between items-center px-4 md:px-16 py-4 md:py-8 w-full h-full bg-[#FFFAE6]">
        
        {/* Logo */}
        <div className="px-0 h-[40px] md:h-[50px] flex items-center">
          {/* smaller logo on mobile */}
          <Logo width="256px" />
        </div>

        {/* Desktop + Medium Menu */}
        <div className="hidden md:flex items-center gap-16 lg:gap-18 w-auto h-[256px]">
          <button 
            onClick={handleHomeClick}
            className="font-medium text-base text-gray-900 hover:text-yellow-600 transition-colors"
          >
            Home
          </button>

          {/* Services with Dropdown */}
          <div className="relative flex items-center gap-2 h-[52px]">
            <button 
              onClick={toggleServicesDropdown}
              className="flex items-center justify-center gap-2"
            >
              <span className="font-medium text-base text-gray-900 hover:text-yellow-600 transition-colors">
                Services
              </span>
              <ChevronDown
                className={`w-6 h-6 text-gray-900 transition-transform ${
                  isServicesDropdownOpen ? 'rotate-180' : ''
                }`} 
              />
            </button>

            {isServicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-[291px] bg-[#FFFAE6] rounded-lg shadow-lg border border-gray-300 z-50">
                <div className="flex flex-col">
                  <a href="#" className="px-4 py-3 border-b border-[#AEAEAE] hover:bg-yellow-50 hover:text-yellow-600">
                    Moving Services
                  </a>
                  <a href="#" className="px-4 py-3 border-b border-[#AEAEAE] hover:bg-yellow-50 hover:text-yellow-600">
                    Furniture & Home Appliance
                  </a>
                  <a href="#" className="px-4 py-3 rounded-b-lg hover:bg-yellow-50 hover:text-yellow-600">
                    Storage Solutions
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <button 
              onClick={handleSignUpClick}
              className="font-medium text-base text-gray-900 hover:text-yellow-600 transition-colors"
            >
              SignUp
            </button>
            <button 
              onClick={handleLoginClick}
              className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 rounded-xl transition-colors"
            >
              <span className="font-medium text-base text-gray-900">Login</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button (only visible on small screens) */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FFFAE6] border-t border-gray-300 shadow-md px-6 py-4 space-y-4">
         <button
  onClick={handleHomeClick}
  className="flex items-center gap-1 w-full text-left font-medium text-base text-gray-900 hover:text-yellow-600"
>
  <HugeiconsIcon icon={Home03Icon} size={16} color="currentColor" strokeWidth={1.5}/>
  Home
</button>
          <button
            onClick={toggleServicesDropdown}
            className="flex items-center gap-1 justify-start w-full font-medium text-base text-gray-900 hover:text-yellow-600"
          >
            <HugeiconsIcon icon={ProfileIcon} size={16} color="currentColor" strokeWidth={1.5}/>Services
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                isServicesDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
          {isServicesDropdownOpen && (
            <div className=" space-y-2 ml-5">
              <a href="#" className="block text-gray-900 hover:text-yellow-600">
                Moving Services
              </a>
              <a href="#" className="block text-gray-900 hover:text-yellow-600">
                Furniture & Home Appliance
              </a>
              <a href="#" className="block text-gray-900 hover:text-yellow-600">
                Storage Solutions
              </a>
            </div>
          )}
          <button
            onClick={handleSignUpClick}
            className="flex items-center gap-1 w-full text-left  text-gray-900 hover:text-yellow-600"
          >
            <HugeiconsIcon icon={PlusSignCircleIcon} size={16} color="currentColor" strokeWidth={1.5}/>SignUp
          </button>
          <button
            onClick={handleLoginClick}
            className="flex items-center w-full text-left font-medium text-base text-gray-900 hover:text-yellow-600"
          >
            <HugeiconsIcon icon={Download02Icon} size={16} color="currentColor" strokeWidth={1.5}/>Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
