"use client";
import Image from "next/image";

interface FeedbackCardProps {
  text: string;
  name: string;
  location: string;
  avatar: string;
}

export default function FeedbackCard({
  text,
  name,
  location,
  avatar,
}: FeedbackCardProps) {
  return (
    <div className="rounded-xl bg-[#FFFAE6] min-w-[268px] min-h-[184px] px-6 py-3 flex flex-col justify-between shadow-sm">
      {/* Quote icon placeholder */}
      <div className="text-3xl mb-4 text-[#212121]">
        <Image
          src="/quote-up.svg"
          alt={name}
          width={24}
          height={24}
          className="rounded-full"
        />
      </div>

      {/* Feedback text */}
      <p className="text-[#212121]/80 text-justify font-family-[Poppins] mb-6 text-xs leading-relaxed">
        “{text}”
      </p>

      {/* User info */}
      <div className="flex items-center gap-3">
        <Image
          src={avatar}
          alt={name}
          width={32}
          height={32}
          className="rounded-full"
        />
        <div>
          <p className="font-semibold text-md text-[#212121]">{name}</p>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
      </div>
    </div>
  );
}

 