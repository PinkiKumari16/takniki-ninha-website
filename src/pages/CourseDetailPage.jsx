import React, { use, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { hideLoading, setAlertData, showLoading } from "../redux/rootSlice";
import axios from "axios";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Navbar } from "../components/Navbar";
import ShareIcon from "@mui/icons-material/Share";
import { Tooltip, IconButton } from "@mui/material";
import VideoPlayer from "../components/VideoPlayer";
import { parse } from "postcss";

export const CourseDetailPage = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [openSectionId, setOpenSectionId] = useState(null);
  const [activeVideoUrl, setActiveVideoUrl] = useState("");

  useEffect(() => {
    const getOneCourseData = async () => {
      try {
        dispatch(showLoading());
        const res = await axios.get(
          `https://abhinash.itflyweb.cloud/api/getCourseDetails.php?course_id=${courseId}`
        );
        if (res.status === 200) {
          setCourse(res.data);
        } else {
          dispatch(setAlertData({ type: "error", message: res.statusText }));
        }
      } catch (error) {
        dispatch(
          setAlertData({
            type: "error",
            message: "Failed to fetch course data: " + error.message,
          })
        );
      } finally {
        dispatch(hideLoading());
      }
    };

    getOneCourseData();
  }, [courseId]);
  const handleShareClick = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        dispatch(
          setAlertData({
            type: "success",
            message: "✅ Link copied to clipboard!",
          })
        );
      })
      .catch((err) => {
        dispatch(
          setAlertData({
            type: "error",
            message: "❌ Failed to copy link: " + err.message,
          })
        );
      });
  };
  const handleBuyClick = () => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (user && token) {
      navigate("/reverify-payment/" + courseId);
    } else {
      dispatch(
        setAlertData({
          type: "warning",
          message: "Please login to purchase this course.",
        })
      );
      navigate(`/login?from=/courses/${courseId}`);
    }
  };

  return (
    <>
      <Navbar />
      {course && (
        <div className="container mx-auto md:px-6 py-10 space-y-10 mt-16">
          {/* Course Overview */}
          <div className="bg-primary text-white border border-gray-200 rounded-lg shadow-lg p-6">
            <h1 className="text-2xl md:text-3xl font-extrabold mb-4">
              {course.title}
            </h1>
            <p className="md:text-lg text-gray-300 mb-6">
              {course.description}
            </p>
            <div className="flex flex-wrap text-sm text-gray-300 gap-6">
              <span>👨‍🏫 {course.instructor}</span>
              <span>🌐 {course.language}</span>
              <span>⏰ {course.duration}</span>
              <span>📚 {course.lessons} lessons</span>
            </div>
          </div>

          {/* Course Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Section */}
            <div className="md:col-span-2 space-y-8">
              <div className="bg-white border rounded-lg shadow p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Course Sections
                </h2>

                <ul className="space-y-4">
                  {course.sections.map((section) => {
                    const isOpen = openSectionId === section.id;
                    return (
                      <li key={section.id} className="border rounded-lg">
                        <button
                          onClick={() =>
                            setOpenSectionId(isOpen ? null : section.id)
                          }
                          className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
                        >
                          <div>
                            <h3 className="text-lg font-semibold">
                              {section.section_title}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {section.lecture_count} lectures •{" "}
                              {section.total_duration} min
                            </p>
                          </div>
                          {isOpen ? <ExpandMoreIcon /> : <ChevronRightIcon />}
                        </button>

                        {isOpen && (
                          <ul className="px-6 pb-4 space-y-2">
                            {section.lectures.map((lecture, idx) => (
                              <li
                                key={idx}
                                className="text-gray-700 text-sm flex justify-between py-5 cursor-pointer hover:text-blue-600"
                              >
                                <a
                                  onClick={() => {
                                    // setActiveVideoUrl(lecture.videoUrl);
                                    setActiveVideoUrl(
                                      "https://www.youtube.com/watch?v=_zSZXBdYOjc"
                                    );
                                    setActiveLectureTitle(
                                      lecture.lecture_title
                                    );
                                  }}
                                  className="flex-1 cursor-pointer"
                                >
                                  <strong>▶️ {lecture.lecture_title}</strong>
                                </a>
                                <span>{lecture.duration}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {activeVideoUrl && (
              <VideoPlayer
                activeVideoUrl={activeVideoUrl}
                setActiveVideoUrl={setActiveVideoUrl}
              />
            )}

            {/* Right Section */}
            <div className="space-y-6">
              <div className="bg-white border rounded-lg shadow p-6 space-y-8">
                {/* Thumbnail */}
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={`https://abhinash.itflyweb.cloud/api/${course.thumbnail_image}`}
                    alt={course.title}
                    className="w-full h-auto"
                  />
                </div>

                {/* Price & Button */}
                <div className="space-y-4">
                  <div className="flex justify-between text-3xl font-bold text-blue-600">
                    <div>
                      ₹{course.discounted_price}
                      <span className="text-xl text-gray-500 line-through ml-2">
                        ₹{course.original_price}
                      </span>
                    </div>
                    <Tooltip title="Share this Course">
                      <IconButton onClick={handleShareClick}>
                        <ShareIcon className="text-blue-600 hover:scale-110 transition-transform" />
                      </IconButton>
                    </Tooltip>
                  </div>

                  <button
                    className="text-xl font-bold w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-900"
                    onClick={handleBuyClick}
                    // onClick={() =>

                    //   // initiatePayment(dispatch, course.discounted_price)
                    //   navigate("/reverify-payment/" + courseId)
                    // }
                  >
                    Buy Now
                  </button>

                  <p className="text-gray-500 text-center">
                    Purchase this course to get lifetime access.
                  </p>
                </div>

                {/* Course Stats */}
                <div className="text-gray-700">
                  <h4 className="font-semibold text-lg">
                    This course includes:
                  </h4>
                  <p>🎓 Total Lectures: {course.lessons}</p>
                  <p>⏰ Duration: {course.duration}</p>
                  <p>📘 Level: {course.level}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
