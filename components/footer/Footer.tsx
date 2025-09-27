import {  Youtube, MapPin, Phone, Mail } from 'lucide-react';
import FooterLogo from "@/public/Tele-Portes-Logo.png"
import Image from 'next/image';
import facebook from "@/public/Facebook (1).png"
import instagram from "@/public/instagram.png"
import youtube from "@/public/youtube.svg"
import twitter from "@/public/twitter.svg"
import whatsapp from "@/public/Whatsapp.svg"
import tiktok from "@/public/TikTok.svg"

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white">
      <div className="px-16 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col  gap-12">
            {/* Main content section */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
              {/* Company info section */}
              <div className="flex flex-col gap-12 w-80">
                <p className="text-white font-medium text-base leading-6 max-w-xs">
                  Effortless Moving, Delivery, and Storage — We Handle It All, So You Don&#39;t Have To.
                </p>
                
                {/* Logo */}
                <div className="w-64 h-12 relative">
                 <Image src={FooterLogo}alt="Tele-Portes Logo" layout="fill" objectFit="contain" />
                </div>
              </div>

              {/* Quick Links */}
              <div className="flex flex-col gap-3.5">
                <h4 className="text-white font-semibold text-lg leading-6">
                  Quick Links
                </h4>
                <a href="/home" className="text-white font-normal text-base leading-6 hover:text-gray-300 transition-colors">
                  Home
                </a>
              </div>

              {/* Services */}
              <div className="flex flex-col gap-3.5">
                <h4 className="text-white font-semibold text-lg leading-6">
                  Services
                </h4>
                <div className="flex flex-col gap-0">
                  <a href="/moving-service" className="text-white font-normal text-base leading-6 hover:text-gray-300 transition-colors">
                    Moving Services
                  </a>
                  <a href="/furniture-services" className="text-white font-normal text-base leading-6 hover:text-gray-300 transition-colors">
                    Furniture & Home Appliances
                  </a>
                  <a href="/storage-services" className="text-white font-normal text-base leading-6 hover:text-gray-300 transition-colors">
                    Storage Solutions
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-6">
                {/* Address */}
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-white flex-shrink-0" />
                  <p className="text-white font-normal text-base leading-6">
                    1900 W. Nickerson St. Suite 116, PMB #39<br />
                    Seattle, WA 98119
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Image src={whatsapp}alt="Whatsapp" />
                  </div>
                  <a href="tel:689296744" className="text-white font-normal text-base leading-6 hover:text-gray-300 transition-colors">
                    689296744
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-white flex-shrink-0" />
                  <a href="mailto:admin@tele-portes.com" className="text-white font-normal text-base leading-6 hover:text-gray-300 transition-colors">
                    admin@tele-portes.com
                  </a>
                </div>

                {/* Social Media */}
                <div className="flex items-center gap-6">
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <div className="w-6 h-6  rounded flex items-center justify-center">
                        <Image src={facebook}alt="Tele-Portes Logo" />
                      {/* <Facebook className="w-4 h-4 text-white" /> */}
                    </div>
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <div className="w-6 h-6 rounded flex items-center justify-center">
                         <Image src={instagram}alt="Instagram" />
                      {/* <Instagram className="w-4 h-4 text-white" /> */}
                    </div>
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <div className="w-6 h-6  rounded flex items-center justify-center">
                      <Image src={youtube}alt="Youtube" />
                    </div>
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                      <div className="w-4 h-4 bg-white  rounded-sm flex items-center justify-center">
                        <Image src={tiktok}alt="Tiktok" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-left lg:text-center">
              <p className="text-white font-medium text-base leading-6">
                © 2025 All rights reserved to Tele-Portes
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}