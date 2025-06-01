import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ChildBlogCard } from "../components/ChildBlogCard";
import { Navbar } from "../components/Navbar";

export const BlogPage = () => {
  const { blogData } = useSelector((state) => state.root);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6; // Number of blogs to display per page

  // Calculate the current blogs to display
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

  // Pagination logic
  const totalPages = Math.ceil(blogData.length / blogsPerPage);

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
      } else if (paginationButtons[paginationButtons.length - 1] !== ". . .") {
        paginationButtons.push(
          <span key={`ellipsis-${i}`} className="mx-1">
            . . .
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
      <div className="container mx-auto px-4 py-8 relative mt-16">
        <h1 className="text-2xl font-bold mb-6 text-center">Publish Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentBlogs.map((blog) => (
            <ChildBlogCard
              key={blog.id}
              blog_id={blog.id}
              blog_name={blog.blog_name}
              image_path={blog.image_path}
              title={blog.title}
              short_description={blog.short_description}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-6">{renderPagination()}</div>
      </div>
    </>
  );
};
