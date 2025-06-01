import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { hideLoading, setAlertData, showLoading } from "../redux/rootSlice";
import { Loader } from "../components/Loader";
import { Navbar } from "../components/Navbar";
import ShareIcon from "@mui/icons-material/Share";
import { Tooltip, IconButton, Snackbar } from "@mui/material";

export const BlogDetailPage = () => {
  const { blogId } = useParams();
  const [contentData, setContentData] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  // console.log(contentData);
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
      dispatch(
        setAlertData({
          type: "error",
          message: error,
        })
      );
    } finally {
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getBlogContent();
  }, [blogId]);

  const handleShareClick = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setOpenSnackbar(true);
      })
      .catch((err) => {
        dispatch(
          setAlertData({
            type: "error",
            message: err,
          })
        );
      });
  };

  return (
    <>
      <Navbar />
      {!contentData ? (
        <Loader />
      ) : (
        <div className="bg-primary flex justify-center px-4 py-10 mt-10">
          <div className="w-full max-w-4xl flex flex-col gap-6 text-white overflow-hidden break-words">
            {/* Blog Image */}
            <img
              src={`https://abhinash.itflyweb.cloud/api/${contentData.image_path}`}
              alt="Blog Image"
              className="h-80 w-full object-cover rounded"
            />

            {/* Blog Header Info */}
            <div className="mb-6">
              <p className="py-2 px-4 border-l-4 border-gray-300 italic text-xl text-gray-50">
                "{contentData.section_title}"
              </p>

              <div className="flex justify-between items-center text-sm text-gray-50 mt-2 px-2 py-3 rounded-md shadow-sm">
                <p className="font-medium">by Pinki</p>

                <div className="flex items-center gap-4">
                  <p className="text-gray-50">
                    Created: {contentData.created_at.split(" ")[0]}
                  </p>

                  {/* Snackbar */}
                  <Snackbar
                    open={openSnackbar}
                    autoHideDuration={3000}
                    onClose={() => setOpenSnackbar(false)}
                    message="Link copied to clipboard!"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                  />

                  {/* Share Icon */}
                  <Tooltip title="Share this Course">
                    <IconButton
                      onClick={handleShareClick}
                      className="hover:scale-110 transition-transform"
                    >
                      <ShareIcon
                        className="text-blue-600"
                        style={{ fontSize: "2rem" }}
                      />
                    </IconButton>
                  </Tooltip>
                </div>
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
