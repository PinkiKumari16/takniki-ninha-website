import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";

export const UserProfilePage = () => {
  // Mock user and purchase data (replace with real API calls)
  const [user, setUser] = useState(null);
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const storeUser = localStorage.getItem("user");
    if (storeUser) {
      const parsedUser = JSON.parse(storeUser);
      setUser({
        ...parsedUser,
        avatar: "https://i.pravatar.cc/150?img=3",
      });
    }

    setPurchases([
      { id: 1, title: "React Course", type: "Course" },
      { id: 2, title: "JavaScript Mastery", type: "Course" },
      { id: 3, title: "DevTools Pro", type: "Software" },
    ]);
  }, []);

  if (!user) return <div className="mt-16 text-center">Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="mt-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section - User Info */}
          <div className="bg-primary text-white shadow-md rounded-lg p-6">
            <h1 className="text-3xl font-semibold mb-6 text-center">
              User Profile
            </h1>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-blue-500 text-white text-4xl w-24 h-24 flex items-center justify-center rounded-full">
                {user.name[0].toUpperCase()}
              </div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-600 bg-gray-200 px-4 py-1 rounded-2xl">{user.email}</p>
            </div>
          </div>

          {/* Right Section - Purchases */}
          <div className="md:col-span-2 bg-white shadow-md rounded-lg p-6">
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Purchased Courses</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {purchases.map((item) => (
                  <div
                    key={item.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow"
                  >
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.type}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Purchased Source Code
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {purchases.map((item) => (
                  <div
                    key={item.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow"
                  >
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.type}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
