import React from "react";
import { Navbar } from "../components/Navbar";
import ChildSourceCodeCard from "../components/ChildSourceCodeCard";

export const SourceCodePage = () => {
  const sourceCodeData = [
    {
      image: "https://a.storyblok.com/f/122804/1600x1000/d8bafe91e5/system-software.webp",
      title: "Whats ChatBot Pro - send automatically...",
      author: "bhansalisoft",
      platform: "Windows",
      originalPrice: 49,
      discountedPrice: 44,
      sales: 3,
      ratings: 0,
      reviews: 0,
      isDiscounted: true,
      id:1
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZxx63qKZN1chY88OMkQF1_cW-tVTGJpQFXg&s",
      title: "Google Maps Advance Business Extractor",
      author: "bhansalisoft",
      platform: "Windows",
      originalPrice: 15,
      discountedPrice: 13,
      sales: 397,
      ratings: 4,
      reviews: 38,
      isDiscounted: true,
      id:2
    },
    // Add more items as needed
  ];
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 relative mt-16">
        <h1 className="text-2xl font-bold mb-6 text-center">Source Code</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sourceCodeData.map((sourseCode) => (
            <ChildSourceCodeCard key={sourseCode.id} sourseCode={sourseCode} />
          ))}
        </div>
      </div>
    </>
  );
};
