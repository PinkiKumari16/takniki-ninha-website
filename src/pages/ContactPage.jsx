import React, { useState } from "react";
import blogImage from "/blog1.png";
import { Navbar } from "../components/Navbar";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    queryType: "",
    queryCharge: "",
    message: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContactDetails = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      queryType: "",
      queryCharge: "",
      message: "",
      price: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-primary">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={blogImage}
            alt="contact"
            className="w-3/5 object-cover hidden md:block"
          />
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-primary">
              Contact Us
            </h2>
            <hr className="border border-primary mb-6" />

            <form onSubmit={handleContactDetails} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="phoneNumber"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              <select
                name="queryType"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.queryType}
                onChange={handleChange}
                required
              >
                <option value="">Select Query Type</option>
                <option value="subscriber">Subscriber</option>
                <option value="purchase_code">Related To Purchase Code</option>
              </select>
              <input
                type="number"
                name="queryCharge"
                placeholder="Query Charge"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.queryCharge}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Write your message..."
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="price"
                placeholder="Price (INR)"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.price}
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
      </div>
    </>
  );
};
