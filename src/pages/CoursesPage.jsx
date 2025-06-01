import React, { useState } from "react";
import { CourseCard } from "../components/ChildCourseCard";
import { useSelector } from "react-redux";
import { Navbar } from "../components/Navbar";

export const CoursesPage = () => {
  const { courseData } = useSelector((state) => state.root);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6; // Number of courses to display per page

  // Calculate the current courses to display
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courseData.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  // Pagination logic
  const totalPages = Math.ceil(courseData.length / coursesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to render pagination buttons
  const renderPagination = () => {
    const paginationButtons = [];

    // Previous button
    if (currentPage > 1) {
      paginationButtons.push(
        <button
          key="prev"
          onClick={() => handlePageChange(currentPage - 1)}
          className="mx-1 px-2 py-1 rounded-md bg-gray-300 text-black hover:bg-primary hover:text-white transition duration-300"
        >
          Previous
        </button>
      );
    }

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        paginationButtons.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`mx-1 px-2 rounded-md transition duration-300 ${
              currentPage === i
                ? "bg-primary text-white"
                : "bg-gray-300 text-black hover:bg-primary hover:text-white"
            }`}
          >
            {i}
          </button>
        );
      } else if (paginationButtons[paginationButtons.length - 1] !== "...") {
        paginationButtons.push(
          <span key={`ellipsis-${i}`} className="mx-1">
            ...
          </span>
        );
      }
    }

    // Next button
    if (currentPage < totalPages) {
      paginationButtons.push(
        <button
          key="next"
          onClick={() => handlePageChange(currentPage + 1)}
          className="mx-1 px-2 py-1 rounded-md bg-gray-300 text-black hover:bg-primary hover:text-white transition duration-300"
        >
          Next
        </button>
      );
    }

    return paginationButtons;
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Available Courses
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCourses.map((course) => (
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

        {/* Pagination Controls */}
        <div className="flex justify-center mt-6">{renderPagination()}</div>
      </div>
    </>
  );
};
