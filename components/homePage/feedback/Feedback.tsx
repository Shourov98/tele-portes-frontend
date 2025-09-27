"use client";
 
import { useState } from "react";
import FeedbackCard from "./FeedbackCard";
 
// Mock data – repeated 8 times
const feedbacks = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  text: "The team was professional, quick, and very careful with my furniture. They even reassembled my wardrobe perfectly. Highly recommend!",
  name: "Isabella Rodriguez",
  location: "Location",
  avatar: "/Ellipse 125.svg", // replace with your avatar path
}));


 
export default function FeedbackSection() {
  const [showAll, setShowAll] = useState(false);
 
  const showAllFeedbacks = showAll ? feedbacks : feedbacks.slice(0, 4);
 
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#212121]">
          Words of praise from others <br /> about our service
        </h2>
      </div>
 
      <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {feedbacks.map((fb) => (
          <FeedbackCard
            key={fb.id}
            text={fb.text}
            name={fb.name}
            location={fb.location}
            avatar={fb.avatar}
          />
        ))}
      </div>

   
 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4 max-w-6xl mx-auto">
        {showAllFeedbacks.map((fb) => (
          <FeedbackCard
            key={fb.id}
            text={fb.text}
            name={fb.name}
            location={fb.location}
            avatar={fb.avatar}
          />
        ))}
      </div>
      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-6 text-[#212121] bg-[#FFCF00] px-6 py-2 rounded-md font-semibold lg:hidden"
      >
        {showAll ? "Show Less" : "Show More"}
      </button>
    </section>
  );
}