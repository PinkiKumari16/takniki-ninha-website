import React from "react";
import { useNavigate } from "react-router-dom";

export const ChildBlogCard = ({
  blog_id,
  title,
  blog_name,
  short_description,
  image_path,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/blogs/" + blog_id);
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Blog Image */}
      <div onClick={handleCardClick} className="cursor-pointer relative">
        <img
          className="w-full h-48 object-cover"
          src={`https://abhinash.itflyweb.cloud/api/${image_path}`}
          alt={blog_name}
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-2">
        <h3
          onClick={handleCardClick}
          className="text-xl font-semibold text-center text-gray-800 hover:text-blue-600 cursor-pointer"
        >
          {blog_name}
        </h3>

        <p className="text-base font-medium text-gray-700">{title}</p>

        <p className="text-sm text-gray-600 line-clamp-3">
          {short_description}
        </p>

        {/* View Button */}
        <button
          onClick={handleCardClick}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 cursor-pointer"
        >
          View More Details
        </button>
      </div>
    </div>
  );
};
