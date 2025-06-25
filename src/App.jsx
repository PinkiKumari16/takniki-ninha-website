import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CoursesPage } from "./pages/CoursesPage";
import { CourseDetailPage } from "./pages/CourseDetailPage";
import { BlogPage } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";
import { SourceCodePage } from "./pages/SourceCodePage";
import { BlogDetailPage } from "./pages/BlogDetailPage";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  hideLoading,
  setBlogData,
  showLoading,
  setCourseData,
  setAlertData,
} from "./redux/rootSlice";
import { Loader } from "./components/Loader";
import { Login } from "./pages/Login";
import { RegistrationPage } from "./pages/RegistrationPage";
import { AboutPage } from "./pages/AboutPage";
import { GlobalAlert } from "./components/GlobalAlert";
import { UserProfilePage } from "./pages/UserProfilePage";
import { SourceDetailPage } from "./pages/SourceDetailPage";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { ReviewForm } from "./components/ReviewForm";

function App() {
  const { loading, blogData, courseData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const [isReviewFormShow, setIsReviewFormShow] = useState(false);
  const getInitialData = async () => {
    try {
      dispatch(showLoading());

      const [blogRes, courseRes] = await Promise.all([
        axios.get("https://abhinash.itflyweb.cloud/api/getBlog.php"),
        axios.get("https://abhinash.itflyweb.cloud/api/getCources.php"),
      ]);

      dispatch(setBlogData(blogRes.data.blogs));
      dispatch(setCourseData(courseRes.data.courses));
    } catch (error) {
      dispatch(
        setAlertData({
          type: "error",
          message: "Error fetching data: " + error.message,
        })
      );
    } finally {
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    if (!(blogData.length && courseData.length)) {
      getInitialData();
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <GlobalAlert />
        {loading ? <Loader /> : null}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/source-code" element={<SourceCodePage />} />
          <Route
            path="/source-code/:sourceCodeId"
            element={<SourceDetailPage />}
          />
          <Route path="/courses/:courseId" element={<CourseDetailPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blogs/:blogId" element={<BlogDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/user-profile/:userId" element={<UserProfilePage />} />
        </Routes>
        {/* <Footer /> */}
        <div
          className="fixed bottom-5 right-5 text-blue-600 p-5 bg-gray-200 shadow-2xl shadow-border-color rounded-full z-100"
          onClick={() => setIsReviewFormShow(!isReviewFormShow)}
        >
          <RateReviewIcon
            style={{
              fontSize: "3rem", // large size
              animation: "zoomInOut 1.5s infinite ease-in-out",
              cursor: "pointer",
            }}
            titleAccess="Write a Review "
          />
        </div>
        {isReviewFormShow && (
          <ReviewForm setIsReviewFormShow={setIsReviewFormShow} />
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
