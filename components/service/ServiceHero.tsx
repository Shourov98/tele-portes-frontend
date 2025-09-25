"use client";
import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  buttonText?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  buttonText = "Book Your Service Today",
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-10 lg:gap-[72px] w-full max-w-[1227px] mx-auto px-4 py-12">
      {/* Left Side Image */}
      <div className="w-full md:w-1/2 lg:w-[498px] h-[300px] md:h-[560px] rounded-xl overflow-hidden flex-shrink-0">
        <Image
          src={image}
          alt={title}
          width={498}
          height={560}
          className="w-full h-full object-cover "
        />
      </div>

      {/* Right Side Content */}
      <div className="flex flex-col gap-6 md:gap-8 w-full md:w-1/2 lg:max-w-[657px]">
        {/* Title */}
        <h2 className="font-poppins font-semibold text-2xl sm:text-3xl md:text-[40px] md:leading-[48px] text-[#212121]">
          {title}
        </h2>

        {/* Description */}
        <p className="font-poppins font-normal text-base md:text-[16px] leading-[24px] text-[#212121] whitespace-pre-line">
          {description}
        </p>

        {/* Button */}
        <button className="   flex justify-center items-center px-6 md:px-[32px]py-3 md:py-[20.5px] bg-[#FFCF00] rounded-xl font-poppins font-medium text-sm md:text-[16px] leading-[24px] text-[#212121] cursor-pointer hover:bg-yellow-400 transition ">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
