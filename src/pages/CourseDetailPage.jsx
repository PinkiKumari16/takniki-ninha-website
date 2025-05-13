import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/rootSlice";
import axios from "axios";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Navbar } from "../components/Navbar";

export const CourseDetailPage = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const [course, setCourse] = useState(null);
  const [openSectionId, setOpenSectionId] = useState(null); // For collapsible sections

  const getOneCourseData = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.get(
        `https://abhinash.itflyweb.cloud/api/getCourseDetails.php?course_id=${courseId}`
      );
      if (res.status === 200) {
        setCourse(res.data);
      } else {
        console.log(res.statusText);
      }
    } catch (error) {
      alert(error);
    } finally {
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getOneCourseData();
  }, [courseId]);

  return (
    <>
      <Navbar />
      {course && (
        <div className="container mx-auto px-6 py-10 space-y-10">
          {/* Course Overview */}
          <div className="bg-primary text-white border border-gray-200 rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-extrabold mb-4">{course.title}</h1>
            <p className="text-lg text-gray-300 mb-6">{course.description}</p>

            {/* Instructor & Language */}
            <div className="flex flex-wrap text-sm text-gray-300 gap-6">
              <span className="flex items-center gap-2">
                <span role="img" aria-label="Instructor">
                  👨‍🏫
                </span>{" "}
                {course.instructor}
              </span>
              <span className="flex items-center gap-2">
                <span role="img" aria-label="Language">
                  🌐
                </span>{" "}
                {course.language}
              </span>
              <span className="flex items-center gap-2">
                <span role="img" aria-label="Duration">
                  ⏰
                </span>{" "}
                {course.duration}
              </span>
              <span className="flex items-center gap-2">
                <span role="img" aria-label="Lessons">
                  📚
                </span>{" "}
                {course.lessons} lessons
              </span>
            </div>
          </div>

          {/* Course Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left: Course Sections */}
            <div className="md:col-span-2 space-y-8">
              <div className="bg-white border border-gray-200 rounded-lg shadow p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Course Sections
                </h2>

                <ul className="space-y-4">
                  {course.sections.map((section) => {
                    const isOpen = openSectionId === section.id;
                    return (
                      <li
                        key={section.id}
                        className="border border-gray-200 rounded-lg"
                      >
                        <button
                          onClick={() =>
                            setOpenSectionId(isOpen ? null : section.id)
                          }
                          className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 text-left"
                        >
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800">
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
                                <strong>▶️ {lecture.lecture_title}</strong>
                                {lecture.duration}
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

            {/* Right: Thumbnail and Pricing Info */}
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg shadow p-6 space-y-8">
                {/* Thumbnail */}
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={`https://abhinash.itflyweb.cloud/api/${course.thumbnail_image}`}
                    alt={course.title}
                    className="w-full h-auto"
                  />
                </div>

                {/* Price Info */}
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-blue-600">
                    ₹{course.discounted_price}
                    <span className="text-xl text-gray-500 line-through ml-2">
                      ₹{course.original_price}
                    </span>
                  </div>
                  <button className="text-xl font-bold w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-900 cursor-pointer">
                    Buy Now
                  </button>
                  <p className="text-gray-500 mt-2 text-center">
                    Purchase this course to get lifetime access.
                  </p>
                </div>

                {/* Course Stats */}
                <div className="space-y-2 text-gray-700">
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
