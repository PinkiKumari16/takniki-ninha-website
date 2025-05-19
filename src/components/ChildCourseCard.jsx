import React from "react";
import { useNavigate } from "react-router-dom";

export const CourseCard = ({
  courseId,
  title,
  thumbnail,
  shortDescription,
  createdBy,
  level,
  courseDuration,
  totalLecture,
  discount,
  realPrice,
  discountedPrice,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow shadow-border-color duration-300 cursor-pointer"
      onClick={() => navigate("/courses/" + courseId)}
    >
      <div className="relative">
        <img
          src={`https://abhinash.itflyweb.cloud/api/${thumbnail}`}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          {discount}% OFF
        </span>
      </div>

      {/* Course Details */}
      <div className="p-5 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 line-clamp-3">{shortDescription}</p>

        <div className="flex flex-wrap items-center text-sm text-gray-700 gap-2">
          <span>👨‍🏫 By {createdBy || "Instructor"}</span>
          <span>🔍 {level || "All Levels"}</span>
        </div>

        <div className="flex items-center text-sm text-gray-700 gap-4">
          <span>⏰ {courseDuration || "4 weeks"}</span>
          <span>🎓 {totalLecture || "12"} Lessons</span>
        </div>

        {/* Price */}
        <div className="text-md font-semibold text-blue-600">
          ${discountedPrice || realPrice}
          <span className="ml-2 text-sm text-gray-500 line-through">
            ${realPrice}
          </span>
        </div>

        <button className="mt-3 w-full bg-blue-600 hover:bg-blue-900 text-white text-sm font-semibold py-2 px-4 rounded">
          View More Details
        </button>
      </div>
    </div>
  );
};
