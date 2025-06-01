import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAlertData } from "../redux/rootSlice";

export const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [registeredUsers, setRegisteredUsers] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isStrongPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    if (!isStrongPassword(password)) {
      dispatch(
        setAlertData({
          type: "error",
          message:
            "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.",
        })
      );
      return;
    }

    if (password !== confirmPassword) {
      dispatch(
        setAlertData({
          type: "error",
          message: "Passwords do not match.",
        })
      );
      return;
    }

    // Simulate saving user
    setRegisteredUsers((prev) => [...prev, { name, email }]);
    dispatch(
      setAlertData({
        type: "success",
        message: "Registration successful!",
      })
    );

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    navigate("/login");
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
