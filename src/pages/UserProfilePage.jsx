import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import axios from "axios";
import { useDispatch } from "react-redux";
import { hideLoading, setAlertData, showLoading } from "../redux/rootSlice";
import { findNonSerializableValue } from "@reduxjs/toolkit";

export const UserProfilePage = () => {
  const [user, setUser] = useState(null);
  const [purchases, setPurchases] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPurchasedCourseData = async () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      const token = localStorage.getItem("token");

      if (storedUser && token) {
        setUser(storedUser);
        const userId = storedUser.id;

        try {
          dispatch(showLoading());
          const res = await axios.get(
            `https://abhinash.itflyweb.cloud/api/getMycourses.php?user_id=${userId}`
          );
          // console.log(res.data)
          if (res.data.success && Array.isArray(res.data.data)) {
            setPurchases(res.data.data); // assuming the API returns 'data' array
          } else {
            setPurchases([]);
          }
        } catch (error) {
          dispatch(
            setAlertData({
              type: "error",
              message: "Failed to fetch course data: " + error.message,
            })
          );
        }finally{
          dispatch(hideLoading());
        }
      }
    };

    getPurchasedCourseData();
  }, [dispatch]);

  if (!user) return <div className="mt-16 text-center">Loading...</div>;

  const courseList = purchases.filter((item) => item.type === "Course");
  const softwareList = purchases.filter((item) => item.type === "Software");

  return (
    <>
      <Navbar />
      <div className="mt-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section - User Info */}
          <div className="bg-primary text-white shadow-md rounded-lg p-6 h-[50vh]">
            <h1 className="text-3xl font-semibold mb-6 text-center">
              User Profile
            </h1>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-blue-500 text-white text-4xl w-24 h-24 flex items-center justify-center rounded-full">
                {user.name[0]?.toUpperCase()}
              </div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-600 bg-gray-200 px-4 py-1 rounded-2xl">
                {user.email}
              </p>
            </div>
          </div>

          {/* Right Section - Purchases */}
          <div className="md:col-span-2 bg-white shadow-md rounded-lg p-6">
            {/* Courses */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Purchased Courses</h2>
              {purchases.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {purchases.map((item) => (
                    <div
                      key={item.pay_id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow"
                    >
                      <h3 className="text-lg font-medium">{item.courseName}</h3>
                      <p className="text-sm text-gray-500">{item.type}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">No courses added yet.</p>
              )}
            </div>

            {/* Source Codes */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Purchased Source Code
              </h2>
              {softwareList.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {softwareList.map((item) => (
                    <div
                      key={item.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow"
                    >
                      <h3 className="text-lg font-medium">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.type}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">No software purchased yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
