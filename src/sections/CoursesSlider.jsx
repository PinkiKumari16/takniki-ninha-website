import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CourseCard } from "../components/ChildCourseCard";
import { Tooltip } from "@mui/material";

export const CoursesSlider = () => {
  const navigate = useNavigate();
  const { courseData } = useSelector((state) => state.root);
  const displayedCourses = courseData.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-10 cursor-pointer">
      <div className="flex justify-between">
        <h1 className="text-3xl text-border-color font-bold">
          Available Courses
        </h1>
        <Tooltip title="View More Courses">
          <p
            className="text-border-color px-3 py-2 font-bold hover:text-blue-800 bg-gray-300 rounded-3xl"
            onClick={() => navigate("/courses")}
          >
            More...
          </p>
        </Tooltip>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {displayedCourses.map((course) => (
          <CourseCard
            key={course.id}
            courseId={course.id}
            title={course.title}
            thumbnail={course.thumbnail_image}
            shortDescription={course.description}
            createdBy={course.instructor}
            level={course.level}
            courseDuration={course.duration}
            totalLecture={course.lessons}
            discount={course.discount}
            realPrice={course.original_price}
            discountedPrice={course.discounted_price}
          />
        ))}
      </div>
    </div>
  );
};
