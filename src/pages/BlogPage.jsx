import React from "react";
import { useSelector } from "react-redux";
import { ChildBlogCard } from "../components/ChildBlogCard";
import { Navbar } from "../components/Navbar";

export const BlogPage = () => {
  const { blogData } = useSelector((state) => state.root);

  return (
    <>
      <Navbar />
      <div className="homePage mx-auto px-4 py-8 relative">
        <h1 className="text-2xl font-bold mb-6 text-center">Publish Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogData.map((blog) => (
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
    </>
  );
};
