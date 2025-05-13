import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/rootSlice";
import { Loader } from "../components/Loader";
import { Navbar } from "../components/Navbar";

export const BlogDetailPage = () => {
  const { blogId } = useParams();
  const [contentData, setContentData] = useState(null);
  console.log(contentData);
  const dispatch = useDispatch();

  const getBlogContent = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get(
        `https://abhinash.itflyweb.cloud/api/get_blog_contents.php?blog_id=${blogId}`
      );
      if (response.data.success) {
        setContentData(response.data.contents[0]);
      }
    } catch (error) {
      alert(error);
    } finally {
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getBlogContent();
  }, [blogId]);

  return (
    <>
      <Navbar />
      {!contentData ? (
        <Loader />
      ) : (
        <div className="bg-primary flex justify-center px-4 py-10">
          <div className="w-full max-w-4xl flex flex-col gap-6 text-white overflow-hidden break-words">
            {/* Blog Image */}
            <img
              src={`https://abhinash.itflyweb.cloud/api/${contentData.image_path}`}
              alt="Blog Image"
              className="h-80 w-full object-cover rounded"
            />

            {/* Blog Header Info */}
            <div>
              <p className="py-2 px-1 border-l-4 border-light-gray pl-4 italic text-lg">
                "{contentData.section_title}"
              </p>
              <div className="flex justify-between text-sm text-gray-300">
                <p>by Pinki</p>
                <p>Created: {contentData.created_at.split(" ")[0]}</p>
              </div>
            </div>

            {/* Blog Content */}
            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: contentData.content }}
            />
          </div>
        </div>
      )}
    </>
  );
};
