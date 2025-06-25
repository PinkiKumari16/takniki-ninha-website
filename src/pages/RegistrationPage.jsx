import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAlertData } from "../redux/rootSlice";
import axios from "axios";

export const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


const handleSubmit = async (e) => {
  e.preventDefault();
  // console.log(formData);
  const { name, email, password, confirmPassword } = formData;

  const form = new URLSearchParams();
  form.append("name", name);
  form.append("email", email);
  form.append("password", password);

  if (password !== confirmPassword) {
    dispatch(
      setAlertData({
        type: "error",
        message: "Passwords do not match.",
      })
    );
    return;
  }

  try {
    const response = await axios.post(
    "https://abhinash.itflyweb.cloud/api/registration.php",
    form,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
    // console.log(response.data);

    if (response.data.success) {
      dispatch(
        setAlertData({
          type: "success",
          message: `${response.data.name} has ${response.data.message}`,
        })
      );

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      navigate("/login");
    } else {
      dispatch(
        setAlertData({
          type: "error",
          message: response.data.message || "Registration failed.",
        })
      );
    }
  } catch (error) {
    // console.log(error);
    dispatch(
      setAlertData({
        type: "error",
        message:
          error.response?.data?.message || "Something went wrong. Try again.",
      })
    );
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary border-2 border-border-color">
      <div className="bg-white p-8 rounded-lg shadow-lg shadow-white w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">
          User Registration
        </h2>
        <hr className="border border-primary mb-6" />

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
          <p
            className="text-center text-blue-600 hover:text-primary cursor-pointer underline"
            onClick={() => navigate("/login")}
          >
            Already have an account? Log in here
          </p>
        </form>
      </div>
    </div>
  );
};
