"use client";
import React, { useState } from "react";
import HeroSvg from "./heroSvg";
import { useRouter } from "next/navigation";


interface TransportHeroProps {
  className?: string;
  start?: string;
  middle?: string;
  end?: string;

}
const TransportHero: React.FC<TransportHeroProps> = ({
  className = "",
  start = "",
  middle = "",
  end = "",
  
}) => {
  const [isSignin,setIsSignIn]=useState(false)
  const router = useRouter();
  const HandleSignUp = () => router.push("/signup");
  const HandleSignin = () => router.push("/signin");
  

  return (
    <section className={`my-[100px] md:my-[200px] ${className}`}>
      {/* Background decorative blobs */}
      <div className="m-0 p-0"></div>

      {/* Main content */}
      <div >
        <div className="grid lg:grid-cols-2 items-center justify-center gap-8 md:0">
          {/* Left Content Section */}
          <div className="flex flex-col justify-center space-y-8  md:ml-[180px] mx-[16px] ">
            <div className="space-y-6 md:mr-20">
              <h1 className=" sm:text-5xl text-3xl lg:text-6xl font-bold text-gray-900 leading-tight sm:pr-[30px] md:pr-[0px] lg:pr-[50px]">
                {start} <span className="text-yellow-500">{middle}</span>{end}
              </h1>

              <p className="text-base sm:text-lg text-gray-700 md:max-w-md leading-relaxed break-words">
                Our prices will shock you. Book your move online, manage your
                inventory, and get instant price — all in one place
              </p>
            </div>

           {
            !isSignin && (
               <div className="flex flex-row gap-4 w-full">
              <button
                onClick={HandleSignUp}
                className="px-8 py-4 bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium text-base rounded-xl transition-all duration-200 hover:shadow-md w-full sm:w-auto"
                type="button"
              >
                Signup
              </button>
              <button
                onClick={HandleSignin}
                className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium text-base rounded-xl transition-all duration-200 hover:shadow-md w-full sm:w-auto"
                type="button"
              >
                Login
              </button>
            </div>
            )
           }

           {
            isSignin && (
               <div className="flex flex-row gap-4 w-full">
              
              <button
                
                className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium text-base rounded-xl transition-all duration-200 hover:shadow-md w-full sm:w-auto"
                type="button"
              >
                Book Your Service Today
              </button>
            </div>
            )
           }
            
          </div>

          {/* Right Illustration Section */}
          <div className="hidden md:flex md:justify-start ml-[40px]">
            <div className="w-full md:max-w-xl lg:max-w-2xl">
              <HeroSvg />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransportHero;
