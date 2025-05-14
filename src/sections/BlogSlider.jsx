import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const BlogSlider = () => {
  const { blogData } = useSelector((state) => state.root);
  const navigate = useNavigate();
  const displayedBlog = blogData.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-800">
        Published Blogs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedBlog.map((blog) => (
          <div
            key={blog.id}
            onClick={() => navigate("/blogs")}
            className="bg-white rounded-xl shadow-xl shadow-border-color hover:shadow-xl border border-gray-200 overflow-hidden transition-shadow duration-300 cursor-pointer"
          >
            <div className="cursor-pointer">
              <img
                src={`https://abhinash.itflyweb.cloud/api/${blog.image_path}`}
                alt={blog.blog_name}
                className="w-full h-48 object-cover"
              />
            </div>

            <div className="p-5 space-y-2">
              <h2 className="text-xl font-semibold text-gray-800 text-center hover:text-blue-600 cursor-pointer">
                {blog.blog_name}
              </h2>

              <p className="text-base font-medium text-gray-700">
                {blog.title}
              </p>
              <p className="text-sm text-gray-600 line-clamp-3">
                {blog.short_description}
              </p>

              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 cursor-pointer">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
