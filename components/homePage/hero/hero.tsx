"use client";
import React from "react";
import HeroSvg from "./heroSvg";
import { useRouter } from "next/navigation";

interface TransportHeroProps {
  className?: string;
}
const TransportHero: React.FC<TransportHeroProps> = ({ className = "" }) => {
  const router = useRouter();
  const HandleSignUp = () => router.push("/signup");
  const HandleSignin = () => router.push("/signin");

  return (
    <section className={`my-[100px] md:my-[200px] ${className}`}>
      {/* Background decorative blobs */}
      <div className="m-0 p-0"></div>

      {/* Main content */}
      <div className="md:max-w-[95vw]">
        <div className="grid lg:grid-cols-2 items-center justify-center gap-8">
          {/* Left Content Section */}
          <div className="flex flex-col justify-center space-y-8 lg:pr-8 md:ml-[180px] mx-[16px] md:mx-4">
            <div className="space-y-6 md:mr-20">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight pr-[30px] md:pr-[25px] lg:pr-[50px]">
                Ready for your Next{" "}
                <span className="text-yellow-500">Transport</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-700 md:max-w-md leading-relaxed break-words">
                Our prices will shock you. Book your move online, manage your
                inventory, and get instant price — all in one place
              </p>
            </div>

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
