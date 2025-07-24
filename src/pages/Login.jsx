import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { setAlertData } from "../redux/rootSlice";
import axios from "axios";

export const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const fromUrl = params.get("from"); 
  // console.log("from url of course: ",fromUrl);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://abhinash.itflyweb.cloud/api/login.php",
        formData
      );
      // console.log(response.data)
      if(response.data.success){
        const { token, user, message } = response.data;

        // Save token & user info
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        dispatch(
          setAlertData({
            type: "success",
            message: message || "Login successful!",
          })
        );

        // Redirect back to course detail or profile
        navigate(fromUrl || `/user-profile/${user.id}`);
        // navigate(`/user-profile/${user.id}`);
      }
      else{
        dispatch(
          setAlertData({
            type: "error",
            message: response.data.message || "Login Failed!",
          })
        );
      }
      
    } catch (error) {
      console.log(error)
      const errMsg = error.response?.data?.message || "Login failed!";
      dispatch(
        setAlertData({
          type: "error",
          message: errMsg,
        })
      );
    } finally {
      setFormData({ email: "", password: "" });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary border-2 border-border-color">
      <div className="bg-white p-8 rounded-lg shadow-lg shadow-white w-9/10 max-w-sm ">
        <h2 className="text-2xl font-bold mb-6 text-center">User Login</h2>
        <hr className="border border-primary mb-10" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
          <p
            className="text-center text-blue-600 hover:text-primary cursor-pointer underline"
            onClick={() => navigate(`/registration?from=${fromUrl || ""}`)}
          >
            Don't have an account? Register here
          </p>
        </form>
      </div>
    </div>
  );
};
