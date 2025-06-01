import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const data = [
  {
    title: "Our Mission: Helping Millions of Organizations Grow Better",
    description:
      "We believe not just in growing bigger, but in growing better. And growing better means aligning the success of your own business with the success of your customers. Win-win!",
    image:
      "https://media.istockphoto.com/id/1716486966/vector/objective-concept-writing-company-mission-statement-strategy-or-value-to-achieve-business.jpg?s=612x612&w=0&k=20&c=e_MgEgrKpiy44ZvSsNflGHYBdC5b6Vztgba7T0uQ0rQ=",
  },
  {
    title: "Innovation Drives Growth",
    description:
      "We focus on continuous improvement to bring better solutions to businesses worldwide.",
    image:
      "https://www.hindalco.com/Upload/Images/masthead/mission-values-lead.webp",
  },
];
const contentViewData = [
  {
    name: "Pinki Kumari",
    designation: "Mern Stack Developer",
    specilist: "Website Specialist",
    views:
      "We believe not just in growing bigger, but in growing better. And growing better means aligning the success of your own business with the success of your customers. Win-win!",
    image:
      "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
  },
  {
    name: "Rinki Kumari",
    designation: "Front End Developer",
    specilist: "UI Specialist",
    views:
      "We believe not just in growing bigger, but in growing better. And growing better means aligning the success of your own business with the success of your customers. Win-win!",
    image:
      "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
  },
];
export const AboutPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewContentIndex, setViewContentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };
  const nextViewContent = () => {
    setViewContentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevViewContent = () => {
    setViewContentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-gray-600 mt-16">
        {/* about us */}
        <div
          className="h-[80vh] shadow-md rounded-lg flex justify-end gap-10 items-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/042/346/199/non_2x/simple-blue-curve-background-for-business-vector.jpg")`,
          }}
        >
          <div className="w-2/5 flex flex-col z-10">
            <h1 className="text-6xl font-bold mb-8">About Us</h1>
            <p className="text-lg mb-6">
              HubSpot’s company and culture are a lot like our product. They’re
              crafted, not cobbled, for a delightful experience.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src="https://www.hubspot.com/hs-fs/hubfs/Imported%20sitepage%20images/Hubspotters.jpg?width=965&height=644&name=Hubspotters.jpg"
              alt="About Us"
              className="rounded-lg shadow-md w-full max-w-md"
            />
          </div>
        </div>

        {/* our vision */}
        <div className="flex justify-around items-center bg-white h-[80vh]">
          <div className="w-2/5">
            <img
              src="https://www.hubspot.com/hs-fs/hubfs/grow-better.jpg?width=567&height=378&name=grow-better.jpg"
              alt="image"
              className="w-full rounded-2xl"
            />
          </div>
          <div className="w-2/5">
            <h1 className="text-2xl font-bold mb-3">
              Our Mission: Helping Millions of Organizations Grow Better
            </h1>
            <p>
              We believe not just in growing bigger, but in growing better. And
              growing better means aligning the success of your own business
              with the success of your customers. Win-win!
            </p>
          </div>
        </div>

        {/* mission */}
        <div className="h-[80vh] flex flex-col justify-center text-center bg-[#edf2fa]">
          <h1 className="text-4xl mb-10">Growing Better Together</h1>
          <div className="flex justify-around items-center relative">
            {/* Left Arrow */}
            <div
              className="text-gray-700 flex justify-center text-center bg-white border text-6xl rounded-full font-bold p-3 cursor-pointer"
              onClick={prevItem}
            >
              <ArrowBackIosNewIcon />
            </div>

            {/* mission Content */}
            <div className="flex justify-center gap-10 w-3/4">
              <div className="w-2/5">
                <img
                  src={data[currentIndex].image}
                  alt="image"
                  className="w-full rounded-2xl"
                />
              </div>
              <div className="w-3/5 text-left flex flex-col justify-center">
                <h1 className="text-2xl font-bold mb-3">
                  {data[currentIndex].title}
                </h1>
                <p>{data[currentIndex].description}</p>
                <button className="bg-primary cursor-pointer w-30 mt-10 py-2 rounded-2xl text-white">
                  Read
                </button>
              </div>
            </div>

            {/* Right Arrow */}
            <div
              className="text-gray-700 flex justify-center text-center bg-white border text-6xl rounded-full font-bold p-3 cursor-pointer"
              onClick={nextItem}
            >
              <ArrowForwardIosIcon />
            </div>
          </div>
        </div>

        {/* customer views */}
        <div className="flex flex-col justify-center items-center h-[80vh] bg-white gap-15">
          <h1 className="text-4xl font-bold">Customer views</h1>
          <div className="flex justify-center items-center gap-10 mt-5">
            {/* right arrow */}
            <div
              className="text-gray-700 flex justify-center text-center bg-white border border-gray-300 text-6xl rounded-full font-bold p-3 cursor-pointer hover:bg-blue-50"
              onClick={prevViewContent}
            >
              <ArrowBackIosNewIcon />
            </div>
            {/* view content */}
            <div className="border border-gray-300 rounded-xl w-2/5 text-center flex flex-col gap-6 py-3 relative">
              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-28 h-28 border-4 border-white rounded-full bg-amber-200 overflow-hidden shadow-md">
                <img
                  src={contentViewData[viewContentIndex].image}
                  alt="viewer image"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="pt-16 px-4">
                {contentViewData[viewContentIndex].views}
              </p>
              <hr className="border-gray-300" />
              <div>
                <h1 className="text-xl font-semibold">
                  {contentViewData[viewContentIndex].name}
                </h1>
                <h3 className="text-gray-500">
                  {contentViewData[viewContentIndex].designation}
                </h3>
                <p className="font-semibold">
                  {contentViewData[viewContentIndex].specilist}
                </p>
              </div>
            </div>
            <div
              className="text-gray-700 flex justify-center text-center bg-white border border-gray-300 text-6xl rounded-full font-bold p-3 cursor-pointer hover:bg-blue-50"
              onClick={nextViewContent}
            >
              <ArrowForwardIosIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
