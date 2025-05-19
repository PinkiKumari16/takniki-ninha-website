import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ChildBlogCard } from "../components/ChildBlogCard";
import { Tooltip } from "@mui/material";

export const BlogSlider = () => {
  const { blogData } = useSelector((state) => state.root);
  const navigate = useNavigate();
  const displayedBlog = blogData.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-blue-800">Published Blogs</h1>
        <Tooltip title="View More Blogs">
          <p
            className="text-blue-800 cursor-pointer font-bold px-3 py-2 bg-gray-300 rounded-3xl hover:text-border-color"
            onClick={() => navigate("/blogs")}
          >
            More...
          </p>
        </Tooltip>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {displayedBlog.map((blog) => (
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
    </div>
  );
};
