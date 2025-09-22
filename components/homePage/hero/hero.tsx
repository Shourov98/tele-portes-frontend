'use client'
import React from 'react';

import HeroSvg from './heroSvg';
import { useRouter } from 'next/navigation';

interface TransportHeroProps {
  className?: string;
}
const TransportHero: React.FC<TransportHeroProps> = ({ className = "" }) => {
  const router = useRouter();
  const HandleSignUp = () => {
    router.push('/signup');
  };
  const HandleSignin = () => {
    router.push('/signin');
  };
  
  return (
  <section
  className={``}
>
  {/* Background decorative blobs */}
  <div className="absolute inset-0 opacity-40 -z-10">
    <div className="absolute top-[450px] left-0 w-72 h-72 bg-[#FFFAE6] rounded-full blur-3xl"></div>
   
  </div>

  <div className="relative top-[250px] left-[70px] ">
    <div className="grid lg:grid-cols-2  items-center justify-center ">
      {/* Left Content Section */}
      <div className="flex flex-col justify-center md:ml-[190] lg:justify-end space-y-8 lg:pr-8">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Ready for your
            <br />
            Next <span className="text-yellow-500">Transport</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-700 max-w-md leading-relaxed">
            Our prices will shock you. Book your move online, manage your
            inventory, and get instant price — all in one place
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-fit">
          <button onClick={HandleSignUp}
            className="px-8 py-4 bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium text-base rounded-xl transition-all duration-200 hover:shadow-md"
            type="button"
          >
            Signup
          </button>
          <button onClick={HandleSignin}
            className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium text-base rounded-xl transition-all duration-200 hover:shadow-md"
            type="button"
          >
            Login
          </button>
        </div>
      </div>

      {/* Right Illustration Section */}
      <div className="relative flex justify-center md:justify-start">
        <div className="w-full max-w-2xl"><HeroSvg/></div>
      </div>
    </div>
  </div>



</section>

  );
};

export default TransportHero;