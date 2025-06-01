import React, { useState } from "react";
import { Navbar } from "../components/Navbar";

const hrmsContent = {
  name: "HRMS Pro 2025",
  creator: "Workwise Tech",
  rating: "⭐⭐⭐⭐⭐",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZxx63qKZN1chY88OMkQF1_cW-tVTGJpQFXg&s",
  price: "$29",
  description:
    "HRMS Pro is your all-in-one human resource management tool, built for modern businesses to streamline employee operations and boost productivity.",
  problems: [
    "Manual attendance tracking is time-consuming and error-prone.",
    "Leave approvals often get delayed or lost in emails.",
    "Payroll processing every month consumes a lot of HR bandwidth.",
    "Employee data is scattered and insecure in spreadsheets.",
  ],
  solutions: [
    "Automated punch-in/out system for accurate attendance tracking.",
    "One-click leave approvals with real-time status updates.",
    "Payroll module auto-calculates salary, taxes, and deductions.",
    "Centralized and secure employee records with role-based access.",
  ],
  whatItDoes: [
    {
      title: "Automated Attendance Tracking",
      desc: "Accurately logs employee punch-in and punch-out times to eliminate manual tracking.",
    },
    {
      title: "Leave & Time-Off Management",
      desc: "Allows employees to apply for leaves and managers to approve/reject with real-time updates.",
    },
    {
      title: "Payroll Automation",
      desc: "Simplifies salary generation, deductions, and net pay calculations based on attendance and roles.",
    },
    {
      title: "Performance Monitoring",
      desc: "Track employee performance with goals, KPIs, and review logs for continuous improvement.",
    },
    {
      title: "Centralized Employee Records",
      desc: "Manage and store employee information securely in one place, accessible with role-based permissions.",
    },
    {
      title: "Real-Time Notifications",
      desc: "Keep your team updated on approvals, announcements, or tasks with built-in notification support.",
    },
    {
      title: "Analytics & Reporting",
      desc: "Make data-driven decisions with HR dashboards and downloadable reports.",
    },
    {
      title: "Multi-Level Role Access",
      desc: "Different views and controls for Admins, HRs, and Employees—ensuring secure and streamlined operations.",
    },
  ],
  features: [
    "Employee Punch In/Out System",
    "Automated Leave Management & Approvals",
    "Payroll & Salary Slip Generator",
    "Performance Tracking",
    "Secure Employee Self-Service Portal",
    "Multi-Role Access: Admin, HR, Employee",
    "Notifications and Reminders",
    "Data Analytics Dashboard",
  ],
  benefits: [
    "Reduces HR cycle by 60%",
    "Saves 200+ hours monthly",
    "Automates repetitive tasks",
    "Improves transparency and compliance",
    "Boosts employee satisfaction",
  ],
  technologies: [
    "React",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "Express.js",
    "JWT Auth",
  ],
  contact: {
    email: "suriken.apps.codecanyon@gmail.com",
    message:
      "Thanks for your interest in our app. We’d be happy to help you if you have any questions regarding our app. If you have a more general question related to CodeCanyon, you might consider visiting the forums and asking your question in the “Item Discussion” section.",
  },
  relatedItems: [
    "https://i.imgur.com/zV5x7IW.png",
    "https://i.imgur.com/6Ce7mVa.png",
    "https://i.imgur.com/VQ8ND8K.png",
    "https://via.placeholder.com/80x80?text=Item+4",
    "https://via.placeholder.com/80x80?text=Item+5",
    "https://via.placeholder.com/80x80?text=Item+6",
  ],
};

