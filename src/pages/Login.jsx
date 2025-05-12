import React, { useState } from "react";

export const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user form data", formData);
    setFormData({ email: "", password: "" }); // Reset form
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary border-2 border-border-color">
      <div className="bg-white p-8 rounded-lg shadow-lg shadow-white w-full max-w-sm ">
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
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
