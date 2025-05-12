import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const CoursesSlider = () => {
  const navigate = useNavigate();
  const { courseData } = useSelector((state) => state.root);
  const displayedCourses = courseData.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-10 cursor-pointer">
      <h1 className="text-3xl font-bold text-center mb-10">
        Available Courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedCourses.map((course) => (
          <div
            key={course.id}
            onClick={() => navigate("/courses")}
            className="bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={`https://abhinash.itflyweb.cloud/api/${course.thumbnail_image}`}
                alt={course.title}
                className="w-full h-48 object-cover"
              />

              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                {course.discount}% OFF
              </span>
            </div>

            <div className="p-5 space-y-2">
              <h2 className="text-lg font-semibold text-gray-800">
                {course.title}
              </h2>
              <p className="text-sm text-gray-600">{course.description}</p>

              <div className="flex flex-wrap items-center text-sm text-gray-700 gap-5">
                <span>👨‍🏫 By {course.instructor}</span>
                <span>🔍 {course.level}</span>
              </div>

              <div className="flex items-center text-sm text-gray-700 gap-8">
                <span>⏰ {course.duration}</span>
                <span>🎓 {course.lessons} Lessons</span>
              </div>

              <div className="text-md font-semibold text-blue-600">
                ${course.discounted_price}
                {
                  <span className="ml-2 text-sm text-gray-500 line-through">
                    ${course.original_price}
                  </span>
                }
              </div>

              {/* View Course Button */}
              <button className="mt-3 w-full bg-blue-600 hover:bg-blue-900 text-white text-sm font-semibold py-2 px-4 rounded cursor-pointer">
                View Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
