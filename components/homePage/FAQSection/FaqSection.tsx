"use client";
import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    id: 1,
    question: "What services do we offer?",
    answer:
      "We provide moving, furniture transport, storage, and professional packing services tailored to your needs.",
  },
  {
    id: 2,
    question: "How to hire?",
    answer:
      "You can book our services online through our website, or contact our support team directly for a personalized quote.",
  },
  {
    id: 3,
    question: "What happens if something breaks?",
    answer:
      "All items are handled with care, but in case of damage, we provide insurance coverage and compensation.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-10 w-10/12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#212121]">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border rounded-lg p-4 cursor-pointer transition"
            onClick={() => toggle(faq.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* left question mark icon */}
                <Image
                  src="/help-circle.svg"
                  alt="Question"
                  width={20}
                  height={20}
                />
                <h3 className="font-semibold text-[#212121]">{faq.question}</h3>
              </div>

              {/* plus or minus */}
              <Image
                src={
                  openIndex === faq.id
                    ? "/Vector.svg"
                    : "/add-01.svg"
                }
                alt="toggle"
                width={20}
                height={20}
              />
            </div>

            {openIndex === faq.id && (
              <p className="mt-3 text-gray-600 text-sm md:text-base">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

 