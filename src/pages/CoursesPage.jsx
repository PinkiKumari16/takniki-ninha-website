import React from "react";
import { CourseCard } from "../components/ChildCourseCard";
import { useSelector } from "react-redux";
import { Navbar } from "../components/Navbar";

export const CoursesPage = () => {
  const { courseData } = useSelector((state) => state.root);
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Available Courses
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courseData.map((course) => (
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
    </>
  );
};
