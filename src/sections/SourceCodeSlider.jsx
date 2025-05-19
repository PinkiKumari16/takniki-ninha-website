import React from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";
import ChildSourceCodeCard from "../components/ChildSourceCodeCard";

export const SourceCodeSlider = () => {
  //   const { blogData } = useSelector((state) => state.root);
  const navigate = useNavigate();
  
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
    const displayedBlog = sourceCodeData.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-blue-800">Source Code</h1>
        <Tooltip title="View More Source Code">
          <p
            className="text-blue-800 cursor-pointer font-bold px-3 py-2 bg-gray-300 rounded-3xl hover:text-border-color"
            onClick={() => navigate("/source-code")}
          >
            More...
          </p>
        </Tooltip>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {displayedBlog.map((sourceCode) => (
          <ChildSourceCodeCard key={sourceCode.id} sourseCode={sourceCode} />
        ))}
      </div>
    </div>
  );
};