export const SourceDetailPage = () => {
  const [showMoreWhat, setShowMoreWhat] = useState(false);
  const [showMoreFeatures, setShowMoreFeatures] = useState(false);
  const [showMoreBenefits, setShowMoreBenefits] = useState(false);

  const {
    name,
    creator,
    rating,
    image,
    price,
    description,
    problems,
    solutions,
    whatItDoes,
    features,
    benefits,
    technologies,
    contact,
    relatedItems,
  } = hrmsContent;

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto mt-16 p-6 sm:p-10 text-gray-800 bg-gradient-to-br from-blue-50 to-white">
        <div className="bg-white rounded-2xl shadow-xl p-6 space-y-8">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <img
              src={image}
              alt="HRMS Preview"
              className="w-full lg:w-1/2 rounded-xl shadow max-h-80 object-contain"
            />
            <div className="flex-1 space-y-3">
              <h1 className="text-4xl font-bold text-blue-900">{name}</h1>
              <p className="text-sm text-gray-600">
                Created by{" "}
                <span className="text-blue-700 font-semibold">{creator}</span>
              </p>
              <p className="text-yellow-500 text-lg">{rating}</p>
              <p>{description}</p>
              <button className="mt-4 px-6 py-2 bg-blue-700 text-white font-semibold rounded-full shadow hover:bg-blue-800 transition">
                Buy Now – {price}
              </button>
            </div>
          </div>

          {/* Problems and Solutions */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">
              Why You Need HRMS Pro
            </h2>
            <div className="grid md:grid-cols-2 gap-6 border rounded-xl p-4 bg-blue-50">
              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-3 flex items-center gap-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/595/595067.png"
                    alt="problem"
                    className="w-6 h-6"
                  />
                  Problems Faced
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  {problems.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="md:border-l md:pl-6 border-gray-300">
                <h3 className="text-xl font-semibold text-green-600 mb-3 flex items-center gap-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/190/190411.png"
                    alt="solution"
                    className="w-6 h-6"
                  />
                  HRMS Pro Solutions
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  {solutions.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* What It Does */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-3">
              What It Does
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {(showMoreWhat ? whatItDoes : whatItDoes.slice(0, 4)).map(
                ({ title, desc }, i) => (
                  <li key={i}>
                    <strong>{title}:</strong> {desc}
                  </li>
                )
              )}
            </ul>
            {whatItDoes.length > 4 && (
              <button
                onClick={() => setShowMoreWhat(!showMoreWhat)}
                className="text-blue-600 font-medium hover:underline mt-2"
              >
                {showMoreWhat ? "Show Less ▲" : "See More ▼"}
              </button>
            )}
          </section>

          {/* Features */}
          <section className="bg-white rounded-xl shadow p-4 border border-gray-100">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setShowMoreFeatures(!showMoreFeatures)}
            >
              <h2 className="text-2xl font-semibold text-blue-800">
                Key Features
              </h2>
              <span className="text-2xl text-blue-700 ml-2">
                {showMoreFeatures ? "▴" : "▾"}
              </span>
            </div>
            <ul className="list-disc pl-6 text-gray-700 mt-3 space-y-2">
              {(showMoreFeatures ? features : features.slice(0, 4)).map(
                (f, i) => (
                  <li key={i}>{f}</li>
                )
              )}
            </ul>
            {features.length > 4 && (
              <button
                onClick={() => setShowMoreFeatures(!showMoreFeatures)}
                className="text-blue-600 font-medium hover:underline mt-2"
              >
                {showMoreFeatures ? "Show Less" : "See All Features"}
              </button>
            )}
          </section>

          {/* Benefits */}
          <section className="bg-white  rounded-xl shadow border border-gray-200 p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setShowMoreBenefits(!showMoreBenefits)}
            >
              <h2 className="text-2xl font-semibold text-blue-800">Benefits</h2>
              <span className="text-2xl text-blue-700 ml-2">
                {showMoreBenefits ? "▴" : "▾"}
              </span>
            </div>
            <ul className="list-disc pl-6 text-gray-700 mt-3 space-y-2">
              {(showMoreBenefits ? benefits : benefits.slice(0, 3)).map(
                (b, i) => (
                  <li key={i}>{b}</li>
                )
              )}
            </ul>
            {benefits.length > 3 && (
              <button
                onClick={() => setShowMoreBenefits(!showMoreBenefits)}
                className="text-blue-600 font-medium hover:underline mt-2"
              >
                {showMoreBenefits ? "Show Less" : "See All Benefits"}
              </button>
            )}
          </section>

          {/* Technology Stack */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-3">
              Built With
            </h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Contact and Related Items */}
          <section className="bg-white rounded-2xl p-4 px-0 space-y-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              ANY QUESTIONS?
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              {contact.message}
            </p>

            <div>
              <h3 className="text-md font-semibold text-blue-800 mb-1">
                CONTACT SELLER
              </h3>
              <p className="text-sm">
                Support E-mail:{" "}
                <a
                  href={`mailto:${contact.email}`}
                  className="text-blue-600 hover:underline hover:text-blue-800 transition"
                >
                  {contact.email}
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-md font-semibold text-blue-800 underline">
                More Source Code by Abhinash
              </h3>
              <div className="flex flex-wrap gap-3 mt-3">
                {relatedItems.map((img, i) => (
                  <div
                    key={i}
                    className="w-16 h-16 rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition"
                  >
                    <img
                      src={img}
                      alt={`Related item ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
