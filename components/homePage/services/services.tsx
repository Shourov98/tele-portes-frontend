"use client";

import Image from "next/image";

const services = [
  {
    icon: (
      <Image
        src="/truck.svg"
        alt="Truck"
        width={60}
        height={60}
      />
    ),
    title: "Moving Services",
    description: "Professional moving services tailored to your needs",
    price: "250€",
    button: "Get a Quote",
    link: "/delivery.svg",
  },
  {
    icon: <Image src="/sofa-01.svg" alt="Sofa" width={60} height={60} />,
    title: "Furniture & Home Appliances",
    description: "Move your personal belongings with us",
    price: "65€",
    button: "Get a Quote",
    link: "/services/furniture",
  },
  {
    icon: (
      <Image src="/package.svg" alt="Storage" width={60} height={60} />
    ),
    title: "Storage Solutions",
    description: "Secure storage options, flexible terms",
    price: "70€/month",
    button: "Reserve Storage",
    link: "/services/storage",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#212121] mb-12">Services</h2>

        {/* Flex layout with wrapping */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="border rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition flex-1 min-w-[280px] max-w-[340px] min-h-[360px] h-full"
            >
              {/* Icon in yellow circle */}
              <div className="w-20 h-20 rounded-full bg-[#FFCF00] flex items-center justify-center mb-4">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#212121] mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4">
                {service.description}
              </p>

              {/* Price */}
              <p className="text-sm text-[#212121] mb-6">
                <span className="mr-1">From</span>
                <span className="font-bold text-2xl">{service.price}</span>
              </p>

              {/* Button fixed at bottom */}
              <div className="mt-auto w-full">
                <a
                  href={service.link}
                  className="block w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-md transition"
                >
                  {service.button}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 